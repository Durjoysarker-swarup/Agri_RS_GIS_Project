# 5.2 — Ground Truth Mismatch & Label Noise

## Part 1 — What is Ground Truth?

Ground truth is information collected directly from the real world that is used as a reference for validating or training remote sensing models.

**Examples:**
- Field survey
- Crop type mapping
- Yield measurement
- Disease observation
- Drone imagery
- Soil sampling
- Farmer interviews

Ground truth is usually the best available reference, not absolute truth.

### Why "Ground Truth" is Misleading

The term suggests certainty. But every field observation contains uncertainty.

For example:

A surveyor visits a field.

They record:
- Rice
- Healthy
- Moderate growth

Were they correct? → Maybe.

But several sources of error exist:
- Wrong location
- Wrong date
- Human judgement
- Partial observation
- GPS error
- Recording mistakes

Ground truth is therefore an observation, not perfect reality.

### Ground Truth Mismatch

Ground truth mismatch occurs when the reference data and the satellite observation do not describe the same conditions.

Mismatch can occur because of:
- Time
- Space
- Observation method
- Human interpretation

### Temporal Mismatch

This is the most common mismatch.

Imagine,

Satellite image: June 10

Field survey: June 18

Eight days apart.

During those eight days:
- Rainfall occurred
- Fertilizer applied
- Flooding happened
- Disease spread
- Harvest started

## Part 2 — Farmer-Reported Condition vs Satellite-Derived Index

Suppose a farmer says: *"My crop is healthy."*

Satellite shows: NDVI = 0.52

Who is correct?

**Possibilities:**
- Farmer is correct.
- Satellite is correct.
- Both are partially correct.
- Both measure different things.

### Why?

The farmer observes:
- leaf color
- plant height
- pests
- recent management
- irrigation

The satellite measures:
- reflected electromagnetic radiation

These are fundamentally different observation systems.

### Important Principle

A disagreement does not automatically mean one source is wrong. It may simply mean they are measuring different aspects of crop condition.

## Part 3 — Label Noise

Label noise occurs when training labels contain errors, inconsistencies, or uncertainty. Instead of learning the real relationship, the model learns mistakes. Label Noise Affects Machine Learning

### Types of Label Noise

**1. Incorrect Label**

Actual crop: Rice

Recorded: Maize

Simple human error.

**2. Ambiguous Label**

Observer: Healthy

Another observer: Moderately healthy

Both describe the same field differently.

**3. Outdated Label**

Survey: Healthy

Two weeks later: Disease outbreak.

Satellite: Detects stress.

The label is no longer valid.

**4. Incomplete Label**

Field contains:
- 70% rice
- 30% weeds

Recorded: Rice

The label ignores field complexity.

**5. Farmer Memory Error**

Memory is imperfect.

Possible issues:
- Forgotten dates
- Rounded estimates
- Approximate quantities
- Social desirability (giving expected answers)

**6. Field Heterogeneity**

Agricultural fields are rarely uniform.

Within one field you may find:
- healthy plants
- stressed plants
- weeds
- waterlogged areas
- nutrient deficiencies

Suppose the surveyor visits only one corner. That observation may not represent the whole field.

Field heterogeneity refers to spatial variation in crop or soil conditions within the same field.

## Part 4 — Reducing Label Noise

Possible strategies:

**Improve Temporal Alignment**

Match field surveys with satellite acquisition dates.

**Use Multiple Observations**

Combine field surveys, drone imagery, and satellite data.

**Standardize Survey Protocols**

Clear definitions and observer training.

**Sample More Locations**

Capture field variability.

**Quantify Uncertainty**

Record confidence levels instead of assuming labels are perfect.

## Key Takeaways

- Ground truth is a reference observation, not absolute truth.
- Temporal mismatch is one of the largest sources of validation error.
- Satellite observations and field surveys measure different aspects of crop condition.
- Label noise includes incorrect, ambiguous, outdated, and incomplete labels.
- Farmer memory error can introduce uncertainty into agricultural datasets.
- Field heterogeneity limits the representativeness of single-point observations.
- Noisy labels can significantly reduce machine learning reliability and scientific validity.
- Good research reports not only model accuracy but also the quality and uncertainty of the labels used.
