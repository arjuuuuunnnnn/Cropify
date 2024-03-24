import pandas as pd
import numpy as np
from sklearn.metrics import (mean_squared_error,mean_absolute_error,r2_score)
from sklearn import metrics
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.feature_selection import chi2
#from imblearn import under_sampling, over_sampling
#from imblearn.over_sampling import SMOTE
#from imblearn.under_sampling import RandomUnderSampler
from sklearn.model_selection import RandomizedSearchCV
pd.set_option("display.max_columns", None)
pd.set_option("display.max_rows", None)
pd.set_option("display.float_format", lambda x: "%.3f" % x)
import lightgbm as lgb
pd.set_option("display.float_format", lambda x: "%.3f" % x)
import warnings
warnings.filterwarnings("ignore")
import os
import joblib
from sklearn.impute import SimpleImputer
from lightgbm.sklearn import LGBMRegressor


os.chdir("..")
os.makedirs("logs",exist_ok=True)
logging_file = "/home/hemanth/only_ml/DotSlash/logs/yield.log"

train_data = pd.read_csv("/home/hemanth/only_ml/DotSlash/data/raw_data/Train.csv")
test_data = pd.read_csv("/home/hemanth/only_ml/DotSlash/data/raw_data/Test.csv")

with open(logging_file,"a") as f:
     f.write(f" The training dataset consist of {train_data.shape[0]} rows and {train_data.shape[1]} columns")

data = train_data.copy()
object_col =data.select_dtypes("object").columns
date_col=['CropTillageDate','RcNursEstDate','SeedingSowingTransplanting','Harv_date', 'Threshing_date']
for item in date_col:
        data[item] = pd.to_datetime(data[item])

# no columns are removed
# just made the date columns as dtype -> object

data["growth_duration"] = (data["Harv_date"]-data['SeedingSowingTransplanting'])
data["nursery_duration"] = (data['SeedingSowingTransplanting']-data['RcNursEstDate'])
data["tillage_duration"] = (data['SeedingSowingTransplanting']-data['CropTillageDate'])

data["growth_duration"] = data["growth_duration"].astype(str).str.replace("days","")
data["nursery_duration"] = data["nursery_duration"].astype(str).str.replace("days","")
data["tillage_duration"] = data["tillage_duration"].astype(str).str.replace("days","")

data["growth_duration"]= data["growth_duration"].astype(int)
data["nursery_duration"] = data["nursery_duration"].astype(str).str.replace('NaT',"0")
data["tillage_duration"]= data["tillage_duration"].astype(int)

data["nursery_duration"]=data["nursery_duration"].astype(int)

data = data.drop(columns=date_col,axis=1)

for variable in date_col:
     test_data[variable] = pd.to_datetime(test_data[variable])

test_data["growth_duration"] = (test_data["Harv_date"]-test_data['SeedingSowingTransplanting'])
test_data["nursery_duration"] = (test_data['SeedingSowingTransplanting']-test_data['RcNursEstDate'])
test_data["tillage_duration"] = (test_data['SeedingSowingTransplanting']-test_data['CropTillageDate'])

test_data["growth_duration"] = test_data["growth_duration"].astype(str).str.replace("days","")
test_data["nursery_duration"] = test_data["nursery_duration"].astype(str).str.replace("days","")
test_data["tillage_duration"] = test_data["tillage_duration"].astype(str).str.replace("days","")

test_data["growth_duration"]= test_data["growth_duration"].astype(int)
test_data["nursery_duration"] = test_data["nursery_duration"].astype(str).str.replace('NaT',"0")
test_data["tillage_duration"]= test_data["tillage_duration"].astype(int)

test_data["nursery_duration"]=test_data["nursery_duration"].astype(int)

test_data= test_data.drop(columns = ['CropTillageDate','RcNursEstDate','SeedingSowingTransplanting',
                        'Harv_date', 'Threshing_date'],axis=1)

green_data = data.copy()
green_data = green_data.drop(columns="ID",axis=1)
round((green_data.isnull().sum()/ green_data.shape[0])*100,)
numerical_columns =green_data.select_dtypes("number").columns
green_data = green_data.drop(['MineralFertAppMethod.1'],axis=1)
test_data = test_data.drop(['MineralFertAppMethod.1'],axis=1)

categorical_data = green_data.select_dtypes("object").columns

