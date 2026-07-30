# 5.1 — Pure Pixel Problem & Spatial Representativeness

## 1. Pure vs Mixed Pixels

**Pure Pixel**
- Contains one dominant land-cover type.
- Reflectance closely represents the target crop.
- Rare in fragmented agricultural landscapes.

**Mixed Pixel**
- Contains multiple land-cover types (e.g., crop, soil, water, road).
- Observed reflectance is a weighted mixture of all surfaces.
- Represents the mixture accurately, not the crop alone.

**Key idea:** Mixed pixels are a property of the landscape, not a sensor error.

## 2. Field Boundary Effects

Pixels intersecting field edges often include neighboring land covers.

**Consequences:**
- Contaminated NDVI values
- Artificial spatial variability
- Reduced reliability of field-level statistics

Boundary pixels are generally less representative than interior pixels.

## 3. Spatial Representativeness

**Definition**

The degree to which a measurement represents the spatial area it is intended to describe.

A pixel may accurately represent its own location while failing to represent the entire field because of:
- Field heterogeneity
- Localized stress
- Flooded patches
- Sampling location

**Important distinction:**

Accurate measurement ≠ Representative measurement.

## 4. ROI (Region of Interest) Selection

ROI definition directly influences extracted statistics.

**Different ROI choices:**
- Entire field
- Field center
- Boundary-inclusive
- Buffered core

Different ROIs can produce different NDVI values from the same field.

## 6. Buffered ROI

A negative buffer removes edge pixels before analysis.

**Advantages:**
- Reduces mixed-pixel contamination
- Improves spatial representativeness
- Produces more stable statistics

**Trade-off:**
- Smaller sample size
- Higher confidence
