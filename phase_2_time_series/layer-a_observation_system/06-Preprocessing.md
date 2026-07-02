# 1.6 — Preprocessing Pipeline Sensitivity

The NDVI you analyze is not a direct measurement from the satellite. It is the result of a sequence of processing decisions.

```
Satellite → Raw Data → Atmospheric Correction → Cloud Mask → Band Selection →
Resampling → Scaling → Compositing → NDVI → Analysis
```

Every box is a decision. Every decision can change your result.

---

## What is a Preprocessing Pipeline?

The sequence of operations applied before scientific analysis.

For Sentinel-2 it often looks like:

```
Raw Sentinel-2 → Atmospheric Correction → Cloud Masking → Shadow Removal →
Band Resampling → Scaling → Monthly Composite → NDVI → Time-Series Analysis
```

Most of the work happens **before** NDVI is calculated.

---

## Pipeline Differences

### Source 1 — Cloud Mask Choice

- QA60
- SCL (Scene Classification Layer)
- Fmask

Fmask is an independent cloud detection algorithm.

#### Why Different Masks Matter

Imagine one pixel.

**True situation:** Thin cirrus cloud present

- QA60 → keeps it
- SCL → removes it

Now calculate NDVI.

QA60 includes a contaminated pixel. SCL does not. **Different NDVI.**

---

### Source 2 — Compositing Strategy

Suppose you have five images in one month.

| Date | NDVI |
|---|---|
| 1 | 0.73 |
| 6 | 0.71 |
| 11 | 0.42 (thin cloud) |
| 16 | 0.75 |
| 21 | 0.72 |

Now you need one monthly value.

#### Median Composite

Median = 0.72

Advantages:
- Robust to outliers.
- Less affected by a single bad observation.

#### Maximum NDVI Composite

Maximum: 0.75

Why do some researchers choose this?

Because clouds usually reduce NDVI. Taking the maximum often selects the clearest observation.

#### Is Maximum Always Better?

**No.**

Imagine:

| NDVI |
|---|
| 0.72 |
| 0.74 |
| 0.76 |
| 0.91 (sensor artifact) |

Maximum chooses 0.91. That is probably unrealistic.

So maximum composite can accidentally preserve extreme noise.

---

### Source 3 — Spatial Resampling

This is one of the most misunderstood topics. Sentinel-2 bands have different spatial resolutions.

| Resolution | Examples |
|---|---|
| 10 m | Red, Green, Blue, NIR |
| 20 m | Red Edge, SWIR |
| 60 m | Atmospheric bands |

Suppose you want to combine a 10 m band with a 20 m band. They must first have the same resolution. This process is **resampling**.

#### Common Resampling Methods

- Nearest Neighbor
- Bilinear
- Cubic Convolution
