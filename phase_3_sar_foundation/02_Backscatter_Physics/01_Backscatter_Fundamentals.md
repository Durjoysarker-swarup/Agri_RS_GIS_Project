# Day 1: Backscatter Fundamentals

## 1. Backscatter

**Backscatter** = radar energy scattered back toward the sensor.

Backscatter is not simply "reflection." Reflection is a broader physical process. When a microwave encounters an object, the energy can:

- reflect
- scatter
- penetrate
- be absorbed
- transmit through
- interact with internal structures
- be scattered in multiple directions

Only the component returning toward the radar contributes to backscatter.

### What determines backscatter?

Backscatter depends on the interaction between the radar wave and the target. Several things matter.

1. **Surface roughness** — Is the surface smooth or rough relative to the wavelength?
2. **Dielectric properties** — How much water is present? Water strongly affects dielectric properties.
3. **Structure** — What physical structures exist? For vegetation:
   - leaves
   - stems
   - branches
   - canopy arrangement
4. **Geometry** — How is the target oriented relative to the radar?
5. **Wavelength** — Different wavelengths interact differently with objects.
6. **Polarization** — VV and VH do not necessarily respond to the target in the same way.
7. **Incidence angle** — The angle at which the radar illuminates the target changes the measured return.

---

## 2. Radar Cross Section

Imagine two targets receive the same radar illumination.

Target A sends a lot of energy back toward the radar. Target B sends very little.

We need some way to characterize how strongly a target scatters radar energy. This leads to the concept of:

**Radar Cross Section (RCS)**

Usually represented by:

$$\sigma \text{ (Sigma)}$$

It describes the effective ability of a target to scatter electromagnetic energy back toward the radar.

Don't interpret it literally as simply the target's physical area.

- A small metal object can have a surprisingly large radar cross section.
- A physically large object can sometimes have a small radar return.

Because electromagnetic interaction matters more than physical size alone.

---

## 3. Sigma Naught — σ⁰

Agricultural SAR usually deals with **distributed targets**.

```
       Rice canopy

       / \      /\
      /   \    /  \
     /     \  /    \
    /       \/      \
   -------------------
         soil
```

The radar receives contributions from many scattering elements.

So instead of asking:

> "What is the radar cross section of this individual rice plant?"

We often work with the scattering behavior **per unit area**. This leads us toward:

**Backscatter coefficient**

Usually represented as: **σ0 (sigma naught)**

For a distributed surface, σ⁰ represents the normalized radar backscatter from an area.

$$\sigma^0 = \frac{\text{backscattered power}}{\text{illuminated area}}$$

The exact physical formulation is more rigorous than this simplified expression, but this is the right conceptual starting point. It allows us to compare radar returns from different areas more meaningfully.

### σ⁰ is usually expressed in decibels

You will often see SAR values like:

- -5 dB
- -10 dB
- -15 dB
- -20 dB

SAR values are negative because radar backscatter coefficients are commonly much smaller than 1. We convert them into decibels:

$$\sigma^0(dB) = 10\log_{10}(\sigma^0)$$

**Example:**

If $\sigma^0 = 0.1$:

$$10\log_{10}(0.1) = -10 \text{ dB}$$

If $\sigma^0 = 0.01$:

$$10\log_{10}(0.01) = -20 \text{ dB}$$

-10 dB represents **more** backscatter than -20 dB.

### Power vs Amplitude

Radar systems deal with electromagnetic signals that have:

- **Amplitude** → The amplitude tells us how strong the electromagnetic field oscillation is.
- **Power** → How much energy is being transferred per unit time?

$$P \propto A^2$$

For power quantities:

$$dB = 10\log_{10}(P)$$

For amplitude quantities, when the amplitude is directly proportional to field magnitude:

$$dB = 20\log_{10}(A)$$

For σ⁰, you're dealing with a power-related quantity, so:

$$\sigma^0(dB) = 10\log_{10}(\sigma^0)$$

---

## 4. The Radar Equation

Now we can connect backscatter to radar measurement.

A simplified radar equation contains terms related to:

$P_r$ = ($P_t$*$G_t$*$G_r$*$\lambda$* $\sigma$) / $R$^4
Where:

- $P_r$ = received power
- $P_t$ = transmitted power
- $G_t$ = transmit antenna gain
- $G_r$ = receive antenna gain
- $\lambda$ = wavelength
- $\sigma$ = radar cross section
- $R$ = distance between radar and target

### Useful intuition for the radar equation

Think of the entire equation as:

```
                  TRANSMITTER
                       │
                       ↓
              How much energy?
                      Pt
                       │
                       ↓
             How well focused?
                      Gt
                       │
                       ↓
                 wavelength
                       λ
                       │
                       ↓
                    TARGET
                       │
                       ↓
              How strongly does
             target scatter back?
                       σ
                       │
                       ↓
              How much is collected?
                       Gr
                       │
                       ↓
              How far did it travel?
                    R⁴ (power four because it travels two ways)
                       │
                       ↓
               RECEIVED POWER
                       Pr
```

The important idea is:

> The radar does not receive a signal that depends only on the target.

It depends on the **radar system + propagation geometry + target scattering properties**.

That is why calibration and normalization matter.

---

## 5. Backscatter is Directional

A target does not necessarily scatter energy equally in every direction.

Imagine a smooth surface:

```
                 radar
                    ↑
                   /
                  /
                 /
        ________/________
             surface
```

Depending on the surface orientation, much of the energy may go away from the radar.

Now imagine a rough surface:

```
             ↑
            ↗ ↑ ↖
          ↗  ↑  ↖
        /\/\ /\/\ /\
       rough surface
```

Energy is distributed across many directions. Some of it can return toward the radar.

Therefore:

> Backscatter depends not just on **how much** energy is scattered, but **where** that energy is scattered.

---

## 6. The Wavelength Connection

Suppose a surface has small bumps.

Whether those bumps appear "rough" to the radar depends partly on the wavelength.

A surface can be:

- smooth relative to one wavelength

but:

- rough relative to another wavelength

Therefore, roughness perception is **not** just absolute physical roughness alone. It is related to:

$$\frac{\text{surface feature scale}}{\text{wavelength}}$$

This becomes critical when comparing X-, C-, and L-band SAR.

---

## 7. Three Levels You Should Keep Separate

This is a useful mental hierarchy.

**Level 1 — Observation**
> VH = -12 dB

**Level 2 — Physical interpretation**
> The radar received a relatively stronger cross-polarized return.

**Level 3 — Agricultural explanation**
> The stronger VH may be related to increased canopy scattering during crop development.

Notice the uncertainty increases as you move upward.

```
Measurement
    ↓
Physical interpretation
    ↓
Agricultural explanation
```