green_data["Block"].value_counts(normalize=True,ascending=True).plot(kind="barh",xlabel="%", ylabel="Block",
                                                 title="Bar graph for percentage of crops by block");

green_data['CropEstMethod'].value_counts(normalize=True,ascending=False)

df =green_data[numerical_columns].corr()
def correlation(data,cut_off):
    col_corr = set()
    corr_matrix = data.corr()
    for i in range(len(corr_matrix.columns)):
        for j in range(i):
            if abs(corr_matrix.iloc[i,j])> cut_off:
                colname = corr_matrix.columns[i]
                col_corr.add(colname)
    return col_corr

numerical_columns= green_data.select_dtypes("number").columns
feature = correlation(green_data[numerical_columns],0.7)
green_data = green_data.drop(columns=['1tdUrea','CropCultLand','BasalUrea'],axis=1)
test_data = test_data.drop(columns=['1tdUrea','CropCultLand','BasalUrea'],axis=1)

numerical_columns1= green_data.select_dtypes("number").columns

def outliers(df,item):
    Q1 = df[item].quantile(0.25)
    Q3 = df[item].quantile(0.75)
    IQR = Q3-Q1
    Lower_fence = Q1-1.5*IQR
    Upper_fence = Q3+1.5*IQR
    outlier_list = df.index[(df[item]<Lower_fence)|(df[item]>Upper_fence)]
    return outlier_list

train_cols1= ['CultLand', 'CropTillageDepth', 'SeedlingsPerPit',
      'TransplantingIrrigationHours', 'TransIrriCost', 'StandingWater',
       'NoFertilizerAppln', 'BasalDAP', '1appDaysUrea',
       'Harv_hand_rent', 'Residue_length', 'Residue_perc', 'Acre',
       'growth_duration', 'nursery_duration', 'tillage_duration']

index_list = []  
for feature in train_cols1:
    ls=outliers(green_data,feature)
    index_list.extend(ls)

def remove(df,outlier_list):
    outlier_list = sorted(set(outlier_list))
    df = df.drop(outlier_list)
    return df
green_data_clean = remove(green_data,index_list)
green_data_clean = green_data_clean.sort_index()

data1 =green_data_clean.copy()

X = data1.drop(["Yield"], axis=1)
y = data1["Yield"]

X_train, X_val, y_train, y_val = train_test_split(X,y,test_size=0.25,random_state=42)

with open(logging_file,"a") as f:
     f.write(f"The training dataset consits of {X_train.shape[0]} rows and {X_train.shape[1]} columns\n")
     f.write(f"The validation dataset consists of {X_val.shape[0]} rows and {X_val.shape[1]} columns")

X_train.isnull().sum()/X_train.shape[0] *100
X_val.isnull().sum()/X_val.shape[0] *100
col_feature=[] # create an empty list
for item in green_data.columns:
    if ((green_data[item].isnull().sum()/green_data.shape[0])>0.50):
        col_feature.append(item)  # append the columns with missing values greater than 50% in the list
print(col_feature)
X_train = X_train.drop(columns=col_feature,axis=1)
X_val = X_val.drop(columns=col_feature,axis=1)
test_data = test_data.drop(columns=col_feature,axis=1)
train_cols = X_train.select_dtypes("number").columns
median_imputer = SimpleImputer(missing_values=np.nan,strategy="median")
X_train[train_cols] = median_imputer.fit_transform(X_train[train_cols])
X_train[train_cols].isnull().sum().sum()
categorical_train_cols=X_train.select_dtypes("object").columns
categorical_train_cols
mode_imputer = SimpleImputer(missing_values=np.nan,strategy='most_frequent')
X_train[categorical_train_cols] = mode_imputer.fit_transform(X_train[categorical_train_cols])
X_train[categorical_train_cols].isnull().sum().sum()
median_imputer = SimpleImputer(missing_values=np.nan,strategy="median")
X_val[train_cols] = median_imputer.fit_transform(X_val[train_cols])
X_val[train_cols].isnull().sum().sum()
mode_imputer = SimpleImputer(missing_values=np.nan,strategy='most_frequent')
X_val[categorical_train_cols] = mode_imputer.fit_transform(X_val[categorical_train_cols])
X_val[categorical_train_cols].isnull().sum().sum()
test_cols = test_data.select_dtypes("number").columns
median_imputer = SimpleImputer(missing_values=np.nan,strategy="median")
test_data[test_cols] = median_imputer.fit_transform(test_data[test_cols])
test_data[test_cols].isnull().sum().sum()
categorical_test_cols=test_data.select_dtypes("object").columns
mode_imputer = SimpleImputer(missing_values=np.nan,strategy='most_frequent')
test_data[categorical_test_cols] = mode_imputer.fit_transform(test_data[categorical_test_cols])
test_data[categorical_test_cols].isnull().sum().sum()
categorical_columns_train = X_train.select_dtypes("object").columns
for variable in categorical_columns_train:
       X_train[variable] = pd.factorize(X_train[variable])[0]

