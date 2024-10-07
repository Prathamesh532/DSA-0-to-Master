let arr = [3, 2, 7, 3, 24, 4, 1, 2, 4];
let n = arr.length - 1;

// take the elements and sort them , like place where they are in right place

// insertion sort
for (let i = 0; i <= n; i++) {
  let j = i;
  while (j > 0 && arr[j - 1] > arr[j]) {
    swap(arr, j - 1, j);
    j--;
    console.log("runs");
  }
}

function swap(arr, l, r) {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}

console.log("arr", arr);

// time complexity :
// O(n^2) : worst / average case
// O(n) : best case where array is already sorted
