# 3.3 — Bangladesh Multi-Season Rice Logic

> "Looking at an annual NDVI curve, can I identify which rice season I am observing?"

## Part 1 — Why Bangladesh Is Different

In many countries:
```
One year → One planting → One harvest → One NDVI peak
```

Bangladesh is different. Many agricultural regions produce:
- Boro
- Aus
- Aman

Sometimes even more than one crop plus vegetables.

Multiple peaks = multiple growing seasons.

---

## Part 2 — Bangladesh Rice Seasons

### 1. Boro

**Growing period (approximately):**
- Planting → November–January
- Harvest → April–May

### 2. Aus

**Growing period:**
- Planting → March–April
- Harvest → July–August

### 3. Aman

**Growing period:**
- Planting → July–August
- Harvest → November–December

---

## Part 3 — Compare the Three Seasons

| Feature | Boro | Aus | Aman |
|---|---|---|---|
| Planting | Nov–Jan | Mar–Apr | Jul–Aug |
| Harvest | Apr–May | Jul–Aug | Nov–Dec |
| Rainfall dependence | Low | Moderate | High |
| Irrigation dependence | High | Moderate | Low to Moderate |
| Monsoon influence | Low | Moderate | Very High |
| Cloud contamination risk | Low | Moderate | High |

Notice that these are general patterns. Actual dates vary by region, cultivar, and year.

---

## Part 4 — Expected NDVI Timing

Suppose one year looks like this.

```
     Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec

NDVI
0.8 |          /\                /\
    |         /  \              /  \
0.5 |____/    \______/    \____
     Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec
```

- First peak → Probably Boro.
- Second peak → Probably Aman.

If another small, short-duration peak appears:
```
0.8 |    /\   /\    /\
```
it may represent Aus.

You identify seasons primarily by:
- Timing
- Crop calendar

**Not NDVI value.**

This is called **temporal context**. Time gives meaning. Without time, NDVI is only a number.

---

## Part 6 — Expected EVI Timing

EVI usually follows the same seasonal pattern as NDVI because both respond to vegetation growth.

The difference is not *when* they peak, but *how they behave* near dense canopies.

For rice:
- **Boro:** NDVI and EVI rise through winter and peak before harvest.
- **Aus:** Both rise during spring and early monsoon.
- **Aman:** Both rise during the monsoon and peak in autumn.

**The key distinction:**
- NDVI may level off (saturate) at high biomass.
- EVI often continues to show differences among dense canopies.

So the seasonal timing is similar, but EVI may preserve more variation around peak growth.

Notice that EVI adds:
- ✔ A Blue band to help correct atmospheric effects.
- ✔ Correction coefficients (6 and 7.5).
- ✔ A background adjustment term (+1).
- ✔ A gain factor (2.5) to scale the result.

Scientists wanted an index that could continue responding in dense vegetation. Instead of using only Red and NIR, EVI also includes a Blue band and applies correction factors.

This helps reduce:
- Atmospheric effects
- Soil background influence
- Canopy saturation

### Why Does EVI Keep Increasing?

In dense vegetation, EVI remains more sensitive to changes in canopy structure.

Suppose:

| LAI | NDVI | EVI |
|---|---|---|
| 2 | 0.60 | 0.38 |
| 3 | 0.73 | 0.52 |
| 4 | 0.81 | 0.64 |
| 5 | 0.85 | 0.71 |
| 6 | 0.86 | 0.77 |
| 7 | 0.87 | 0.82 |
| 8 | 0.88 | 0.86 |

Notice:
```
NDVI: 0.85 → 0.86 → 0.87 → 0.88   (very small changes)
EVI:  0.71 → 0.77 → 0.82 → 0.86   (still separating dense canopies)
```

These values are illustrative, but they show the typical behavior.

### Does EVI Never Saturate?

No — this is a common misunderstanding. EVI also saturates eventually. It simply saturates later than NDVI.

---

## Part 7 — Bangladesh Monsoon Problem

Aman grows during the monsoon.

```
Monsoon → Clouds → Missing observations → Interpolation → Higher uncertainty
```

Therefore not all seasons have the same data quality. This is a crucial consideration for Bangladesh-specific remote sensing.

---

## Cropping Intensity

Cropping intensity is the number of crops grown on the same piece of land in one year.

### Cropping Intensity Formula

Agronomists define it as:

```
Cropping Intensity (%) = (Gross Cropped Area / Net Cultivated Area) × 100
```

**Example**

- Net cultivated area: 100 hectares
- Total cropped area: 200 hectares (because every field is planted twice)

Therefore:
```
200 / 100 × 100 = 200%
```

Cropping intensity = 200%

### Number of Peaks Reflects Cropping System

The number of peaks in an NDVI time series is often determined by the cropping system.

**Single cropping**
```
           /\
_____/  \_____
```

**Double cropping**
```
       /\          /\
___/  \____/  \____
```

**Triple cropping**
```
   /\    /\    /\
_/  \_/  \_/  \____
```

A beginner might think multiple peaks indicate noise or sensor artifacts, but they often reflect real agricultural practice.

Understanding cropping intensity also prepares you for phenological shift analysis and anomaly detection.
