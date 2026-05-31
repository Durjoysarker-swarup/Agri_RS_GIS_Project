# Google Earth Engine (GEE) Monthly NDVI Composite & Export Pipeline

This repository contains a Google Earth Engine script designed to automate the generation and export of cloud-masked, monthly NDVI composite rasters for a specific time window.

## What the Script Does

### 1. Spatial Initialization
* Defines a custom bounding polygon covering a specific Region of Interest (ROI).
* Automatically re-centers the interactive map canvas over the target zone and renders the boundary outline in red.

### 2. Specialized Masking & Index Operations
* **Atmospheric Data Cleaning:** Uses a Sentinel-2 Scene Classification Layer (SCL) filtering mechanism to isolate and remove pixels contaminated by cloud shadows, medium/high-probability clouds, cirrus formations, and snow/ice cover.
* **Spectral Transformations:** Maps across scenes to isolate Near-Infrared (B8) and Red (B4) bands, calculating and appending the **Normalized Difference Vegetation Index (NDVI)** band to each remaining clear-sky image asset.

### 3. Iterative Temporal Batch Processing
The script transitions client-side via a looping routine (`.getInfo().forEach`) to build a consecutive monthly sequence from January through April 2025:
* **Time Windows:** Programmatically moves month-by-month, calculating start and end date pairs.
* **Granular Filtering:** Isolates imagery matching each specific monthly window while removing scenes exceeding a raw 20% cloud ceiling threshold.
* **Pixel Optimization:** Runs the cloud masking filter and calculates the NDVI transformation for each isolated frame inside that specific month.
* **Composite Reduction:** Collapses the remaining filtered frame stack into a single representative monthly image utilizing a **median pixel reducer** to clear remaining atmospheric noise.

### 4. Automated File-Name Export Pipeline
* Triggers individual export tasks directly to Google Drive into a designated sub-folder (`GEE_NDVI`).
* Isolates the specific output NDVI band from the composite.
* Exports each file as a 10-meter high-resolution raster, programmatically writing distinct target filenames based on the running timestamp configuration (e.g., `NDVI_2025_1`, `NDVI_2025_2`, etc.).
