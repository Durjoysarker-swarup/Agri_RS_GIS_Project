# Observation vs Reality

Suppose your rice field is perfectly healthy.

**Reality:**
Healthy rice, High biomass, Good water status, No disease

The satellite never sees any of these. Instead it sees **photons**.

```
Sun → Solar Radiation → Atmosphere → Crop Canopy → Reflected Light →
Atmosphere → Satellite Sensor → Digital Numbers (DN) → Surface Reflectance → NDVI
```

---

## Journey from Sun to NDVI (Step-by-Step)

```
Sun → Solar Radiation → Atmosphere → Crop Canopy → Reflected Light →
Atmosphere → Satellite Sensor → Digital Numbers (DN) → Surface Reflectance → NDVI
```

### 1. Sun
- Source of electromagnetic radiation (UV, Visible, NIR, SWIR).
- Passive optical remote sensing depends on sunlight.

### 2. Atmosphere
- Alters sunlight before it reaches the crop.
- Main effects:
  - Scattering (e.g., blue light scatters more)
  - Absorption (by water vapor, ozone, CO₂)

The atmosphere **before** the plant matters because it determines how much and what kind of light reaches the plant.

The atmosphere **after** the plant matters because it changes how much of the reflected light reaches the satellite.

Both influence what the sensor measures, but in different ways:
- **Before the plant:** Changes the illumination of the target.
- **After the plant:** Changes the signal traveling to the sensor.

### 3. Crop Canopy
- Absorbs, reflects, and transmits incoming light.
- **Red:** Mostly absorbed by chlorophyll.
- **NIR:** Strongly reflected by leaf structure.
- **Important:** Crops reflect light — they do not produce NDVI.

### 4. Return Through Atmosphere
- Reflected light passes through the atmosphere again.
- Clouds, dust, aerosols, and humidity further modify the signal.

### 5. Satellite Sensor
- Measures incoming photons (light energy), not vegetation directly.
- Measurements are affected by sensor noise and calibration limits.

### 6. Digital Numbers (DN)
- Sensor converts measured energy into Digital Numbers (DN).
- DNs are encoded measurements, not reflectance.

### 7. Surface Reflectance
- DN → Reflectance through:
  - Calibration
  - Scaling
  - Atmospheric correction
- This represents the crop's estimated surface reflectance.

### 8. NDVI
- Calculated after obtaining surface reflectance.
- Uses the contrast between high NIR reflection and low Red reflection.

---

## Core Takeaway

> A satellite never measures vegetation directly. It measures reflected sunlight. NDVI is a derived product computed from processed reflectance — not something the satellite observes directly.

Because of these factors:

> **Observed NDVI ≠ True NDVI**

---

## Four Major Sources of Difference

### 1. Atmosphere
Aerosols, Water vapor, Dust, Haze

**Result:** Signal distortion.

### 2. Clouds
Clouds, Shadow, Thin cirrus, Cloud edges, Residual masking errors

These often create false vegetation changes.

### 3. Sensor Geometry

Imagine photographing a tree.
- From directly above → looks different
- From the side → looks different

The tree did not change. **The viewing angle changed.**

Satellites experience the same effect. The measured reflectance depends on:
- Sun angle
- Sensor viewing angle
- Surface orientation

This is called the **Bidirectional Reflectance Distribution Function (BRDF)** effect.

### 4. Processing Decisions

This is often ignored.

Suppose two researchers use identical Sentinel-2 images.

| Researcher | Cloud Mask |
|---|---|
| Researcher A | QA60 |
| Researcher B | SCL |

They may obtain different NDVI values.

- **Not** because reality changed.
- **Because** processing changed.

Similarly:
- Median composite vs Maximum NDVI composite
- Bilinear vs Nearest Neighbor resampling
- Different atmospheric correction methods

All change the final signal.
