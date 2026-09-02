# DAY 6: POLARIZATION RATIOS

Today you will learn how to use VV and VH together, rather than interpreting them separately.

The main quantities are:

- VV/VH ratio
- VV − VH difference in dB
- Why ratios can reveal information that a single polarization channel may not show clearly
- How to interpret these quantities scientifically over crops

## 1. First: Why Compare VV and VH?

Comparing them tells you something about the relative polarization response.

For example:

**VV = -10 dB**
**VH = -15 dB**

VV is stronger than VH.

The question becomes:

How much stronger is VV relative to VH?

That is where ratios and differences become useful.

## 2. Start With Linear Power

Before dB, let's understand the simple case.

Suppose:

**VV = 10** and **VH = 2**

Then:

**VV/VH = 5**

This means:

The VV power is 5 times the VH power.

This is a relative measurement.

### Why Is This Useful?

Imagine two fields.

**Field A**
VV = 10, VH = 2
VV/VH = 5

**Field B**
VV = 20, VH = 4
VV/VH = 5

The absolute backscatter is different, but the relative relationship is the same.

This tells you something important:

A ratio can describe the relative behavior between two channels, rather than their absolute magnitude.

## 3. But Sentinel-1 Data Are Usually in dB

For example:

VV = -10 dB
VH = -15 dB

Now you might wonder:

*"Can I simply calculate VV/VH?"*

Not directly if the values are still in dB. Because dB is logarithmic.

### The Important dB Rule

For two quantities expressed in dB:

$$
VV_{dB} - VH_{dB}
$$

represents the logarithm of their power ratio.

For example:

$$
-10 - (-15) = 5 \text{ dB}
$$

So the VV−VH difference is 5 dB.

This corresponds to a linear power ratio of:

$$
10^{5/10} \approx 3.16
$$

So VV power is about 3.16 times VH power.

Division in linear power becomes subtraction in dB.

| VV − VH | VV/VH power ratio |
|---|---|
| 0 dB | 1× |
| 3 dB | ≈2× |
| 6 dB | ≈4× |
| 10 dB | 10× |
| 20 dB | 100× |

### Ratio Change

The ratio changes when VV and VH change at different rates.

Suppose initially:

VV = -10 dB
VH = -15 dB
Difference: 5 dB

Later:

VV = -11 dB
VH = -13 dB
Difference: 2 dB

What happened?

VH became relatively stronger compared with VV.

That can indicate a change in the relative scattering behavior.

### This Is Especially Interesting During Crop Growth

Imagine rice development:

**Bare field → Early growth → Tillering → Dense canopy → Maturity → Harvest**

VV and VH can change differently during this process.

Therefore: VV−VH can also change through time.

## 4. Why Ratios Can Sometimes Help

Suppose the entire SAR signal becomes stronger because of some external factor.

For example:

VV ↑
VH ↑

If both increase similarly, their ratio may change less.

This can sometimes make the ratio more focused on the relative polarization behavior.

But be careful:

Ratios do not automatically remove all unwanted effects.

They can reduce some common influences while retaining or even amplifying others.

## 5. Polarization Ratio as a Time Series

Now combine everything you've learned.

You could have:

| Date | VV | VH | VV−VH |
|---|---|---|---|
| June 1 | −12 | −20 | 8 |
| June 13 | −11 | −18 | 7 |
| June 25 | −10 | −16 | 6 |
| July 7 | −10 | −14 | 4 |
| July 19 | −11 | −13 | 2 |
| Aug 1 | −10 | −12 | 2 |
| Aug 13 | −13 | −17 | 4 |

The difference:

8 → 7 → 6 → 4 → 2 → 2 → 4

decreases during development and then increases again.

This could be consistent with:

```
crop development
       ↓
VH becomes relatively stronger
       ↓
VV−VH decreases
       ↓
maturity
       ↓
harvest/structural change
       ↓
VH changes
       ↓
VV−VH increases
```

But again:

This is an interpretation hypothesis, not proof.

## 6. Why This Matters for Agricultural Research

Imagine you're monitoring rice.

You have:

- **VV** → Information about the co-polarized response.
- **VH** → Information about the cross-polarized response.
- **VV−VH** → Information about their relative response.
- **NDVI** → Independent optical information.

Now you have several complementary observations. This is much more powerful than using one variable blindly.

## 7. One More Important Issue: Ratios and Noise

Suppose VH is extremely weak.

For example: VH = −30 dB

Small measurement/noise effects can become important.

Because ratios involve division, a very small denominator can make the ratio unstable.

Therefore:

Don't blindly calculate ratios everywhere without considering signal quality.

This will become important when you study SAR preprocessing and quality assessment.
