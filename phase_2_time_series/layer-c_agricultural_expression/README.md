# Layer C — Agricultural Expression

This layer covers how satellite vegetation signals express agricultural reality — from the underlying crop biology and phenology, to detecting and interpreting anomalies in those signals, to validating whether the whole analysis pipeline can be trusted. It moves from *"what does this signal mean biologically?"* to *"what changed, and why?"* to *"how much should I trust any of this?"*

> **Note:** Folder names below are inferred from each subfolder's README content. Rename the folder links if your actual directory names differ.

## Repository Structure

```
Layer-C_Agricultural_Expression/
├── README.md
├── Phenology-Biological-Interpretation/           (7 notes)
├── NDVI-Anomaly-Detection-Interpretation/         (Notes/ + Implementation/)
└── Data-Quality-Validation-Reliability/           (6 notes)
```

Each subfolder has its own `README.md` with a full file-by-file breakdown.

## Folders

### 🌾 Phenology & Biological Interpretation

Interprets satellite vegetation time series from a biological perspective — linking spectral signals to crop physiology, growth stages, and the environmental processes that generate them.

Covers:
- Phenology fundamentals and the Bangladesh rice crop calendar (Aus, Aman, Boro)
- How each rice growth stage shows up in the NDVI curve
- Why Bangladesh often shows multiple NDVI peaks per year
- Causal thinking: response lag, rain-fed vs irrigated decoupling, confounding variables
- NDVI saturation and when to use NDVI vs EVI vs SAVI
- Core phenological metrics (SOS, POS, EOS, LOS) and extraction methods
- Comparing phenology across years/regions and separating real shifts from data artifacts

### 📈 NDVI Anomaly Detection & Interpretation
Builds on the phenological foundation to detect and interpret anomalies in NDVI time series, then applies the workflow to a real dataset.

Covers:
- What an anomaly is, and how it differs from noise, an outlier, and stress
- Types of baselines and their assumptions
- Anomaly patterns (single-date, persistent, gradual, abrupt)
- Magnitude, duration, and timing as descriptors of severity
- Change point detection
- Turning anomalies into testable hypotheses
- A hands-on notebook applying the full workflow to 2020–2024 NDVI data

### 🔍 Data Quality, Validation & Reliability

Steps back to ask whether the observations, labels, and models used in the previous two folders can actually be trusted.

Covers:
- The pure pixel problem and spatial representativeness
- Ground truth mismatch and label noise
- Spatial vs temporal validation strategies
- Cross-dataset validation and scale mismatch
- Error analysis and uncertainty reporting
- Feature reliability and temporal data leakage

## How the Three Folders Connect

| Folder | Core Question |
|--------|------------------|
| Phenology & Biological Interpretation | What does this signal mean biologically? |
| NDVI Anomaly Detection & Interpretation | What changed, and why? |
| Data Quality, Validation & Reliability | How much should I trust this result? |

This progression reflects the natural order of agricultural remote sensing analysis: first understand the biological signal, then detect and explain deviations from it, then critically evaluate the reliability of the entire pipeline — data, labels, validation strategy, and features alike.

## Core Takeaway

A vegetation index is only the starting point. Scientific remote sensing requires connecting spectral observations to biological processes, describing deviations objectively before interpreting them, and constantly questioning what the data represents and how confident you should be in it — rather than assuming accuracy, correlation, or a clean-looking value is enough.
