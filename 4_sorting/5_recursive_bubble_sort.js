let arr = [5, 4, 3, 2, 1, 1];
let n = arr.length - 1;

function swap(arr, l, r) {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}

function recursive_bubble_sort(arr, n) {
  if (n == 1) return;
  for (let i = 0; i <= n - 1; i++) {
    if (arr[i] >= arr[i + 1]) {
      swap(arr, i + 1, i);
    }
  }
  recursive_bubble_sort(arr, n - 1);
}

recursive_bubble_sort(arr, n);
console.log("recursive bubble sort: ", arr);
