# 02_Backscatter_Physics

**Phase 3 — SAR Foundation | Week 2**

This folder covers the physical foundations of radar backscatter — how microwave energy interacts with agricultural targets (soil, water, vegetation) and how that interaction translates into the SAR signal (σ⁰). The week moves from basic scattering physics to applied interpretation of agricultural SAR imagery, particularly for rice monitoring.

---

## 📅 Weekly Structure

| Day | File | Topic |
|---|---|---|
| 1 | [01_Backscatter_Fundamentals.md](./01_Backscatter_Fundamentals.md) | Backscatter Fundamentals |
| 2 | [02_Surface_Scattering.md](./02_Surface_Scattering.md) | Surface Scattering |
| 3 | [03_Volume_Scattering.md](./03_Volume_Scattering.md) | Volume Scattering |
| 4 | [04_Double-Bounce_Scattering.md](./04_Double-Bounce_Scattering.md) | Double-Bounce Scattering |
| 5 | [05_Factors_Affecting_Backscatter.md](./05_Factors_Affecting_Backscatter.md) | Factors Affecting Backscatter |
| 6 | [06_Agricultural_SAR_Examples.md](./06_Agricultural_SAR_Examples.md) | Agricultural SAR Examples |
| 7 | [07_Interpreting_SAR_Images_Physically.md](./07_Interpreting_SAR_Images_Physically.md) | Interpreting SAR Images Physically |

---

## 🧭 Learning Path

### Day 1 — Backscatter Fundamentals
What backscatter is, what determines it (roughness, dielectric properties, structure, geometry, wavelength, polarization, incidence angle), the concept of radar cross section (σ) and sigma naught (σ⁰), the radar equation, and the three-level hierarchy of measurement → physical interpretation → agricultural explanation.

### Day 2 — Surface Scattering
Specular reflection vs. diffuse scattering, the law of reflection, roughness as a wavelength-relative concept (RMS height, correlation length), why "rough = bright" is not universal, and the geometric vs. dielectric controls on surface response (tillage, rainfall, flooded soil).

### Day 3 — Volume Scattering
How microwaves interact with 3-D vegetation structure (leaves, stems, branches), the distinction between volume scattering and multiple scattering, attenuation and canopy masking, why SAR doesn't directly measure biomass, and how SAR and NDVI observe fundamentally different physical properties.

### Day 4 — Double-Bounce Scattering
The dihedral (vertical + horizontal) scattering geometry, how flooded vegetation produces double bounce, comparison of bare soil / open water / flooded rice, and how all three mechanisms (surface, volume, double bounce) can occur simultaneously in one field.

### Day 5 — Factors Affecting Backscatter
The four controlling factors — moisture, roughness, structure, geometry — examined individually and in combination, plus the role of wavelength, to build the conceptual model σ⁰ = f(moisture, roughness, structure, geometry).

### Day 6 — Agricultural SAR Examples
Applied walkthrough across rice growth stages, bare soil, flooded fields, and harvested fields — connecting the scattering mechanisms from Days 1–5 to realistic field scenarios and time-series behavior.

### Day 7 — Interpreting SAR Images Physically
Synthesis day: treating SAR interpretation as an inverse problem, the 5-question interpretation method, interpretation as detective work (competing hypotheses + evidence), the strength hierarchy from observation to validated interpretation, multi-source validation, and a full physical interpretation checklist.

---

## 🔑 Core Principles Running Through the Week

- **σ⁰ is a physical measurement, not a label** — brightness reflects energy returned to the sensor, not a direct identity of the target (e.g., "bright ≠ vegetation," "dark ≠ water").
- **Interpretation is an inverse problem** — one σ⁰ value can arise from multiple different physical states; non-uniqueness must always be considered.
- **Three scattering mechanisms** — surface, volume, and double bounce — often act together, especially in rice systems.
- **σ⁰ depends on four interacting factors** — moisture, roughness, structure, and geometry — not on any single property alone.
- **SAR ≠ a biomass or moisture meter** — it must be interpreted through hypotheses, context, and independent evidence (NDVI, rainfall, field data), not read as a direct retrieval.
- **Observation ≠ Explanation** — every interpretation should move through: Observation → Hypotheses → Evidence → Interpretation.

---

## 🔗 Related Links

- Speckle (radar imaging artifact) → covered in Week 5
- Multi-source validation with Sentinel-2 / CHIRPS / ERA5 → linked next phase
