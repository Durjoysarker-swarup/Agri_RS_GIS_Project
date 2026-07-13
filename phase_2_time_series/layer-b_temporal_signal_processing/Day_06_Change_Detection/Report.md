# NDVI Change Detection Analysis

## Overview

This notebook investigates the ability of a change point detection algorithm to identify abrupt shifts in an NDVI time series. Artificial disturbance events (flood, disease, harvest, and cloud contamination) were injected into a smoothed NDVI signal, and the **PELT (Pruned Exact Linear Time)** algorithm was used to automatically detect the resulting change points. Detected change points were then compared against the known (true) event locations to evaluate detection accuracy.

---

## Objectives

- Apply Whittaker smoothing to the raw NDVI signal to obtain a denoised baseline.
- Artificially inject realistic disturbance events (flood, disease, harvest, cloud) into the signal.
- Detect structural change points in the modified signal using the PELT algorithm.
- Compare detected change points against the known true event locations.
- Evaluate how well automated change point detection captures real agricultural/environmental disturbances.

---

## Dataset

| Property | Value |
|----------|-------|
| Dataset | Sentinel-2 NDVI Time Series |
| Study Area | Sylhet |
| Observation Period | 2023 – 2026 |
| Total Observations | 67 |
| Temporal Resolution | Sentinel-2 |

---

## Experimental Workflow

```text
Raw NDVI
    │
    ▼
Whittaker Smoothing (asls) → AWS
    │
    ▼
Inject Artificial Events
 (Flood, Disease, Harvest, Cloud)
    │
    ▼
Modified Signal
    │
    ▼
PELT Change Point Detection
    │
    ▼
Detected Change Points
    │
    ▼
Compare with True Event Locations
```

---

## Experiment Settings

| Parameter | Value |
|-----------|------:|
| Smoothing Method | Whittaker (asymmetric least squares, `asls`) |
| Lambda (λ) | 1 |
| Asymmetry (p) | 0.5 |
| Change Point Algorithm | PELT (`ruptures`) |
| Cost Model | L2 |
| Penalty | 0.05 |

---

### Injected Artificial Events

| Event | Index Range | Modification |
|-------|-------------|--------------|
| Disease | 20 – 30 | Subtracted a linearly increasing offset (0 → 0.20) |
| Flood | 40 – 50 | Subtracted a constant offset of 0.35 |
| Harvest | 58 → end | Subtracted a constant offset of 0.40 |
| Cloud | 65 | Subtracted a constant offset of 0.30 (single-point spike) |

---

## Results

### Detected Change Points

```text
[10, 15, 20, 30, 35, 40, 50, 60, 65, 69]
```

### True Event Locations

| Event | True Index |
|-------|-----------:|
| Disease | 20 |
| Flood | 40 |
| Harvest | 58 |
| Cloud | 65 |

### Detection Accuracy

| True Event | True Index | Nearest Detected Point | Match |
|------------|-----------:|------------------------:|:-----:|
| Disease | 20 | 20 | ✅ Exact match |
| Flood | 40 | 40 | ✅ Exact match |
| Harvest | 58 | 60 | ⚠️ Close (off by 2) |
| Cloud | 65 | 65 | ✅ Exact match |

Additional detected points at indices **10, 15, 30, 35, 50, 69** did not correspond to any injected true event and represent potential false positives (or boundary/onset markers of the same events, e.g. index 30 marking the *end* of the Disease ramp and index 50 marking the *end* of the Flood dip).

---

### Original vs Modified Signal

<img width="1287" height="488" alt="image" src="https://github.com/user-attachments/assets/e21d6d77-3627-4045-8a39-044a736d4f80" />

---

### Detected vs True Change Points

<img width="1297" height="457" alt="image" src="https://github.com/user-attachments/assets/85e2cf2a-cf97-4050-a300-64189b6a4f4b" />

---

## Discussion

The PELT algorithm successfully identified all four injected disturbance events, though with some sensitivity to the shape of each disturbance.

Key observations from the experiment include:

- **Abrupt, single-point disturbances** (Cloud at index 65) and **step-like disturbances** (Flood at index 40, Disease onset at index 20) were detected with exact precision.
- **Gradual-onset events** (Harvest, modeled as a constant offset from index 58 onward) were detected slightly off from the true index, likely because the algorithm anchors on the point of maximum statistical shift rather than the exact start of the transition.
- The algorithm also flagged additional change points not tied to any labeled true event (indices 10, 15, 30, 35, 50, 69). Several of these coincide with the **start or end boundaries** of the ramped Disease and Flood segments, suggesting the algorithm is correctly detecting the edges of each synthetic disturbance rather than producing pure noise.
- The chosen penalty value (0.05) is relatively low, which increases sensitivity and the number of detected change points — a trade-off between capturing every true event and minimizing false positives.
- Overall, PELT demonstrates strong capability for flagging abrupt vegetation index changes, but events with gradual transitions may require boundary-aware evaluation rather than exact-index matching.

---

## Key Findings

- All 4 injected disturbance events (Disease, Flood, Harvest, Cloud) were detected by the PELT algorithm.
- 3 of 4 events (Disease, Flood, Cloud) were detected at the **exact true index**.
- The Harvest event was detected 2 indices later than its true onset.
- 6 additional change points were flagged beyond the 4 true events, several of which align with the start/end boundaries of ramped disturbances rather than being pure false alarms.
- A penalty of 0.05 provided high sensitivity, successfully capturing every true event at the cost of some extra detections.

---


## Future Improvements

- Test sensitivity of detection results to different PELT penalty values.
- Compare PELT against other change point algorithms (Binary Segmentation, Window-based, BOCPD).
- Use a tolerance window (e.g., ±2–3 observations) rather than exact-index matching to evaluate detection accuracy for gradual-onset events.
- Apply the method to real (non-synthetic) disturbance events with ground-truth field records.
- Explore multivariate change detection incorporating auxiliary variables (e.g., precipitation, temperature) alongside NDVI.

---

## License

This notebook is part of a personal learning project on remote sensing time-series analysis and uncertainty quantification.
