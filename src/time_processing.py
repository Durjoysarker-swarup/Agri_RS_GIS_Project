import pandas as pd

def prepare_time_index(df, date_col="date", dayfirst=False):
    df = df.copy()

    df[date_col] = pd.to_datetime(
        df[date_col],
        dayfirst=dayfirst
    )

    df = df.sort_values(date_col)
    df = df.set_index(date_col)

    return df
