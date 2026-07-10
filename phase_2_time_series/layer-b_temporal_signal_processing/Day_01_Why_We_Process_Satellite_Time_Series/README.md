Process Satellite Time Series

## Why Can't We Analyze Raw NDVI Directly?

The answer is:

> Because the raw NDVI is not a pure measurement of vegetation. It is a mixture of biological information and many unwanted effects.

The job of preprocessing is to separate these two.

---

## The Big Picture

Think of a satellite observation like listening to a person speaking in a crowded room.

```
What You Hear = Person's Voice + People Talking + Traffic Noise + Fan Noise + Echo
```

Can you understand the person? Usually yes. But not perfectly.

```
Observed NDVI = True Vegetation Signal
              + Atmospheric Effects
              + Cloud Contamination
              + Sensor Noise
              + Viewing Geometry
              + Mixed Pixels
              + Processing Artifacts
```

The satellite never measures only the crop. It measures everything together.

---

## Signal

Any quantity that changes over time or space and carries information.

### Continuous Signal

Nature is continuous. Imagine the height of a rice plant.

The same is true for:
- Chlorophyll
- Biomass
- Water content
- Leaf Area Index (LAI)
- Photosynthesis

### Discrete Signal

Now imagine Sentinel-2. It observes:

```
Day 1 ───●──── Day 6 ───●──── Day 11 ───●──── Day 16 ───●──── Day 21
```

Between Day 6 and Day 11, the satellite knows nothing.

This is a **discrete signal**.

---

## Noise

Variation in the observation that does not represent the real biological process.

### Sources of Noise

1. **Atmosphere**
2. **Thin Clouds**
3. **Haze**
4. **Sensor Noise**
5. **BRDF Effects** (Bidirectional Reflectance Distribution Function)

   Imagine holding a shiny leaf. Rotate it. The brightness changes.

   Did the leaf change? No, the viewing angle changed.

   Satellites also observe from different angles. Sun angles also change. Therefore, the same field can produce different reflectance.

6. **Mixed Pixels**

---

## Preprocessing

Preprocessing attempts to suppress unwanted variation.

But imagine a noisy curve:

```
Raw       → /\__/\____/\_
Processed →  __________
```

Noise disappeared. But...

So did the peak.

What if that peak represented:
- Flowering?
- Drought?
- Flood?
- Disease?

**You've removed biology.**

---

## Information vs Distortion

Every processing method has two effects.

It removes: ✅ unwanted variation

But it may also remove: ❌ meaningful biological variation

This is called the **bias–variance trade-off** in statistics and machine learning.

### Example

Suppose a flood occurred.

**Raw NDVI:**
```
0.72 → 0.74 → 0.29 → 0.71 → 0.73
```

A smoothing algorithm might produce:
```
0.72 → 0.68 → 0.61 → 0.67 → 0.72
```

The flood almost disappears.

The algorithm reduced noise, but also reduced the real event.

---

## Decision Rule

Before applying any preprocessing step, ask:

1. What specific problem exists in my data?
2. Is the chosen method designed to solve that problem?
3. What assumptions does the method make?
4. Could it remove genuine biological events?
5. How will I justify this choice in a scientific paper?

**If you can't answer these questions, don't apply the method just because it's available.**
