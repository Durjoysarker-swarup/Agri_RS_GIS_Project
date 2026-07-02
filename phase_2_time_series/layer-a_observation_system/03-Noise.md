# Noise in Satellite Time Series

## Noise

A signal consists of:

> **Observed Signal = True Signal + Noise**

Suppose the true NDVI evolves smoothly:

**True NDVI**
```
0.20 → 0.25 → 0.31 → 0.38 → 0.46 → 0.55 → 0.64 → 0.73 → 0.79 → 0.82
```

Biologically, this makes sense. Rice doesn't suddenly grow 40% in one day.

Now suppose the satellite measures:

**Observed NDVI**
```
0.20 → 0.24 → 0.34 → 0.29 → 0.51 → 0.49 → 0.66 → 0.71 → 0.58 → 0.83
```

Did the rice actually behave like this?

**Probably not.**

The crop probably grew smoothly. The measurement became noisy.

---

## Sources of NDVI Noise

- **Atmosphere:** Dust, aerosols, and water vapor alter the signal.
- **Haze:** Reduces contrast and can lower NDVI.
- **Thin Clouds:** Distort Red and NIR bands, even if hard to detect.
- **Angular Effects (BRDF):** Different Sun/sensor angles change reflectance.
- **Sensor Noise:** Small measurement errors from the sensor.
- **Mixed Pixels:** One pixel contains multiple land-cover types.

---

## Spike

A spike is a sudden jump that lacks a plausible biological explanation.

### Example

| Date | NDVI |
|---|---|
| Jun 1 | 0.72 |
| Jun 6 | 0.74 |
| Jun 11 | 0.39 |
| Jun 16 | 0.73 |

Can a healthy rice field lose almost half its greenness in five days and fully recover five days later?

**Usually, no.**

This pattern strongly suggests an observational artifact rather than a real biological event.

---

## A Common Mistake

> "Every spike is noise."

**That is incorrect.**

A spike may represent:
- Flood damage
- Hail
- Harvesting
- Pest outbreak
- Fire
- Irrigation changes
- Cloud contamination

**Never remove a spike simply because it looks unusual. Always investigate first.**

This becomes especially important later when you study anomaly detection.
