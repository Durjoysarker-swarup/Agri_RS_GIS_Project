def data_overview(df):
    print("\n" + "="*50)
    print("CSV Inspection")
    print("="*50)

    print("\nHEAD")
    print(df.head())

    print("\nINFO")
    df.info()

    print("\nSTATS")
    print(df.describe())

    print("\nMISSING VALUES")
    print(df.isnull().sum())

    print("\nDUPLICATES")
    print(df.duplicated().sum())
    
