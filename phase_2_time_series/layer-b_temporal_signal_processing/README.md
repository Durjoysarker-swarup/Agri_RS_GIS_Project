# Layer B — Signal Behavior
### Mathematics of Satellite Time Series

---

## Overview

Satellite observations are not continuous measurements of crop growth. Instead, they are discrete, noisy, and often incomplete observations collected over time. Before vegetation indices such as NDVI can be used for crop monitoring, phenology, anomaly detection, or machine learning, the temporal signal must be carefully processed and interpreted.

This layer focuses on understanding the mathematical behavior of satellite time series. It covers the complete workflow from raw observations to scientifically reliable temporal features.

Unlike many tutorials that only demonstrate Python code, this module emphasizes the scientific reasoning behind every processing decision.

---

## Learning Objectives

After completing this layer, you will be able to:

- Understand why raw satellite time series require preprocessing.
- Distinguish biological signals from measurement noise.
- Apply and compare multiple smoothing algorithms.
- Select smoothing parameters based on scientific reasoning.
- Understand interpolation and its limitations.
- Analyze temporal dependence in vegetation signals.
- Detect meaningful changes while avoiding false alarms.
- Quantify uncertainty throughout the processing pipeline.
- Interpret processed NDVI curves with appropriate confidence.

---

## Scientific Workflow

```text
Reality
      │
      ▼
Satellite Observation
      │
Measurement Noise
      │
      ▼
Signal Processing
      │
      ▼
Interpolation
      │
      ▼
Temporal Analysis
      │
      ▼
Feature Extraction
      │
      ▼
Uncertainty Assessment
      │
      ▼
Scientific Interpretation
```

---

## Module Structure

| Day | Topic |
|------|-------|
| Day 1 | Why We Process Satellite Time Series |
| Day 2 | Smoothing Methods |
| Day 3 | Choosing Smoothing Parameters |
| Day 4 | Interpolation & Gap Filling |
| Day 5 | Temporal Dependence |
| Day 6 | Change Detection |
| Day 7 | Uncertainty in Temporal Analysis |

Each module contains:

- 📖 A detailed theoretical explanation (`README.md`)
- 💻 A practical implementation in Python (`.ipynb`)
- 📊 Generated figures and visualizations
- ✅ Exercises and interpretation

---

# Repository Structure

```text
Layer-B_temporal_signal_processing/
│
├── Day_01_Why_We_Process_Satellite_Time_Series/
│   ├── README.md
│   ├── NDVI_Signal_Exploration.ipynb
│   └── Report.md
│
├── Day_02_Smoothing_Methods/
│   ├── README.md
│   ├── NDVI_Smoothing_Comparison.ipynb
│   └── Report.md
│
├── Day_03_Choosing_Smoothing_Parameters/
│   ├── README.md
│   ├── Smoothing_Parameter_Sensitivity.ipynb
│   └── Report.md
│
├── Day_04_Interpolation_and_Gap_Filling/
│   ├── README.md
│   ├── NDVI_Interpolation_Analysis.ipynb
│   └── outputs/
│
├── Day_05_Temporal_Dependence/
│   ├── README.md
│   ├── Temporal_Dependence_Analysis.ipynb
│   └── outputs/
│
├── Day_06_Change_Detection/
│   ├── README.md
│   ├── NDVI_Change_Detection.ipynb
│   └── outputs/
│
└── Day_07_Uncertainty_in_Temporal_Analysis/
    ├── README.md
    ├── NDVI_Uncertainty_Analysis.ipynb
    └── outputs/
```

---

# Dataset

This module uses a real Sentinel-2 NDVI time series extracted from agricultural fields in **Sylhet, Bangladesh**.

The `data/` directory contains:

- **ndvi_timeseries.csv** — Time series used throughout all practical exercises.
- **extract_ndvi_timeseries.js** — Google Earth Engine script used to generate the dataset, allowing the workflow to be fully reproducible.

Using the same dataset across all modules makes it easier to understand how different processing methods affect the exact same vegetation signal.

---

# Practical Implementation

All practical exercises are implemented using Python in Google Colab.

Main libraries include:

- pandas
- numpy
- matplotlib
- scipy
- statsmodels
- pybaselines
- ruptures

Each notebook is independent and can be executed separately.

---

# Expected Outcomes

By the end of this layer you will have:

- Built a complete preprocessing workflow for satellite vegetation time series.
- Compared multiple smoothing algorithms.
- Investigated interpolation accuracy.
- Explored temporal dependence.
- Detected meaningful vegetation changes.
- Evaluated uncertainty using modern time-series techniques.
- Produced publication-quality figures suitable for research.

---

# Prerequisites

Before starting this layer, it is recommended that you complete:

- Phase 0 - Foundation
- Phase 1 — GEE
- Phase 1.5 - Validation Layer
- Layer A — Observation System

These modules introduce satellite observations, measurement uncertainty, cloud contamination, preprocessing, and the foundations of temporal remote sensing.

---

# License

This repository is intended for educational and research purposes.
