# 2.2 — Smoothing Methods

## How Can We Reduce Noise Without Destroying Biological Information?

### The Fundamental Problem

A satellite observes:

> **Observed NDVI = True Vegetation Signal + Noise**

Imagine the true crop growth looks like this:

**True NDVI**
```
0.8              /\
                /  \
              /    \
0.2 _________/      \________
```

This is what biology actually does.

**Observed NDVI**
```
0.8       /\  /\
         /  \/    \
0.2 ___/           \____
```

The overall pattern is still there, but small random fluctuations appear. These fluctuations are **noise**.

Our goal is to recover something closer to the biological curve.

---

## Smoothing

A mathematical process that reduces short-term fluctuations while preserving the long-term structure of the signal.

---

## The Three Similar Words

### 1. Smoothing

> "Can I make this curve less jagged?"

Notice something important. You are **NOT** asking:
- What is noise?
- What is a signal?
- Which frequency should disappear?

**Example**

Original:
```
4  7  5  8  6  9  5
```

After moving average:
```
5  5.3  6.7  6.3  7.7
```

The curve becomes smoother.

**Example**

Temperature:
```
30  31  30  31  52  30  31
```

Maybe 52 is sensor error. Maybe not. Smoothing simply softens it.

```
30  30.5  30.7  37  37  30.5
```

The spike became smaller.

### 2. Filtering

Filtering is much broader. Filtering says:

- Keep ✓ low frequencies, or
- Keep ✓ high frequencies, or
- Keep ✓ middle frequencies

**Example**

```
Signal = Plant growth + Weekly irrigation cycle + Random noise
```

Filtering lets you choose. Maybe you want only:
- Plant growth, or
- Weekly cycle, or
- Noise

Filtering allows that.

**Types**
```
Filtering
├── Low-pass
├── High-pass
├── Band-pass
├── Band-stop
└── Smoothing filters
```

Smoothing is only ONE member of this family.

**Low-pass filter** — Keeps slow changes. Removes rapid fluctuations.
```
Before → \/\/\/\/\/\/\/
After  → ~~~~~~~~~~~~~~
```

**High-pass filter** — Removes slow trends. Keeps rapid changes.

**Band-pass filter** — Keeps only a specific frequency range.

Example: Heart rate. Ignore breathing, movement, electrical noise. Keep only heartbeat frequencies.

### 3. Denoising

Now comes the most interesting one. The question changes again.

Instead of asking:
- Can I be smooth?, or
- Which frequencies should I keep?

Ask:
> What is the TRUE signal?

This is much harder.

```
Observed = True signal + Noise
```

Denoising tries to estimate the true signal as accurately as possible.

**Example**

Suppose true NDVI:
```
0.60  0.62  0.63  0.64  0.65
```

Satellite measures:
```
0.60  0.61  0.90  0.64  0.65
```

A denoising algorithm says: "This 0.90 is impossible." It replaces it.

```
0.60  0.61  0.63  0.64  0.65
```

Notice: the goal was not smoothing. The goal was **recovering reality**.

#### Denoising Often Needs Knowledge

Many denoising methods use assumptions.

**Example:** Plants cannot instantly jump.
```
0.45 → 0.91 → 0.46
```

So the algorithm knows: "This jump is unrealistic." Therefore it removes it.

---

## Relationship

```
Signal Processing
├── Filtering
│      ├── Low-pass
│      ├── High-pass
│      ├── Band-pass
│      ├── Band-stop
│      └── Smoothing
│
└── Denoising
       ├── Moving Average
       ├── Savitzky-Golay
       ├── Wavelets
       ├── Median Filter
       └── Machine Learning
```

Some methods (like Moving Average or Savitzky–Golay) can be used for both smoothing and denoising, depending on the goal.

---

## Smoothing Methods — Which Observations Should I Trust?

Different algorithms answer differently.

### Method 1 — Moving Average

A Moving Average (MA) is the simplest smoothing method. It reduces random fluctuations by replacing each value with the average of its neighboring values, producing a smoother curve.

**How does it work?**
1. Choose a window size (e.g., 3 or 5).
2. Calculate the average of the values inside the window.
3. Replace the center value (or assign the average to the window).
4. Slide the window one step forward.
5. Repeat until the end of the series.

**Example (3-point window)**

Original NDVI:
```
0.40  0.60  0.95  0.62  0.43
```

Calculations:
```
(0.40 + 0.60 + 0.95) / 3 = 0.65
(0.60 + 0.95 + 0.62) / 3 = 0.72
(0.95 + 0.62 + 0.43) / 3 = 0.67
```

Smoothed NDVI:
```
0.65  0.72  0.67
```
(Or five values if edge handling is used.)

**Why does it work?**

Random noise is usually random:
- Some errors are positive.
- Some errors are negative.

When neighboring values are averaged, these errors tend to cancel each other out, leaving a more stable estimate of the underlying trend.

**Strengths**
- Very easy to understand.
- Very fast to compute.
- Reduces random noise effectively.
- Good for visualizing overall trends.

