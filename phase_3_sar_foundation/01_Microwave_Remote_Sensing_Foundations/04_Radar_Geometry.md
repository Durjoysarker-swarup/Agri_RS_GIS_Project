# 1.4 — Radar Geometry

> What exactly does the radar "see" from its position in space, and how does that observation become a 2D image?

## Part 1 — SAR Look

SAR is a **side-looking** imaging system.

The radar is looking away from the satellite toward the side of its ground track.

```
                        SAR
                          ●
                           \
                            \
                             \
                              \
                               🌾
────────────────────────────────────
```

Targets at different distances from the satellite produce different echo travel times.

---

## Part 2 — Two Directions Exist at the Same Time

Now we need to think in two directions.

**Direction 1 — Along-track**

The satellite's direction of movement. → This corresponds to: **Azimuth**

**Direction 2 — Across-track**

The direction approximately perpendicular to the flight path, toward/away from the radar's look direction. → This corresponds to: **Range**

So:

```
                  Flight direction
                         →
                  AZIMUTH / ALONG-TRACK

                         ●
                          \
                           \
                            \
                             ↓
                       RANGE / ACROSS-TRACK
```

This is the foundation of SAR image geometry.

---

## Part 3 — Look Direction

The radar antenna points in a particular direction. That direction is the **look direction**.

```
                        Satellite
                            ●
                              ↘
                                 ↘
                                    ↘
                                        ↘
                          Look direction
```

The radar is looking toward the ground in this direction.

The look direction is therefore closely related to the range direction.

---

## Part 4 — Near Range & Far Range

The radar is looking across the Earth's surface. Some targets are closer to the satellite. Others are farther away.

Consider:

```
                      SAR
                       ●
                         \
                          \
                          🌾 A
                             \
                              \
                               🌾 B
                                 \
                                  \
                                  🌾 C
```

- A is closer.
- B is farther.
- C is even farther.

So:
```
A → Near range
B → Middle range
C → Far range
```

---

## Part 5 — Slant Range

```
                     SAR
                       ●
                         \
                          \ ← SLANT RANGE
                           \
                            \
                             ● Target
```

**Slant range** is the direct line-of-sight distance between the radar antenna and the target.

### Why Does Radar Measure Slant Range?

Because radar measures travel time. How long did the pulse take to go there and come back?

If the total round-trip time is `t`:

```
R = c t / 2
```

where:
- R = slant range
- c = speed of light
- t = round-trip travel time

---

## Part 6 — Ground Range

**Ground range** is the distance between the ground projection of the radar and the target, measured along the ground/reference surface.

Simplified:

```
                      SAR
                        ●
                        |
                        |
                        |
                        ●──────────────●
Ground projection                  Target
                        ← Ground range →
```

- Slant range → Diagonal distance
- Ground range → Ground distance

### Let's Put Near/Far Range Into This

Now imagine the radar is looking across a wide rice-growing region.

```
                        SAR
                          ●
                           \
                            \
                             \
                              \
                               \
                                \
────────────────────────────────────────
     Near range                  Far range
        🌾                         🌾
```

- The near-range target has: shorter slant range
- The far-range target has: longer slant range

Therefore:
```
Near range → Shorter radar-target distance → Shorter echo travel time
Far range  → Longer radar-target distance  → Longer echo travel time
```

---

## How Does a Target Get a Position

**Question 1:** How far away is the tree? → **RANGE** (comes mainly from echo travel time)

**Question 2:** Where is the tree along the satellite's movement? → **AZIMUTH**

```
Range + Azimuth = 2D SAR image position
```

### SAR Is Not a Photograph

SAR is measuring radar echoes from a side-looking geometry. Therefore, the location of a target in a SAR image is determined through radar measurement geometry and signal processing.

This is why a SAR image is not simply a photograph of the ground.

---

## Part 7 — Why Mountains Create Problems

Now you're ready for one of the most important consequences.

Suppose the ground is flat:

```
SAR
 ●
  \
   \
    \
────────────────────────────
```

Simple.

But suppose the terrain has a mountain:

```
                   SAR
                     ●
                      \
                       \
                        \          /\
                         \        /  \
                          \___/    \
────────────────────────────────────
```

The radar is still measuring distance along the radar's line of sight. But now different terrain points can have strange relationships with the radar. This can produce:

### Foreshortening

Foreshortening occurs when a slope facing the radar appears compressed in the SAR image because a relatively large ground distance is represented by a smaller range distance.

Radar-facing slope → compressed.

### Layover

Layover is more serious.

Imagine a steep mountain:

```
                        SAR
                          ●
                           \
                            \
                             \     Peak
                              \     ●
                               \   /
                                \ /
                                 /
                                /
                               /
                              /
─────────────────────────────
```

The important thing is that the top of the mountain can actually be closer to the radar than the bottom of the mountain.

Normally, you expect:
```
Bottom → closer
Top    → farther
```
in a normal vertical view.

But with side-looking SAR, for a steep radar-facing slope: sometimes, the peak can be closer to the radar than the bottom. So radar receives the peak's echo before the bottom's echo.

That's the critical idea.

| Terrain Situation | SAR Effect |
|---|---|
| Slope faces radar | Foreshortening possible |
| Very steep slope faces radar | Layover |
| Slope/terrain blocks radar behind it | Shadow |

Foreshortening means a radar-facing slope is compressed in the range direction; layover occurs when the slope is so steep that the upper part becomes closer to the radar than the lower part, causing the radar image to reverse or overlap their spatial order.

### Shadow

A radar-facing obstacle can block the radar from seeing surfaces behind it.

```
Side-looking geometry + terrain relief = geometric distortion
```

*Watch a video for clear understanding: search "foreshortening and layover" on YouTube.*

---

## Why Terrain Correction Exists

```
Raw SAR image
      ↓
Radar geometry
      ↓
Terrain correction
      ↓
Map-like geographic position
```

The raw radar geometry doesn't necessarily correspond directly to the geographic location you'd expect from a normal map.

Terrain correction uses:
- Satellite orbit information
- Radar viewing geometry
- A DEM (Digital Elevation Model)

...to place the SAR pixels more correctly on the Earth's surface.

So: terrain correction is not simply "making the image prettier." It is a geometric transformation that accounts for terrain and radar viewing geometry.
