# 📚 Day 3 — Band + Resample

---

## PART 1 — PREPARE DATA

You need:

- One high-resolution raster
- One lower-resolution raster

### Best Option

Use Sentinel-2 bands because they naturally have different resolutions.

---

## Example

| Band | Resolution |
|------|------------|
| B2 (Blue) | 10 m |
| B11 (SWIR) | 20 m |

---

## KEY CONCEPT

Resolution ≠ Image Quality Only

Resolution affects:

- Statistical validity
- Classification accuracy
- Feature detectability
- Edge sharpness
- Mixed pixels
- Model reliability

---

# PART 2 — LOAD INTO QGIS

Load:

- B2_10m.tif
- B11_20m.tif

---

# PART 3 — VISUALIZE DIFFERENCE

---

## STEP 1 — Arrange Layers

- 10 m layer on top
- 20 m layer below

---

## STEP 2 — Inspect Layer Properties

Right click → Properties → Information

---

## Check These Properties

| Property | Why Important |
|----------|--------------|
| Pixel Size | MOST IMPORTANT |
| CRS | Must match |

---

## CORE IDEA

A 20 m pixel may contain:

- Soil
- Crop
- Road
- Water

All combined into one value.

This creates:

> Averaged spectral signal

---

## KEY PROBLEM

Mixed pixels are one of the biggest issues in remote sensing.

---

# PART 4 — CHECK ALIGNMENT

## WHY ALIGNMENT MATTERS

If rasters are misaligned:

- NDVI becomes incorrect
- Pixel math fails
- ML features break
- Change detection becomes invalid

Even 1-pixel shift can ruin analysis.

---

## VISUAL CHECK

Toggle layers ON/OFF and inspect:

- Do roads align?
- Do rivers align?
- Do boundaries shift?

---

# PART 5 — RESAMPLING

Now you intentionally change resolution.

---

## STEP 1 — OPEN WARP TOOL

Raster → Projections → Warp (Reproject)

---

## STEP 2 — SELECT INPUT

- Input layer: B11_20m
- CRS: Keep SAME (EPSG:4326)

---

## IMPORTANT NOTE

You are learning:

- Resampling behavior
- NOT projection science (yet)

---

## STEP 3 — OUTPUT RESOLUTION

Set output resolution:

0.000089831

---

## WHY THIS VALUE?

| Resolution | Degree Equivalent |
|------------|------------------|
| 10 m | ~0.000089831° |
| 20 m | ~0.000179663° |

---

## INTERPRETATION

You are converting:

- 20 m → 10 m equivalent grid

---

## IMPORTANT RULE

Do NOT type “10”

Because CRS is in degrees, not meters.

---

# PART A — NEAREST NEIGHBOUR

## METHOD

Resampling: Nearest Neighbour

---

## HOW IT WORKS

Original:

10   20

New pixel:

- Either 10 or 20
- Copies nearest value

No averaging occurs.

---

## WHY IMPORTANT

Used for classification maps:

| Value | Meaning |
|------|--------|
| 1 | Water |
| 2 | Crop |
| 3 | Urban |

---

## PROBLEM IF AVERAGED

- 1.7 becomes meaningless
- Class labels break

---

# PART B — BILINEAR

## METHOD

Uses surrounding pixels to interpolate values.

---

## RESULT

- Smooth transitions
- Soft edges
- Estimated values

---

## WHY USED

Works well for continuous data:

- NDVI
- Reflectance
- Temperature

Because these change gradually in nature.

---

# PART C — CUBIC

## METHOD

Uses more neighboring pixels with higher-order interpolation.

---

## RESULT

- Very smooth surfaces
- Visually attractive output

---

## DANGER

Can introduce:

- Artificial values
- Overshoot artifacts
- Fake gradients

---

# PART 6 — VISUAL COMPARISON

---

## STEP 1 — DEEP ZOOM

Zoom until:

- Individual pixels become visible

---

## STEP 2 — TOGGLE LAYERS

Switch layers ON/OFF and compare.

---

## ORIGINAL (20 m)

- Coarse grid
- Fewer pixels
- Less detail

---

## NEAREST NEIGHBOUR

- Blocky appearance
- Square pixels
- Jagged edges
- Values preserved

---

## BILINEAR

- Smoother transitions
- Soft edges
- Gradual changes

---

## CUBIC

- Very smooth appearance
- Blurry transitions
- Possible halo effects

---

# FINAL RESEARCH LESSON

> Pretty image ≠ better science

Many beginners prefer cubic interpolation because it looks “clean”, but:

- It may reduce scientific validity

---

## SUMMARY TABLE

| Method | Preserves Values | Smoothness | Risk |
|--------|-----------------|------------|------|
| Nearest Neighbour | Yes | No | Blocky output |
| Bilinear | Partial | Moderate | Slight value distortion |
| Cubic | No | High | Artificial values |
