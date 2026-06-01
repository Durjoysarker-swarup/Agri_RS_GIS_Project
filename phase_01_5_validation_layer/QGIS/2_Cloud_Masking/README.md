# 📚 Day 2 — Cloud Masking Impact Analysis in NDVI

---

## 1. Experiment Design

This is a **controlled comparison experiment**.

### You compare two raster states:

#### A. Raw NDVI (Cloudy)

- No masking applied
- Contains:
  - Clouds
  - Shadows
  - Atmospheric noise

#### B. Masked NDVI

- Cloud pixels removed
- Cleaner reflectance signal

---

## Core Idea

You are testing:

> How cloud masking changes NDVI interpretation

---

## 2. QGIS Workflow

---

## STEP 1 — Load Both Rasters

You should have:

- NDVI_cloudy.tif
- NDVI_masked.tif

Load both into QGIS.

---

## STEP 2 — Visual Comparison Setup

### Layer Styling Rules

#### Cloudy NDVI

- Color ramp: Red → Yellow → Green
- Stretch: Min-Max or Standard Deviation

#### Masked NDVI

- Use the **exact same color ramp**

---

### Critical Rule

If color ramps differ:

> You are cheating your perception

This leads to false visual conclusions.

---

## 3. Raster Comparison Techniques

---

## METHOD 1 — Difference Raster

Compute:

ΔNDVI = NDVI_masked − NDVI_cloudy

---

### Interpretation

- Positive values:
  - Cloud masking removed low NDVI noise
  - Improved vegetation signal

- Negative values:
  - Cloud masking removed actual vegetation signal
  - ⚠️ Dangerous sign (over-masking or incorrect masking)

---

## METHOD 2 — Histogram Comparison

Compare NDVI distributions:

---

### Cloudy NDVI

- Wider spread
- Noisy spikes
- Unstable distribution

---

### Masked NDVI

- Smoother curve
- More realistic vegetation peak
- Reduced noise influence

---

## KEY INSIGHT

Cloud masking is not just a preprocessing step.

It directly affects:

- Distribution shape
- Vegetation interpretation
- ML feature quality
- Scientific conclusions
