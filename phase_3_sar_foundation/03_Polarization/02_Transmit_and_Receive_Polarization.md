# DAY 2: TRANSMIT AND RECEIVE POLARIZATION

## 1. The two letters

For a polarization notation such as: **VH**

the convention is:

- first letter = transmitted polarization
- second letter = received polarization

So: **VH**
- V → transmitted
- H → received

Similarly: **VV**
- V → transmitted
- V → received

## 2. Understanding Polarization

**1. VV**

Suppose the radar transmits a vertically polarized wave. The target scatters the wave. The radar receives the vertically polarized component.

V transmitted, V received.

**2. VH**

Now transmit V again. But this time, the radar measures the H component of the returned wave.

V transmitted, H received.

**3. HH**

Now the radar transmits H and receives H:

H transmitted, H received.

**4. HV**

H transmitted, V received.

**Co-polarization** → Transmit and receive polarization are the same.

**Cross-polarization** → Transmit and receive polarization are different.

## 3. VH does NOT mean "vegetation"

You will probably encounter this statement: *"VH is vegetation."*

**Reject that statement.**

It is a useful shortcut for beginners, but scientifically it is too crude. Vegetation can produce significant cross-polarized responses because of its complex structure.

But VH can also be influenced by:

- moisture
- surface properties
- geometry
- scattering mechanism
- target orientation
- wavelength

## 4. What does Sentinel-1 usually give

Sentinel-1 commonly operates with:

**VV + VH**

over many land applications.

That means:

```
V transmitted
       ↓
  TARGET
       ↓
   ┌─────┴─────┐
   ↓                             ↓
V received 	  H received
 ↓         	          ↓
 VV          	         VH
```

So when you work with Sentinel-1 agricultural imagery, you will frequently see:

- VV
- VH

rather than all four channels.

### Why Sentinel-1 uses VV and VH

The reason is not: *"VV is for soil and VH is for vegetation."*

Again, that's too simplistic.

Rather, VV and VH provide different polarization-dependent measurements of the same physical scene.

Their combination can help characterize:

- surface conditions
- vegetation structure
- crop development
- moisture-related changes
- scattering behavior

## 5. Scattering and Polarization

This is where your learning becomes more interesting.

**Target → scattering mechanism → σ⁰**

Now add polarization:

**Target → scattering mechanism + polarization response → VV/VH/etc.**

So you're getting an additional measurement dimension.

### Example: rice field

Suppose: **VV = −8 dB**
And: **VH = −15 dB**

Don't immediately interpret those numbers as biomass or crop condition.

Ask:

*Why does this particular target produce this relationship between co-polarized and cross-polarized backscatter?*

### Why VH is often lower than VV

You will frequently observe something like:

**VV > VH**

in linear power terms, or a less-negative VV value in dB.

Because many natural targets preserve some portion of the incident polarization, while cross-polarized scattering is often weaker.

## 6. dB values

Suppose:

**VV = −10 dB**
and:
**VH = −15 dB**

You might think:

*"-15 is only 5 less than -10."*

But dB is logarithmic.

Thus VV is about 3.16 times stronger in power than VH in this example.

You don't need to calculate these every time, but understand the principle.

## 7. A powerful analogy

Think about taking a photograph of a person.

You could photograph them:

- from the front
- from the side
- from above

Each view gives different information.

SAR polarization is not exactly the same thing, but conceptually:

Different polarization configurations provide different "views" of electromagnetic interaction.

VV and VH are therefore complementary measurements.
