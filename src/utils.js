export function uniqueItemsArray(array) {
  const uniqueSet = new Set(array);
  array = Array.from(uniqueSet);
  return array;
}
