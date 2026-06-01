import numpy as np

def ndvi(red, nir, nodata=None, scale=10000):

    red = red / scale
    nir = nir / scale

    if nodata is not None:
        mask = (red != nodata) & (nir != nodata)
        red = np.where(mask, red, np.nan)
        nir = np.where(mask, nir, np.nan)

    return np.where(
        (nir + red) == 0,
        np.nan,
        (nir - red) / (nir + red)
    )
