# Implementation

This folder contains the practical implementation of the NDVI anomaly detection workflow described in the [Notes](../Notes/README.md) folder. It applies the concepts from sections 4.1–4.7 (baseline construction, anomaly detection, classification, and pattern identification) to a real NDVI time series dataset.

## Contents

```
Implementation/
├── Anomaly Detection Workflow.ipynb
└── data/
    ├── hist_2020.csv
    ├── hist_2021.csv
    ├── hist_2022.csv
    ├── hist_2023.csv
    └── target_2024.csv
```

> **Note:** Update the file names above if your actual CSV files are named differently.

## Data

| File | Description |
|------|--------------|
| `hist_2020.csv` | Historical NDVI time series for 2020 |
| `hist_2021.csv` | Historical NDVI time series for 2021 |
| `hist_2022.csv` | Historical NDVI time series for 2022 |
| `hist_2023.csv` | Historical NDVI time series for 2023 |
| `target_2024.csv` | Observed NDVI time series for 2024 (the year being evaluated against the baseline) |

Each file contains a `Date` column and an `NDVI` column.

## Notebook Workflow — `Anomaly Detection Workflow.ipynb`

The notebook walks through the full anomaly detection pipeline, step by step:

1. **Plot Historical NDVI Time Series**
   Visualize the raw NDVI curves for 2020–2024 to inspect seasonal shape and year-to-year variability.

2. **Build the Multi-Year Baseline**
   Align 2020–2023 by `Month-Day` and average them to produce a `Baseline_NDVI` value for each calendar date (multi-year climatology, as described in Notes 4.2).

3. **Plot the Baseline**
   Visualize the resulting seasonal baseline curve.

4. **Compute NDVI Anomalies**
   - Prepare the 2024 target dataset (extract `Month_Day`).
   - Merge the target year with the baseline on `Month_Day`.
   - Plot observed 2024 NDVI against the historical baseline.
   - Calculate the anomaly: `Anomaly = NDVI − Baseline_NDVI`.
   - Plot the anomaly time series with a zero reference line.

5. **Classify the Anomalies**
   - Define a threshold (`0.03`).
   - Classify each anomaly as **Positive**, **Negative**, or **Near-zero** based on the threshold.
   - Apply the classification across the 2024 dataset and count how many observations fall into each class.

6. **Identify Patterns**
   Visually inspect the anomaly curve and label patterns following the typology from Notes 4.3:
   - **Single-date anomaly** — e.g., a brief dip around 2024-04 that recovers immediately.
   - **Persistent anomaly** — e.g., several consecutive negative anomalies from June to August.
   - **Abrupt anomaly** — e.g., a sharp NDVI decrease between 2024-07-29 and 2024-08-13.

7. **Enrich the Anomaly Table**
   Add descriptive columns to the dataset, following the description framework from Notes 4.4:
   - `Direction` (Positive / Negative)
   - `Magnitude` (Small / Moderate / Large)
   - `Timing` (e.g., Early season, Heading, etc.)

## How to Run

1. Open `Anomaly Detection Workflow.ipynb` in Jupyter or Google Colab.
2. Ensure the `data/` folder (with all 5 CSVs) sits alongside the notebook.
3. Run all cells in order — each step depends on the DataFrame built in the previous one.

## Relationship to the Notes

| Notebook Step | Related Note |
|----------------|----------------|
| Building the baseline | 4.2 — Defining the Baseline |
| Computing & detecting anomalies | 4.1 — Anomaly, 4.3 — Detecting NDVI Anomalies |
| Classifying anomalies & describing them (Direction, Magnitude, Timing) | 4.4 — Magnitude, Duration & Timing |
| Identifying single-date / persistent / abrupt patterns | 4.3 — Detecting NDVI Anomalies |
