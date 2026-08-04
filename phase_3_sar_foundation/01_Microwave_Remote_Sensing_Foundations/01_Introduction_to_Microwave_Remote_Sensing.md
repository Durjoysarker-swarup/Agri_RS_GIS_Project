# 1.1 — Introduction to Microwave Remote Sensing

Remote sensing is simply measuring an object without touching it.

There are two major ways satellites observe Earth.

```
Sunlight
   ↓
Earth
   ↓
Satellite
```
or
```
Satellite
   ↓
Microwave Pulse
   ↓
Earth
   ↓
Returned Signal
   ↓
Satellite
```

The first is **optical remote sensing**. The second is **microwave remote sensing (radar)**. Today we begin understanding the second one.

---

## Part 1 — Electromagnetic Spectrum

Everything begins with electromagnetic (EM) waves. Light is only a tiny part of the electromagnetic spectrum.

The entire spectrum looks like this:

```
Gamma Rays
    │
X-rays
    │
Ultraviolet
    │
Visible Light
    │
Near Infrared
    │
Shortwave Infrared
    │
Thermal Infrared
    │
Microwave
    │
Radio Waves
```

Notice something. As we move downward:
- Wavelength increases
- Frequency decreases

These two always move in opposite directions.

### The Three Important Properties

Every EM wave has three properties.

**1. Wavelength (λ)**

Distance between two identical points of a wave.

```
Peak          Peak
 /\            /\
/  \          /  \
 <----λ---->
```

Usually measured in:
- Nanometers (nm)
- Micrometers (μm)
- Centimeters (cm)
- Meters (m)

**2. Frequency (f)**

Number of waves passing a point every second. Unit: Hertz (Hz)

Higher frequency means:
- More oscillations
- Shorter wavelength

Lower frequency means:
- Fewer oscillations
- Longer wavelength

The relationship is:
```
c = f λ
```
where:
- c = speed of light
- f = frequency
- λ = wavelength

Since the speed of light is essentially constant in free space, increasing frequency means decreasing wavelength, and vice versa.

**3. Energy**

```
E = hc / λ
```

Higher frequency → Higher energy → Lower wavelength

### Why Does Remote Sensing Care About Wavelength?

Different wavelengths behave differently. Different wavelengths "see" different parts of vegetation.

---

## Part 2 — Optical vs Microwave

### Optical Remote Sensing

Uses sunlight.

**Examples:** Sentinel-2, Landsat

**Process:**
```
Sun → Leaf → Reflected light → Satellite
```

The satellite only measures reflected sunlight. It cannot create light.

**Problem:** Clouds block sunlight.

### Microwave Remote Sensing

Radar creates its own energy.

```
Satellite → Microwave Pulse → Ground → Returned Echo → Satellite
```

There is no need for sunlight. Therefore radar works day and night.

### Why Can Microwaves Pass Through Clouds?

Clouds consist mainly of tiny water droplets and ice crystals.

Visible light has wavelengths that are similar in size to these droplets, so the droplets scatter the light strongly. That's why clouds look white and block optical satellite observations.

Microwaves used by most Earth-observing radar satellites have wavelengths that are much larger than typical cloud droplets. Because the droplets are much smaller than the wavelength, they scatter only a small fraction of the microwave energy. Most of the energy continues through the cloud to the ground and back to the satellite.

**Important correction:** Radar does not pass through everything. Heavy rainfall can weaken or scatter microwave signals, especially at shorter microwave wavelengths (such as X-band). The common statement "SAR sees through all weather" is an oversimplification.

### Microwave Wavelength

Microwave wavelengths are much longer than visible light.

**Approximate ranges:**

| Radiation | Approximate Wavelength |
|---|---|
| Blue light | ~450 nm |
| Red light | ~650 nm |
| Near Infrared | ~0.8–1.3 μm |
| Thermal Infrared | ~8–14 μm |
| Microwave | ~1 mm to 1 m |

Microwave remote sensing mainly uses wavelengths from centimeters to tens of centimeters.

### Frequency

Radar engineers often talk about frequency instead of wavelength, because radar hardware is designed to transmit at specific frequencies.

### Radar Bands

| Band | Approximate Wavelength | Typical Interaction |
|---|---|---|
| X | ~3 cm | Leaves, crop surface, fine details |
| C | ~5–6 cm | Crop canopy, stems, upper vegetation |
| L | ~23 cm | Branches, trunks, partial canopy penetration |
| P | ~70 cm | Large woody structures; deepest vegetation penetration (rarely spaceborne because of spectrum regulations) |

Large wavelengths have more penetration.

Be careful, though: penetration is influenced not only by wavelength but also by moisture, canopy density, incidence angle, and polarization. A wet, dense canopy can greatly reduce penetration even for longer wavelengths.

### Agricultural Example

Imagine rice at two stages.

**Early Season:** Small seedlings → Most radar energy reaches the soil.

**Later:** Dense canopy → Much more energy is scattered by the vegetation before reaching the soil.

As the crop grows, the dominant scattering mechanism changes. This is one reason SAR time series are so useful for monitoring crop development.