X_train[categorical_columns_train].head()

for variable in categorical_columns_train:

       X_val[variable] = pd.factorize(X_val[variable])[0]

X_val.isnull().sum().sum()

categorical_data =  X_train[categorical_columns_train]

X_cat_data = categorical_data

chi_score= chi2(X_cat_data,y_train)

with open(logging_file,"a") as f:
     f.write(f"chi score: {chi_score}")

chi_values = pd.Series(chi_score[0],index=X_cat_data.columns)
chi_values.sort_values(ascending=False,inplace=True)


col=['District', 'Block', 'CropEstMethod',
 'TransplantingIrrigationSource',
       'TransplantingIrrigationPowerSource', 'OrgFertilizers',
       'PCropSolidOrgFertAppMethod', 'CropbasalFerts', 'MineralFertAppMethod',
       'FirstTopDressFert', 'MineralFertAppMethod.1', 'Harv_method',
       'Threshing_method', 'Stubble_use']

X_train = X_train.drop(columns='Stubble_use', axis=1)
X_val = X_val.drop(columns='Stubble_use', axis=1)
test_data =test_data.drop(columns='Stubble_use', axis=1)


scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_val = scaler.transform(X_val)

data_test = test_data.copy()
data_test = data_test.drop(["ID"],axis=1)
categorical_test_column = data_test.select_dtypes("object").columns
for variable in categorical_test_column:

       data_test[variable] = pd.factorize(data_test[variable])[0]


X_test = data_test

scaler = StandardScaler()
X_test = scaler.fit_transform(X_test)

def model_performance_regression_sklearn(model, predictors, target):

        pred = model.predict(predictors)
        rmse= mean_squared_error(target,pred,squared=False)  # to compute the room mean square error using the target and predicted values
        mse= mean_squared_error(target,pred,squared=True)   # compute the mean squared error
        mae = mean_absolute_error(target, pred)  # to compute mean absolute error using target and predicted values
        r2 =r2_score(target,pred)

        df_perf = pd.DataFrame( {"Root Mean Squared error":rmse,"Mean Squared error":mse,
                                 "Mean Absolute error": mae,"R2 Score":r2},index=[0],)

        return df_perf

scorer = metrics.make_scorer(metrics.r2_score)

dtrain = lgb.Dataset(X_train,label=y_train)
dvalid = lgb.Dataset(X_val,label=y_val)

parameter = { 'objective':'regression' , 'metric':'rmse',
             'is_unbalance':'false', 'boosting':'gbdt','max_depth':7,'min_data_in_leaf':120,
             'num_leaves':127, 'feature_fraction': 0.5,'min_sum_hessian_in_leaf':100,'num_threads':16,
             'bagging_fraction':0.5,'bagging_freq':20,
             'learning_rate':0.0001 ,'verbose': -1
}

callbacks=[lgb.early_stopping(stopping_rounds=1000)]

lgb_model = lgb.train(parameter,dtrain,valid_sets=dvalid,num_boost_round=1200)

lgb_train_perf = model_performance_regression_sklearn(lgb_model,X_train,y_train)

lgb_val_perf = model_performance_regression_sklearn(lgb_model,X_val,y_val)

lgb_perf = pd.concat([lgb_train_perf.T,lgb_val_perf.T],axis=1)
lgb_perf.columns =["Training","Validation"]


with open(logging_file,"a") as f:
     f.write(f"Peformance measures on the original data of LGB")
     f.write(f"{lgb_perf}")

cv_results = lgb.cv(parameter, dtrain, num_boost_round = 5000, nfold=3,callbacks=[lgb.early_stopping(stopping_rounds=2000)],
                    seed = 50, stratified=False)

