# Full Resolution System

## Core Idea
Satellite data quality is defined by resolution. Different types of resolution control what you can see, when you can see it, and how accurately you can measure it.

---

## Key Concepts

### Spatial Resolution (Pixel Size)
Spatial resolution = size of one pixel on the ground.

Example:
- 10m → 10m × 10m = 100 m² per pixel  
- 30m → 30m × 30m = 900 m² per pixel  

Reality:
A single pixel represents the **average of everything inside it**, not a single object.

Example (Bangladesh rice field):
- Field size: ~15m × 20m  
- Landsat 8 (30m): one pixel covers multiple fields + soil + water  

Result: mixed signal → NDVI becomes unreliable

Critical insight:
- Smaller pixel ≠ always better  
- Higher resolution gives detail but increases noise and computation cost  

---

### Temporal Resolution (Time Frequency)
Temporal resolution = how often a satellite revisits the same location.

Example:
- Sentinel-2 → ~5 days  
- Landsat 8 → ~16 days  

Reality in Bangladesh:
Cloud cover reduces usable observations.

Even with 5-day revisit, usable data may drop to 10–20 days.

Agricultural problem:
- Crop stress can appear in 3–7 days  
- If data gap is 16 days → stress is missed  

Solution mindset:
Combine datasets (e.g., Sentinel + MODIS) for better coverage.

---

### Spectral Resolution (Band Intelligence)
Satellite sensors do not capture “color”. They capture energy at different wavelengths called bands.

Example (Sentinel-2 bands):
- Blue  
- Green  
- Red  
- NIR (Near Infrared)  
- Red Edge  

Plant behavior in bands:

- Red band → chlorophyll absorbs light → low reflectance  
- NIR band → leaf structure reflects light → high reflectance  
- Red Edge → transition zone, sensitive to small changes  

---

### NDVI and Early Stress Problem
NDVI compares NIR and Red:

NDVI = (NIR − RED) / (NIR + RED)

Stages:

Stage 1 (Healthy):
- Red very low
- NIR very high
- NDVI high

Stage 2 (Early stress):
- small chlorophyll change
- Red slightly increases
- NIR almost unchanged
- NDVI change is minimal → stress is missed

Stage 3 (Severe stress):
- Red increases
- NIR decreases
- NDVI drops clearly

NDVI detects late stress, not early stress.

---

### Red Edge Importance
Red Edge lies between Red and NIR bands.

Why it matters:
- sensitive to small chlorophyll changes
- detects stress earlier than NDVI

NDRE formula:
NDRE = (NIR − Red Edge) / (NIR + Red Edge)

---

### Radiometric Resolution (Bit Sensitivity)
Radiometric resolution = how finely reflectance differences are measured.

Example:
- 8-bit → 256 levels  
- 16-bit → 65,536 levels  

Higher bit-depth:
- captures subtle crop changes  
- improves stress detection sensitivity  

---

### Sensor Comparison

| Feature   | Sentinel-2 | Landsat 8 |
|----------|------------|------------|
| Spatial  | 10m        | 30m        |
| Temporal | 5 days     | 16 days    |
| Spectral | Many (incl. Red Edge) | Limited |
| Radiometric | 12-bit | 12-bit |

---

## Why it matters
Resolution defines what kind of agricultural signal you can detect. Poor resolution leads to mixed signals, missed stress, and incorrect interpretation.

---

## Common mistakes
- Assuming higher spatial resolution always improves results  
- Ignoring cloud impact on temporal resolution  
- Using NDVI for early stress detection without understanding spectral limits  

---

## Takeaway
Resolution is not just technical detail — it defines the limits of what agriculture signals you can actually trust.
