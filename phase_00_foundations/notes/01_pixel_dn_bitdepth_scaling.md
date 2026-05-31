# Pixel, DN, Bit-Depth & Scaling

## Core Idea
Satellite data is not an image. It is a structured numerical measurement of reflected energy from Earth's surface. Every processing step (DN → reflectance → scaling) is required to make it scientifically meaningful.

---

## Key Concepts

### Full Data Chain
Sunlight → Surface Reflection → Radiance → DN → Reflectance → Scaled Reflectance (×10000) → File Storage

---

### Pixel
A satellite image is a grid of pixels, not a visual photograph.

Each pixel:
- is a number, not a color
- represents reflected energy from the Earth's surface
- stores measured signal, not visual information

---

### Reflectance
Reflectance describes how much incoming sunlight is reflected back from a surface.

---

### Digital Number (DN)
DN is the raw value recorded by the satellite sensor.

Characteristics:
- stored as integer values
- not physically meaningful in raw form
- requires scaling for interpretation

Example (Sentinel-2):

| Surface Type | DN Value |
|--------------|----------|
| Crop Field   | 8123     |
| Water        | 102      |
| Soil         | 3450     |

These values cannot be interpreted directly.

---

### Bit-Depth
Bit-depth defines how many values a pixel can represent.

| Bit Depth | Range         |
|----------|---------------|
| 8-bit    | 0–255         |
| 12-bit   | 0–4095        |
| 16-bit   | 0–65535       |

Sentinel-2 typically uses higher bit-depth encoding.

Higher bit-depth allows detection of small variations in crop condition.

---

### Scaling
Sentinel-2 stores reflectance as:

> Reflectance × 10000

Reasons:
- faster integer computation
- reduced floating-point errors
- efficient data storage

---

### Sentinel-2 Example

| Band | Scaled Value | Real Reflectance |
|------|--------------|------------------|
| Red  | 6500         | 0.65             |
| NIR  | 8200         | 0.82             |

After scaling:
- Red = 0.65
- NIR = 0.82

These values can now be used for NDVI computation.

---

## Why it matters
Without understanding DN and scaling, satellite-derived indices like NDVI become physically incorrect. This leads to invalid interpretation in agricultural analysis and machine learning models.

---

## Common mistakes
- Treating DN as real reflectance
- Using unscaled values for NDVI
- Assuming satellite images are visual data instead of measurements

---

## Takeaway
Satellite data is a chain of transformations from physical energy to numerical representation. Each step is necessary to make agricultural analysis scientifically valid.
