const BubbleSort = (arr, size) => {
  // base case
  if (size == 1 || size == 0) return;

  for (let i = 0; i < size - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }

  BubbleSort(arr, size - 1);
};

let arr = [4, 3, 2, 1];
let n = arr.length;

let check = BubbleSort(arr, n);
console.log(arr);
