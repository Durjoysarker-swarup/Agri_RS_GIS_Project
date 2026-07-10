# Change Detection

## When Did the System Actually Change?

Not: "When did NDVI change?" — NDVI changes almost every day.

Instead: **When did the crop system itself change?**

> Change detection is the process of identifying when a meaningful change has occurred in a system over time.

**Example**

Suppose you observe:
```
Day 1 (0.52) → Day 6 (0.53) → Day 11 (0.51) → Day 16 (0.54) → Day 21 (0.18) → Day 26 (0.17)
```

**Question:** Did the system change?

Something significant happened around Day 21.

Now compare with:
```
Day 1 (0.52) → Day 6 (0.53) → Day 11 (0.51) → Day 16 (0.54) → Day 21 (0.53) → Day 26 (0.52)
```

Nothing important happened. Only normal variability.

---

## Change Point

The time when the statistical or biological behavior of the system changes.

### What Can Change?

**The mean may change.**
```
0.30
0.32
0.31
  ↓
0.65
0.66
0.67
```

**The trend may change.**
```
Increasing ↑↑↑↑ → Flat ────
```

**The variability may change.**
```
Stable → Highly variable
```

**The growth rate may change.**

---

## Anomaly & Outlier

People often confuse anomaly with change. They are different.

### Anomaly

An observation that is unusual compared with the expected behavior.

**Example**
```
0.62 → 0.64 → 0.18 → 0.65 → 0.66
```

The 0.18 is unusual. It is an anomaly.

But... was it real? We don't know yet.

### Outlier

A data point that is far from the rest of the observations.

**Example**
```
0.72 → 0.74 → 0.75 → 0.12 → 0.76
```

0.12 is an outlier. Again: **Outlier ≠ Error**.

- An outlier is defined by its **value**.
- An anomaly is defined by its **behavior or context**.

---

## Abrupt vs Gradual Transition

### Abrupt Transition

Very fast change.

**Example**
```
0.80 → 0.79 → 0.22 → 0.20
```

Possible causes:
- Flood
- Harvest
- Fire
- Cyclone

### Gradual Transition

Slow change.

**Example**
```
0.80 → 0.76 → 0.71 → 0.65 → 0.60
```

Possible causes:
- Natural senescence
- Slow drought
- Nutrient deficiency

---

## Stress Onset & Recovery

### Stress Onset

One of the most important concepts. Stress usually doesn't begin dramatically — it starts gradually.

**Example**
```
Healthy → Healthy → Healthy → Slight decline → Stronger decline → Severe stress
```

**Question:** When did stress begin? Not when NDVI became lowest — when it first started deviating.

That first deviation is **stress onset**.

### Recovery

The opposite.

**Example — Flood**
```
0.78 → 0.30 → 0.25 → 0.40 → 0.55 → 0.70
```

Recovery begins before NDVI returns to normal. Recovery means the system starts improving.

---

## Noise vs Event

Suppose:
```
0.72 → 0.74 → 0.69 → 0.73 → 0.71
```

Small fluctuations. Probably noise. Random. Temporary. Disappears.

Now:
```
0.72 → 0.74 → 0.28 → 0.25 → 0.24
```

Persistent decline. Probably an event. Persistent. Systematic. Changes future observations.

---

## Agricultural Events & False Alarms

### Agricultural Events

- **Flood:** Usually rapid NDVI decreases. Possible waterlogging.
- **Drought:** Gradual decline. Slower than flood.
- **Harvest:** Very abrupt drop. Healthy vegetation suddenly removed.
- **Disease:** Often localized decline. Sometimes gradual, sometimes sudden.
- **Lodging:** Plants fall over due to wind or rain. Can produce sudden NDVI change, even though vegetation is still alive.

### False Alarms

- Cloud contamination
- Sensor artifact
- Processing artifact

---

## Magnitude vs. Duration

Two events can have the same NDVI drop but different meanings.

**Example**

**Case A**
```
0.80 → 0.30 → 0.79
```
Large magnitude, short duration. Likely cloud contamination.

**Case B**
```
0.80 → 0.30 → 0.28 → 0.25
```
Large magnitude, long duration. Likely real crop stress.

A real event is often characterized by both its **magnitude** (how big the change is) and its **duration** (how long it lasts).

---

## Investigation Workflow

1. Check the cloud mask.
2. Check the original satellite image.
3. Check rainfall. Was there flooding?
4. Check the crop calendar. Was the harvest expected?
5. Compare nearby fields.
   - If every field dropped, weather is likely responsible.
   - If only one field changed, local stress is more likely.

Only after investigating should you decide whether the point is:
- Real,
- Uncertain, or
- An artifact.

---

## Summary

Change detection aims to identify meaningful changes in crop behavior rather than simply detecting numerical differences in NDVI. A change point marks the onset of a new system state, while anomalies and outliers require investigation because they may represent either genuine agricultural events or measurement artifacts.

Biological events typically produce persistent changes over time, whereas noise and processing errors are usually isolated. Therefore, every detected anomaly should be interpreted within its biological, meteorological, and observational context before drawing conclusions.
