# Phase 2 — Time Series

This phase covers the full journey of a satellite vegetation signal: how it's observed and why it's imperfect, how to mathematically process and stabilize it, and how to interpret it as a biological and agricultural signal — including detecting anomalies and validating whether any of it can be trusted.

It moves from *"how does a satellite even see a crop?"* → *"how do I clean and process that noisy signal?"* → *"what does the processed signal mean biologically, and how much should I trust it?"*

## Repository Structure

```
phase_2_time_series/
├── README.md
├── layer-a_observation_system/            (7 notes)
├── layer-b_temporal_signal_processing/    (7 daily modules: theory + notebook + report)
└── layer-c_agricultural_expression/       (3 sub-layers: phenology, anomalies, validation)
```

Each layer has its own `README.md` with a full breakdown of its contents.

## Layers

### 🛰️ [Layer A — Observation System](./layer-a_observation_system/README.md)

Covers the foundational concepts behind satellite-based temporal signals — how continuous real-world processes (like crop growth) become discrete, noisy, gap-filled satellite observations.

Covers:
- What a temporal signal is (temporal resolution, revisit frequency, sampling frequency)
- Why observed NDVI ≠ true NDVI (the journey of light from Sun to NDVI value)
- Sources of noise in NDVI signals and why spikes shouldn't be removed blindly
- Clouds, monsoon data collapse, and the limits of cloud masking
- The statistical theory of missing data (MCAR, MAR, MNAR)
- How preprocessing choices (cloud masking, compositing, resampling) change results
- Trade-offs between mean, median, and maximum temporal composites

### 📐 [Layer B — Signal Behavior (Mathematics of Satellite Time Series)](./layer-b_temporal_signal_processing/README.md)

Focuses on the mathematical processing of satellite time series — the complete workflow from raw, noisy observations to scientifically reliable temporal features, with an emphasis on the reasoning behind each processing decision rather than just the code.

A 7-day module structure, each with theory, a Python notebook, and a report:
- Why we process satellite time series
- Smoothing methods and how to choose their parameters
- Interpolation and gap filling
- Temporal dependence
- Change detection
- Uncertainty in temporal analysis

Uses a real Sentinel-2 NDVI time series from agricultural fields in Sylhet, Bangladesh, consistently across all modules.

### 🌾 [Layer C — Agricultural Expression](./layer-c_agricultural_expression/README.md)

Covers how satellite vegetation signals express agricultural reality — from crop biology and phenology, to detecting and interpreting anomalies, to validating whether the whole analysis pipeline can be trusted.

Three sub-layers:
- **Phenology & Biological Interpretation** — linking NDVI curves to rice growth stages, the Bangladesh crop calendar, causal thinking, and phenological metrics (SOS, POS, EOS, LOS)
- **NDVI Anomaly Detection & Interpretation** — baselines, anomaly patterns, magnitude/duration/timing, change points, and a hands-on anomaly detection notebook
- **Data Quality, Validation & Reliability** — spatial representativeness, ground truth mismatch, validation strategy, cross-dataset scale mismatch, uncertainty reporting, and feature reliability

## How the Three Layers Connect

| Layer | Core Question |
|-------|------------------|
| A — Observation System | How does a satellite actually "see" a crop, and where does uncertainty enter? |
| B — Signal Behavior | How do I mathematically process this noisy, gapped signal into something reliable? |
| C — Agricultural Expression | What does the processed signal mean biologically, what changed, and how much can I trust the result? |

This progression mirrors a real remote sensing workflow: first understand the observation system and its limitations, then apply rigorous signal processing to stabilize the time series, then interpret the result biologically while critically validating every step along the way.

## Core Takeaway

A satellite vegetation time series is never a direct measurement of crop condition — it's the end product of a long chain of physical, statistical, and processing decisions. Every layer in this phase inherits the assumptions and limitations introduced by the one before it. Scientific remote sensing means tracing a result back through that entire chain, rather than treating any single NDVI value as ground truth.
