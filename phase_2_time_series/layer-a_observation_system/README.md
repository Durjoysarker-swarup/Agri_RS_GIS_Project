# Layer A — Observation System

This folder covers the foundational concepts behind satellite-based temporal signals — how continuous real-world processes (like crop growth) get turned into discrete, noisy, gap-filled satellite observations, and why every step of that journey matters before any real analysis can begin.

Understanding this layer is essential before moving on to time-series reconstruction, anomaly detection, or crop monitoring — since every downstream method inherits the assumptions and limitations introduced here.

## Contents

| # | Topic | Description |
|---|---|---|
| [01](./01-Temporal-Signal.md) | What is a Temporal Signal? | Introduces the core idea that nature is continuous while satellite observations are discrete, and defines temporal signal, temporal resolution, revisit frequency, and sampling frequency. |
| [02](./02-Observation-vs-Reality.md) | Observation vs Reality | Traces the full journey of light from the Sun to an NDVI value, showing why a satellite never measures vegetation directly and why observed NDVI ≠ true NDVI. |
| [03](./03-Noise.md) | Noise in Satellite Time Series | Breaks down the sources of noise in NDVI signals, explains spikes, and warns against blindly removing them without investigation. |
| [04](.04-Clouds.md) | Clouds, Monsoon & Data Collapse | Explains why optical satellites can't see through clouds, what cloud persistence and data collapse look like in practice (e.g. Sylhet monsoon), and the limits of cloud masking. |
| [05](./05-Missing-Data.md) | Missing Data Science | Covers the statistical theory of missingness (MCAR, MAR, MNAR), seasonal missingness, and why naive interpolation over missing peaks can be dangerous. |
| [06](./06-Preprocessing.md) | Preprocessing Pipeline Sensitivity | Shows how choices in cloud masking, compositing strategy, and spatial resampling can change NDVI results even when the underlying imagery is identical. |
| [07](.07-Temporal-Aggregation.md) | Temporal Aggregation & Week Synthesis | Examines how mean, median, and maximum composites each trade off robustness against information loss when aggregating observations into a single value. |

## Key Themes

- **Observation ≠ Reality** — a satellite record is a heavily mediated, processed approximation of what's actually happening on the ground.
- **Every processing decision is a design choice** — cloud masks, composites, and resampling methods all shape the final signal, independent of the true biological process.
- **Missing data is not neutral** — gaps are often systematic (seasonal, cloud-driven) rather than random, and can hide the most important biological events.

