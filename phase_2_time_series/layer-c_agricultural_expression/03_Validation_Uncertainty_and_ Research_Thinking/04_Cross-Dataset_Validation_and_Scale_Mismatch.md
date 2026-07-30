# 5.4 — Cross-Dataset Validation & Scale Mismatch

Different datasets describe the same real-world system at different spatial and temporal scales.

## Part 1 — Cross-dataset validation

Cross-dataset validation is the process of comparing observations from different datasets to determine whether they consistently describe the same real-world phenomenon.

### Every Dataset Observes Something Different

| Dataset | Measures |
|---------|----------|
| Sentinel-2 NDVI | Vegetation greenness |
| Rain gauge | Rainfall |
| ERA5 | Atmospheric conditions |
| Soil moisture | Water availability |
| Temperature | Thermal environment |

None of these directly measures "crop stress." Crop stress must be inferred by combining evidence.

That's why you need to validate with cross level dataset to conclude.

## Part 2 — Spatial Resolution

Every dataset has a spatial resolution.

**Examples:**

| Dataset | Approximate Spatial Resolution |
|---------|-----------------------------------|
| Sentinel-2 | 10 m |
| Landsat | 30 m |
| MODIS NDVI | 250–500 m |
| ERA5 | ~31 km |
| CHIRPS Rainfall | ~5 km |

**Consequence**

They cannot be compared pixel-by-pixel without considering scale.

### Spatial Scale Mismatch

Spatial scale mismatch occurs when datasets describe the same area using different spatial resolutions.

**Research Implication**

A disagreement between Sentinel NDVI and ERA5 temperature may simply arise because they represent different spatial scales.

## Part 3 — Temporal Resolution

Datasets are also collected at different time intervals.

| Dataset | Temporal Resolution |
|---------|------------------------|
| Rain gauge | Hourly / Daily |
| ERA5 | Hourly |
| Sentinel-2 | Every ~5 days (ideal revisit; cloud cover may reduce usable observations) |
| MODIS | Daily observations with composite products over multiple days |

Each dataset samples time differently.

### Temporal Scale Mismatch

Suppose: Rainfall

- Sentinel → Every 5 days
- ERA5 → Hourly

These observations cannot be directly compared without alignment.

Heavy rain Monday.

Satellite image Friday.

Question: Should rainfall from Monday influence Friday's NDVI?

Probably. But how much? This becomes a scientific decision.

## Part 4 — Temporal Alignment

Temporal alignment is the process of matching observations collected at different times so they represent comparable periods.

**Example**

Sentinel observation → July 20

Rainfall
- July 16
- July 17
- July 18
- July 19
- July 20

Instead of comparing one rainfall measurement, we may compute:
- Total rainfall
- Mean rainfall
- Cumulative rainfall
- Antecedent rainfall (rainfall over the previous n days)

depending on the research question.

### Why Alignment Matters

Plants respond to accumulated environmental conditions, not just the weather at the exact moment of satellite acquisition.

### Daily Rainfall vs 5-Day Sentinel

Suppose Rainfall

| Day | Rainfall |
|-----|-----------|
| 1 | 0 mm |
| 2 | 45 mm |
| 3 | 60 mm |
| 4 | 12 mm |
| 5 | 0 mm |

Sentinel image → Day 5.

Question: Should NDVI be compared with day 5 rainfall only?

No.

The crop has experienced rainfall over several preceding days. A cumulative or lagged rainfall metric may be more biologically meaningful.

### Hourly ERA5 vs Sentinel

ERA5 provides:

00:00, 01:00, 02:00, ..., 23:00

Sentinel

One observation.

To compare them, ERA5 is usually aggregated.

**Examples:**
- Daily mean temperature
- Daily maximum
- Daily minimum
- Multi-day averages

The choice depends on the biological process being studied.

## Part 5 - Aggregation & Resampling

### Aggregation

Aggregation combines multiple observations into a larger temporal or spatial unit.

**Examples:**

Hourly temperature → Daily average → Weekly average

Aggregation helps align datasets with different temporal resolutions. However, it also removes detail.

**Trade-off**

Higher aggregation:
- Easier comparison
- Less noise

But
- Less temporal detail
- Short-term events may be hidden

### Resampling

Spatial resampling adjusts datasets so they can be analyzed on a common spatial grid.

- Upscale fine-resolution data
- Downscale coarse-resolution data (with caution)

The important idea is not the interpolation algorithm but recognizing that changing resolution changes the information content.

## Part 6 — Correlation Does Not Guarantee Agreement

Suppose rainfall increases. NDVI also increases.

Strong correlation.

Can we conclude rainfall caused the NDVI increase?

Not necessarily.

**Other possibilities:**
- Irrigation
- Fertilizer application
- Crop growth stage
- Temperature changes

Cross-dataset validation strengthens evidence but does not prove causality.
