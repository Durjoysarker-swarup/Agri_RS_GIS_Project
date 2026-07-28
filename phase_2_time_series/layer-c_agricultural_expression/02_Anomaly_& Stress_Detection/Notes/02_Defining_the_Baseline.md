# 4.2 — Defining the Baseline

## Baseline

A baseline is the expected or reference condition against which current observations are compared.

The anomaly Detection that's why we always need a baseline to compare.

## Part 1 — Types of Baselines

### 1. Mean Baseline

Average all historical values.

- Year 1 = 0.70
- Year 2 = 0.74
- Year 3 = 0.72

**Mean baseline = 0.72**

**Advantages**
- simple
- easy to explain
- commonly used

**Disadvantages**
- sensitive to extreme values
- affected by unusual years

### 2. Median Baseline

Instead of averaging, take the middle value.

**Example**

0.60 → 0.70 → 0.72 → 0.73 → 0.95

- Mean → 0.74
- Median → 0.72

The extreme value (0.95) influences the mean much more than the median.

**Advantages**
- robust to outliers
- better when data contain extreme events

**Disadvantages**
- ignores the magnitude of extremes
- may not represent the average condition

### 3. Percentile Baseline

Instead of a single average, use percentiles.

**Examples**
- 25th percentile
- 50th percentile (median)
- 75th percentile

This helps describe the range of normal variability rather than a single value.

Useful when vegetation naturally varies from year to year.

### 4. Multi-Year Climatology

This is common in remote sensing.

For each date (or week), calculate the historical average over many years.

**Example DOY 150**

- 2018 → 0.70
- 2019 → 0.72
- 2020 → 0.74
- 2021 → 0.71

**Baseline: 0.72**

Now every day of the year has its own expected value.

This accounts for seasonal growth patterns.

**Advantages**
- captures seasonality
- widely used for long-term monitoring

**Disadvantages**
- requires many years of data
- assumes the historical period is representative

#### Mean baseline

One single value represents the entire season.

**Example:**

| Year | Seasonal Peak NDVI |
|------|---------------------|
| 2021 | 0.75 |
| 2022 | 0.72 |
| 2023 | 0.78 |

**Mean baseline:**

(0.75 + 0.72 + 0.78) / 3 = 0.75

You compare every observation against one average value.

#### Multi-year climatology

Instead of one value, you calculate an expected value for each day (or week) of the year.

**Example:**

| DOY | 2021 | 2022 | 2023 | Climatology |
|-----|------|------|------|-------------|
| 100 | 0.20 | 0.18 | 0.22 | 0.20 |
| 120 | 0.42 | 0.40 | 0.44 | 0.42 |
| 140 | 0.65 | 0.63 | 0.67 | 0.65 |
| 160 | 0.80 | 0.78 | 0.82 | 0.80 |

Here, the baseline is an entire seasonal curve, not a single number.

- **Mean baseline:** "What is the average value?"
- **Multi-year climatology:** "What is the expected value at this specific time of year?"

For agriculture, multi-year climatology is usually much better, because crops naturally change throughout the season.

### 5. Stage-Specific Baseline (Brief Introduction)

Instead of comparing by calendar date, compare by crop stage.

**Example**

Compare all tillering stages together, regardless of planting date.

This is useful when planting dates vary between years.

## Part 2 — Every Baseline Makes Assumptions

A baseline is not a fact. It is a model of what you believe is "normal."

Every model makes assumptions.

- **Mean** → The average represents normal conditions.
- **Median** → Extreme years should have less influence.
- **Multi-Year Climatology** → Suppose you use only five years. Those five years adequately represent long-term conditions.

## Part 3 — The Baseline Fallacy

A poor baseline produces misleading anomalies. Reason of fallacy:

- Cloud-Contaminated Baseline
- Insufficient Historical Data (Too Few Years)
- Extreme Years Included
- Mixed Crop Calendars
- Mixed Rice Varieties (Cultivar Heterogeneity)
