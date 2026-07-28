# NDVI Anomaly Detection & Interpretation — Notes

This repository contains personal study notes on detecting and interpreting NDVI (vegetation index) anomalies for crop monitoring — covering baselines, anomaly patterns, magnitude/duration/timing, change point detection, and the reasoning workflow from observation to interpretation.

## Contents

| Section | Title | File |
|---------|-------|------|
| 4.1 | Anomaly | [4.1-Anomaly.md](./01_Anomaly.md) |
| 4.2 | Defining the Baseline | [4.2-Defining-the-Baseline.md](./4.2-Defining-the-Baseline.md) |
| 4.3 | Detecting NDVI Anomalies | [4.3-Detecting-NDVI-Anomalies.md](./4.3-Detecting-NDVI-Anomalies.md) |
| 4.4 | Magnitude, Duration & Timing | [4.4-Magnitude-Duration-Timing.md](./4.4-Magnitude-Duration-Timing.md) |
| 4.5 | Change Point Detection | [4.5-Change-Point-Detection.md](./4.5-Change-Point-Detection.md) |
| 4.6 | From Anomaly to Hypothesis | [4.6-From-Anomaly-to-Hypothesis.md](./4.6-From-Anomaly-to-Hypothesis.md) |
| 4.7 | Anomaly Interpretation Workflow | [4.7-Anomaly-Interpretation-Workflow.md](./4.7-Anomaly-Interpretation-Workflow.md) |

## Overview

- **4.1 Anomaly** — What an anomaly is, and how it differs from noise, an outlier, and stress.
- **4.2 Defining the Baseline** — Types of baselines (mean, median, percentile, multi-year climatology, stage-specific) and the assumptions/fallacies behind them.
- **4.3 Detecting NDVI Anomalies** — Patterns anomalies can take: single-date, persistent, gradual, abrupt.
- **4.4 Magnitude, Duration & Timing** — Why an anomaly's size, length, and growth-stage timing all shape its potential severity.
- **4.5 Change Point Detection** — Identifying *when* a time series' behavior shifts, and how this differs from an anomaly.
- **4.6 From Anomaly to Hypothesis** — Turning a detected anomaly into testable biological, management, and observation-based hypotheses.
- **4.7 Anomaly Interpretation Workflow** — The full step-by-step reasoning process from raw observation to a defensible interpretation.

## Core Idea

Across all sections, the guiding principle is the same:

**Detection → Description → Interpretation**

An anomaly should never be labeled as "stress" or given a cause without first being described objectively (direction, magnitude, duration, timing) and evaluated against competing hypotheses and evidence.
