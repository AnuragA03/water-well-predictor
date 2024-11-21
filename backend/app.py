from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd
import os
import subprocess

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

# Define paths to model files
REGRESSION_MODEL_PATH = "regression_model.pkl"
CLASSIFICATION_MODEL_PATH = "classification_model.pkl"

# Function to check if the model files exist, and if not, run the training script
def check_and_train_models():
    if not os.path.exists(REGRESSION_MODEL_PATH) or not os.path.exists(CLASSIFICATION_MODEL_PATH):
        print("Model files not found. Training models...")
        # Run the train_model.py script to train and save models
        subprocess.run(["python", "train_model.py"])
        print("Model training complete.")
    else:
        print("Model files found, skipping training.")

# Check and train models if needed
check_and_train_models()

# Load the saved models
regression_model = joblib.load(REGRESSION_MODEL_PATH)
classification_model = joblib.load(CLASSIFICATION_MODEL_PATH)

# Define the valid range for Haryana state
LATITUDE_RANGE = (27.6, 30.9) 
LONGITUDE_RANGE = (74.6, 77.5) 

def is_within_range(value, value_range):
    """Check if a value is within a specified range."""
    return value_range[0] <= value <= value_range[1]

# Route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.json
        
        # Validate input data format
        if not isinstance(data, dict):
            return jsonify({"error": "Invalid input format. Expected JSON object."}), 400
        
        # Extract latitude and longitude from the request
        latitude = data.get("latitude")
        longitude = data.get("longitude")
        
        # Validate latitude and longitude presence
        if latitude is None or longitude is None:
            return jsonify({"error": "Please provide both latitude and longitude."}), 400
        
        # Validate latitude and longitude type
        if not isinstance(latitude, (int, float)) or not isinstance(longitude, (int, float)):
            return jsonify({"error": "Latitude and Longitude must be numeric values."}), 400
        
        # Validate latitude and longitude range
        if not is_within_range(latitude, LATITUDE_RANGE) or not is_within_range(longitude, LONGITUDE_RANGE):
            return jsonify({"error": "Invalid input. Please check the latitude and longitude values."}), 400
        
        # Prepare input for regression model
        user_input = pd.DataFrame([[latitude, longitude]], columns=['Latitude', 'Longitude'])
        
        # Predict groundwater-related features
        predicted_features = regression_model.predict(user_input)
        
        # Predict suitability for water well
        suitability = classification_model.predict(predicted_features)
        
        # Prepare the response
        feature_names = [
            'AnnualReplenishableResources', 'NetGroundwaterAvailability',
            'StageOfGroundwaterDevelopment', 'IrrigationDraft', 'TotalDraft'
        ]
        features = {name: value for name, value in zip(feature_names, predicted_features[0])}
        
        response = {
            "features": features,
            "suitability": "Suitable" if suitability[0] else "Not Suitable"
        }
        
        return jsonify(response), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Run the app
if __name__ == "__main__":
    app.run(debug=True)
