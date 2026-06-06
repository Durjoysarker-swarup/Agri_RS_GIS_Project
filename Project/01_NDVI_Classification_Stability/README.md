# Impact of Cloud Masking on Agricultural Risk Classification using Sentinel-2 NDVI

## Project Overview

This project analyzes how different cloud masking strategies affect agricultural risk classification derived from Sentinel-2 NDVI data.

The core objective is not to measure crop health itself, but to quantify how **preprocessing choices (cloud masking methods)** influence final classification results.

The study focuses on the Sylhet District, Bangladesh, using multi-temporal Sentinel-2 Surface Reflectance data.

---

## Research Question

How sensitive are NDVI-based agricultural risk classifications to different cloud masking strategies?

---

## Key Idea

In satellite-based monitoring systems, preprocessing is not a neutral step.

Different cloud masking methods:
- change usable pixels
- shift NDVI distribution
- alter classification results
- create “decision flips” in risk labels

This project measures that instability.

---

## Study Area

- Location: Sylhet District, Bangladesh  
- Grid Resolution: 100m x 100m analysis grid  
- Total Cells: 87,982  
- Coordinate System: UTM (meter-based processing)  

---

## Data Used

- Sentinel-2 Surface Reflectance (SR) Harmonized
- Scene Classification Layer (SCL)
- QA60 cloud mask
- FAO GAUL administrative boundary

---

## Methodology Overview

The workflow is divided into four stages:

### 1. AOI Extraction (Google Earth Engine)
- Extracted Sylhet boundary from FAO GAUL dataset
- Exported AOI as GEE asset

### 2. Grid Generation (Python)
- Created 200m × 200m spatial grid using GeoPandas
- Clipped grid to AOI
- Assigned unique Grid IDs

### 3. NDVI Pipeline Processing (Google Earth Engine)
Three cloud masking pipelines were implemented:

- **Pipeline A (Standard)**: SCL-based exclusion masking  
- **Pipeline B (Strict)**: Only vegetation, soil, water pixels retained  
- **Pipeline C (Weak)**: QA60 bitmask-based masking  

NDVI was computed and zonal statistics were extracted per grid cell.

### 4. Statistical Analysis (Python)
- NDVI comparison across pipelines
- Threshold classification (Low / Moderate / High)
- Flip rate analysis
- Confusion matrix evaluation
- Visualization of instability

---

## Key Outputs

### NDVI Products
- Classification_A.png
- Classification_B.png
- Classification_C.png

### Dataset
- final_analysis_table.csv

### Figures
- NDVI distribution comparison
- Flip rate bar chart
- Confusion matrix heatmaps

---

## Key Findings

- Mean NDVI varies across pipelines:
  - Pipeline A: ~0.529
  - Pipeline B: ~0.539
  - Pipeline C: ~0.507

- Classification instability (Flip Rate):
  - A vs B: ~3.15% (stable)
  - A vs C: ~6.07% (sensitive)
  - B vs C: ~8.70% (high sensitivity)

- Up to ~9% of grid cells change risk category purely due to preprocessing differences.

---

## Main Insight

Cloud masking is not a technical preprocessing detail — it is a **primary driver of classification uncertainty**.

Even small differences in masking strategy can significantly alter agricultural risk maps.

---

## Tools & Technologies

- Google Earth Engine (JavaScript API)
- Python (GeoPandas, Rasterio, Pandas, Matplotlib, Seaborn)
- QGIS (Visualization)
- Sentinel-2 Satellite Data

