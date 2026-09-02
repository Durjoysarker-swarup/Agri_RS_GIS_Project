# DAY 7: MINI INTERPRETATION NOTEBOOK

**Observation → Physical hypothesis → Alternative explanations → Independent evidence → Conclusion**

## 1. The SAR interpretation hierarchy

```
LEVEL 1 — OBSERVATION
        ↓
VV changed
VH increased
VV−VH decreased
        ↓
LEVEL 2 — PHYSICAL RESPONSE
        ↓
Polarization response changed
        ↓
LEVEL 3 — POSSIBLE SCATTERING EXPLANATION
        ↓
Canopy structure?
Surface moisture?
Flooding?
Roughness?
Double bounce?
        ↓
LEVEL 4 — AGRICULTURAL HYPOTHESIS
        ↓
Crop growth?
Flooding?
Harvest?
Damage?
        ↓
LEVEL 5 — VALIDATION
        ↓
NDVI / rainfall / crop calendar / field observation
        ↓
LEVEL 6 — CONCLUSION
```

This is the scientific reasoning framework you should practice.

## Notebook structure

Create a notebook:

`Week_3_Day_7_Polarization_Interpretation.ipynb`

Recommended sections:

1. Objective
2. Dataset
3. VV and VH Time Series
4. Polarization Difference
5. Visual Interpretation
6. Physical Hypotheses
7. Alternative Explanations
8. Cross-check with NDVI
9. Interpretation Table
10. Scientific Conclusion

## Section 1 — Objective

To interpret temporal changes in Sentinel-1 VV and VH observations over an agricultural field and develop physically plausible explanations for observed polarization changes.

## Section 2 — Your hypothetical rice field

Imagine you have one rice field observed repeatedly. Suppose your data look like this:

| Date | Crop stage | VV (dB) | VH (dB) |
|---|---|---|---|
| 1 Jun | Bare field | -12.0 | -19.0 |
| 11 Jun | Flooded/transplanting | -15.0 | -22.0 |
| 21 Jun | Early growth | -13.5 | -19.5 |
| 1 Jul | Vegetative | -11.5 | -17.0 |
| 11 Jul | Tillering | -10.5 | -15.5 |
| 21 Jul | Dense canopy | -9.5 | -14.0 |
| 31 Jul | Dense canopy | -9.0 | -13.5 |
| 10 Aug | Heading | -8.8 | -13.2 |
| 20 Aug | Maturity | -9.5 | -14.5 |
| 30 Aug | Harvest | -14.0 | -20.0 |

This is a learning example, not a universal rice signature.

## Section 3 — Plot VV and VH

Your first task is simply to visualize the observations.

Do not interpret yet.

First ask:

*What do I actually observe?*

For example:

- VV decreases during flooding.
- VV subsequently increases.
- VH increases during crop development.
- Both reach relatively high values during dense canopy.
- Both decrease strongly around harvest.

## Section 4 — Calculate polarization difference

| Date | VV | VH | VV − VH |
|---|---|---|---|
| 1 Jun | -12.0 | -19.0 | 7.0 |
| 11 Jun | -15.0 | -22.0 | 7.0 |
| 21 Jun | -13.5 | -19.5 | 6.0 |
| 1 Jul | -11.5 | -17.0 | 5.5 |
| 11 Jul | -10.5 | -15.5 | 5.0 |
| 21 Jul | -9.5 | -14.0 | 4.5 |
| 31 Jul | -9.0 | -13.5 | 4.5 |
| 10 Aug | -8.8 | -13.2 | 4.4 |
| 20 Aug | -9.5 | -14.5 | 5.0 |
| 30 Aug | -14.0 | -20.0 | 6.0 |

The difference increased. This tells you the relative relationship between the two polarization channels changed.

## Section 5 — Identify important temporal events

### A. Sudden decrease

Example:

VV: -9 → -14 dB
VH: -13 → -20 dB

Possible explanations:

- harvest
- flooding
- strong moisture change
- surface condition change
- acquisition/geometry effects
- other disturbance

### B. Gradual increase

Increasing vegetation structure may be contributing to increasing cross-polarized response.

Notice the wording:

*"may be contributing."*

## Section 6 — Build competing hypotheses

This is one of the most important exercises.

Suppose:

VH increased by 6 dB over one month.

Don't immediately conclude crop growth.

Create competing hypotheses:

| Hypothesis | Physical reasoning |
|---|---|
| H1: Crop structural development | More complex 3-D vegetation can alter polarization response |
| H2: Soil/surface moisture changed | Dielectric properties can alter scattering |
| H3: Flooding interaction changed | Water + vegetation geometry can modify scattering |
| H4: Surface roughness changed | Roughness affects microwave scattering |
| H5: Observation/processing effect | Acquisition geometry or processing can affect measurements |

Now ask:

Which hypothesis is best supported by independent evidence?

## Section 7 — Add NDVI

This is where your optical remote-sensing background becomes useful.

Imagine:

| Date | VH | NDVI |
|---|---|---|
| 1 Jun | -19 | 0.20 |
| 11 Jun | -22 | 0.15 |
| 21 Jun | -19.5 | 0.30 |
| 1 Jul | -17 | 0.45 |
| 11 Jul | -15.5 | 0.60 |
| 21 Jul | -14 | 0.72 |
| 31 Jul | -13.5 | 0.78 |
| 10 Aug | -13.2 | 0.80 |
| 20 Aug | -14.5 | 0.76 |
| 30 Aug | -20 | 0.25 |

Now you have two independent observation systems:

If:

NDVI ↑
VH ↑

During the same period, the crop-growth hypothesis becomes more plausible.

But still not proven.

Why?

Because both sensors respond to environmental conditions and can have confounding factors.

## 2. Interpretation worksheet

For every major change, fill this out:

```
OBSERVATION: What changed?
↓
MAGNITUDE: How much did it change?
↓
POLARIZATION: Did VV, VH, or VV−VH change?
↓
PHYSICAL RESPONSE: What changed in the scattering environment?
↓
HYPOTHESIS: What agricultural process could explain it?
↓
ALTERNATIVE HYPOTHESES: What else could produce the same signal?
↓
INDEPENDENT EVIDENCE:
NDVI?
Rainfall?
Flooding?
Crop calendar?
Field observation?
↓
CONFIDENCE: Low / Moderate / High
↓
CONCLUSION: What can I reasonably claim?
```

This template is worth keeping for your future SAR research.
