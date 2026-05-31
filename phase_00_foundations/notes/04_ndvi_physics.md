# Reflectance → NDVI

## Core Idea
NDVI is not a simple “greenness index”. It is a physical contrast between how vegetation absorbs red light and how it reflects near-infrared light. Its behavior depends on plant structure, soil, atmosphere, and time.

---

## Key Concepts

### 1. Core Physical Meaning (What NDVI measures)

NDVI represents the contrast between two key spectral responses:

- Red band (~660 nm) → chlorophyll absorption  
- NIR band (~700–1300 nm) → internal leaf scattering  

### NDVI Equation
NDVI = (NIR − RED) / (NIR + RED)

---

### Why NIR reflects strongly

Healthy leaves contain:
- spongy mesophyll structure
- air gaps between cells
- internal water-filled structure

When NIR photons enter a leaf:
- they are not absorbed by chlorophyll
- they scatter inside leaf tissue
- they are reflected back out

Result: high NIR reflectance (~40–60%)

Key insight:
- NIR is not “color”
- It represents **leaf internal structure and water status**

---

### Structural stress sensitivity

Before visible chlorophyll loss:
- water loss begins
- cell structure weakens
- air spaces reduce

NIR reflectance decreases early

So:
- NIR responds earlier to structural stress
- Red responds later to pigment change

---

### 2. Physical NDVI Range

| Surface Type       | NDVI Range | Meaning |
|--------------------|------------|---------|
| Water              | < 0        | strong NIR absorption |
| Snow / cloud       | ~0         | neutral reflectance |
| Bare rock          | ~0         | no vegetation signal |
| Bare soil          | 0.1 – 0.2  | background reflectance |
| Sparse vegetation   | 0.2 – 0.5  | early growth |
| Dense vegetation    | 0.6 – 0.9  | high canopy activity |

Key implication:
- NDVI = 0.15 is ambiguous
  - could be soil
  - could be water
  - could be early crop stage

---

### 3. NDVI is nonlinear

NDVI response is not linear:
- fast increase at low vegetation
- slow change at medium density
- saturation at high density

---

### 4. NDVI Saturation

At dense canopy:
- Red becomes minimal
- NIR remains high and stable

NDVI flattens (~0.75–0.9)

Result:
- cannot distinguish healthy vs mildly stressed crops

---

### 5. Soil Background Effect

At early growth stages:
- pixel contains mixture of soil + vegetation

So:
- Red and NIR are strongly influenced by soil

NDVI becomes unstable until vegetation dominates (~30–40% cover)

---

### 6. Mixed Pixel Problem

Example (Bangladesh rice field):
- 60% rice
- 25% bund (soil path)
- 15% water

Pixel NDVI = weighted mixture of all components

Key implication:
- NDVI is not pure crop measurement
- It is a **landscape mixture signal**

Temporal effect:
- NDVI may increase due to water reduction, not crop growth

---

### 7. Why NDVI still works for early stress detection

At low vegetation:
- small chlorophyll changes affect red strongly
- NIR structural response also contributes

This creates sensitivity at early stages

But:
- signal is still indirect and noisy

---

### 8. Alternative Indices

#### (A) EVI — Enhanced Vegetation Index
- reduces atmospheric effects
- reduces soil influence
- reduces saturation issues

---

#### (B) SAVI — Soil Adjusted Vegetation Index
- explicitly corrects soil background effect

---

#### (C) LSWI — Land Surface Water Index
- uses NIR + SWIR
- directly sensitive to vegetation water content

important for monsoon rice systems

---

#### (D) Red-edge indices (Sentinel-2 advantage)
- uses 705–740 nm region
- highly sensitive to early chlorophyll changes

Key insight:
- NDVI = general index
- Red-edge + LSWI = precision indicators

---

### 9. Temporal NDVI (Phenology)

NDVI becomes meaningful as a time-series:

Rice growth stages:
- Transplanting → ~0.2
- Tillering → rising phase
- Flowering → peak (~0.7–0.85)
- Ripening → decline
- Harvest → sharp drop

Key insight:
- crop health is defined by NDVI curve shape, not single values

Stress signatures:
- lower peak
- delayed growth
- early decline

---

### 10. Final Synthesis

NDVI is controlled by:
- leaf internal structure (NIR physics)
- chlorophyll absorption (red physics)
- soil mixing effects
- atmospheric distortion
- geometry effects
- temporal evolution

---

## Why it matters
NDVI is widely used in agriculture, but misunderstanding its physics leads to incorrect conclusions about crop health and stress.

---

## Common mistakes
- treating NDVI as direct “greenness”
- interpreting single NDVI values without context
- ignoring soil and mixed pixel effects
- ignoring saturation in dense vegetation

---

## Takeaway
NDVI is not a direct measure of vegetation. It is a complex signal shaped by plant structure, soil background, and time. Its true value comes from temporal interpretation, not single observations.
