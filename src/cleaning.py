import numpy as np
import pandas as pd

def clean_ndvi(df, ndvi_col="NDVI", jump_threshold=0.3):

    df = df.copy()

    # keep original
    df["NDVI_raw"] = df[ndvi_col]

    # working column
    df["NDVI_clean"] = df[ndvi_col].copy()

    # 1. physical validity check
    df["NDVI_clean"] = df["NDVI_clean"].where(
        (df["NDVI_clean"] >= -1) &
        (df["NDVI_clean"] <= 1)
    )

    # 2. compute change from RAW
    df["change"] = df["NDVI_raw"].diff()

    # 3. jump detection
    physical_mask = (
        df["change"].abs().le(jump_threshold)
        | df["change"].isna()
    )

    # 4. apply cleaning
    df.loc[~physical_mask, "NDVI_clean"] = np.nan

    return df
