# Full Signal Chain

## Core Idea

Satellite data is not a single image — it is a step-by-step transformation from physical energy to agricultural information.

---

## Key Concepts

- **Sun → Energy Source**
  - Sun emits electromagnetic radiation
  - This is only raw energy, not data yet

- **Atmosphere → Distortion Layer**
  - Clouds, dust, and water vapor interfere with the signal
  - Light gets scattered and absorbed → noisy signal

- **Crop → Selective Reflection**
  - Chlorophyll absorbs Red light
  - Leaves reflect NIR light
  - Healthy crops show strong NIR reflection

- **Sensor → Digital Capture**
  - Satellite records reflected energy
  - Converts it into Digital Numbers (DN)

- **Scaling → Reflectance (SR)**
  - DN is converted into reflectance values
  - Example: 7500 → 0.75

- **NDVI → Biological Signal**
  - NDVI = (NIR − Red) / (NIR + Red)
  - High NDVI → healthy vegetation
  - Low NDVI → stress or bare soil

- **Field Extraction → Real World Link**
  - NDVI is calculated inside field boundaries
  - Output becomes field-level statistics

- **Time Dimension → Dynamic Agriculture**
  - NDVI is tracked over time (days/weeks)
  - Produces growth and stress patterns

---

## Why it matters

Agriculture is not a single image problem.

It is a **time-based biological system**  
Remote sensing becomes meaningful only when converted into field + time analysis

---

## Common mistakes

- Treating satellite images as static pictures  
- Ignoring atmospheric distortion  
- Analyzing pixel values without field context  
- Using single-date NDVI as “crop health”  

---

## Takeaway

Remote sensing is a transformation pipeline:  
from Sun energy → to field-level time-series intelligence.
