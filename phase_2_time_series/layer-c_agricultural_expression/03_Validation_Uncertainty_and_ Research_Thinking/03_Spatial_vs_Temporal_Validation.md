# 5.3 — Spatial vs Temporal Validation

## Part 1 — Validation & Generalization

Validation is the process of evaluating whether a model performs reliably on independent data that represents its intended application.

Generalization is the ability of a model to perform well on new, unseen data.

**Two Types of Generalization**

**Spatial Generalization**

Can the model work in a different location?

**Temporal Generalization**

Can the model work in a different year or season?

These are different problems. Success in one does not guarantee success in the other.

## Part 2 — Spatial Validation and Consistency

Spatial validation evaluates whether a model trained in one location performs well in different geographic locations.

**Example**

- Training fields: Region A and Region B
- Testing: Region C

Question: Can the model predict crops in Region C?

That is spatial validation.

### Why It Matters

Different regions have different:
- Soil types
- Climate
- Irrigation
- Crop varieties
- Management practices
- Field sizes

### Spatial Consistency

Spatial consistency refers to the stability of model performance across different geographic locations.

A spatially consistent model performs similarly in multiple regions.

## Part 3 — Temporal Validation

Temporal validation evaluates whether a model trained during one time period performs well in another time period.

**Example**

- Train: 2022 and 2023
- Test: 2024

Question: Can the model handle a new growing season?

### Why It Matters

Agriculture changes every year.

Examples:
- Rainfall
- Temperature
- Floods
- Drought
- Pest outbreaks
- Planting dates
- New crop varieties

A model that works one year may fail the next.

### Temporal Consistency

Temporal consistency is the stability of model performance across different time periods.

### Spatial vs Temporal Validation

| Aspect | Spatial Validation | Temporal Validation |
|--------|----------------------|------------------------|
| Main Question | Can it work elsewhere? | Can it work later? |
| Changes | Location | Time |
| Tests | New regions | New years or seasons |
| Affected By | Geography, soil, management | Weather, climate, phenology |
| Measures | Spatial generalization | Temporal generalization |

## Part 4 — Choosing the Right Validation Strategy

The validation strategy should match the intended application.

**Scenario 1**

Goal: Predict next year's crop condition.

Best validation: Temporal validation.

**Scenario 2**

Goal: Apply a model in another district.

Best validation: Spatial validation.

**Scenario 3**

Goal: National operational monitoring.

Need both:
- Spatial validation
- Temporal validation

## Part 5 — Random Train-Test Splits Can Be Misleading

This is one of the biggest mistakes in agricultural ML. Suppose you randomly split your data.

**Training:**
- Field 1 (2023)
- Field 2 (2023)
- Field 3 (2023)

**Testing:**
- Field 1 (2023)
- Field 2 (2023)
- Field 4 (2023)

The model has already seen almost identical conditions. The test data is not truly independent. Accuracy becomes artificially high.

### Implications for Remote Sensing

Remote sensing data contains strong spatial and temporal autocorrelation. Nearby fields often look similar.

Consecutive satellite observations are also similar. Ignoring these dependencies can make models appear more accurate than they really are.

Good validation reduces this risk by ensuring that test data represents genuinely unseen conditions.
