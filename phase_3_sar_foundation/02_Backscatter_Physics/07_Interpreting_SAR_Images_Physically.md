# Day 7: Interpreting SAR Images Physically

SAR brightness = radar backscatter (σ⁰), not a direct label of the target.

> "This pixel is bright" → "This target returned more radar energy toward the sensor." Never jump straight to "bright = vegetation, dark = water."

---

## 1. The Fundamental Chain

**Physical landscape → Physical properties → EM interaction → Scattering mechanism → Energy returned → σ⁰ → SAR brightness**

Interpretation reasons *backward* through this chain — an inverse problem.

### Forward vs. Inverse Problem

- **Forward:** physical state → σ⁰ (easy, well-defined)
- **Inverse:** σ⁰ → possible physical states (hard, non-unique)

**Non-uniqueness:** one σ⁰ value (e.g. −8 dB) could come from wet soil, rough dry soil, vegetation, flooded vegetation, etc. One observation ≠ one explanation.

---

## 2. The 5-Question Interpretation Method

1. What physical objects are present?
2. What are their physical properties (wet/dry, rough/smooth, dense/sparse, structure)?
3. What scattering mechanisms are possible (surface / volume / double bounce)?
4. What radar–target geometry exists?
5. What alternative explanation could produce the same observation? *(key scientific step)*

### Worked Examples

**Smooth water** → specular reflection → energy reflected away → low backscatter → dark.
But water can appear bright due to wind roughness, waves, floating vegetation, geometry, mixed pixels — so *"water ≠ always dark."*

**Bare soil:** σ⁰ = f(moisture, roughness, geometry, wavelength).
Two fields both labeled "bare soil" (e.g. smooth+dry vs. rough+wet) can have very different backscatter — land-cover class ≠ unique backscatter.

**Rice growth stages:**

| Stage | Dominant Mechanism |
|---|---|
| Bare field | Surface scattering dominates (moisture, roughness, geometry) |
| Young/sparse canopy | Mixed surface + vegetation contribution |
| Dense canopy | Volume scattering becomes important; soil/water underneath still contributes |
| Mature rice over water | Double bounce (vertical stems + horizontal water surface) may dominate |
| Flooded vegetation | Water appears beneath canopy → double bounce may increase → σ⁰ may rise (a hypothesis, not a certainty — other factors like structure/moisture/roughness/angle could also explain it) |
| Harvest | Canopy removed → underlying surface (soil + residue) contributes more; if rainfall coincides with harvest, moisture and structural change are confounded — need temporal context to separate causes |

Same vegetation type + different underlying surface (soil vs. water) → different radar response.

---

## 3. Interpretation as Detective Work

Generate competing hypotheses (moisture, roughness, structure, double bounce, geometry) and weigh them against evidence:

- **Rainfall data** → supports moisture hypothesis
- **Optical imagery (NDVI)** → supports vegetation-change hypothesis
- **Field information** → supports harvest/tillage/flooding hypothesis
- **Incidence angle info** → supports geometry hypothesis
- **Time series** → shows whether change was sudden or gradual

**Bayesian mindset (no math needed):** start with several plausible hypotheses, then raise/lower confidence in each as evidence arrives.

---

## 4. Temporal & Spatial Clues (Evidence, Not Proof)

- **Sudden σ⁰ change** → suggests flooding, harvest, tillage, abrupt moisture events
- **Gradual σ⁰ change** → suggests crop development, gradual drying — but could also be moisture or geometry drift
- **Region-wide brightening** → rainfall, widespread flooding, acquisition effects
- **Single-field change** → local management, crop development, local flooding
- **Spatial texture:** smooth-looking vs. textured regions may reflect real heterogeneity, but speckle (a radar imaging artifact, covered in Week 5) can also cause texture — don't assume texture = physical heterogeneity yet

### Hierarchy of Interpretation Strength (Weak → Strong)

1. **Observation:** "Backscatter increased."
2. **Physical possibility:** "Increased moisture could explain it."
3. **Scattering mechanism:** "Moisture altered dielectric properties → changed scattering."
4. **Contextual:** "Increase followed rainfall → moisture is plausible."
5. **Validated:** "Increase followed rainfall, independent soil-moisture data also rose, and crop structure stayed stable."

> **Key principle:** Observation ≠ Explanation.
> **Observation → Hypotheses → Evidence → Interpretation**

---

## 5. Multi-Source Validation

Combine SAR with Sentinel-2 (vegetation), CHIRPS (rainfall), ERA5 (environment), and field observations (irrigation/flooding/harvest) for stronger conclusions. *(Links to Week 7 Day 4.)*

---

## 6. Physical Interpretation Checklist

1. **Target** (soil/water/crop/residue/mixed)
2. **Moisture** (dry/wet/flooded)
3. **Surface condition** (smooth/rough)
4. **Structure** (bare/sparse/dense/vertical/complex)
5. **Scattering mechanism** (surface/volume/double bounce)
6. **Geometry** (incidence angle, orientation)
7. **Temporal context** (before/after)
8. **Competing explanations**
9. **Independent evidence** (NDVI, rainfall, field data, other datasets)

---

## Final Takeaways

- SAR image = spatial map of physical/EM measurements, not a photo.
- SAR brightness is a consequence of physical interaction, not a direct label of the target.
- Observation ≠ Explanation; always move:

  **Observation → Physical possibilities → Scattering mechanisms → Competing hypotheses → Independent evidence → Interpretation**
