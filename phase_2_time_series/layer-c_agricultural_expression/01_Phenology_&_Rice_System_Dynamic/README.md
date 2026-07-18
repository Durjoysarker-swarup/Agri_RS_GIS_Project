# Layer 3 — Phenology & Biological Interpretation

This folder covers how satellite-derived vegetation signals connect to real crop biology — from the fundamentals of phenology and crop calendars, through interpreting NDVI curves and vegetation indices, to extracting and validating phenological metrics and detecting meaningful shifts in crop timing.

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
- **Metrics require validation** — phenological metrics (SOS, POS, EOS) are estimates dependent on extraction method and data quality, and any detected shift should be checked against climate, management, and data-quality evidence before being called "real."

## Related

Builds on preprocessing and uncertainty concepts from the earlier notes (smoothing, gap-filling, temporal dependence, change detection). Code implementations and worked examples are referenced in `RESAMPLING TIME SERIES.ipynb`.
