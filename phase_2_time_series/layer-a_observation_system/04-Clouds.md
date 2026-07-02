# Clouds, Monsoon & Data Collapse

## Why Don't Satellites "See Through" Clouds?

This depends on the wavelength.

Optical satellites use:
- Blue
- Green
- Red
- Near Infrared
- Shortwave Infrared

Cloud droplets strongly scatter these wavelengths. Instead of seeing the ground, the sensor mostly records the cloud.

---

## Optical Monitoring

Optical monitoring means: **Measuring Earth's surface using reflected sunlight.**

### Examples
- Sentinel-2
- Landsat

These systems require:
- Sunlight
- Clear atmosphere
- Unobstructed view

Without these, there is no observation.

---

## Cloud Persistence

Most people think clouds are temporary. In tropical regions, they are often persistent.

**Cloud persistence** means: Clouds remain over an area for many consecutive days or weeks.

### Example
```
June 1 ☁ → June 6 ☁ → June 11 ☁ → June 16 ☁ → June 21 ☁ → June 26 ☁
```

The satellite revisited every five days. But you obtained: **Zero usable images.**

*Example: Sylhet monsoon.*

---

## Data Collapse

The effective number of usable observations becomes dramatically smaller than expected because most images are unusable.

### Example
- Expected: 73 observations/year
- Usable: 18 observations/year

The dataset has collapsed. Not because data was lost. Because they never became scientifically usable.

---

## Observational Blindness

```
Monday ✔ → Tuesday ✔ → Wednesday ✔ → Thursday ✘ → Friday ✘ → Saturday ✘ → Sunday ✘
```

Did the plant condition stop changing?

**No.** The crop continues:
- Growing
- Flowering
- Experiencing stress
- Being harvested

The satellite simply cannot observe it. This is **observational blindness**.

### Why is this dangerous?

Imagine two observations:

```
June 1  → NDVI = 0.82
July 11 → NDVI = 0.31
```

What happened?

**Possible explanations:**
- Harvest
- Flooding
- Disease
- Cloud contamination
- Multiple crop stages
- Impossible to know

Forty days disappeared. The satellite became blind.

---

## Cloud Masking

Fortunately, we try to remove cloudy pixels. This is called **cloud masking**.

Instead of using ☁, we remove it.

Sounds perfect? Unfortunately, it isn't.

### Why Cloud Masking Isn't Perfect

Cloud detection itself is difficult. Clouds vary greatly:
- Thick clouds
- Thin cirrus
- Fog
- Haze
- Cloud edges

#### False Negative
- Cloud exists.
- Algorithm says: Clear.
- Bad pixels remain.
- **Result:** Noise enters NDVI.

#### False Positive
- Clear pixel.
- Algorithm says: Cloud.
- Good observation removed.
- **Result:** Less data.

### Cloud Shadows

The field itself is cloud-free. But the shadow changes reflectance dramatically.

Many cloud masks struggle with shadows, especially over complex terrain.

### Thin Cirrus

These are especially dangerous. They are almost transparent — you may not even notice them.

Yet they:
- Reduce incoming sunlight
- Change reflectance
- Alter NDVI

Sometimes cloud masks fail to detect them.

---

## Monthly Image Availability Analysis

Suppose you count usable Sentinel-2 images.

| Month | Expected | Usable |
|---|---|---|
| January | 6 | 6 |
| February | 6 | 5 |
| March | 6 | 6 |
| April | 6 | 4 |
| May | 6 | 2 |
| June | 6 | 0 |
| July | 6 | 1 |
| August | 6 | 1 |
| September | 6 | 2 |
| October | 6 | 4 |
| November | 6 | 6 |
| December | 6 | 6 |

This tells a story. The satellite didn't fail. The atmosphere prevented observation.

---

## Solution

When researchers see missing observations, they don't immediately interpolate.

They first ask:
- Were clouds responsible?
- Is this seasonal?
- Is the gap too long?
- Can the missing period be reconstructed reliably?
- Is this seasonal?
- Is the gap too long?
- Can the missing period be reconstructed reliably?
