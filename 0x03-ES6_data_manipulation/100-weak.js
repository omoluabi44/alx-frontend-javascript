export const weakMap = new WeakMap();
export function queryAPI(endpoint) {
  if (typeof endpoint !== 'object' || endpoint === null || !endpoint.protocol || !endpoint.name) {
    throw new Error('Invalid endpoint format');
  }

  let count = weakMap.get(endpoint) || 0;

  count += 1;

  weakMap.set(endpoint, count);

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  return count;
}