cv_results['valid rmse-mean'][-1]   # code to display the last mean rmse

cv1=pd.DataFrame(cv_results).head()

with open(logging_file,"a") as f:
     f.write(f"The current parameters:{parameter}")
     f.write(f"Best Number of Rounds:{len(cv_results['valid rmse-mean'])}")
     f.write(f"Best Score:{ (cv_results['valid rmse-mean'][-1])}")

parameters = { 'objective':'regression' , 'metric':'rmse',
             'is_unbalance':'false', 'boosting':'gbdt','max_depth':7,'min_data_in_leaf':120,
             'num_threads':16,'min_sum_hessian_in_leaf':100,
             'num_leaves':127, 'feature_fraction': 0.7,'min_sum_hessian_in_leaf':100,
             'bagging_fraction':0.7,'bagging_freq':24,
             'learning_rate':0.001,'verbose': -1
}

lgb_model2 = lgb.train(parameters,dtrain,valid_sets=dvalid,num_boost_round=5000,
                      callbacks=[lgb.early_stopping(stopping_rounds=200)])

lgb_train_perf_over = model_performance_regression_sklearn(lgb_model2,X_train,y_train)
lgb_val_perf_over= model_performance_regression_sklearn(lgb_model2,X_val,y_val)
lgb_perf_over = pd.concat([lgb_train_perf_over.T,lgb_val_perf_over.T],axis=1)
lgb_perf_over.columns =["Training","Validation"]

print("Peformance measures on the original data")
lgb_perf_over

parameter = { 'objective':'regression' , 'metric':'rmse',
             'is_unbalance':'false', 'boosting':'gbdt','max_depth':7,'min_data_in_leaf':120,
             'num_leaves':127, 'feature_fraction': 0.5,'min_sum_hessian_in_leaf':100,'num_threads':16,
             'bagging_fraction':0.5,'bagging_freq':20,
             'learning_rate':0.01 ,'verbose': -1
}

lgb_tuned = lgb.LGBMRegressor(objective="regression",eval_metric='rmse',boosting_type="gbdt",force_col_wise=True)

param_grid = {
    'max_depth':list((range(3,12))),
    'learning_rate':np.linspace(0.05,0.1,10),
    'n_estimators':list((range(35,51))),
    'colsample_bytree':[0.3,0.4,0.5,0.7,1],
    'gamma':[0.1,0.2,0.3,0.4],
    'reg_alpha':[0,0.001,0.01,0.1],
    'subsample':[0.25,0.5,0.75,1],
                     }

randomized_cv = RandomizedSearchCV(estimator=lgb_tuned, param_distributions=param_grid,n_iter=3,
                                   cv=5,verbose=2,random_state=123)

randomized_cv=randomized_cv.fit(X_train,y_train)

with open(logging_file,"a") as f:
     f.write(f"Best parameters found: {randomized_cv.best_params_}")
     f.write(f"Best accuracy found:{randomized_cv.best_score_}")
     
print("Best parameters found",randomized_cv.best_params_)
print("Best accuracy found",randomized_cv.best_score_)

xg_boost_tuned=randomized_cv.best_estimator_
xg_boost_tuned.fit(X_train,y_train)

xg_train_perf_tuned =model_performance_regression_sklearn(xg_boost_tuned , X_train, y_train)
xg_val_perf_tuned = model_performance_regression_sklearn(xg_boost_tuned , X_val, y_val)

xg_perf_over_tuned = pd.concat([xg_train_perf_tuned.T,xg_val_perf_tuned.T],axis=1)
xg_perf_over_tuned.columns =["Training","Validation"]

print("Performance measures on tuned xgboost model on the over-sampled data")
print(xg_perf_over_tuned)

test_data["Yield"] = xg_boost_tuned.predict(X_test)

X_train_df = pd.DataFrame(X_train)
with open(logging_file,"a") as f:
    f.write(f"ATTRIBUTESSSSSSS : {X_train_df.columns}")

data_df =pd.DataFrame({"ID":test_data["ID"],"Yield":test_data["Yield"]})

data_df.to_csv("final_yield.csv",index=False)

joblib.dump(xg_boost_tuned, '/home/hemanth/only_ml/DotSlash/models/xg_boost_tuned_model.pkl')

joblib.dump(lgb_model,'/home/hemanth/only_ml/DotSlash/models/xg_boost_model.pkl')
