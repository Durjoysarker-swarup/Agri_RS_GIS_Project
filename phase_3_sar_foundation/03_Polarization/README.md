# 03_Polarization

Part of `Agri_RS_GIS_Project / phase_3_sar_foundation`

This folder contains a 7-day study series on SAR (Sentinel-1) polarization concepts, building from the physics of wave polarization up to time-series interpretation for agricultural monitoring — particularly rice fields.

## Contents

| File | Topic |
|---|---|
| [01_Wave_Polarization.md](01_Wave_Polarization.md) | Fundamentals of electromagnetic wave polarization — V and H orientation, linear polarization, co- and cross-polarization, and how a target's interaction with the wave produces the polarization concept used in SAR. |
| [02_Transmit_and_Receive_Polarization.md](02_Transmit_and_Receive_Polarization.md) | The VV/VH/HH/HV notation (transmit letter, receive letter), why Sentinel-1 typically provides VV+VH, and why "VH = vegetation" is an oversimplification. |
| [03_Why_Cross-Polarization_Exist.md](03_Why_Cross-Polarization_Exist.md) | The physical mechanisms behind cross-polarization — target geometry, roughness, vegetation structure, multiple scattering, and double bounce — and the scattering-matrix formulation. |
| [04_VV_vs_VH_Over_Crops.md](04_VV_vs_VH_Over_Crops.md) | How VV and VH respond differently over bare soil vs. crop canopies, why VH is often useful for vegetation monitoring, and why neither channel maps directly to biomass or soil moisture. |
| [05_Temporal_Behavior_or_VV_and_VH.md](05_Temporal_Behavior_or_VV_and_VH.md) | How VV and VH evolve across the crop growth cycle, what to look for in a SAR time series (trend, peaks, sudden change), and why SAR is a valuable complement to optical data during Bangladesh's monsoon season. |
| [06_Polarization_Ratios.md](06_Polarization_Ratios.md) | The VV/VH ratio and VV−VH dB difference — how to compute them, what they reveal about relative scattering behavior, and their use (and limits) as a time-series indicator. |
| [07_Mini_Interpretation_Notebook.md](07_Mini_Interpretation_Notebook.md) | A structured interpretation framework (observation → hypothesis → alternative explanations → independent evidence → conclusion) applied to a worked rice-field example, plus a reusable interpretation worksheet. |

## How to use this folder

Read the files in order (01 → 07). Each builds on the previous day's concepts:

1. **Physics first** (01–03): what polarization is and why cross-polarization arises.
2. **Application** (04–05): how VV/VH behave over real crop fields and through time.
3. **Analysis** (06–07): combining VV and VH quantitatively, and reasoning rigorously from observations to conclusions.

## Key takeaway across the series

No single polarization channel or simple rule ("VV = soil," "VH = vegetation") reliably explains SAR backscatter. Interpretation requires considering scattering mechanism, geometry, dielectric properties, and polarization together — and cross-checking with independent evidence (NDVI, rainfall, crop calendar, field observations) before drawing conclusions.
