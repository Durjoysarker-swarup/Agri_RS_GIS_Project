# 3.5 — Measurement Limitations: NDVI, Saturation & Alternative Vegetation Indices

> "When does NDVI stop representing vegetation accurately, and why?"

## Part 1 — What NDVI Measures

NDVI measures the contrast between red absorption and NIR reflection. It is an indirect indicator of vegetation.

NDVI does **not** directly measure:
- Biomass
- LAI
- Chlorophyll
- Yield

These variables influence NDVI by changing leaf reflectance.

---

## Part 2 — Why NDVI Saturates

As canopy density increases, NDVI's response weakens.

**Key idea:**
> NDVI loses sensitivity in dense vegetation, even though the crop continues growing.

---

## Part 3 — LAI vs NDVI

```
Low LAI  → NDVI increases rapidly
High LAI → NDVI changes very little
```

**Important:**
- LAI can continue increasing.
- Biomass can continue increasing.
- NDVI may remain almost unchanged.

Therefore:
> High NDVI ≠ Maximum biomass

### Rice Example

| Stage | LAI | NDVI |
|---|---|---|
| Early growth | 0.5 | 0.25 |
| Tillering | 2 | 0.55 |
| Stem elongation | 4 | 0.75 |
| Heading | 6 | 0.83 |
| Grain filling | 7 | 0.84 |

**Observation:** LAI increases from 6 → 7. NDVI changes only 0.83 → 0.84.

This is **NDVI saturation**.

---

## Part 4 — Why Saturation Is a Problem

Imagine two fields.

- **Field A:** LAI = 5, NDVI = 0.84
- **Field B:** LAI = 8, NDVI = 0.85

If you only observe NDVI, the fields appear almost identical. But biologically, Field B has much more vegetation. NDVI cannot distinguish them well.

This is a **loss of sensitivity**, not a measurement error. The sensor is working correctly — the index has simply reached its useful limit.

---

## Part 5 — Why Was EVI Developed?

Scientists recognized this limitation. They wanted an index that remained more responsive in dense vegetation. That is one reason EVI was developed.

EVI is designed to:
- Reduce saturation at high biomass,
- Reduce atmospheric influence,
- Reduce some background effects.

The goal is not to replace NDVI. The goal is to perform better under certain conditions.

---

## Part 6 — Where Does SAVI Fit?

Now consider a different problem. Suppose vegetation is sparse.

```
🌱      🌱
Mostly soil
```

The satellite receives light from both leaves and soil. If the soil is bright or dark, NDVI may change even if the vegetation has not.

**SAVI (Soil-Adjusted Vegetation Index)** was designed to reduce the influence of exposed soil.

Its main purpose is not to solve saturation. Its main purpose is to improve vegetation measurement when soil is clearly visible.

---

## Part 7 — Comparing the Three Indices

| Situation | NDVI | EVI | SAVI |
|---|---|---|---|
| Bare soil | Limited | Limited | Better |
| Sparse vegetation | Good | Good | Better |
| Moderate canopy | Excellent | Excellent | Good |
| Dense canopy | Saturates | Better | Still can saturate |
| High biomass rice | Limited | Better | Limited |

These are usually calculated directly in GEE (Google Earth Engine), since GEE already provides all the spectral bands needed.

---

## Part 8 — Which Index Should You Use?

There is no universal answer. Instead, ask:

**Question 1:** How dense is the vegetation? → If sparse, NDVI works well.

**Question 2:** Is soil highly visible? → If yes, consider SAVI.

**Question 3:** Is biomass extremely high? → If yes, consider EVI.

---

## Summary

NDVI should not be interpreted as a proportional indicator of vegetation amount once canopy density becomes high enough that saturation reduces its sensitivity. It still indicates the presence of healthy vegetation, but it may no longer distinguish meaningful differences in LAI, biomass, or canopy structure.
