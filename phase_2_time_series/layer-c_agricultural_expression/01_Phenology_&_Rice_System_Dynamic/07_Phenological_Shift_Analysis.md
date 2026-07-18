# 3.7 — Phenological Shift Analysis

> When two NDVI curves differ, how can we determine whether the difference is biologically meaningful?

## Part 1 — What Is a Phenological Shift?

A phenological shift is a change in the timing or characteristics of crop development compared with another reference.

The comparison could be between:
- Different years,
- Different regions,
- Different management systems,
- Different varieties.

**Example**

**Year 1**
```
SOS  = DOY 120
Peak = DOY 195
EOS  = DOY 270
```

**Year 2**
```
SOS  = DOY 138
Peak = DOY 214
EOS  = DOY 286
```

Everything happened later. This is a **phenological shift**.

**Important:** A shift is not automatically a problem. It may represent:
- Normal seasonal variability,
- Intentional management,
- Climate effects,
- Or measurement error.

---

## Part 2 — What Can Shift?

Many features can change.

### 1. Planting Date

Possible causes:
- Delayed rainfall
- Delayed irrigation
- Labor shortage
- Flood damage

### 2. Peak Timing

Possible reasons:
- Cooler temperatures
- Slower crop development
- Late planting

### 3. Peak Value

Possible reasons:
- Drought
- Nitrogen deficiency
- Disease
- Lower planting density

### 4. Length of Season (LOS)

Possible reasons:
- Drought
- Heat stress
- Early harvest
- Short-duration cultivar

### 5. Growth Speed

A steeper green-up slope suggests rapid canopy development.

Possible causes:
- Irrigation
- Favorable temperatures
- Nitrogen fertilizer

A slower slope may indicate stress or poor establishment.

### 6. Senescence Timing

**Early senescence** → Earlier decline. Possible causes: drought, disease, nutrient limitation.

**Late senescence** → Longer green period. Possible causes: irrigation, cooler weather, late-maturing variety.

---

## Part 3 — Comparing Different Contexts

### Different Years

Why is this year different?

Possible explanations:
- Rainfall anomaly
- Temperature anomaly
- Flooding
- El Niño / La Niña influences
- New cultivar
- Changes in management

### Different Regions

Why does Sylhet differ from Rajshahi?

Possible reasons:
- Rainfall regime
- Soil type
- Elevation
- Irrigation availability
- Planting calendar

### Different Management

Two neighboring fields may receive:
- Different fertilizer rates,
- Different irrigation schedules,
- Different planting dates,
- Different varieties.

Remote sensing captures the *result*, not the management *decision*.

---

## Part 4 — Real Biology or Data Artifact?

This is the most important question of the day.

Suppose SOS appears 20 days later this year. Is it real? Maybe. Maybe not.

**Biological explanations:**
- Late planting
- Delayed rainfall
- Cooler temperatures

**Data-related explanations:**
- Cloud gaps
- Poor interpolation
- Sensor differences
- Missing observations

**Never assume a detected shift is real until you examine the evidence.**

---

## Part 5 — Possible Drivers of Phenological Shifts

1. Climate Drivers
2. Management Drivers
3. Stress Drivers
4. Landscape Drivers

### Example 1

**Observation:** SOS delayed by 18 days.

Possible explanations: late planting, delayed monsoon, cloud contamination.

**Evidence:**
- Rainfall records show delayed monsoon.
- Cloud-free observations are available around SOS.
- Farmers report later planting.

**Conclusion:** Most likely a real biological shift caused by delayed rainfall and planting.

### Example 2

**Observation:** Peak NDVI is much lower.

Possible explanations: drought, nitrogen deficiency, cloud contamination.

**Evidence:**
- The low value appears in only one image.
- The next image returns to normal.

**Conclusion:** Likely a data artifact rather than a real reduction in canopy.

### Example 3

**Observation:** Season length shortened by 20 days.

Possible explanations: drought, early harvest, short-duration cultivar.

**Evidence:**
- The temperature was normal.
- Rainfall was below average.
- Field records show the same cultivar.

**Conclusion:** Drought is the most likely explanation, but management records should still be checked before making a definitive claim.

---

## Final Output — Annotated Phenology Interpretation Workflow

```
Observed NDVI curve
        │
        ▼
Preprocess the time series
(smoothing, gap handling)
        │
        ▼
Extract phenological metrics
(SOS, POS, EOS, LOS, Peak)
        │
        ▼
Identify unusual changes
        │
        ▼
Generate multiple hypotheses
(climate, management, stress, artifacts)
        │
        ▼
Gather supporting evidence
(rainfall, temperature, SAR, crop calendar, field data)
        │
        ▼
Reject unsupported explanations
        │
        ▼
Assess uncertainty
        │
        ▼
Final biological interpretation
```
