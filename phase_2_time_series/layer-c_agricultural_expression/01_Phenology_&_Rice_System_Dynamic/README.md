# Layer 3 — Phenology & Biological Interpretation

This layer focuses on interpreting satellite vegetation time series from a biological perspective. After learning how observations are acquired and processed in the previous layers, the emphasis now shifts to understanding how crop growth, management, and environmental conditions shape NDVI/EVI time series.

The goal is not simply to describe vegetation curves, but to interpret them scientifically by linking spectral signals to crop physiology, phenology, and the underlying biological and environmental processes that generate them.

This layer builds directly on the observation and preprocessing concepts covered earlier (Layer A and Layer 2), and shifts the focus from *"is this signal trustworthy?"* to *"what does this signal mean biologically, and how do I prove it?"*

## Contents

| # | Topic | Description |
|---|---|---|
| [3.1](./phenology-fundamentals-notes.md) | Phenology Fundamentals | Introduces phenology as the study of biological event timing, the Bangladesh rice crop calendar (Aus, Aman, Boro), the three major rice growth stages, and the biological drivers (LAI, biomass, chlorophyll, canopy closure) behind NDVI change. |
| [3.2](./ndvi-curves-biological-signals-notes.md) | NDVI Curves as Biological Signals | Walks through the full rice growth cycle stage-by-stage (land prep → flooding → transplanting → tillering → heading → senescence → harvest) and how each stage shows up in the NDVI curve, plus common misconceptions about NDVI and yield. |
| [3.3](./bangladesh-multi-season-rice-logic-notes.md) | Bangladesh Multi-Season Rice Logic | Explains why Bangladesh often shows multiple NDVI peaks per year, compares Boro/Aus/Aman seasons, contrasts NDVI vs EVI saturation behavior, and introduces cropping intensity. |
| [3.4](./causal-thinking-notes.md) | Causal Thinking: Why Patterns Exist | Distinguishes observation from cause, introduces response lag, rain-fed vs irrigated decoupling, management-driven NDVI changes, and confounding variables that produce similar-looking patterns from different causes. |
| [3.5](./measurement-limitations-ndvi-saturation-notes.md) | Measurement Limitations: NDVI, Saturation & Alternative Indices | Explains why NDVI saturates at high canopy density, and compares NDVI, EVI, and SAVI to show when each index is most appropriate. |
| [3.6](./phenological-metrics-notes.md) | Phenological Metrics | Defines core phenological metrics (SOS, POS, EOS, LOS, green-up rate, senescence rate) and compares three extraction methods: threshold, derivative, and curve fitting. |
| [3.7](./phenological-shift-analysis-notes.md) | Phenological Shift Analysis | Covers how to compare phenology across years, regions, or management systems, what can shift and why, and a workflow for distinguishing real biological shifts from data artifacts. |

## Key Themes

- **NDVI is a proxy, not a direct measurement** — every curve shape must be traced back to an underlying biological process (LAI, chlorophyll, canopy closure) before it's interpreted.
- **Time gives meaning** — the same NDVI value can represent different growth stages or seasons depending on when it was observed and the local crop calendar.
- **Correlation is not causation** — sharp NDVI changes have many possible explanations (harvest, flood, disease, cloud contamination), and causal claims require supporting evidence, not just pattern matching.
Phenological metrics are estimates, not facts — SOS, POS, EOS and related metrics depend on the extraction method, preprocessing choices, and data quality. Any detected shift should be evaluated against climate, management, and observational evidence before drawing biological conclusions.

## Related

This layer builds directly on the observation system and temporal signal processing concepts introduced in the previous layers, including cloud contamination, smoothing, interpolation, temporal dependence, and uncertainty analysis. The biological interpretations presented here form the conceptual foundation for the next stages of the roadmap:

- **Week 4 — Anomaly & Stress Detection**
- **Week 5 — Validation, Uncertainty & Research Thinking**



> **Core takeaway:** A vegetation index is only the starting point. Scientific remote sensing requires connecting spectral observations to biological processes, quantifying phenology, and interpreting changes using evidence rather than assumptions.
