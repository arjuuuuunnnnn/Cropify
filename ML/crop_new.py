import pandas as pd
import numpy as np
import seaborn as sns
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split, cross_val_score, KFold
from sklearn.pipeline import Pipeline, make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.naive_bayes import GaussianNB
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix
from sklearn.impute import SimpleImputer  # For handling NaN values

# Ignore warnings
import warnings
warnings.filterwarnings('ignore')


def explore_data(df):
    """Analyzes the data by printing its shape, columns, and data types."""

    print("Number of Instances and Attributes:", df.shape)
    print('\n')
    print('Dataset columns:', df.columns)
    print('\n')
    print('Data types of each columns: ', df.info())


def checking_removing_duplicates(df):
    """Checks for duplicates and removes them if found."""

    count_dups = df.duplicated().sum()
    print("Number of Duplicates: ", count_dups)
    if count_dups >= 1:
        df.drop_duplicates(inplace=True)
        print('Duplicate values removed!')
    else:
        print('No Duplicate values found.')


def read_in_and_split_data(data, target):
    """Splits data into training and testing sets, handling empty target variable."""

    X = data.drop(target, axis=1)
    y = data[target]

    # Check for empty target variable (y)
    if len(y) == 0:
        raise ValueError("Target variable (y) is empty. Check for issues during data loading or pre-processing.")

    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=0)
    return X_train, X_test, y_train, y_test


def train_model(X_train, y_train):
    """Trains a GaussianNB model with standard scaler, handling potential NaN values."""

    if pd.isnull(y_train).any():
        # Handle NaN values using mean imputation (you can choose another strategy)
        imputer = SimpleImputer(strategy='mean')
        y_train = imputer.fit_transform(y_train.values.reshape(-1, 1))[:, 0]

    pipeline = make_pipeline(StandardScaler(), GaussianNB())
    model = pipeline.fit(X_train, y_train)
    return model


def classification_metrics(model, X_test, y_test):
    """Evaluates the model's performance using various metrics."""

    y_pred = model.predict(X_test)
    conf_matrix = confusion_matrix(y_test, y_pred)

    print(f"Training Accuracy Score: {model.score(X_train, y_train) * 100:.1f}%")
    print(f"Validation Accuracy Score: {model.score(X_test, y_test) * 100:.1f}%")

    fig, ax = plt.subplots(figsize=(8, 6))
    sns.heatmap(pd.DataFrame(conf_matrix), annot=True, cmap='YlGnBu', fmt='g')
    ax.xaxis.set_label_position('top')
    plt.tight_layout()
    plt.title('Confusion Matrix', fontsize=20, y=1.1)
    plt.ylabel('Actual label', fontsize=15)
    plt.xlabel('Predicted label', fontsize=15)
    plt.show()

    print(classification_report(y_test, y_pred))


# Load Dataset
df = pd.read_csv('SmartCrop-Dataset.csv')
for column in df.columns:
    if df[column].dtype == 'object':
        try:
            df[column] = pd.to_numeric(df[column], errors='coerce')
        except:
            pass  # Handle non-numeric conversion errors

# Handle outliers (consider IQR or other methods)
# ... (implementation based on your chosen outlier handling method)

# Split Data to Training and Validation set
target = 'label'
try:
    X_train, X_test, y_train, y_test = read_in_and_split_data(df, target)

# Train model
model = train_model(X_train, y_train)

# Performance Measure
classification_metrics(model, X_test, y_test)

# Save model (consider security implications for real-world use)
save_model(model, '../models/model')
