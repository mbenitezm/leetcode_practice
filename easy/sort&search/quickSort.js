// WORST CASE: ordered array
// Average: n log n, n es el length del array, y log n los niveles
var partition = function (arr, l, r) {
  let p = arr[r];
  let j = l;
  let i = l - 1;
  while (j < r) {
    if (arr[j] <= p) {
      i++;
      const temp = arr[j];
      arr[j] = arr[i];
      arr[i] = temp;
    }
    j++;
  }

  i++;
  const temp = arr[r];
  arr[r] = arr[i];
  arr[i] = temp;
  return i;
};

var quickSort = function (arr, l = 0, r = arr.length - 1) {
  if (l >= r) {
    return;
  }

  const p = partition(arr, l, r);

  quickSort(arr, l, p - 1);
  quickSort(arr, p + 1, r);

  return arr;
};
