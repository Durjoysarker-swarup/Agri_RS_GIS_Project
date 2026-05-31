# Phase 0 — Remote Sensing Foundations

This phase is where I try to understand what satellite data actually is — not as images, but as physical measurements of the Earth.

Before building models or doing machine learning, I focus on one thing:

> How does real-world energy become numbers, and how do those numbers represent crops, soil, and water?

---

## What I learned in this phase

### 🟦 Satellite data is not an image
Each pixel is a **measured value**, not a color.

It represents reflected energy from the Earth's surface.

---

### 🔢 DN and scaling matter
Satellite sensors store values as Digital Numbers (DN).

These are scaled versions of real reflectance:

> Real value = DN / 10000 (Sentinel-2)

Without understanding this, any analysis becomes misleading.

---

### 📍 Resolution defines what you can see
There are 4 key limits:

- Spatial → size of ground area per pixel  
- Temporal → how often we observe  
- Spectral → what wavelengths we measure  
- Radiometric → how sensitive measurements are  

These decide what is possible and what is invisible.

---

### 🌫 Atmosphere changes everything
What satellites capture is not clean ground truth.

It includes:
- haze
- scattering
- clouds
- sensor noise

So we often work with **corrected surface reflectance**, not raw signals.

---

### 🌿 NDVI is a simplified biological signal
NDVI compares Red and NIR reflectance to estimate vegetation health.

But it has limits:
- fails in dense vegetation
- affected by soil background
- sensitive to atmosphere

So it is useful, but not perfect.

---

### 🧠 The biggest idea
Remote sensing is not image processing.

It is:
> converting physical energy into interpretable agricultural signals

---

## Why this phase matters

If this foundation is wrong, everything after (GIS, ML, prediction) becomes unreliable.

So this phase is about building trust in the data before building models on top of it.

---

## Next step

Move into:
- GEE processing
- validation layer
- time-series thinking
