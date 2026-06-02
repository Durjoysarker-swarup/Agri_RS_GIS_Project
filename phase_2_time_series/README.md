# Phase 2 — Temporal Signal Science (NDVI Time-Series Analysis)

## Overview

This phase focuses on understanding how vegetation signals change over time using satellite NDVI time-series data. The goal is to study vegetation dynamics, noise patterns, and smoothing effects in real agricultural systems, especially rice-based environments.

The emphasis is on learning how time-series satellite data behaves, and why interpretation is not straightforward.

---

## Goal

To understand how temporal NDVI signals represent vegetation growth, noise, and uncertainty, and how different processing choices affect interpretation of crop dynamics.

---

## Core Concepts

### Temporal Nature of Satellite Data
- Satellite observations are not continuous
- Revisit gaps create missing information
- Cloud cover (especially monsoon conditions in Bangladesh) creates strong data gaps

---

### Noise in Time-Series Data
- Atmospheric effects
- Cloud contamination
- Sensor variability
- Missing observations

---

### Smoothing and Its Risks
- Moving average smoothing
- Savitzky–Golay filtering
- Window size effects

Key idea:
Smoothing reduces noise but may also distort real vegetation signals.

---

### Phenology and Crop Dynamics
- Crop growth stages reflected in NDVI curves
- Seasonal vegetation patterns
- Rice growth cycle behavior

---

### Anomaly Detection
- Sudden NDVI drops or spikes
- Stress signals vs noise artifacts
- Importance of persistence check

---

## Method Summary

This phase includes:

- NDVI time-series extraction
- Raw vs smoothed signal comparison
- Outlier detection in temporal data
- Phenology feature extraction
- Stress/anomaly identification
- Feature engineering for machine learning

---

## Key Analysis Tasks

- Construct NDVI temporal curves for fields
- Compare raw vs smoothed time-series behavior
- Detect anomalies and classify their causes
- Extract phenology metrics (growth timing, peak, duration)
- Build ML-ready temporal feature dataset

---

## Validation Thinking

Each result must be questioned:

- Is the anomaly persistent or temporary?
- Could it be caused by clouds or missing data?
- Does smoothing create artificial patterns?
- Does the signal represent biology or processing artifacts?

---

## Outputs

- Raw NDVI time-series plots
- Smoothed NDVI curves (multiple methods)
- Phenology feature dataset
- Stress / anomaly detection results
- ML-ready feature table

---

## Tools Used

- Google Earth Engine / Python
- Sentinel-2 time-series data
- NDVI computation
- Time-series filtering techniques
- Data visualization libraries

---

## Status

In Progress

---
