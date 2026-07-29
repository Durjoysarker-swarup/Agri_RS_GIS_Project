# NDVI Anomaly Detection & Interpretation

This repository documents the study and practical implementation of a workflow for detecting and interpreting anomalies in NDVI (vegetation index) time series for crop monitoring. It covers the conceptual foundations (baselines, anomaly patterns, magnitude/duration/timing, change points, hypothesis testing) as well as a hands-on notebook that applies these ideas to real NDVI data.

## Repository Structure

```
.
├── Notes/
│   ├── README.md
│   ├── 01_Anomaly.md
│   ├── 02_Defining_the_Baseline.md
│   ├── 03_Detecting_NDVI_Anomalies.md
│   ├── 04_Magnitude_Duration_&_Timing.md
│   ├── 05_Change_Point_Detection.md
│   ├── 06_Anomaly_to_Hypothesis.md
│   └── 07_Anomaly_Interpretation_Workflow.md
│
└── Implementation/
    ├── README.md
    ├── Anomaly Detection Workflow.ipynb
    └── data/
        ├── hist_2020.csv
        ├── hist_2021.csv
        ├── hist_2022.csv
        ├── hist_2023.csv
        └── target_2024.csv
```

## Folders

### 📓 [Notes](./Notes/README.md)

Conceptual study notes (sections 01–07) covering:
- What an anomaly is, and how it differs from noise, an outlier, and stress
- Types of baselines and their assumptions
- Patterns anomalies can take (single-date, persistent, gradual, abrupt)
- Magnitude, duration, and timing as descriptors of severity
- Change point detection
- Turning anomalies into testable hypotheses
- The full interpretation workflow, from observation to conclusion

### 💻 [Implementation](./Implementation/README.md)

A Jupyter/Colab notebook (`Anomaly Detection Workflow.ipynb`) that applies the concepts from the Notes to a real NDVI dataset (2020–2024):
- Builds a multi-year climatology baseline
- Computes and classifies NDVI anomalies (Positive / Negative / Near-zero)
- Identifies anomaly patterns and enriches the dataset with Direction, Magnitude, Timing, and grouping columns

## Core Idea

Across both the notes and the implementation, the guiding principle is the same:

**Detection → Description → Interpretation**

An anomaly should never be labeled as "stress" or given a cause without first being described objectively (direction, magnitude, duration, timing) and evaluated against competing hypotheses and evidence.
