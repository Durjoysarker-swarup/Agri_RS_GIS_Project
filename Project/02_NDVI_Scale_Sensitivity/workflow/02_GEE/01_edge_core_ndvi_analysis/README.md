# NDVI Extraction and Edge-Core Analysis using Sentinel-2

This repository contains a Google Earth Engine (GEE) workflow developed to investigate edge contamination and vegetation signal variability within smallholder agricultural fields in Sylhet, Bangladesh.

The workflow computes NDVI from Sentinel-2 imagery, partitions fields into core and edge zones, and extracts vegetation statistics for subsequent scale sensitivity analysis.

---

# Repository Structure

```text
project/

├── gee/
│   └── ndvi_edge_core.js
│
│
├── outputs/
│   ├── NDVI_total.csv
│   ├── NDVI_core.csv
│   ├── NDVI_edge.csv
│   └── field_metrics.csv
│
└── README.md
```

---

# Study Area

Study Region:

Sylhet District, Bangladesh


Characteristics:

* Fragmented agricultural landscape
* Smallholder farming systems
* Predominantly rice cultivation



---

# Objectives

The workflow aims to:


* Generate Sentinel-2 NDVI composites
* Separate field interiors from boundaries
* Quantify edge contamination
* Extract vegetation metrics
* Support NDVI scale sensitivity experiments



---

# Datasets



### Sentinel-2 Surface Reflectance


Collection


```javascript
COPERNICUS/S2_SR
```



Spatial Resolution


```text
10 m
```



Study Period


```text
2024-07-01
to
2024-11-30
```



---

### Agricultural Fields


Input Asset


```javascript
projects/.../sample_fields
```



Sample Size


```text
200 agricultural fields
```



---

# Workflow


## Step 1 — Load Sample Fields


Agricultural field boundaries are imported from a Google Earth Engine asset.



```javascript
ee.FeatureCollection()
```



Fields are visualized on the map.



---

## Step 2 — Sentinel-2 Acquisition



Sentinel-2 Surface Reflectance imagery is filtered by:


* Study area
* Study period



```javascript
.filterBounds()
.filterDate()
```



---

## Step 3 — Cloud Masking


Cloud contaminated pixels are removed using the Scene Classification Layer (SCL).



Excluded classes:


| SCL Value | Description |
|----------|-------------|
| 3 | Shadow |
| 8 | Medium cloud |
| 9 | High cloud |
| 10 | Cirrus |



Method:


```javascript
updateMask()
```



---

## Step 4 — NDVI Computation



NDVI calculated as:



$$
NDVI=
\frac{NIR-Red}
{NIR+Red}
$$



Bands used:



| Band | Description |
|------|-------------|
| B8 | Near Infrared |
| B4 | Red |



Function:


```javascript
normalizedDifference()
```



---

## Step 5 — Median Composite


A cloud-free median NDVI image is generated.



```javascript
median()
```



Product:


```text
ndvi10
```



This image serves as the baseline vegetation layer.



---

## Step 6 — Core and Edge Delineation


Each field polygon is divided into:


### Core


Interior polygon


Generated using:



```javascript
buffer(-2.5)
```



---

### Edge


Boundary polygon



Computed as:



```javascript
geometry().difference()
```



Visualization:


| Layer | Color |
|-------|-------|
| Core | Green |
| Edge | Red |
| Original Field | Blue |



---

## Step 7 — Field Metrics


Calculated variables:


| Variable | Unit |
|----------|------|
| total_area | m² |
| core_area | m² |
| edge_ratio | Dimensionless |



Formula:



$$
EdgeRatio=
1-
\frac{CoreArea}
{TotalArea}
$$



Higher values indicate larger proportions of boundary pixels.



---

## Step 8 — NDVI Extraction



Mean NDVI extracted for:



### Total Field



Variable:


```text
NDVI_total
```



---

### Core Region



Variable:


```text
NDVI_core
```



---

### Edge Region



Variable:


```text
NDVI_edge
```



Method:


```javascript
reduceRegions()
```



Scale:


```text
10 meters
```



Reducer:


```javascript
ee.Reducer.mean()
```



---

## Step 9 — Export Results



Four CSV files exported to Google Drive.



### NDVI Total



```text
NDVI_total.csv
```



---

### NDVI Core



```text
NDVI_core.csv
```



---

### NDVI Edge



```text
NDVI_edge.csv
```



---

### Field Metrics



```text
field_metrics.csv
```



---

# Output Description


| File | Description |
|------|-------------|
| NDVI_total.csv | Mean NDVI for complete fields |
| NDVI_core.csv | Mean NDVI for interior zones |
| NDVI_edge.csv | Mean NDVI for boundary zones |
| field_metrics.csv | Area statistics and edge ratios |



---

# Applications


This workflow supports:


* NDVI scale sensitivity analysis
* Edge contamination studies
* Mixed-pixel investigations
* Smallholder agriculture monitoring
* Sentinel-2 uncertainty assessment
* Remote sensing methodology development



---

# Requirements


Google Earth Engine


Sentinel-2 Surface Reflectance


Sample field polygons



---

# Author


**Durjoy Sarker**

Sylhet Agricultural University


Research Interests


* Remote Sensing
* GIS
* AI in Agriculture
* Spatial Statistics
* Crop Monitoring



---

## Citation

If you use this workflow, please cite:


Durjoy Sarker (2026)

*NDVI Extraction and Edge-Core Analysis using Sentinel-2 in Smallholder Agricultural Landscapes.*

Portfolio Research Project.

