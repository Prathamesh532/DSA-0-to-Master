let arr = [1, 2, 3, 4, 5];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

const reverseArray = (l, r) => {
  if (l >= r) return;
  swap(arr, l, r - 1);
  reverseArray(l + 1, r - 1);
};

const reverseArray_using_1pointer = (l, n) => {
  if (l >= n / 2) return;

  swap(arr, l, n - l);

  reverseArray_using_1pointer(l + 1, n);
};

reverseArray_using_1pointer(0, arr.length - 1);
console.log("arr", arr);
