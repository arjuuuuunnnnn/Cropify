import pickle

# Load the RandomForest.pkl model
with open('xg_boost_tuned_model.pkl', 'rb') as f:
    RF_model = pickle.load(f)

# Inspect the feature names
features_used = RF_model.feature_importances_
print(features_used)

