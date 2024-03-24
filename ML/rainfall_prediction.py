import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np 
import pandas as pd 
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import OneHotEncoder

from numpy import array
from numpy import argmax

import json

import numpy as np
import pandas as pd

from keras.layers import Dense, Activation, Dropout
from keras.layers import LSTM
from keras.models import Sequential
import time
from sklearn.metrics import mean_squared_error
from matplotlib import pyplot
from sklearn.preprocessing import MinMaxScaler
from sklearn.preprocessing import StandardScaler

from sklearn.metrics import classification_report
from sklearn import metrics


df=pd.read_csv("../data/rainfall.csv")

districts=df['DISTRICT'].tolist()

states=df['STATE_UT_NAME'].tolist()

values1 = array(states)
values2 = array(districts)

label_encoder = LabelEncoder()
integer_encoded1 = label_encoder.fit_transform(values1)

label_encoder = LabelEncoder()
integer_encoded2 = label_encoder.fit_transform(values2)

dict1={}
for i in range(len(integer_encoded1)):
  dict1[values1[i]]=integer_encoded1[i]

dict2={}
for i in range(len(integer_encoded2)):
  dict2[values2[i]]=integer_encoded2[i]


df = df.drop(['ANNUAL'], axis = 1)
df = df.drop(['Jan-Feb'], axis = 1)
df = df.drop(['Mar-May'], axis = 1)
df = df.drop(['Jun-Sep'], axis = 1)
df = df.drop(['Oct-Dec'], axis = 1)

df2 = df
df2=df2.melt(['STATE_UT_NAME', 'DISTRICT'])

df2 = df2.rename(columns={'variable': 'month'})

d={'JAN':1,'FEB':2,'MAR' :3,'APR':4,'MAY':5,'JUN':6,'JUL':7,'AUG':8,'SEP':9,
   'OCT':10,'NOV':11,'DEC':12}
df2['month']=df2['month'].map(d)


df2.to_csv('../data/file1.csv')

df2['STATE_UT_NAME']=df2['STATE_UT_NAME'].map(dict1)
df2['DISTRICT']=df2['DISTRICT'].map(dict2)

df2 = df2.sort_values(by=['DISTRICT', 'month'])
df2 = df2.sample(frac=1)


