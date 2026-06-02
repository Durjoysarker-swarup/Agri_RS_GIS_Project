# Project 2 — NDVI Scale Sensitivity in Rice Fields

## Overview

This project examines how spatial resolution and field geometry affect the reliability of NDVI in smallholder rice farming systems.

The focus is on understanding how **scale mismatch between satellite pixels and real agricultural fields** influences NDVI measurements.

---

## Research Question

How does NDVI reliability change with field size, field shape, and spatial resolution?

---

## Core Idea

NDVI is not only influenced by vegetation conditions, but also by spatial structure.

Small fields, irregular shapes, and coarse resolution can introduce bias due to:
- edge effects
- pixel mixing
- scale mismatch

This project quantifies these effects.

---

## Method Summary

The analysis focuses on field-level spatial behavior of NDVI:

- Digitized rice field polygons
- Field geometry analysis (area, perimeter, shape index)
- Edge vs core pixel separation
- NDVI extraction at field level
- Spatial resolution comparison (10m, 20m, 30m simulation)
- Scale-based NDVI stability analysis

---

## Key Analysis

- NDVI variation across field sizes
- Edge contamination effect on NDVI
- Comparison of NDVI across spatial resolutions
- Relationship between field geometry and NDVI bias
- Identification of minimum reliable field size

---

## Main Outputs

- Field geometry dataset
- Edge ratio metrics
- NDVI at multiple spatial scales
- Scale sensitivity plots
- NDVI bias vs field size analysis
- Reliability threshold estimation

---

## Key Insight

NDVI reliability decreases in small and irregular fields due to edge effects and spatial resolution limitations. Measurement stability improves as field size increases relative to pixel size.

---

## Tools Used

- Google Earth Engine / Python GIS tools
- Sentinel-2 satellite data
- NDVI computation
- Raster and vector spatial analysis
- Data visualization tools

---

## Status

Planed

---
