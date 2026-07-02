# 1.5 — Missing Data Science

## The Big Idea

| Date | NDVI |
|---|---|
| Jan | 0.25 |
| Feb | 0.34 |
| Mar | 0.51 |
| Apr | ? |
| May | ? |
| Jun | ? |
| Jul | ? |
| Aug | ? |
| Sep | 0.72 |
| Oct | 0.54 |
| Nov | 0.33 |

Are the missing values harmless?

Most beginners answer:
> "We can just interpolate."

**This is often wrong.**

The first question should be: **Why are they missing?**

---

## Missing Data vs Missing Information

Suppose your June image is missing.

Did June disappear? **No.**

The crop still:
- Grew
- Flowered
- Responded to rainfall
- Accumulated biomass

Only your observation is missing.

Therefore:

> **Missing observation ≠ Missing process**

The biological process continued.

---

## Missingness

Statisticians use the word **missingness**. It means:

> The mechanism that determines why data are missing.

---

## Three Types of Missing Data

These ideas were introduced by statisticians Donald Rubin and Roderick Little and are used across medicine, economics, ecology, and remote sensing.

### 1. MCAR — Missing Completely At Random

The probability that data are missing is unrelated to anything.

Imagine writing every observation on pieces of paper. A child accidentally drops five papers.

**Example:** A computer crashes. Random storage corruption. Hard drive failure.

These are close to MCAR.

MCAR is the least problematic type of missing data. Other values can represent the system.

### 2. MAR — Missing At Random

Missingness depends on other observed variables, but not on the missing value itself.

**Example:**
Imagine a crop survey. Older farmers are less likely to answer. Age is known. Yield is missing. Missingness depends on age, not directly on yield.

Since age is observed, statistical models can often account for this.

**Remote Sensing Example:**
Suppose cloud occurrence depends on:
- Elevation
- Season
- Rainfall

These variables are known. Missingness depends on observed variables. That resembles MAR.

### 3. MNAR — Missing Not At Random

Missingness depends on the missing value itself.

**Medical Example:**
People with severe depression are less likely to answer a mental health survey. Their missingness depends on the thing being measured. That creates serious bias.

---

### Summary

- **MCAR:** Missing for no reason.
- **MAR:** Missing because of another known variable.
- **MNAR:** Missing because of the missing value itself.

---

## Seasonal Missingness

Clouds follow climate. Climate follows seasons.

Therefore:

> Missing observations follow seasons. Missingness is systematic.

### Why This Matters

Imagine rice reaches maximum greenness in July. Unfortunately, July is also the cloudiest month.

Your dataset now contains:
- Early growth ✓
- Peak growth ✗
- Late growth ✓

The most important biological stage is missing.

Your dataset is no longer an unbiased sample of the crop cycle.

---

## Why Interpolation Can Be Dangerous

Many people think:
> "Let's fill the gaps."

But imagine this gap:

```
June   ?
       ?
       ?
       ?
       ?
August
```

How can you reconstruct July, when you never observed the peak?

Interpolation may produce a smooth curve, but the true peak could have been:
- Earlier
- Later
- Higher
- Lower

The uncertainty is much greater than the interpolated curve suggests.
