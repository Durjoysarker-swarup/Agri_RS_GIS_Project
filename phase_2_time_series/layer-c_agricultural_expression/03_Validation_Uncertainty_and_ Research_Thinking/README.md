# Remote Sensing Data Quality, Validation & Reliability — Notes

This folder contains study notes (sections 5.1–5.6) on the practical and methodological challenges of working with remote sensing data in agricultural monitoring — covering spatial representativeness, ground truth mismatch, validation strategy, cross-dataset scale mismatch, uncertainty reporting, and feature reliability / data leakage.

## Contents

| Section | Title | File |
|---------|-------|------|
| 5.1 | Pure Pixel Problem & Spatial Representativeness | [01_Pure_Pixel_Problem_and_Spatial_Representativeness.md](./01_Pure_Pixel_Problem_and_Spatial_Representativeness.md) |
| 5.2 | Ground Truth Mismatch & Label Noise | [02_Ground_Truth_Mismatch_and_Label_Noise.md](./02_Ground_Truth_Mismatch_and_Label_Noise.md) |
| 5.3 | Spatial vs Temporal Validation | [03_Spatial_vs_Temporal_Validation.md](./03_Spatial_vs_Temporal_Validation.md) |
| 5.4 | Cross-Dataset Validation & Scale Mismatch | [04_Cross-Dataset_Validation_and_Scale_Mismatch.md](./04_Cross-Dataset_Validation_and_Scale_Mismatch.md) |
| 5.5 | Error Analysis & Uncertainty Reporting | [05_Error_Analysis_and_Uncertainty_Reporting.md](./05_Error_Analysis_and_Uncertainty_Reporting.md) |
| 5.6 | Feature Reliability & Temporal Data Leakage | [06_Feature_Reliability_and_Temporal_Data_Leakage.md](./06_Feature_Reliability_and_Temporal_Data_Leakage.md) |

## Overview

- **5.1 Pure Pixel Problem & Spatial Representativeness** — Why mixed pixels, field boundary effects, and ROI choice determine whether a measurement truly represents a field.
- **5.2 Ground Truth Mismatch & Label Noise** — Why "ground truth" is an imperfect reference, common sources of temporal/spatial mismatch, and types of label noise in agricultural datasets.
- **5.3 Spatial vs Temporal Validation** — The difference between testing a model in new locations vs new time periods, and why random train-test splits can be misleading for remote sensing data.
- **5.4 Cross-Dataset Validation & Scale Mismatch** — How datasets with different spatial and temporal resolutions must be aligned and aggregated before comparison, and why correlation doesn't guarantee agreement.
- **5.5 Error Analysis & Uncertainty Reporting** — Random vs systematic error, bias vs variance, and why every remote sensing result should be reported with its uncertainty.
- **5.6 Feature Reliability & Temporal Data Leakage** — The difference between observed and estimated features, feature confidence, and how temporal data leakage inflates model accuracy.

## Core Idea

Across all six sections, the guiding principle is the same:

**A model or measurement can look accurate while still being scientifically invalid.**

High accuracy, strong correlation, or a clean-looking pixel value mean little if the underlying measurement is unrepresentative, mismatched in time or space, leaked from the future, or reported without its uncertainty. Good remote sensing science means constantly asking: *What exactly does this data represent, and how confident should I be in it?*
