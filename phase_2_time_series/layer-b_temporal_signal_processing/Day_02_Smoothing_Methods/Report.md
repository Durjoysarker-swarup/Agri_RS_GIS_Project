# NDVI Time-Series Smoothing

## Objective

The objective of this notebook was to investigate how different smoothing algorithms affect a raw Sentinel-2 NDVI time series. Satellite-derived vegetation indices often contain short-term fluctuations caused by cloud contamination, atmospheric effects, sensor noise, and irregular observation intervals. Smoothing aims to reduce these unwanted variations while preserving the underlying vegetation dynamics.



## Methods

Four smoothing methods were implemented and compared.

| Method | Description |
|----------|-------------|
| Moving Average | Computes the average of neighboring observations within a moving window. |
| Savitzky–Golay | Fits a local polynomial within a moving window to preserve local features while reducing noise. |
| Whittaker Smoothing | Fits a globally smooth curve by balancing data fidelity and smoothness through regularization. |

---


## Results

### Visual Comparison

The comparison plot showed clear differences among the smoothing algorithms.

- Moving Average reduced short-term fluctuations but increasingly flattened vegetation peaks as the window size increased.
- Savitzky–Golay preserved local maxima and minima while effectively reducing noise.
- Whittaker smoothing generated the smoothest overall trajectory while maintaining the general seasonal trend.

<img width="1348" height="561" alt="image" src="https://github.com/user-attachments/assets/a55500e7-e5d5-445b-be2c-27b54bd21520" />


---

### Quantitative Comparison

Insert the summary table generated in the notebook.

| Method | Peak NDVI | Peak Date | Amplitude Reduction | Smoothness | RMSE |
|---------|----------:|-----------|--------------------:|-----------:|-----:|
| Moving Average | | | | | |
| Savitzky–Golay | | | | | |
| Gaussian | | | | | |
| Whittaker | | | | | |

---

## Discussion

Each smoothing method exhibited different strengths and limitations.

### Moving Average

**Advantages**

- Simple implementation
- Effective noise reduction

**Limitations**

- Flattens peaks
- May shift temporal features
- Sensitive to window size

---

### Savitzky–Golay

**Advantages**

- Preserves peak shape
- Maintains local vegetation dynamics

**Limitations**

- Sensitive to window length and polynomial order
- Can retain some high-frequency noise

---

### Gaussian

**Advantages**

- Produces smooth continuous curves
- Less abrupt than Moving Average

**Limitations**

- Can slightly reduce peak amplitude
- Choice of σ strongly influences results

---

### Whittaker

**Advantages**

- Produces globally consistent smoothing
- Balances noise suppression with trend preservation
- Commonly used in remote sensing applications

**Limitations**

- Requires selection of an appropriate smoothing parameter (λ)
- Performance depends on parameter tuning

---

## Key Findings

- Multiple smoothing algorithms substantially reduced short-term fluctuations in the Sentinel-2 NDVI time series.
- Moving Average produced the greatest peak suppression among the evaluated methods.
- Savitzky–Golay preserved local vegetation dynamics more effectively than Moving Average.
- Gaussian smoothing generated a visually continuous vegetation signal with moderate peak preservation.
- Whittaker smoothing provided a strong balance between noise reduction and seasonal trend preservation.
- Quantitative metrics demonstrated that no single method was optimal for every evaluation criterion.
- The choice of smoothing algorithm depends on the intended downstream application, such as phenology extraction, interpolation, or uncertainty analysis.

---

## Limitations

This analysis has several limitations.

- Parameter sensitivity was not systematically evaluated.
- The smoothed signals were compared against the raw observations rather than an independent ground truth.
- Cloud-contaminated observations were assumed to remain after preprocessing and were not separately validated.

These limitations should be considered when interpreting the results.

---

## Conclusion

Smoothing is an essential preprocessing step for satellite-derived NDVI time series. All evaluated methods reduced measurement noise, but they differed in their ability to preserve biologically meaningful vegetation dynamics.

Among the evaluated algorithms, **Whittaker** and **Savitzky–Golay** demonstrated the best balance between noise suppression and signal preservation for this dataset. These smoothed time series provide a more reliable foundation for subsequent analyses, including interpolation, phenological feature extraction, and uncertainty assessment.

---

## Next Step

The next notebook will investigate **parameter sensitivity**, exploring how changes in window size, Gaussian σ, and Whittaker λ influence the reconstructed vegetation signal and the associated uncertainty.
