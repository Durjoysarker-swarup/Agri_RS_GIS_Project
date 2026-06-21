# NDVI Scale Sensitivity and Edge Effects in Smallholder Agricultural Landscapes

## Overview

This project investigates how spatial resolution and field geometry influence the reliability of vegetation monitoring in fragmented smallholder agricultural systems.

Using Sentinel-2 imagery and NASA Harvest Fields of the World (FTW) boundaries, the study evaluates the effects of scale mismatch and edge contamination on NDVI estimates in Sylhet, Bangladesh.

The objective is to identify practical field-size thresholds for reliable use of medium-resolution satellite data in smallholder landscapes.

---

## Research Question

> How does NDVI reliability change when field size and spatial resolution mismatch increases in smallholder agricultural landscapes?

---

## Study Area

**Location:** Sylhet District, Bangladesh

Characteristics:

- Fragmented agricultural landscape
- Predominantly smallholder farming systems
- Rice-dominated cropping pattern

---

## Datasets

| Dataset | Resolution | Purpose |
|---------|------------|---------|
| Sentinel-2 Surface Reflectance | 10m, 20m, 30m | NDVI computation |
| NASA Harvest Fields of the World | Vector | Agricultural field boundaries |
| Sylhet Administrative Boundary | Vector | Spatial clipping |

Study period:

July 2024 – November 2024

---

## Methodology

### Phase 0 — Data Preparation

- Merge FTW tiles
- Geometry correction (`buffer(0)`)
- Clip to Sylhet district
- Stratified random sampling

Sample Size:

200 agricultural fields

Size classes:

* Small (<300 m²)
* Medium (300–1500 m²)
* Large (1500–5000 m²)
* Very Large (>5000 m²)

---

### Phase 1 — Geometric Analysis

Computed variables:

* Field Area
* Core Area
* Edge Ratio
* Shape Index
* Edge Effect
* NDVI Bias

Core polygons were generated using a **2.5 m inward buffer**.

Shape Index:

$$
SI=\frac{Perimeter}{2\sqrt{\pi Area}}
$$

Higher values indicate elongated or irregular fields.

---

### Phase 2 — Google Earth Engine Processing

Steps:

* Cloud masking using SCL
* Median Sentinel-2 composite
* NDVI calculation
* Spatial aggregation

Generated products:

* NDVI 10m
* NDVI 20m
* NDVI 30m

Extracted statistics:

* Total NDVI
* Core NDVI
* Edge NDVI

---

### Phase 3 — Statistical Analysis

Performed in Python.

Libraries:

```python
pandas
geopandas
numpy
matplotlib
```

Analyses included:

* Scale bias estimation
* Edge contamination assessment
* Pearson correlation
* Reliability threshold detection

---

## Key Findings

### Scale-induced Bias

NDVI bias increases as field size decreases.

Observed relationship:

```text
Field Area vs abs_bias30

r = -0.18
p < 0.05
```

Small fields exhibit greater uncertainty under 30 m aggregation.

---

### Edge Contamination

Field geometry significantly affects spectral purity.

Observed relationship:

```text
Shape Index vs abs_bias30

r = 0.25
p < 0.01
```

Elongated fields are more susceptible to mixed-pixel effects.

---

### Reliability Threshold

Important thresholds identified:

| Field Size | Reliability |
|-----------|-------------|
| <90 m² | High uncertainty |
| ~90 m² | Transition zone |
| >180 m² | Relatively stable |
| >500 m² | Consistently reliable |

Reliability criterion:

```text
abs_bias30 < 0.05
```

---


## Figures

- Study Area Map
- Field Size Distribution
- Area vs Absolute NDVI Bias
- Shape Index vs NDVI Bias
- Edge vs Core NDVI Comparison
- Bias Distribution by Size Class
- Workflow Diagram

---

## Limitations

Current limitations include:

* Fixed 2.5 m buffering
* AI-generated FTW boundaries
* Single growing season
* Single study region

Future work may include:

- Manual boundary validation
- Multi-season analysis
- Crop-specific sensitivity assessment
- Cross-country comparisons

---

## Reproducibility

This project is fully reproducible.

Components include:

- Google Earth Engine scripts
- Python notebooks
- Spatial preprocessing workflow
- Statistical analysis pipeline

---


## Author

**Durjoy Sarker**

Undergraduate Student  
Faculty of Agriculture  
Sylhet Agricultural University  
Bangladesh

Interests:

- AI in Agriculture
- Remote Sensing
- GIS
- Crop Monitoring
- Spatial Data Science

---
