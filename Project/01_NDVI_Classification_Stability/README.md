# Project 1 — NDVI Classification Stability

## Overview

This project investigates how different NDVI preprocessing pipelines affect agricultural risk classification at the field scale.

The focus is not on improving NDVI itself, but on understanding how **processing decisions change final classification outcomes** in real-world remote sensing workflows.

---

## Research Question

How much do common NDVI preprocessing choices (especially cloud masking strategies) change field-level agricultural risk classification?

---

## Core Idea

The same satellite data can produce different agricultural decisions depending on how it is processed.

This project tests the **stability of classification outputs under different realistic preprocessing pipelines**.

---

## Method Summary

Three NDVI processing pipelines are compared:

- Standard cloud masking + median composite
- Strict cloud masking with cleaner observations
- Weak cloud masking (real-world noisy scenario)

Each pipeline generates NDVI maps, which are then converted into simple risk categories using threshold-based classification.

---

## Key Analysis

- Field-level NDVI extraction
- Risk classification per pipeline
- Comparison of classification outputs
- Flip rate analysis (how many fields change class)
- Agreement analysis between pipelines

---

## Main Outputs

- NDVI maps (Pipeline A, B, C)
- Field classification maps
- Flip rate statistics
- Agreement matrices
- Visualization of classification differences

---

## Key Insight

Agricultural risk classification is highly sensitive to preprocessing choices, especially cloud masking quality. Small differences in preprocessing can lead to different field-level decisions.

---

## Tools Used

- Google Earth Engine / Python GIS workflow
- Sentinel-2 Surface Reflectance data
- NDVI computation
- Raster and vector analysis
- Data visualization tools

---

## Status

In Progress

---
