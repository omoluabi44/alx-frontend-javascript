export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const result = [...set]
    .filter((value) => value.startsWith(startString))
    .map((value) => value.substring(startString.length))
    .filter((value) => value)
    .join('-');

  return result;
}
