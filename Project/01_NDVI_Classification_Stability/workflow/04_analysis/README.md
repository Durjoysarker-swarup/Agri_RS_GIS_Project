# 02 — NDVI Sensitivity Analysis Pipeline (Python)

## Objective

This module performs statistical and decision-level analysis of NDVI outputs generated from multiple cloud-masking pipelines (A, B, C).

The goal is to quantify:

- Spectral differences (NDVI shifts)
- Classification instability
- Decision flip rates
- Agreement between preprocessing strategies

This is not a predictive model, but a sensitivity analysis framework.

---

## Input Data

The dataset contains grid-level NDVI values exported from Google Earth Engine.

### Structure

| Column  | Description |
|----------|------------|
| Grid_ID  | Unique spatial grid identifier |
| NDVI_A   | NDVI from Pipeline A (Standard SCL) |
| NDVI_B   | NDVI from Pipeline B (Strict SCL) |
| NDVI_C   | NDVI from Pipeline C (QA60 mask) |

### Total observations

- 87,982 grid cells

---

## Step 1 — Data Loading & Cleaning

- Load CSV file from Google Drive  
- Keep only NDVI variables  
- Remove missing values (NaNs)  

This ensures clean statistical comparison across pipelines.

---

## Step 2 — Exploratory Statistics

Summary statistics are computed:

- Mean NDVI  
- Standard deviation  
- Min / Max values  
- Quartiles (25%, 50%, 75%)  

### Key Insight

All pipelines show similar structure but differ in distribution intensity and spread, indicating preprocessing-induced bias.

---

## Step 3 — Pairwise NDVI Differences

We compute:

- A vs B  
- A vs C  
- B vs C  

### Metric

Difference = NDVI_X - NDVI_Y

### Absolute Mean Differences

| Comparison | Mean Difference |
|------------|----------------|
| A vs B     | 0.0139 |
| A vs C     | 0.0269 |
| B vs C     | 0.0385 |

### Interpretation

- Larger difference → higher sensitivity to preprocessing  
- B vs C is the most unstable pair  

---

## Step 4 — NDVI Classification System

Each NDVI value is converted into discrete agricultural risk classes:

### Threshold System 1

- Low: < 0.30  
- Moderate: 0.30 – 0.50  
- High: > 0.50  

---

## Step 5 — Classification under Multiple Threshold Systems

To test robustness, three threshold systems are applied:

| System | Low–Moderate | Moderate–High |
|--------|-------------|----------------|
| T1     | 0.30        | 0.50 |
| T2     | 0.35        | 0.55 |
| T3     | 0.40        | 0.60 |

---

## Step 6 — Class Distribution Analysis

Example (T1):

- Pipeline A: High = 61,053  
- Pipeline B: High = 62,963  
- Pipeline C: High = 56,906  

### Insight

Pipeline C consistently reduces "High" classification due to lower NDVI values.

---

## Step 7 — Decision Flip Analysis

A "flip" occurs when:

```
Class_A ≠ Class_B
```

### Flip Variables

- Flip_AB  
- Flip_AC  
- Flip_BC  

### Flip Rate Formula

```
Flip Rate = Mean(Flip) × 100
```

### Results

| Comparison | Flip Rate |
|------------|----------|
| A vs B     | 3.15% |
| A vs C     | 6.06% |
| B vs C     | 8.70% |

---

## Step 8 — Flip Rate Visualization

A bar chart is used to compare instability across pipelines.

### Insight

- B vs C shows highest instability  
- A vs B is most stable  

---

## Step 9 — Confusion Matrix Analysis

Confusion matrices are used to measure agreement between classification outputs.

### Comparisons

- A vs B  
- A vs C  
- B vs C  

### Interpretation

- Diagonal = agreement  
- Off-diagonal = classification shifts  

### Key Observation

Most shifts occur between:

- High → Moderate  
- Moderate → Low  

This indicates a systematic downward bias in weaker masking pipelines.

---

## Step 10 — Final Dataset Export

Final analysis table includes:

- NDVI values  
- Classification labels  
- Flip indicators  

Exported as:

```
final_analysis_table.csv
```

---

## Key Findings

### 1. Preprocessing changes NDVI distribution

Cloud masking affects not just noise removal but overall signal structure.

---

### 2. Classification is highly sensitive near thresholds

Small NDVI shifts near 0.30 and 0.50 cause large decision changes.

---

### 3. Flip rate increases with masking divergence

- SCL vs SCL → stable  
- SCL vs QA60 → unstable  

---

## Core Insight

Agricultural risk classification is not only dependent on NDVI, but also on preprocessing design.

Even small changes in cloud masking logic can alter:

- Risk category assignment  
- Spatial interpretation  
- Operational decisions  

---

## Outputs

- NDVI statistical summaries  
- Flip rate analysis  
- Confusion matrices  
- Final merged dataset (CSV)
