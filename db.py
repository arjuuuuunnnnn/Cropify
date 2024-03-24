from flask import Flask, request, jsonify
from pymongo import MongoClient
import csv

app = Flask(_name_)

# MongoDB connection
client = MongoClient('mongodb://localhost:27017/')
db = client['crop_data']
collection = db['farmers_data']

# CSV file path
CSV_FILE = 'crop_data.csv'

# Maximum number of entries before appending to CSV
MAX_ENTRIES = 10

# Route to receive data from farmers
@app.route('/add_data', methods=['POST'])
def add_data():
    data = request.json
    collection.insert_one(data)
    
    # Check if the number of entries exceeds the maximum limit
    if collection.count_documents({}) >= MAX_ENTRIES:
        append_to_csv()
    
    return jsonify({'message': 'Data added successfully'})

# Function to append data from MongoDB to CSV file
def append_to_csv():
    cursor = collection.find({})
    with open(CSV_FILE, 'a', newline='') as csvfile:
        fieldnames = ['rainfall', 'ph', 'nitrogen', 'phosphorus', 'potassium']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        
        # Check if file is empty, write header if needed
        if csvfile.tell() == 0:
            writer.writeheader()
        
        for data in cursor:
            writer.writerow(data)

        # Clear the collection after appending data to CSV
        collection.delete_many({})

if _name_ == '_main_':
    app.run(debug=True)

