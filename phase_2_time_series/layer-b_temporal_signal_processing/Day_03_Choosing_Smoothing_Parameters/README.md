# 2.3 — Choosing Smoothing Parameters

How much smoothing is scientifically acceptable? How much smoothing still represents biological reality?

Yesterday you learned: smoothing removes noise.

Today you learn: every smoothing algorithm has a "strength" parameter. That parameter controls noise reduction.

- More smoothing → Less noise → More information loss
- Less smoothing → More biological details → More noise

**There is no perfect setting.**

---

## Why Parameters Matter

Imagine three researchers. All use the same Sentinel-2 NDVI. All use the same Savitzky-Golay filter. Only one thing changes.

**Window Size**
```
Researcher A → 5
Researcher B → 9
Researcher C → 15
```

Three different curves. Three different conclusions.

This is why scientific papers always report their smoothing parameters. Without them, the study cannot be reproduced.

---

## Parameter 1 — Window Size

### What is a Window?

Imagine this NDVI series.

```
0.30 → 0.35 → 0.42 → 0.56 → 0.71 → 0.83 → 0.88 → 0.81 → 0.65 → 0.42
```

Suppose Window = 5. The algorithm only looks at:
```
0.42 → 0.56 → 0.71 → 0.83 → 0.88
```
to estimate the center. Then it slides:
```
0.56 → 0.71 → 0.83 → 0.88 → 0.81
```

This moving neighborhood is called the **window**.

### Small Window

```
Window = 3
● ● ●
```

The algorithm only sees nearby points.

**Advantages**
- Keeps sharp peaks
- Detects rapid changes
- Preserves stress

**Disadvantages**
- Noise remains

### Large Window

```
Window = 15
● ● ● ● ● ● ● ● ● ● ● ● ● ● ●
```

**Advantages**
- Very smooth.

**Disadvantages**
- Peaks disappear
- Valleys disappear
- Timing shifts
- Stress events disappear

### Choosing Window Size

There is no universal answer. It depends on:

**1. Revisit Interval**

Sentinel-2 ≈ every 5 days. Suppose Window = 7 observations. That means:
```
7 × 5 ≈ 35 days
```

Now think: does rice biology change within 35 days? Yes, quite a lot. So a 35-day window may smooth away real phenological changes.

**2. Crop Growth Speed**

Different crops grow differently.

- **Rice:** Rapid greening, rapid heading, rapid senescence. Needs smaller windows.
- **Forest:** Very slow. Can tolerate larger windows.

**3. Observation Frequency**

This is much more important, because even though the satellite may revisit every 5 days, it still needs to actually collect usable data.

Suppose Sentinel gives:
```
Day 1
Day 20
Day 42
Day 61
```

A window of five observations now covers almost three months. Very different meanings — the same parameter behaves differently because the sampling interval changed.

Large windows become dangerous because they span observations separated by long periods.

---

## Parameter 2 — Kernel Size

Kernel means the local neighborhood used for smoothing.

Often:
```
Kernel Size = Window Size
```

although in some methods they differ.

You can think of it simply as: how many nearby observations influence the estimate?

---

## Parameter 3 — Polynomial Order (Savitzky-Golay)

SG does not average. It fits a polynomial.

```
Order 1      → Straight line.  /
Order 2      → Parabola.       ∪
Order 3      → More flexible.  ~
Higher order → More flexibility → More risk of fitting noise.
```

---

## Parameter 4 — Bandwidth (LOESS)

Bandwidth tells LOESS how much of the neighborhood to consider.

- Large bandwidth → Very smooth.
- Small bandwidth → Very flexible.

Exactly the same trade-off.

---

## Parameter 5 — λ (Lambda) Controls Smoothness

λ decides how smooth the final curve should be. Think of it as the smoothing strength.

**Small λ**
- Follows the original observations closely.
- Preserves more details.
- Keeps more noise.
```
Observed:  /\_/\/\__
Smoothed:  /\_/\/\__
```

**Large λ**
- Ignores small fluctuations.
- Produces a smoother curve.
- May remove real biological events.
```
Observed:  /\_/\/\__
Smoothed:  __/¯¯\____
```

### Typical λ Values in Remote Sensing

| λ Value | Amount of Smoothing | Typical Effect |
|---|---|---|
| 1 – 10 | Very little | Curves follow observations closely; much of the noise remains. |
| 100 – 1,000 | Moderate | Reduces noise while preserving most biological features. |
| 10,000 – 100,000 | Strong | Produces a very smooth seasonal curve; small fluctuations disappear. |
| >100,000 | Very strong | Can oversmooth and remove real biological events. |

---

## Parameter 6 — Asymmetry Parameter (p)

This parameter is only used in Asymmetric Whittaker Smoothing (AWS).

In vegetation time series:
- Clouds usually make NDVI too low.
- Clouds almost never make NDVI too high.

So AWS treats low values differently from high values.

**Small p**

The algorithm ignores unusually low values (likely caused by clouds).

