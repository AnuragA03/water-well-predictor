import pandas as pd

# Load the dataset
data = pd.read_csv("data.csv")

# Replace '#N/A' with NaN for consistency
data.replace("#N/A", pd.NA, inplace=True)

# Convert columns to numeric types where applicable
data['Latitude'] = pd.to_numeric(data['Latitude'], errors='coerce')
data['Longitude'] = pd.to_numeric(data['Longitude'], errors='coerce')
data['pH'] = pd.to_numeric(data['pH'], errors='coerce')
data['NetGroundwaterAvailability'] = pd.to_numeric(data['NetGroundwaterAvailability'], errors='coerce')
data['StageOfGroundwaterDevelopment'] = pd.to_numeric(data['StageOfGroundwaterDevelopment'], errors='coerce')

# Handle missing values
data.fillna(data.mean(numeric_only=True), inplace=True)

# Relaxed suitability logic
def determine_suitability(row):
    if (
        row['StageOfGroundwaterDevelopment'] < 100 and  # Increased threshold
        row['NetGroundwaterAvailability'] > 2000 and   # Reduced threshold
        6.0 <= row['pH'] <= 9.0                        # Slightly broader pH range
    ):
        return 1  # Suitable
    else:
        return 0  # Not Suitable

# Add a new column for suitability
data['SuitableForWaterWell'] = data.apply(determine_suitability, axis=1)

# Save the updated dataset to a new CSV file
data.to_csv("data_with_suitability.csv", index=False)

print("Updated dataset saved as 'data_with_suitability.csv'")
