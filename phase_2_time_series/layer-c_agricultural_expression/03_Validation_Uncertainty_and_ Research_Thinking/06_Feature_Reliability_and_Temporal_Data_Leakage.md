# 5.6 — Feature Reliability & Temporal Data Leakage

A model can achieve high accuracy while remaining scientifically invalid.

## Part 1 — Feature

A feature is a measurable variable used by a model to describe an observation. A machine learning model does not see crops.

It only sees features.

**Example:**
- NDVI
- EVI
- Rainfall
- Temperature
- Soil Moisture
- SOS
- POS
- EOS
- LOS
- Peak NDVI

These numerical variables become the model's input.

### Observed vs Estimated Features

**Observed Feature**

Collected directly from measurements.

**Examples**
- Observed NDVI
- Measured rainfall
- Recorded temperature

These contain uncertainty, but they originate from actual observations.

**Estimated Feature**

Derived through models or processing.

**Examples**
- Interpolated NDVI
- Smoothed peak NDVI
- Estimated soil moisture
- Gap-filled rainfall
- Predicted yield

These contain additional uncertainty because assumptions have been introduced.

### Feature Confidence

"How confident am I in this feature?"

**Example**

Observed NDVI, Cloud-free observation

Confidence → High

Interpolated NDVI, Missing value estimated

Confidence → Moderate

Peak NDVI estimated after long cloud periods

Confidence → Low

## Part 2 — Data Leakage

Data leakage occurs when information that would not be available during real-world prediction is unintentionally used during model training.

### Temporal Data Leakage

Temporal data leakage occurs when future information is used to train or evaluate a model intended to make earlier predictions.

This is especially important in agriculture.

Imagine your goal: Predict crop yield before harvest.

Training data:
- April
- May
- June

Now someone includes

Peak NDVI measured in August.

The model becomes highly accurate.

But in April, August has not happened yet.

The model used future information.

## Part 3 — Train-Test Split

### Random Train-Test Split

Suppose you have NDVI observations:
- 2022
- 2023
- 2024

**Random split**

Training
- Jan 2022
- May 2022
- Jul 2023
- Mar 2024

Testing
- Feb 2022
- Jun 2022
- Aug 2023
- Apr 2024

Training and testing contain highly similar conditions.

Performance becomes unrealistically high.

**Why?**

Agricultural time series have strong temporal autocorrelation.

Nearby dates resemble one another.

### Temporal Train-Test Split

Training
- 2022
- 2023

Testing
- 2024

Now the model predicts a genuinely unseen season.

This better reflects operational deployment.

Reliable machine learning depends not only on powerful algorithms but also on trustworthy features and an evaluation strategy that prevents the model from learning information it could never know in real-world deployment.
