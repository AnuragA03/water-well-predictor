import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.multioutput import MultiOutputRegressor
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import classification_report
import joblib

# Load the dataset
data = pd.read_csv("data.csv")

# Handle missing values
data.fillna(data.mean(), inplace=True)

# Features and targets
features_to_predict = [
    'AnnualReplenishableResources', 'NetGroundwaterAvailability',
    'StageOfGroundwaterDevelopment', 'IrrigationDraft', 'TotalDraft'
]
X = data[['Latitude', 'Longitude']]  # Inputs for regression
y_regression = data[features_to_predict]  # Targets for regression
y_classification = data['SuitableForWaterWell']  # Final suitability target

# Split data into training and testing sets for regression
X_train_reg, X_test_reg, y_train_reg, y_test_reg = train_test_split(
    X, y_regression, test_size=0.2, random_state=42
)

# Multi-output regression pipeline
regression_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('regressor', MultiOutputRegressor(RandomForestRegressor(random_state=42)))
])

# Train regression model
regression_pipeline.fit(X_train_reg, y_train_reg)

# Split data for classification
X_class_train, X_class_test, y_class_train, y_class_test = train_test_split(
    y_regression, y_classification, test_size=0.2, random_state=42
)

# Classification model pipeline
classification_pipeline = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', RandomForestClassifier(random_state=42))
])

# Train classification model
classification_pipeline.fit(X_class_train, y_class_train)

# Evaluate regression model
y_pred_features = regression_pipeline.predict(X_test_reg)

# Evaluate classification model
y_class_pred = classification_pipeline.predict(y_pred_features)
print("Classification Model Report:")
print(classification_report(y_class_test, y_class_pred))

# Save the models
joblib.dump(regression_pipeline, "regression_model.pkl")
joblib.dump(classification_pipeline, "classification_model.pkl")
print("Models saved as regression_model.pkl and classification_model.pkl")
