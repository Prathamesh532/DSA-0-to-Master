// selection sort ---> select the minimum swap

let arr = [12, 21, 3, 43, 4, 5, 212, 12];
let n = arr.length - 1;

// finding the minimum and place it on the start of array , traversal through arr finding the min and swap to the first index and move to next index and fing the min from that remaining array

for (let i = 0; i <= n; i++) {
  let min = i;
  for (let j = i; j <= n; j++) {
    if (arr[j] < arr[min]) min = j;
  }
  swap(arr, i, min);
}

function swap(arr, l, r) {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
}

console.log("arr", arr);

// time complexity - O(n^2)
