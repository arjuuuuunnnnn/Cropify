from __future__ import print_function
import pandas as pd
import numpy as np
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import warnings
from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
import pickle
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC
from sklearn.preprocessing import MinMaxScaler
from sklearn.linear_model import LogisticRegression
from sklearn.ensemble import RandomForestClassifier
import os

warnings.filterwarnings('ignore')

df = pd.read_csv('../data/crop_recommendation.csv')
os.makedirs("/home/hemanth/only_ml/DotSlash/server/logs",exist_ok=True)

features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']
labels = df['label']

# Initialzing empty lists to append all model's name and corresponding name
acc = []
model = []

Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)

# Naive Bayes
NaiveBayes = GaussianNB()

NaiveBayes.fit(Xtrain,Ytrain)

predicted_values = NaiveBayes.predict(Xtest)
x = metrics.accuracy_score(Ytest, predicted_values)
acc.append(x)
model.append('Naive Bayes')
report = classification_report(Ytest, predicted_values)
with open('../logs/log.log', 'a') as f:
    f.write(f"Naive Bayes's Accuracy is: {x}\n")
    f.write(f"{report}\n\n")

# Naive Bayes dump
os.makedirs("/home/hemanth/only_ml/Dotslash/server/models",exist_ok=True)


NB_pkl_filename = '../models/NBClassifier.pkl'
NB_Model_pkl = open(NB_pkl_filename, 'wb')
pickle.dump(NaiveBayes, NB_Model_pkl)
NB_Model_pkl.close()


# Decision Tree Regressor
DecisionTree = DecisionTreeClassifier(criterion="entropy",random_state=2,max_depth=5)

DecisionTree.fit(Xtrain,Ytrain)

predicted_values = DecisionTree.predict(Xtest)
x2 = metrics.accuracy_score(Ytest, predicted_values)
acc.append(x2)
model.append('Decision Tree')

report2 = classification_report(Ytest, predicted_values)
with open('../logs/log.log', 'a') as f:
         f.write(f"Decision Tree's Accuracy is :{x2}\n")
         f.write(f"{report2}\n\n")

# Decision Tree Regressor dump
DT_pkl_filename = '../models/DecisionTree.pkl'
DT_Model_pkl = open(DT_pkl_filename, 'wb')
pickle.dump(DecisionTree, DT_Model_pkl)
DT_Model_pkl.close()


# SVM
norm = MinMaxScaler().fit(Xtrain)
X_train_norm = norm.transform(Xtrain)
X_test_norm = norm.transform(Xtest)
SVM = SVC(kernel='poly', degree=3, C=1)
SVM.fit(X_train_norm,Ytrain)
predicted_values = SVM.predict(X_test_norm)
x3 = metrics.accuracy_score(Ytest, predicted_values)
acc.append(x3)
model.append('SVM')

report3 = classification_report(Ytest, predicted_values)
with open('../logs/log.log', 'a') as f:
         f.write(f"SVM's Accuracy is :{x3}\n")
         f.write(f"{report3}\n\n")

# SVM dump
SVM_pkl_filename = '../models/SVMClassifier.pkl'
SVM_Model_pkl = open(SVM_pkl_filename, 'wb')
pickle.dump(SVM, SVM_Model_pkl)
SVM_Model_pkl.close()


# Logistic Regression 
LogReg = LogisticRegression(random_state=2)

LogReg.fit(Xtrain,Ytrain)

predicted_values = LogReg.predict(Xtest)

x4 = metrics.accuracy_score(Ytest, predicted_values)
acc.append(x4)
model.append('Logistic Regression')


report4 = classification_report(Ytest, predicted_values)
with open('../logs/log.log', 'a') as f:
         f.write(f"Logistic Regression's Accuracy is :{x4}\n")
         f.write(f"{report4}\n\n")

# Logistic Regression dump
LR_pkl_filename = '../models/LogisticRegression.pkl'
LR_Model_pkl = open(DT_pkl_filename, 'wb')
pickle.dump(LogReg, LR_Model_pkl)
LR_Model_pkl.close()

# Random Forest Classifier
RF = RandomForestClassifier(n_estimators=20, random_state=0)
RF.fit(Xtrain,Ytrain)

predicted_values = RF.predict(Xtest)

x5 = metrics.accuracy_score(Ytest, predicted_values)
acc.append(x5)
model.append('RF')

report5 = classification_report(Ytest, predicted_values)
with open('../logs/log.log', 'a') as f:
         f.write(f"Random Forest Classifier's Accuracy is :{x5}\n")
         f.write(f"{report5}\n\n")

# Random Forest Classifier dump
RF_pkl_filename = '../models/RandomForest.pkl'
RF_Model_pkl = open(RF_pkl_filename, 'wb')
pickle.dump(RF, RF_Model_pkl)
RF_Model_pkl.close()

report = classification_report(Ytest, predicted_values)
with open('../logs/log.log', 'a') as f:
         f.write(f"CROP RECOMMENDATION DONE\n\n\n\n")
  
