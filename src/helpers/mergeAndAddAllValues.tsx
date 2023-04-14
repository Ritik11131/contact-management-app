export const mergeAndAddAllValues = (obj: any) => {
  const result = {};
  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length - 2; i += 3) {
    const key1 = keys[i];
    const key2 = keys[i + 1];
    const key3 = keys[i + 2];
    const sum = (obj[key1] || 0) + (obj[key2] || 0) + (obj[key3] || 0);
    const newKey = `${key1}-${key3}`;
    result[newKey] = sum;
  }

  return result;

}
