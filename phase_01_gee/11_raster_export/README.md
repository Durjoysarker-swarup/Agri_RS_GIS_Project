# Google Earth Engine (GEE) Satellite Imagery Export Pipeline

This repository contains a Google Earth Engine script designed to filter, process, and export Harmonized Sentinel-2 Surface Reflectance data for a specific Region of Interest (ROI).

## What the Script Does

### 1. ROI and Map Initialization
* Defines a specific rectangular Region of Interest (ROI).
* Centers the interactive map view directly over the defined target coordinates.

### 2. Imagery Filtering & Compositing
* Queries the **Sentinel-2 Surface Reflectance Harmonized** collection.
* Filters data based on the geographic boundary, a specific early 2024 date range, and strict cloud cover constraints (< 10%).
* Creates a single cloud-free pixel composite using a **median reducer** across the stack and clips the final result to the ROI boundary.

### 3. Vegetation Index Processing
* Calculates the **Normalized Difference Vegetation Index (NDVI)** using the Near-Infrared (B8) and Red (B4) bands.

### 4. Automated Multi-Resolution Export Tasks
Triggers tasks to export specific assets directly to Google Drive into dedicated folders:
* **Single Bands:** Exports Blue (B2) at its native 10-meter scale, and Shortwave Infrared (B11) at its native 20-meter scale.
* **Calculated Index:** Exports the processed NDVI layer as a 10-meter resolution GeoTIFF.
* **Multi-Spectral Raster:** Bundles and exports a composite GeoTIFF containing the core Blue (B2), Green (B3), Red (B4), and Near-Infrared (B8) bands at 10-meter spatial resolution.
