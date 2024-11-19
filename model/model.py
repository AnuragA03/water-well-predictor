import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.preprocessing import StandardScaler
import joblib

# Step 1: Create dummy data
np.random.seed(42)

n_samples = 1000
data = pd.DataFrame({
    'LATITUDE': np.random.uniform(20, 30, n_samples),  # Latitude between 20 and 30
    'LONGITUDE': np.random.uniform(70, 80, n_samples),  # Longitude between 70 and 80
    'Annual Replenishable Groundwater Resources': np.random.uniform(100, 1000, n_samples),
    'Natural Discharge During Non-Monsoon Season': np.random.uniform(10, 50, n_samples),
    'Net Groundwater Availability': np.random.uniform(50, 800, n_samples),
    'Irrigation Draft': np.random.uniform(10, 600, n_samples),
    'Domestic and Industry Draft': np.random.uniform(10, 200, n_samples),
    'Stage of Groundwater Development (%)': np.random.uniform(10, 150, n_samples),
    'Total Draft': np.random.uniform(20, 800, n_samples),
})

# Step 2: Define new features based on the conditions
threshold_availability = 500  # Threshold for sufficiency of groundwater availability in million cubic meters/year
threshold_development = 50  # Threshold for sustainable groundwater development in %

# Feature 1: Sufficiency of Groundwater Availability
data['sufficiency_of_groundwater_availability'] = np.where(data['Net Groundwater Availability'] > threshold_availability, 1, 0)

# Feature 2: Sustainability of Groundwater Development
data['sustainability_of_groundwater_development'] = np.where(data['Stage of Groundwater Development (%)'] < threshold_development, 1, 0)

# Feature 3: Sustainability of Drafts
data['sustainability_of_drafts'] = np.where((data['Irrigation Draft'] + data['Domestic and Industry Draft']) < data['Net Groundwater Availability'], 1, 0)

# Define binary target variable for classification (Suitability based on the three new features)
data['suitable_for_well'] = np.where(
    (data['sufficiency_of_groundwater_availability'] == 1) & 
    (data['sustainability_of_groundwater_development'] == 1) &
    (data['sustainability_of_drafts'] == 1),
    1, 0
)

# Step 3: Define features and targets
X = data[['LATITUDE', 'LONGITUDE', 'sufficiency_of_groundwater_availability', 
          'sustainability_of_groundwater_development', 'sustainability_of_drafts']]

# Define the target variables (attributes and suitability)
target_columns = [
    'Annual Replenishable Groundwater Resources', 'Natural Discharge During Non-Monsoon Season',
    'Net Groundwater Availability', 'Irrigation Draft', 'Domestic and Industry Draft', 
    'Stage of Groundwater Development (%)', 'Total Draft'
]

y_regression = data[target_columns]
y_classification = data['suitable_for_well']

# Step 4: Split data into training and test sets for both tasks
X_train, X_test, y_train_regression, y_test_regression = train_test_split(X, y_regression, test_size=0.2, random_state=42)
X_train_class, X_test_class, y_train_classification, y_test_classification = train_test_split(X, y_classification, test_size=0.2, random_state=42)

# Step 5: Train the regression model (for predicting attributes)
regressor = RandomForestRegressor(n_estimators=100, random_state=42)
regressor.fit(X_train, y_train_regression)

# Step 6: Train the classification model (for predicting suitability)
classifier = RandomForestClassifier(n_estimators=100, random_state=42)
classifier.fit(X_train_class, y_train_classification)

# Step 7: Save both models (regression and classification) in one pickle file
combined_model = {'regressor': regressor, 'classifier': classifier}
joblib.dump(combined_model, 'combined_model.pkl')

# Step 8: Define the prediction function for both attributes and suitability
def predict(lat, lon):
    # Load the saved combined model
    model = joblib.load('combined_model.pkl')
    
    # Prepare the input data
    input_data = pd.DataFrame([[lat, lon, 1, 1, 1]], columns=['LATITUDE', 'LONGITUDE', 
                                                             'sufficiency_of_groundwater_availability', 
                                                             'sustainability_of_groundwater_development', 
                                                             'sustainability_of_drafts'])
    
    # Predict the attributes using the regressor
    predicted_attributes = model['regressor'].predict(input_data)
    
    # Predict the suitability using the classifier
    suitability = model['classifier'].predict(input_data)
    
    # Prepare the response format
    response = {
        'Predicted Attributes': {
            'Annual Replenishable Groundwater Resources': predicted_attributes[0][0],
            'Natural Discharge During Non-Monsoon Season': predicted_attributes[0][1],
            'Net Groundwater Availability': predicted_attributes[0][2],
            'Irrigation Draft': predicted_attributes[0][3],
            'Domestic and Industry Draft': predicted_attributes[0][4],
            'Stage of Groundwater Development (%)': predicted_attributes[0][5],
            'Total Draft': predicted_attributes[0][6],
        },
        'Suitability': 'Suitable' if suitability[0] == 1 else 'Unsuitable'
    }
    
    return response

# Example Usage:
# Predict attributes and suitability for a given location
lat = 25.0  # Example latitude
lon = 75.0  # Example longitude

prediction = predict(lat, lon)
print(prediction)