**Weaknesses**
- Reduces the height of real peaks.
- Blurs sudden biological events.
- May shift the timing of important events.
- Gives equal weight to every value in the window.
- Not ideal when preserving sharp features is important.

**When should you use it?**

Use a Moving Average when:
- You want a quick and simple smoothing method.
- Your goal is to visualize the overall trend.
- Exact peak values and timing are not critical.

Avoid it when:
- Detecting flowering, harvest, or disease onset.
- Preserving sharp peaks or sudden changes.
- Accurate scientific analysis of biological events.

### Method 2 — Savitzky-Golay

**1. The Philosophy Behind SG**

> "The true signal changes smoothly over a short period and can be approximated by a simple mathematical curve."

This assumption is why SG works well for vegetation.

**Why is this assumption reasonable?**

Think about crop growth. Does a crop grow like this?
```
0.40 → 0.90 → 0.20 → 1.10 → 0.30
```

No. Real crop growth is more like:
```
0.40 → 0.60 → 0.95 → 0.70 → 0.45
```

These are smooth biological processes. So SG says: "Instead of trusting every noisy measurement, I'll estimate the smooth curve that most likely produced them."

**2. What is a Polynomial?**

Don't think of the word "polynomial." Think of curve.

```
Degree 0      → ──────── → A flat line.
Degree 1      → /        → A straight line.
Degree 2      → ∪ or ∩   → A parabola.
Degree 3      → ~        → Can bend more.
Higher degree → Can bend even more.
```

- **Too low:** Cannot represent real biology.
- **Too high:** Starts fitting noise. This is called **overfitting**.

**3. Why Fit a Curve?**

Suppose you have:
```
0.40 → 0.60 → 0.95 → 0.62 → 0.43
```

The center point looks high. Should we trust it completely? Maybe, maybe not.

Instead of trusting one point, SG asks: "What smooth curve best explains all five observations together?"

That curve represents the local biological trend.

**4. What Does "Best Fit" Mean?**

SG searches for the one that stays closest to all points overall. It doesn't try to touch every point — it tries to minimize the total error: the one with the smallest total squared error.

SG is not minimizing noise. It is minimizing the mismatch between the curve and the observed data. Noise naturally becomes less influential because noisy points make the total error larger.

**5. Window Size**

The window determines how much local information the algorithm uses.

```
Window = 5   →  ● ● ● ● ●
Window = 11  →  ● ● ● ● ● ● ● ● ● ● ●
```

- **Small window:** Less smoothing. More detail. More remaining noise.
- **Large window:** More smoothing. Less noise. Greater risk of smoothing away real features.

**6. Why Is It Called a Low-Pass Filter?**

Signals contain slow changes and fast changes. Crop growth changes slowly. Noise changes rapidly.

SG naturally follows the slow trend while ignoring very rapid wiggles. Those rapid wiggles are called **high-frequency components**. The slow trend is **low-frequency**.

Since SG keeps slow changes and suppresses rapid ones, it behaves like a low-pass filter.

**7. Assumptions SG Makes**
- The signal changes smoothly; neighboring observations belong to the same local trend.
- Enough observations exist in the window.
- Noise is relatively small compared to the true signal.

**8. When Does SG Fail?**
- Missing values
- Very noisy data
- Very large window
- Very high polynomial degree

### Method 3 — Whittaker Smoother

> "If I had to draw one smooth curve through all the observations, what would be the best curve?"

It does not process one window at a time. It looks at the entire time series simultaneously. That is its biggest difference.

**The Philosophy**

Whittaker has two goals that compete with each other.

- **Goal 1:** Stay close to the observations.
- **Goal 2:** Make the curve smooth.

These goals conflict. Suppose one point is 0.90. If the curve passes exactly through it, the curve becomes jagged. If the curve ignores it, the curve becomes smoother. Whittaker tries to find the best compromise.

**The Optimization Problem**

*Part 1 — Distance from observations:* Don't move too far away from the measured data. If the observed NDVI is 0.65, don't predict 0.20 unless there is very strong evidence.

*Part 2 — Roughness penalty:*

Imagine two curves.
```
Curve A → ~~~~~~~~~~
Curve B → /\/\/\/\/\/\
```

Curve B changes direction constantly. Whittaker says: "I don't like unnecessary wiggles." Every wiggle gets a penalty. The rougher the curve, the larger the penalty.

**The Cost Function**

Conceptually, Whittaker minimizes:

> **Total Cost = Data Error + Smoothness Penalty**

If a curve matches the observations, being very rough increases its cost. Whittaker searches for the curve with the smallest total cost.

**What is λ (Lambda)?**

It controls the trade-off.

- **Small λ:** Care mostly about matching the observations. The curve follows almost everything, including noise.
- **Large λ:** Care mostly about smoothness.
```
Result → ~~~~~~~~~~~~~~
```
Very smooth, but important details may disappear.

```
Small λ → Slight smoothing.
Large λ → Strong smoothing.
Huge λ  → Almost a straight line.
```

**Why Is This Better for Satellites?**

