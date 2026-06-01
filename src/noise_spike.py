def detect_spike_outliers(df, col="NDVI", threshold=0.3):

    df = df.copy()

    df["NDVI_raw"] = df[col]
    df["change"] = df["NDVI_raw"].diff()

    df["spike_flag"] = df["change"].abs() > threshold
    spike_df = df[df["spike_flag"]].copy()

    return df, spike_df


from scipy import stats

def detect_zscore_outliers(df, col="NDVI", z_thresh=2.5):

    df = df.copy()

    df["NDVI_raw"] = df[col]
    df["z_score"] = stats.zscore(df["NDVI_raw"])

    df["z_flag"] = df["z_score"].abs() > z_thresh
    z_df = df[df["z_flag"]].copy()

    return df, z_df
