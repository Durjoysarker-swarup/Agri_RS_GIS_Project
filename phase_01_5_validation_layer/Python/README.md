# GEE to Python: Remote Sensing & Spatial Data Science Pipeline

This repository contains a structured, end-to-end framework for transferring, processing, and validating satellite imagery from Google Earth Engine (GEE) into a Python-based data science and Machine Learning pipeline. 

The core philosophy of this pipeline is to treat satellite data not as images, but as **multidimensional numerical datasets ($f(x,y)$)** that require rigorous statistical validation, spatial alignment, and temporal signal analysis.

---

## 📂 Project Modules Overview

### 🧪 Module 1: Satellite Data as Numbers
* **GeoTIFF Structural Ingestion:** Understanding raster array shapes, coordinate systems, and band indexing in Python.
* **Reflectance Scaling & Normalization:** Converting raw digital numbers (e.g., Sentinel-2 $0 \rightarrow 10000$) to physical surface reflectance values ($0 \rightarrow 1$).
* **Robust Array Calculations:** Computing indices like NDVI manually while handling real-world data edge cases ($0/0$ division errors and `NaN` pixels).
* **GEE vs. Python Validation:** Cross-checking distribution histograms and spatial alignment to verify pipeline integrity.

### 🧪 Module 2: Sampling and Resolution
* **The Raster Matrix Model:** Processing spatial grids as functional NumPy arrays rather than photographic images.
* **Spatial Scale Dynamics:** Exploring pixel ground coverage (e.g., Sentinel's $10\text{m} \times 10\text{m}$ grid) and the impacts of scale modification.
* **Downsampling & NumPy Slicing:** Manually modifying array steps to analyze texture loss, spatial info destruction, and signal aliasing.
* **True Resampling & Inter-sensor Alignment:** Applying SciPy interpolation methodologies (`Nearest Neighbor`, `Bilinear`, `Cubic`) to resolve multi-resolution band mismatches (e.g., $10\text{m}$ NIR vs. $20\text{m}$ SWIR).
* **Upsampling Boundaries:** Evaluating the scientific limits of artificial pixel interpolation ($20\text{m} \rightarrow 10\text{m}$) and avoiding synthetic data traps in Machine Learning.

### 🧪 Module 3: Atmospheric vs. Clean Data
* **Signal vs. Noise Disconnection:** Differentiating between Top of Atmosphere (TOA) signals and Surface Reflectance (SR) models.
* **Distribution-Driven Analysis:** Moving past subjective visual inspections toward quantitative tracking of statistical distribution shifts (mean, median, variance, skewness).
* **Simulating Structured Atmospheric Noise:** Generating artificial additive haze layers and spatially correlated noise patterns using Gaussian filters to test model sensitivity.
* **Domain Shift Awareness:** Hardening agricultural AI algorithms against seasonal variations, cloud edge contamination, and regional aerosol pollution.

### 🧪 Module 4: GEE Export $\rightarrow$ Python Pipeline
* **Data Engineering & Extraction:** Scripting clean data pipelines from GEE to local directories across three primary data types:
  1. *Tabular Temporal Data* (NDVI Time-Series CSVs)
  2. *Spatiotemporal Array Data* (Multiband GeoTIFF Stacks)
  3. *ML-Ready Structured Features* (Zonal Statistics Tables)
* **Temporal Alignment:** Resolving chronological discrepancies, metadata compression artifacts, and coordinate reference system (CRS) mismatches.
* **Time-Aware Pandas Integration:** Parsing datetime objects, establishing index baselines, and auditing irregular satellite acquisition frequencies caused by cloud flags or orbital schedules.

### 🧪 Module 5: Time Series Engine
* **Biological Trajectory Modeling:** Extracting smooth crop growth cycles (seedling $\rightarrow$ vegetative peak $\rightarrow$ senescence $\rightarrow$ harvest) out of raw satellite observations.
* **Handling Irregular Sampling:** Implementing time-series resampling structures (`7D`, `10D`, `M`) to standardize time gaps for predictable model inputs.
* **Anomaly & Spike Profiling:** Running consecutive-date difference analysis ($\Delta \text{NDVI} > 0.3$) to separate unnatural data anomalies from genuine ground events (e.g., flash flooding, rapid harvesting).

### 🧪 Module 6: Cloud + Noise Validation
* **Temporal Cloud Signature Masking:** Isolating thin clouds, edge shadows, and lingering haze using window-shifting algorithms ($t-1$, $t$, $t+1$) to identify sudden dips followed by instant recoveries.
* **Physical Rule Filtering:** Enforcing biological boundaries on data streams by replacing unfeasible pixel behavior with `NaN` flags.
* **Data Imputation & Smoothing:** Reconstructing missing values via linear interpolation and deploying rolling mean filters ($3$-step window arrays) to stabilize temporal trends for advanced Machine Learning modeling without erasing vital environmental stress markers.

---

## 🛠️ Core Technology Stack
* **Cloud Processing:** Google Earth Engine (JavaScript API / Code Editor)
* **Spatial & Raster Data Engineering:** `rasterio`, `geopandas`
* **Numerical Computing & Signal Processing:** `numpy`, `scipy`
* **Data Science & Temporal Structuring:** `pandas`
* **Data Visualization & Analytics:** `matplotlib`