Example:
```
0.72
0.74
0.35   ← Cloud
0.76
0.77
```

AWS recognizes that 0.35 is probably not real and does not let it pull the curve downward.

**Large p**

The algorithm treats low values more like normal observations. The curve follows them more closely.

### Typical p Values in Remote Sensing

| p Value | Treatment of Low NDVI Values | Typical Effect |
|---|---|---|
| 0.001 – 0.01 | Very strong asymmetry | Strongly ignores cloud-contaminated low values; follows the upper envelope of the vegetation signal. Most common choice for NDVI time series. |
| 0.01 – 0.05 | Moderate asymmetry | Ignores many low outliers while still considering some genuine decreases. Good balance in many applications. |
| 0.05 – 0.1 | Mild asymmetry | Trusts low observations more; some cloud-contaminated points may pull the curve downward. |
| > 0.1 | Little asymmetry | Behaves increasingly like a symmetric smoother; low values are treated almost the same as high values. May not adequately correct cloud-related drops. |

---

## Bias–Variance Trade-off

This is one of the most important ideas in all of statistics and machine learning.

**Very Small Window**
- Noise remains.
- Curves follow every fluctuation.
- Low bias. High variance.

**Very Large Window**
- Very smooth.
- Real peaks disappear.
- High bias. Low variance.

---

## Scientific Reproducibility

A scientific paper should never say:
> "We applied Savitzky-Golay."

Instead it should report:
- Window size
- Polynomial order
- Software
- Implementation
- Smoothing parameter
- Handling of missing observations

Otherwise, nobody can reproduce the analysis.

---

## Why You Should Never Copy Parameters

This is one of the biggest mistakes in remote sensing.

**Paper A**
- Window = 9
- Rice
- Vietnam
- 5-day observations

**Your Study**
- Bangladesh
- Cloudy monsoon
- Large gaps
- Different crop calendar
- Different revisit interval

The same parameter is no longer appropriate.

Always justify parameters using:
- Revisit interval
- Observation density
- Crop phenology
- Research objective

---

## Connection to Machine Learning

This day is not just about remote sensing. It's about **hyperparameters**.

- Window size is a hyperparameter.
- Polynomial order is a hyperparameter.
- Bandwidth is a hyperparameter.

Later, in machine learning, you'll encounter:
- Learning rate
- Number of trees
- Regularization strength
- Number of layers

The mindset is the same: **parameters are scientific assumptions**. They influence the results and must be selected and reported carefully.

---

## Validating Smoothing

Suppose you have one NDVI time series.

**Raw observations:**
```
0.30 → 0.35 → 0.42 → 0.56 → 0.71 → 0.40 (Cloud contamination) → 0.88 → 0.81 → 0.65 → 0.42
```

You apply three different λ values.

**λ = 100**
```
0.30 → 0.35 → 0.42 → 0.56 → 0.70 → 0.45 → 0.87 → 0.81 → 0.65 → 0.42
```
Very close to the observations.

**λ = 1,000**
```
0.31 → 0.36 → 0.44 → 0.57 → 0.69 → 0.66 → 0.84 → 0.79 → 0.64 → 0.43
```
Balanced.

**λ = 100,000**
```
0.42 → 0.46 → 0.50 → 0.55 → 0.60 → 0.64 → 0.68 → 0.70 → 0.68 → 0.65
```
Very smooth.

### Which one is correct?

λ = 100,000 "looks beautiful." But it is completely wrong.

> **Beautiful ≠ Correct**

---

### Validation Method 1 — Compare with High-Quality Observations

Suppose your NDVI series has 20 observations. Some are cloudy, hazy; some are perfectly clear.

Those clear-sky observations are your most trustworthy points.

**Example**

| Day | Condition |
|---|---|
| 5 | Clear |
| 10 | Cloud |
| 15 | Cloud |
| 20 | Clear |
| 25 | Clear |
| 30 | Haze |
| 35 | Clear |

If your smoother changes the clear observations too much, it is probably too aggressive.

### Validation Method 2 — Compare with Known Biological Events

Suppose you know:
- Rice heading occurred → Day 95.
- Harvest occurred → Day 128.

After smoothing, check this.

### Validation Method 3 — Cross-Validation

Imagine 10 observations.
```
0.30 → 0.35 → 0.42 → 0.56 → 0.71 → 0.83 → 0.88 → 0.81 → 0.65 → 0.42
```

Now pretend you never observed the sixth value. Remove it.
```
0.30 → 0.35 → 0.42 → 0.56 → 0.71 → ? → 0.88 → 0.81 → 0.65 → 0.42
```

Now smooth. Your algorithm predicts → 0.82. The real observation was → 0.83. Excellent.

Repeat many times. The parameter with the lowest prediction error is often the best.

This is called **cross-validation**.

---

## Biological Validation Is Different from Mathematical Validation

- Mathematics asks: is the curve smooth?
- Biology asks: does this curve represent crop growth?

Always remember: **remote sensing serves biology, not mathematics.**
