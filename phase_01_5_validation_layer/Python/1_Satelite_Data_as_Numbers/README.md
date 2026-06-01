# 🧪 MODULE 1 — Satellite Data as Numbers

A satellite image is **NOT** an image.

It is:

- A matrix of numbers
- Each number = reflected energy from the Earth's surface
- Each band = a different wavelength measurement

So mentally convert this:

- "image" ❌
- "multidimensional numerical dataset" ✅

---

## 1. Understand GeoTIFF Structure

Load a GeoTIFF in Python and inspect its shape.

**Shape Format**

```text
(Bands, Height, Width)
```

**Example**

```text
(4, 10980, 10980)
```

Where:

- Bands = number of spectral bands
- Height = number of pixel rows
- Width = number of pixel columns

---

## 2. Reflectance Scaling Problem

Google Earth Engine often stores Sentinel-2 reflectance values as:

```text
0 → 10000
```

But actual reflectance should be:

```text
0 → 1
```

### Conversion

**Formula**

```text
scaled_value = raw_value / 10000
```

### If You Skip This Step

- NDVI becomes inflated or incorrect
- Comparison with GEE fails
- Machine learning features become meaningless

---

## 3. Compute NDVI Manually

### NDVI Formula

```text
NDVI = (NIR - Red) / (NIR + Red)
```

However, this formula alone can produce incorrect results in real-world datasets.

### Real-World Issues

#### Problem: Division by Zero and Invalid Pixels

For each pixel:

- If `NIR + Red = 0` → NDVI = NaN (invalid pixel)
- Otherwise → compute NDVI normally

### Why This Is Needed

- Prevents division-by-zero errors (`0/0`)
- Keeps the dataset scientifically valid
- Marks missing or invalid pixels correctly

---

## 4. Compare with GEE NDVI

### 1. Range Check

Expected NDVI range:

```text
-1 to +1
```

Verify that both Python and GEE outputs fall within this range.

### 2. Distribution Similarity (Histogram Check)

Compare NDVI distributions from:

- Python
- Google Earth Engine

Plot both histograms and check whether the distributions are similar.

### 3. Spatial Pattern Check

#### Step 1

Visualize NDVI generated from Python.

#### Step 2

Visualize NDVI generated from GEE.

#### Step 3

Compare the spatial patterns.

### What to Compare

- Do forests appear in the same locations?
- Do rivers appear dark in both outputs?
- Are spatial patterns aligned?
- Are major landscape features consistent between both maps?
