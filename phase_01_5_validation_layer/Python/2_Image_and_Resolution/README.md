# 🧪 MODULE 2 — Sampling and Resolution

## PART 1 — CORE MENTAL MODEL

A raster is **NOT** an image.

A raster is:

- `f(x, y)`
- A spatial measurement grid
- Each pixel contains:
  - Reflectance
  - Temperature
  - NDVI
  - Elevation
  - Moisture
  - Other measurements

The image you see in QGIS is only a visualization.

The actual raster is numbers.

### Example

| Pixel | NDVI |
|---------|---------|
| (0,0) | 0.71 |
| (0,1) | 0.65 |
| (0,2) | 0.11 |

Python sees this as an array:

- Row 1: 0.71, 0.65, 0.11
- Row 2: 0.74, 0.69, 0.08

**NOT a photo.**

---

## PART 2 — UNDERSTANDING SHAPE

Suppose:

`arr.shape`

Returns:

`(10980, 10980)`

Meaning:

- 10980 rows
- 10980 columns

### Multi-Band Raster

Shape:

`(4, 10980, 10980)`

Meaning:

- 4 bands
- Each band = 10980 × 10980 pixels

---

## PART 3 — PIXEL SIZE

Suppose Sentinel-2 has:

**10 m resolution**

One pixel represents:

`10 m × 10 m = 100 m²`

It represents:

- Average reflectance over that ground area

---

## PART 4 — RESOLUTION CHANGES EVERYTHING

### Original

**10 m pixels**

Field edges are accurately captured.

### After Resampling to 30 m

One pixel now covers:

`30 m × 30 m`

Meaning:

- 9 original pixels are merged into 1

### Consequences

- Information loss occurs
- This is not just blur
- This is:
  - Statistical aggregation
  - Spatial information destruction

---

## PART 5 — RESAMPLING TYPES

1. Nearest Neighbor
2. Bilinear
3. Cubic

---

## PART 6 — WHY RESAMPLING IS DANGEROUS

### Example

| Pixel | NDVI |
|---------|---------|
| A | 0.8 |
| B | 0.1 |

Average:

`0.45`

However:

- 0.45 never physically existed
- Resampling creates synthetic values

### Why This Matters

Many machine learning pipelines silently destroy spatial truth during resampling.

---

## PART 7 — YOUR FIRST PYTHON TASK

### Step 1

Load raster.

### Step 2

Visualize array.

### Step 3

Check resolution.

---

## PART 8 — MANUAL DOWNSAMPLING

### Method 1 — Array Slicing

Example:

`small = ndvi[::2, ::2]`

This is NumPy slicing.

### General Slicing Syntax

`[start : stop : step]`

### Meaning of `::2`

- Start from the beginning
- Go to the end
- Take every second element

### Example Raster

| Original | Result After Downsampling |
|-----------|-----------|
| 1 2 3 4 | 1 3 |
| 5 6 7 8 | |
| 9 10 11 12 | 9 11 |
| 13 14 15 16 | |

### Meaning

- Every second row selected
- Every second column selected
- Most pixels discarded

---

### What Scientifically Happened?

#### Original Raster

- 16 measurements

#### After Downsampling

- Only 4 measurements remain

This process is called:

**Spatial Downsampling**

### Effects

- Reduced spatial sampling density
- Reduced detail
- Information loss
- 75% of pixels removed

---

### Texture Loss

Texture means:

- Local spatial variability
- Roughness
- Heterogeneity

### Examples

- Crop rows
- Urban patterns
- Mixed vegetation

### Why Texture Is Lost

- Fewer measurements remain

### Important For

- Machine Learning
- Crop Classification
- CNNs
- Disease Detection

---

### Aliasing

Suppose the pattern is:

`1 0 1 0 1 0`

Sampling every second pixel may produce:

`1 1 1`

The original pattern becomes distorted.

This is called:

**Aliasing**

### Important In

- Signal Processing
- Remote Sensing
- Computer Vision

---

### Compare Shapes

Compare:

- Original raster shape
- Downsampled raster shape

Observe:

- Fewer pixels
- Less spatial detail

---

### Visual Comparison

You should notice:

- Field edges become coarse
- Small objects disappear
- Textures vanish

---

### Scientific Insight

High resolution does **NOT** automatically mean:

- More accuracy
- Better machine learning
- Better science

Sometimes:

- Noise increases
- Computation explodes
- Overfitting increases

### Example

A crop field study may need 10 m resolution.

A district-scale model may perform better at 100 m resolution.

### Core Principle

Resolution must match the scale of the phenomenon.

This is a fundamental remote sensing principle.

---

## METHOD 2 — TRUE RESAMPLING USING SCIPY

Reduce raster size to 50%.

### Meaning

- Creates a lower-resolution raster
- Uses interpolation instead of simple pixel skipping

---

## PART 9 — WHY DOWNSAMPLING IS USED

### 9.1 Reduce Computation

Large rasters require:

- Large RAM
- Long processing times

| Raster Size | Pixels |
|------------|---------|
| 1000 × 1000 | 1 million |
| 10000 × 10000 | 100 million |

Downsampling reduces:

- Memory usage
- Computation cost

---

### 9.2 Match Multi-Resolution Sensors

Sentinel-2 bands have different resolutions.

| Band | Resolution |
|--------|--------|
| Red | 10 m |
| NIR | 10 m |
| SWIR | 20 m |

To combine bands:

- Rasters must align
- One raster must often be resampled

---

### 9.3 Match Phenomenon Scale

Different phenomena exist at different scales.

| Phenomenon | Useful Resolution |
|------------|------------|
| Climate patterns | 1 km |
| Crop fields | 10 m |
| Individual trees | 1 m |
| Leaves | Centimeters |

Higher resolution is not always scientifically better.

---

### 9.4 Improve ML Robustness

Very high resolution may:

- Capture noise
- Overfit texture
- Reduce generalization

Lower resolution can sometimes improve machine learning performance.

---

## PART 10 — UPSAMPLING

Upsampling creates:

- Fake pixels
- Interpolated values

### Critical Fact

No new information is created.

### Important Principle

**Upsampling ≠ Increasing Detail**

It only:

- Estimates values
- Guesses missing pixels

---

## PART 11 — UPSAMPLING VS DOWNSAMPLING

### Downsampling (10 m → 20 m)

Effects:

- Removes information
- Reduces detail
- Compresses observations

Example:

A, B, C, D

may become:

`mean(A, B, C, D)`

---

### Upsampling (20 m → 10 m)

Effects:

- Adds artificial pixels
- Interpolates values
- Does not create new information

Example:

Original value:

`0.62`

May become:

- 0.61 0.62
- 0.63 0.62

Looks more detailed, but all values originate from one measurement.

---

## PART 12 — THE MOST IMPORTANT LESSON

If:

**Original Resolution = 30 m**

You cannot create true 10 m information later.

### Impossible

The detail never existed.

### Why This Matters

- Sensor design matters
- Spatial scale matters
- GSD (Ground Sampling Distance) matters
