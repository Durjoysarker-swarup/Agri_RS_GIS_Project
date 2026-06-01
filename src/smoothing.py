import pandas as pd

def smooth_ndvi(df, col="NDVI_clean", window=3, center=True):

    df = df.copy()

    df["NDVI_smooth"] = df[col].rolling(
        window=window,
        center=center
    ).mean()

    return df
