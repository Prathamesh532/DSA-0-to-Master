let arr = [1, 2, 3, 4];
let n = arr.length - 1;

console.log("n", n);

// finding the maximum from the adjecent and swap it , the last element will be the max from array

// bubble sort
for (let i = n - 1; i >= 1; i--) {
  let isSwap = 0;
  for (let j = 0; j <= i; j++) {
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      isSwap = 1;
    }
  }
  if (isSwap == 0) break;
  console.log("runs");
}

function swap(arr, l, r) {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}

console.log("Bubble sort: ", arr);

// time complexity - O(n^2) -- worst / average case
// when the arr is sorted already : O(n) -- best case
