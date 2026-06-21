# Statistical Analysis of NDVI Scale Sensitivity and Edge Effects

This repository contains the Python-based analytical workflow used to investigate scale-induced bias and edge contamination in NDVI observations derived from Sentinel-2 imagery within fragmented smallholder agricultural landscapes.

The workflow integrates multi-resolution NDVI datasets, spatial metrics, and zonal statistics to identify operational field-size thresholds for reliable vegetation monitoring.

---

# Repository Structure

```text
project/

├── notebooks/
│   ├── 01_scale_bias_analysis.ipynb
│   └── 02_edge_effect_analysis.ipynb
│
├── raw_data/
│   ├── NDVI_10m.csv
│   ├── NDVI_20m.csv
│   ├── NDVI_30m.csv
│   ├── NDVI_total.csv
│   ├── NDVI_core.csv
│   ├── NDVI_edge.csv
│   ├── field_metrics.csv
│   └── field_stats.csv
│
├── output/
│   ├── master_analysis.csv
│   ├── figure/
│  
│
└── README.md
```

---

# Objectives

This repository aims to:

- Quantify NDVI sensitivity to spatial resolution
- Measure scale-induced bias
- Investigate mixed-pixel contamination
- Evaluate geometric controls on spectral stability
- Determine operational reliability thresholds
- Produce publication-ready figures and summary statistics

---

# Study Dataset

Sample Size


```text
200 Agricultural Fields
```



Study Region


```text
Sylhet District, Bangladesh
```



Input Sources


* Sentinel-2 NDVI

* Field Geometry Metrics

* Core/Edge Zonal Statistics



---

# Part 1 — NDVI Scale Sensitivity Analysis

## Data Integration


Input datasets:


```text
NDVI_10m.csv

NDVI_20m.csv

NDVI_30m.csv

field_stats.csv
```



Merged using:


```python
merge()
```



Join key:


```python
field_id
```



---

## Bias Feature Engineering


### Directional Bias



20 m bias


$$
Bias_{20}
=
NDVI_{20m}
-
NDVI_{10m}
$$



30 m bias


$$
Bias_{30}
=
NDVI_{30m}
-
NDVI_{10m}
$$



---

### Absolute Bias



To quantify total uncertainty:



$$
AbsBias=
|Bias|
$$



Generated variables:


```text
bias20

bias30

abs_bias20

abs_bias30
```



---

## Scale Sensitivity Findings


### Mean Error


| Resolution | Mean Absolute Error |
|-----------|--------------------|
|20m|0.0064|
|30m|0.0139|



Maximum observed error:


```text
0.091 NDVI
```



---

## Geometric Drivers


Evaluated relationships:


* Area vs abs_bias30

* Shape Index vs abs_bias30

* Edge Ratio vs abs_bias30



---

## Correlation Analysis


Key result:



```text
Edge Ratio

r = 0.267
```



Fields with larger perimeter proportions exhibit greater sensitivity to spatial aggregation.



---

## Reliability Threshold


Acceptable uncertainty:


```text
abs_bias30 < 0.05
```



Threshold identified:


```text
90 m²
```



Interpretation:


Fields below 90 m² are highly unstable under 30 m observations.



---

# Part 2 — Edge Effect Analysis


## Input Datasets



```text
NDVI_total.csv

NDVI_core.csv

NDVI_edge.csv
```



---

## Edge Effect Computation



Metric:



$$
EdgeEffect
=
NDVI_{edge}
-
NDVI_{core}
$$



Absolute distortion:



$$
AbsEdgeEffect
=
|EdgeEffect|
$$



Variables:


```text
edge_effect

abs_edge_effect
```



---

## Structural Controls


Relationships explored:


* Area vs abs_edge_effect

* Shape Index vs abs_edge_effect



Visualizations:


* Scatter plots

* Correlation matrix

* Size-class boxplots



---

## Edge Paradox


Observed relationship:



```text
Area

r = 0.364
```



Interpretation:


Large fields contain stronger spectral contrasts along boundaries, producing larger local edge differences despite having stable interiors.



---

## Stability Threshold


Criterion:



```text
Error < 0.05
```



Minimum stable field size:



```text
≈180 m²
```



Interpretation:


Fields larger than approximately 180 m² possess sufficient interior pixels to minimize boundary contamination.



---

# Final Dataset


Output:


```text
master_analysis.csv
```



Contains:


* Field Geometry

* Shape Metrics

* Core Area

* Edge Ratio

* NDVI10

* NDVI20

* NDVI30

* Scale Bias

* Edge Effects

* Reliability Indicators



---


# Key Findings


Main conclusions:


✔ Scale bias increases as field size decreases


✔ Irregular geometries amplify uncertainty


✔ Edge contamination is a major source of mixed-pixel error


✔ Fields smaller than 90 m² are unreliable for 30 m analysis


✔ NDVI signals become relatively stable above approximately 180 m²


---

# Python Dependencies


```python
pandas

numpy

matplotlib

seaborn

scipy

statsmodels
```



---

# Reproducibility


The workflow is fully reproducible.


Inputs required:


* Sentinel-2 extracted NDVI tables

* Field metrics

* Core-edge zonal statistics


Outputs:


```text
master_analysis.csv
```



Suitable for:


* Publication graphics

* Statistical modeling

* Machine Learning applications

* Scholarship portfolios

* Remote sensing studies



---

# Author


**Durjoy Sarker**

Sylhet Agricultural University


Research Interests


- GIS
- Remote Sensing
- AI in Agriculture
- Spatial Statistics
- Earth Observation



---

# Citation


Durjoy Sarker (2026)


*Statistical Analysis of NDVI Scale Sensitivity and Edge Effects in Smallholder Agricultural Landscapes.*


Portfolio Research Project.

