# Google Earth Engine (GEE) NDVI Time Series & Spatial Aggregation

This repository contains a Google Earth Engine script that automates the extraction, processing, and charting of vegetation dynamics over a designated Region of Interest (ROI) for the year 2023.

## What the Script Does

### 1. ROI Definition & Setup
* Creates a specific geographic bounding box and applies an inward negative buffer (-200 meters) to eliminate edge effects.
* Centers the map view and displays the target boundary.

### 2. Data Loading & Cleaning
* Imports **Sentinel-2 Surface Reflectance (S2_SR)** satellite imagery filtered by the boundary and year range.
* Applies a Scene Classification Layer (SCL) mask to automatically strip out cloud shadows, low/medium/high probability clouds, cirrus formations, and snow/ice anomalies.

### 3. Vegetation Index Processing
* Sequentially processes the cleaned collection to calculate the **Normalized Difference Vegetation Index (NDVI)** using the Near-Infrared (B8) and Red (B4) bands.
* Renders a quick visual preview layer of the first available NDVI image clipped directly to the ROI.

### 4. Spatial Aggregation & Reduction
* Maps across the entire time series to extract spatial metrics within the ROI at a 10-meter native scale resolution.
* Runs two separate reduction pipelines:
  * **Pipeline A:** Extracts simple spatial `Mean` values matched to human-readable dates.
  * **Pipeline B:** Combined multi-reducer extraction capturing spatial `Mean`, `Median`, and `Standard Deviation` concurrently to track field variance.

### 5. Data Cleaning & Visualization
* Converts raw statistics into clean, structured Earth Engine `FeatureCollections` while automatically dropping invalid or null data points.
* Generates and prints two interactive line charts directly within the GEE Console:
  * A raw, single-metric NDVI profile over time.
  * An advanced comparative profile contrasting **Mean vs. Median vs. Standard Deviation** trends side-by-side.
