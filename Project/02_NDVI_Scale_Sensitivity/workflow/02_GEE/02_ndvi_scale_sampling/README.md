# NDVI Scale Sensitivity Analysis using Sentinel-2

This repository contains a Google Earth Engine (GEE) workflow designed to investigate the effects of spatial resolution on NDVI estimates in fragmented smallholder agricultural landscapes.

The analysis uses Sentinel-2 imagery to generate a baseline 10 m NDVI composite and simulates coarser resolutions (20 m and 30 m) to evaluate scale-induced bias in vegetation monitoring.

---

# Repository Structure

```text
project/

├── gee/
│   └── ndvi_scale_analysis.js
│
├── data/
│   └── sample_fields.shp
│
├── outputs/
│   ├── NDVI_10m.csv
│   ├── NDVI_20m.csv
│   └── NDVI_30m.csv
│
└── README.md
```

---

# Study Area

Location

Sylhet District, Bangladesh


Characteristics

* Smallholder agricultural systems
* Fragmented field structure
* Predominantly rice cultivation


---

# Objectives

This workflow aims to:


* Generate a cloud-free Sentinel-2 NDVI composite

* Establish a 10 m baseline NDVI layer

* Simulate coarser spatial resolutions

* Compare NDVI estimates at 10 m, 20 m and 30 m

* Quantify scale-induced uncertainty



---

# Datasets



### Sentinel-2 Surface Reflectance



Collection


```javascript
COPERNICUS/S2_SR
```



Study period


```text
2024-07-01
to
2024-11-30
```



Spatial resolution


```text
10 meters
```



---

### Agricultural Fields



Input Asset


```javascript
projects/.../sample_fields
```



Sample size


```text
200 agricultural fields
```



---

# Workflow


## Step 1 — Load Sample Fields


Field boundaries are imported as a FeatureCollection.



```javascript
ee.FeatureCollection()
```



The sample polygons are displayed for visualization.



---

## Step 2 — Sentinel-2 Acquisition



Images are filtered by:



* Study area
* Study period



Methods used



```javascript
.filterBounds()
.filterDate()
```



---

## Step 3 — Cloud Masking


Cloud contaminated pixels are removed using the Scene Classification Layer.


Excluded classes


| SCL | Description |
|-----|-------------|
| 3 | Cloud Shadow |
| 8 | Medium Cloud |
| 9 | High Cloud |
|10 | Cirrus |



Masking method



```javascript
updateMask()
```



---

## Step 4 — NDVI Computation



NDVI calculated as



$$
NDVI=
\frac{B8-B4}
{B8+B4}
$$



Bands used


| Band | Description |
|------|-------------|
| B8 | Near Infrared |
| B4 | Red |



Method



```javascript
normalizedDifference()
```



---

## Step 5 — Baseline NDVI Composite


A cloud-free median NDVI image is generated.



Method



```javascript
median()
```



Projection information is preserved.



```javascript
setDefaultProjection()
```



Product



```text
NDVI 10m
```



This image serves as the reference layer.



---

## Step 6 — Spatial Aggregation


Coarser resolution products are simulated.


### NDVI 20m


Generated using



```javascript
reduceResolution()
```



Scale



```text
20 m
```



---

### NDVI 30m



Generated using



```javascript
reduceResolution()
```



Scale



```text
30 m
```



---

### Reprojection



Method



```javascript
reproject()
```



Ensures outputs have the desired spatial resolution.



---

## Step 7 — Visual Comparison


Three NDVI layers are displayed.


* NDVI 10m

* NDVI 20m

* NDVI 30m



Color palette



```javascript
['red','yellow','green']
```



---

## Step 8 — Statistical Extraction


Mean NDVI values extracted from sampled fields.



Method



```javascript
reduceRegions()
```



Reducer



```javascript
ee.Reducer.mean()
```



Extraction scales


| Dataset | Scale |
|---------|-------|
| NDVI10 | 10 m |
| NDVI20 | 20 m |
| NDVI30 | 30 m |



---

## Step 9 — Export Results


CSV files exported to Google Drive.



Outputs



### NDVI_10m.csv



Contains


Mean NDVI values at baseline resolution.



---


### NDVI_20m.csv



Contains


Mean NDVI values aggregated to 20 m.



---


### NDVI_30m.csv



Contains


Mean NDVI values aggregated to 30 m.



---

# Output Description


| File | Description |
|------|-------------|
| NDVI_10m.csv | Baseline NDVI values |
| NDVI_20m.csv | Aggregated 20 m NDVI |
| NDVI_30m.csv | Aggregated 30 m NDVI |



---

# Applications


This workflow supports:



* NDVI scale sensitivity analysis

* Mixed-pixel studies

* Spatial resolution assessment

* Smallholder agricultural monitoring

* Sentinel-2 uncertainty analysis

* Remote sensing methodology development



---

# Reproducibility


Requirements



* Google Earth Engine

* Sentinel-2 Surface Reflectance

* Sample agricultural fields



The workflow is fully reproducible within the Google Earth Engine environment.



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

# Citation


Durjoy Sarker (2026)


*NDVI Scale Sensitivity Analysis using Sentinel-2 in Smallholder Agricultural Landscapes.*


Portfolio Research Project.
