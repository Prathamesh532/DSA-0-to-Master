const isArraySorted = (arr, size) => {
  if (size == 0 || size == 1) return true;

  if (arr[0] > arr[1]) return false;
  else {
    let remainningArr = isArraySorted(arr.slice(1), size - 1);
    return remainningArr;
  }
};

const check = isArraySorted([1, 2, 3, 4, 5, 6, 7], 7);
console.log(check);
