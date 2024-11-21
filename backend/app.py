from flask import Flask, request, jsonify
import joblib
import pandas as pd

# Initialize Flask app
app = Flask(__name__)

# Load the saved models
regression_model = joblib.load("regression_model.pkl")
classification_model = joblib.load("classification_model.pkl")

# Route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get JSON data from the request
        data = request.json
        
        # Extract latitude and longitude from the request
        latitude = data.get("latitude")
        longitude = data.get("longitude")
        
        if latitude is None or longitude is None:
            return jsonify({"error": "Please provide both latitude and longitude"}), 400
        
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
