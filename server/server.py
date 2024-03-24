from __future__ import print_function
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import pickle
import requests
import warnings
warnings.filterwarnings('ignore')
from json import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)


crop_model_path = '../models/RandomForest.pkl'
fertilizer_model_path = '../models/RandomForest.pkl'
rainfall_data = 'data2.csv'

crop_recommendation_model = pickle.load(
        open(crop_model_path, "rb"))

fertilizer_recommendation_model = pickle.load(
        open(fertilizer_model_path, "rb"))


@app.route("/crop", methods=["POST"])
def members1():
    try:
        N = int(request.json["N"])
        P = int(request.json["P"])
        K = int(request.json["K"])

        ph = float(request.json["Ph"])
        state = request.json["state"]
        district = request.json["district"]
        start_month = int(request.json["start_month"])
        end_month = int(request.json["end_month"])
    except:
        return jsonify({"crop": "failed to get crop information", "data":request.json})

    temperature = 20
    humidity = 30
    rainfall = 100

    # getting the location using API 
    x = requests.get(f"https://api.mapbox.com/geocoding/v5/mapbox.places/{district} {state}.json?access_token=pk.eyJ1Ijoic2FpZ29ydGk4MSIsImEiOiJja3ZqY2M5cmYydXd2MnZwZ2VoZzl1ejNkIn0.CupGYvpb_LNtDgp7b-rZJg")

    coordinates = x.json()["features"][0]["center"]

    # getting the humidity and temperature using API
    y = requests.get(f"https://api.openweathermap.org/data/2.5/weather?lat={str(coordinates[1])}&lon={str(coordinates[0])}&appid=8d51fbf3b5ad7f3cc65ba0ea07220782")
    humidity = y.json()["main"]["humidity"]
    temperature = y.json()["main"]["temp"]

    df = pd.read_csv(rainfall_data)
    
    q = df.query(f'STATE_UT_NAME == "{state}" and DISTRICT == "{district}"')

    total = 0
    l = 0

    if start_month <= end_month:
        l = (end_month-start_month)+1

        for i in range(start_month, end_month+1):
            try:
                total+=int(q[i:i+1].value)
            except:
                total-=1
    elif start_month > end_month:
        l = (end_month+12) - start_month + 1
        
        for i in range(start_month, 13):
            try:
                total+=int(q[i:i+1].value)
            except:
                total-=1
        
        for i in range(1, end_month+1):
            try:
                total+=int(q[i:i+1].value)
            except:
                total-=1


    avg_rainfall = total/l

    data = np.array([[N,P,K, temperature, humidity, ph, avg_rainfall]])

    whole_prediction = crop_recommendation_model.predict(data)
    prediction = whole_prediction[0]

    return jsonify({"crop": prediction, "data":y.json()["main"], "l":l})


@app.route("/fertilizer", methods=["POST"])
def members2():
    try:
        N = int(request.json['N'])
        P = int(request.json['P'])
        K = int(request.json['K'])
        # ph = float(request.json['Ph'])
        state = request.json['state']
        district = request.json['district']
        moisture = float(request.json['moisture'])
        soil_type = request.json['soil_type']
        crop_type = request.json['crop_type']
        start_month = int(request.json['start_month'])
        end_month = int(request.json['end_month'])
    except:
        return jsonify({"crop": 'failed to get fertilizer information', "data": request.json})

    temprature = 20
    humidity = 30
    rainfall = 100
    
    x = requests.get(f"https://api.mapbox.com/geocoding/v5/mapbox.places/{district}{state}.json?access_token=pk.eyJ1Ijoic2FpZ29ydGk4MSIsImEiOiJja3ZqY2M5cmYydXd2MnZwZ2VoZzl1ejNkIn0.CupGYvpb_LNtDgp7b-rZJg")
    coordinates =  x.json()['features'][0]['center']

    y = requests.get(f"https://api.openweathermap.org/data/2.5/weather?lat={str(coordinates[1])}&lon={str(coordinates[0])}&appid=8d51fbf3b5ad7f3cc65ba0ea07220782")
    humidity = y.json()['main']['humidity']
    temprature = y.json()['main']['temp']

    df=pd.read_csv("./data2.csv")
    q = df.query('STATE_UT_NAME=="ANDAMAN And NICOBAR ISLANDS" and DISTRICT == "NICOBAR"', inplace = False)

    total = 0
    l = 0

    if start_month <= end_month: 
        l=(end_month-start_month)+1

        for i in range(start_month, end_month+1):
            try:
                total+=int(q[i:i+1].value)
            except:
                total-=1
            
    elif start_month > end_month:
        l = (end_month+12) - start_month + 1
        
        for i in range(start_month, 13):
            try:
                total+=int(q[i:i+1].value)
            except:
                total-=1
        
        for i in range(1, end_month+1):
            try:
                total+=int(q[i:i+1].value)
            except:
                total-=1

    avg_rainfall = total/l

    data.np.array([[avg_rainfall, humidity, moisture, soil_type, crop_type, N, K, P]])

    whole_prediction = fertilizer_recommendation_model.predict(data)
    prediction = whole_prediction[0]

    fertname = {"0": "10-26-26", "1": "14-35-14", "2": "17-17-17", "3": "20-20", "4": "28-28", "5": "DAP", "6": "Urea"}

    return jsonify({"crop": str(fertname[ str(prediction)]), "data": fertname})

if __name__ == "__main__":
    app.run(debug=True)

