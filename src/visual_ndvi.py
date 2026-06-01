def vis_ndvi(ndvi):
  import matplotlib.pyplot as plt

  plt.imshow(ndvi, cmap="RdYlGn")
  plt.colorbar()
  plt.title("NDVI Map")
  plt.show()
