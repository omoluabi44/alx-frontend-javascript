export default function updateUniqueItems(gmap) {
  if (!(gmap instanceof Map)) {
    throw new Error('Cannot process');
  }
  gmap.forEach((value, key) => {
    if (value === 1) {
      gmap.set(key, 100);
    }
  });
  return gmap;
}
