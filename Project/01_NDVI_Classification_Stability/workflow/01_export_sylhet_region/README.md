# 🌍 Sylhet Region Extraction (Google Earth Engine)

##  Objective
This script extracts the administrative boundary of Sylhet District, Bangladesh using FAO GAUL Level-2 dataset in Google Earth Engine (GEE).  
The output is used as the **Area of Interest (AOI)** for all subsequent NDVI and agricultural risk analysis.

---

##  Data Source
- Dataset: FAO GAUL 2015 (Level 2 Administrative Boundaries)
- Platform: Google Earth Engine
- Region: Sylhet District, Bangladesh

---

##  Workflow Description

The process performs the following steps:

1. Load global administrative boundary dataset (Level-2)
2. Filter dataset for Sylhet District using attribute query
3. Convert feature collection into geometry (AOI)
4. Visualize boundary in GEE map
5. Export AOI as GeoJSON for external use (Python / QGIS / GEE assets)

---

##  Code Summary

### 1. Load dataset
We use FAO GAUL Level-2 dataset which contains district-level administrative boundaries.

### 2. Filter Sylhet District
The dataset is filtered using the attribute: ADM2_NAME = "Sylhet"


### 3. Convert to geometry
The filtered feature collection is converted into a geometry object for spatial operations.

### 4. Export AOI
The final boundary is exported as a GeoJSON file for use in:
- Python (GeoPandas)
- QGIS
- Google Earth Engine assets

---

##  Output

The script generates:

- `sylhet_aoi.geojson`

This file represents the **study boundary for all spatial analysis** in the project.

---

##  Notes

- This step does not involve raster processing.
- Only vector boundary extraction is performed.
- Accuracy depends on FAO GAUL administrative dataset.

---

## 📌 Reproducibility

This script is fully reproducible in Google Earth Engine and does not require local computation.
