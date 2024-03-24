from __future__ import print_function
import pandas as pd
import numpy as np
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import warnings
warnings.filterwarnings('ignore')
from numpy import array
from sklearn.preprocessing import LabelEncoder
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.model_selection import cross_val_score
from sklearn.svm import SVC
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.metrics import accuracy_score
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
import pickle



PATH = '../data/fertilizer_prediction.csv'
df = pd.read_csv(PATH)

soil_type= array(df['Soil Type'].tolist())
crop_type= array(df['Crop Type'].tolist())


label_encoder = LabelEncoder()
integer_encoded1 = label_encoder.fit_transform(soil_type)
integer_encoded2 = label_encoder.fit_transform(crop_type)


dict1={}
for i in range(len(integer_encoded1)):
  dict1[soil_type[i]]=integer_encoded1[i]
dict2={}
for i in range(len(integer_encoded2)):
  dict2[crop_type[i]]=integer_encoded2[i]


df['Soil Type']=df['Soil Type'].map(dict1)
df['Crop Type']=df['Crop Type'].map(dict2)

features=df
target = features.pop('Fertilizer Name')
label = target



Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)

with open('../logs/log.log','a') as f:
  f.write(f"Fertilizer Recommendation Started\n")

# Decision Tree Classifier
DecisionTree = DecisionTreeClassifier(criterion="entropy",random_state=2,max_depth=5)

DecisionTree.fit(Xtrain,Ytrain)

DT_path = '../models/fert_DT.pkl'
DT_model_path = open(DT_path, 'wb')
pickle.dump(DecisionTree, DT_model_path)
DT_model_path.close()


predicted_values = DecisionTree.predict(Xtest)
x = metrics.accuracy_score(Ytest, predicted_values)
with open('../logs/log.log','a') as f:
  f.write(f"Decision Tree Accuracy is: {x}")
  f.write(f"{classification_report(Ytest, predicted_values)}\n\n")

# Naive Bayes
NaiveBayes = GaussianNB()

NaiveBayes.fit(Xtrain,Ytrain)

NB_path = '../models/fert_NB.pkl'
NB_model_path = open(DT_path, 'wb')
pickle.dump(DecisionTree, NB_model_path)
NB_model_path.close()


predicted_values = NaiveBayes.predict(Xtest)
x2 = metrics.accuracy_score(Ytest, predicted_values)

with open('../logs/log.log','a') as f:
  f.write(f"Naive Bayes's Accuracy is: {x2}")
  f.write(f"{classification_report(Ytest, predicted_values)}\n\n")


# SVM
SVM = SVC(gamma='auto')

SVM.fit(Xtrain,Ytrain)

predicted_values = SVM.predict(Xtest)

x3 = metrics.accuracy_score(Ytest, predicted_values)

svm_pipeline = make_pipeline(StandardScaler(), SVC(probability=True))
svm_pipeline.fit(Xtrain, Ytrain)

svm_path = '../models/fert_svm_pipeline.pkl'
svm_model_path = open(svm_path, 'wb')
pickle.dump(svm_pipeline, svm_model_path)
svm_model_path.close()


predictions = svm_pipeline.predict(Xtest)
accuracy = accuracy_score(Ytest, predictions)

with open('../logs/log.log','a') as f:
  f.write(f"SVM Accuracy is: {x3}")
  f.write(f"{classification_report(Ytest, predicted_values)}\n\n")


# Logistic Regression
LogReg = LogisticRegression(random_state=2)

LogReg.fit(Xtrain,Ytrain)

LogReg_path = '../models/fert_LogReg.pkl'
LogReg_model_path = open(LogReg_path, 'wb')
pickle.dump(LogReg, LogReg_model_path)
LogReg_model_path.close()


predicted_values = LogReg.predict(Xtest)

x4 = metrics.accuracy_score(Ytest, predicted_values)

with open('../logs/log.log','a') as f:
  f.write(f"Logistic Regression Accuracy is: {x4}")
  f.write(f"{classification_report(Ytest, predicted_values)}\n\n")
  
# Random Forest Classifier
RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(Xtrain,Ytrain)

RF_path = '../models/fert_LogReg.pkl'
RF_model_path = open(RF_path, 'wb')
pickle.dump(LogReg, RF_model_path)
RF_model_path.close()


predicted_values = RF.predict(Xtest)

x5 = metrics.accuracy_score(Ytest, predicted_values)

with open('../logs/log.log','a') as f:
  f.write(f"Random Forest Classifier Accuracy is: {x5}")
  f.write(f"{classification_report(Ytest, predicted_values)}\n\n")

with open('../logs/log.log','a') as f:
  f.write(f"Fertilizer prediction Ended\n\n\n\n")
