# DAY 5: TEMPORAL BEHAVIOUR OF VV AND VH

*"How do VV and VH change through time, and what can those changes tell us about a crop?"*

This is extremely important because SAR becomes much more powerful when you stop looking at one image and start looking at a time series.

**Temporal Behaviour** → How does the radar response evolve as the agricultural field changes?

## 1. Why Should VV and VH Change?

Because the physical state of the field changes.

For rice:

**Bare field → Flooding → Transplanting → Early growth → Tillering → Dense canopy → Maturity → Harvest**

Each stage changes things such as:

- vegetation amount
- canopy structure
- plant height
- stem density
- leaf orientation
- soil exposure
- water conditions
- soil moisture

Therefore:

The scattering environment changes → VV and VH can change.

## 2. VH During Crop Growth?

VH is often particularly sensitive to changes in vegetation structure and canopy complexity.

As vegetation becomes more structurally complex, VH often increases in magnitude (becomes less negative in dB).

For example, conceptually:

```
Early season:     VH = -20 dB
Growing:          VH = -16 dB
Dense canopy:     VH = -13 dB
```

This is only an illustrative example, not a universal rice curve.

### Why Does VH Often Increase

Because the canopy becomes a more complex scattering environment.

More:

- stems
- leaves
- orientations
- scattering elements
- interactions

can produce more cross-polarized energy.

So:

```
More complex canopy
        ↓
More polarization mixing
        ↓
Potentially stronger VH
```

This is one reason VH is useful for monitoring vegetation dynamics.

### But VH Does NOT Always Increase

A real SAR time series can look like:

```
VH
 ↑
 │                     /\
 │     	       __/  \__
 │    	__/
 │___/
 └────────────────→ time
```

It can rise, fall, fluctuate, and sometimes show sudden changes.

Why?

Because VH is affected by more than vegetation.

Possible factors include:

- soil moisture
- flooding
- rainfall
- canopy structure
- plant orientation
- incidence angle
- speckle
- acquisition geometry
- harvesting
- field management

Therefore:

VH increase ≠ automatically biomass increase.

## 3. VV During Crop Growth

VV is also dynamic.

VV responds to the overall scattering environment, including:

- soil
- vegetation
- water
- surface roughness
- moisture
- canopy structure
- geometry

Therefore VV can change during crop development.

But its temporal pattern may not be identical to VH. This difference is useful.

A simplified VV curve might behave something like:

```
VV
 ↑
 │      \           /────\
 │       \____/
 │
 └──────────────────────→ Time
```

Notice that it does not have to follow VH.

Because VV and VH respond differently to the changing scattering environment.

VV can remain strongly influenced by:

- soil
- moisture
- surface scattering
- canopy
- geometry

## 4. The Most Important Thing About Time Series

Suppose you see:

VH increased from −18 dB to −14 dB.

That is an observation.

You should not immediately say:

*"Rice biomass increased."*

Instead:

**Step 1 — Observation**
VH increased by ~4 dB.

**Step 2 — Hypothesis**
Possible increase in vegetation structure.

**Step 3 — Check evidence**
Look at:

- NDVI
- crop calendar
- field condition
- rainfall
- flooding
- VV
- nearby observations

**Step 4 — Interpretation**
If multiple independent observations support crop development, confidence increases.

Suppose you observe:

VH suddenly drops by 5 dB.

Don't immediately say:

*"The crop died."*

Ask:

What could cause this?

Possibilities:

- harvest
- severe structural change
- flooding/water-condition change
- moisture change
- acquisition geometry
- speckle
- processing issue
- actual crop damage

Then investigate.

## 5. Temporal Behaviour Is More Than "Up and Down"

When studying a SAR time series, look for:

**Trend**
Is the signal generally increasing or decreasing?

**Peak**
When does the signal reach maximum?

**Minimum**
When is the signal lowest?

**Sudden change**
Does something change abruptly?

**Stability**
Does the signal remain relatively constant?

**Repeated pattern**
Does the pattern repeat seasonally?

These temporal characteristics can contain agricultural information.

## 6. VV and VH Together

Imagine:

```
Time →

VV:  ──╲____╱────╲____
VH:  ───╱──────╲──────
```

The relationship between the two channels can itself be informative.

For example, you might observe:

VH ↑
VV relatively stable

That could be consistent with increasing vegetation structural contribution.

## 7. Why This Matters in Monsoon Bangladesh

This is especially relevant to your research environment.

Optical Sentinel-2 observations can be disrupted by:

- clouds
- cloud shadows
- persistent monsoon conditions

SAR can operate through cloud cover.

Therefore, SAR can provide observations when optical monitoring has gaps.

But:

SAR is not automatically a replacement for NDVI.

Instead, the two sensors can be complementary.

### Temporal Resolution Matters

Suppose you have observations:

- June 1
- June 13
- June 25
- July 7
- July 19
- ...

You can construct a time series.

But if observations are too sparse:

```
June ───────────── August
```

you may miss important events.

For example:

Flood → growth → recovery

could happen between two observations.

Therefore:

Temporal sampling determines what agricultural dynamics you can actually observe.

This connects directly to your earlier work on observation gaps.
