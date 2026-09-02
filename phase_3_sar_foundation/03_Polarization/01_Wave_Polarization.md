# DAY 1: WAVE POLARIZATION

Polarization tells us about the orientation of the electromagnetic field of the radar wave.

Imagine a radar wave traveling toward a target:

```
RADAR
  │
  │ electromagnetic wave
  ↓
TARGET
```

The electric field can oscillate in a particular orientation.

For example:

**Vertical:**
```
    ↑
    │
    │
    ↓
```

**or Horizontal:**
```
←────────→
```

That orientation is what we call: **Polarization**

**A simple definition:**
Polarization describes the orientation and behavior of the electric-field oscillation of an electromagnetic wave.

For the polarization you'll use in Sentinel-1, we mainly deal with **linear polarization**.

## 1. Vertical polarization

Suppose the electric field oscillates vertically:

```
      ↑
      │
      │
      ↓
```

We call this:

**V = Vertical**

So a vertically polarized wave has its electric field oriented vertically relative to the radar's defined reference frame.

## 2. Horizontal polarization

Now imagine the electric field oscillates horizontally:

```
←────────→
```

We call this:

**H = Horizontal**

So:

**H = Horizontal polarization**

Therefore:

- **V** → electric field is vertically oriented
- **H** → electric field is horizontally oriented

The V/H designation refers primarily to the orientation of its electric field.

## 3. Why polarization is useful

A radar sends an electromagnetic wave toward a target.

Suppose it sends: **VV** polarization.

The target interacts with the wave.

The returned wave may have:
- **VV**
- Or: **HH**
- or potentially some more complicated polarization state.

This is where SAR becomes interesting.

The target can change the polarization state.

Imagine:

```
Radar
  │
  │ V-polarized wave
  ↓
 🌿🌿🌿
 🌿🌿🌿
```

The wave interacts with:
- leaves
- stems
- branches
- soil
- water
- other structures

The scattered electromagnetic field can have a different polarization composition from the incident field.

Conceptually:

**incident polarization + target interaction → scattered polarization**

This is the foundation for why we later care about VH and HV.

**Depolarization → change in the polarization state.**

Depolarization is a change in the polarization state caused by interaction with the target.

### Polarization Factors

Polarization response depends on things such as:
- target geometry
- target orientation
- surface roughness
- dielectric properties
- wavelength
- scattering mechanism
- radar incidence geometry

## 4. Linear polarization

For your Sentinel-1 work, the most important basic concept is **linear polarization**.

The electric field oscillates along a fixed line.

For example:

**Vertical**
```
    ↑
    │
    ↓
```

**Horizontal**
```
←────────→
```

These are two orthogonal linear polarization states.

"Orthogonal" simply means: 90 degrees apart in orientation.

### a. Co-polarization

Suppose radar transmits: **VV**
and receives: **VV**

Same polarization on transmission and reception.

Similarly: **HH HH**

means:

transmit H, receive H.

### b. Cross-polarization

Suppose:

**VV** is transmitted.

But the radar receives: **HH**

Then: **VH**

This is called a cross-polarized measurement.

## 5. The return have a different polarization

Let's build the physical intuition.

Imagine a vertically polarized wave: **V**

It interacts with a complex target.

The target contains structures with different:
- orientations
- shapes
- dielectric properties

The scattered electromagnetic field can contain components in directions other than the original orientation.

So part of the returned energy may be detected in the orthogonal polarization.

Conceptually:

**V transmitted → target interaction → V + H components**

Then the radar can measure the appropriate component.

**Polarization adds information**

Imagine you only measure: σ⁰ in one polarization.

You have one piece of information.

Now imagine measuring: **VV** and **VH**

You have two different polarization responses.

The relative behavior can provide additional clues about the target.

The orientation of physical structures relative to the electromagnetic field matters.

## 6. Polarization and dielectric properties

Dielectric properties → control how microwaves interact with materials.

Polarization response is also affected by these interactions.

Polarization is a property of the wave, not the target.

## 7. A mathematical preview

Electromagnetic field can be represented as components:

$$
\mathbf{E} = \begin{bmatrix} E_H \\ E_V \end{bmatrix}
$$

This simply means:

The electric field can be described using horizontal and vertical components.

**E = H component + V component**

```
                      RADAR
                         │
                         │
              electromagnetic wave
                         │
                         ↓
                  Electric field
                    orientation
                         │
                  ┌──────┴──────┐
                  ↓             ↓
                  V             H 
               Vertical      Horizontal
                  │             │
                  └──────┬──────┘
               	             ↓
                    TARGET
                         │
             electromagnetic interaction
                         │
                         ↓
              scattered electromagnetic
                       field
                         │
                  ┌──────┴──────┐
                  ↓             ↓
             V component        H component
                  │             │
                  └──────┬──────┘
                         ↓
                Radar measurement
```

Once this picture makes sense, VV/VH will become much easier.