Satellite data often contain:
- Clouds
- Haze
- Shadows
- Atmospheric effects
- Missing observations

These problems affect the entire time series. Window-based methods only look locally. Whittaker looks at the whole season. That often produces a more biologically realistic curve.

**Compare With Savitzky–Golay**

```
Savitzky–Golay: Window → Polynomial → Move → Repeat   (Only local information)
Whittaker:      Whole time series → One optimization → One smooth curve   (Global information)
```

**Which Is Better?**

This depends on the question.

*Savitzky–Golay best when:*
- Peaks are important
- Local shape matters
- Data quality is good

*Whittaker best when:*
- Many observations
- Noisy satellite data
- Cloud contamination
- Missing values
- Long vegetation monitoring

This is why many MODIS and Sentinel processing pipelines use Whittaker or Asymmetric Whittaker Smoothing.

### AWS (Asymmetric Whittaker Smoothing)

**Why do we need "Asymmetric"?**

An ordinary Whittaker smoother assumes: errors are equally likely to be above or below the true value.

But is this true for NDVI? For satellite vegetation data, **No**. Clouds introduce a biased error.

**What does a cloud do?**

Imagine the true NDVI is 0.80. A cloud blocks part of the reflected light. The satellite might measure 0.45. The cloud reduced NDVI — it did not increase it.

Can clouds create NDVI higher than reality? Almost never. Clouds usually:
- Reduce reflected NIR
- Increase contamination
- Lower vegetation indices

This is a key property of satellite vegetation data.

**What does ordinary Whittaker do?**

It sees a point below the curve and thinks: "Maybe the curve should move down." Because it treats every point equally, the whole curve is pulled downward.

But we know those low points are probably caused by clouds. They are not true crop changes. So we don't want them to influence the curve very much.

**This is where Asymmetric Whittaker comes in**

Not all errors should be treated equally. Specifically:
- Points below the curve → Probably cloud contamination → Give them less influence.
- Points above the curve → More likely to represent the true signal → Give them more influence.

**Think Like a Teacher**

Imagine five exam scores:
```
80  82  81  30  83
```

You know one student was sick during the exam. Would you calculate the average normally? Probably not. You'd think: "That 30 isn't representative." So you give it less weight.

AWS does the same thing.

**Why Is It Called "Asymmetric"?**

"Asymmetric" means the penalty is different in different directions.

Ordinary Whittaker:
```
Above curve → Penalty = 1
Below curve → Penalty = 1   (Perfect symmetry)
```

Asymmetric Whittaker:
```
Above curve → Penalty = 1
Below curve → Penalty = 0.2   (values depend on the implementation)
```

Now the algorithm is much less influenced by low outliers.

**Does AWS Ignore Every Low Value?**

No. Suppose the crop is actually senescing:
```
0.85  0.80  0.72  0.60  0.48
```

These values are genuinely decreasing. AWS does not automatically ignore them. It looks at the overall pattern. If many consecutive points decrease smoothly, that is likely to be real biology.

If there is just one sudden drop:
```
0.82  0.81  0.40  0.80  0.79
```

That looks like cloud contamination.

**A Caveat**

> "Points above the curve are more likely to represent the true signal."

Not necessarily. High points can also be caused by noise, atmospheric effects, or sensor issues.

**Summary Table**

| Feature | Savitzky–Golay | Whittaker |
|---|---|---|
| Main idea | Fit local polynomials | Optimize one smooth curve |
| Scope | Local windows | Entire time series |
| Main parameter | Window size, polynomial degree | λ (smoothness) |
| Handles noisy satellite data | Good | Excellent |
| Handles missing data | Moderate | Better |
| Computational cost | Moderate | Moderate to high |
| Common in NDVI research | Very common | Very common (especially long-term monitoring) |

### Method 4 — Gaussian Filter

Imagine giving nearby observations different importance.
- Closest observations → High weight
- Far observations → Low weight

**Advantage:** Produces very smooth transitions. Less abrupt than moving average.

**Limitation:** Still smooths peaks.

### Method 5 — LOESS (Concept)

LOESS = Local Regression.

Instead of fitting one polynomial to the whole dataset, LOESS fits many local regressions. Imagine drawing many tiny curves instead of one large curve.

**Advantages**
- Very flexible.
- Handles nonlinear biological signals well.

**Disadvantages**
- Computationally expensive.
- Choice of bandwidth matters.

---

## Comparing the Methods

| Method | Preserves Peaks | Preserves Timing | Computational Cost | Typical Use |
|---|---|---|---|---|
| Moving Average | ❌ Poor | ❌ Can shift peaks | Very Low | Quick exploratory analysis |
| Savitzky-Golay | ✅ Good | ✅ Good | Low–Moderate | Phenology, crop monitoring |
| Gaussian | ⚠ Moderate | ⚠ Moderate | Low | General smoothing |
| LOESS | ✅ Very Good | ✅ Good | High | Flexible nonlinear trends |
| Whittaker | ✅ Very Good | ✅ Very Good | Moderate | Satellite vegetation time series |
