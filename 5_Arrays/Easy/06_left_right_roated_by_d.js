// Example 1:
// Input: N = 7, array[] = {1,2,3,4,5,6,7} , k=2 , right
// Output: 6 7 1 2 3 4 5
// Explanation: array is rotated to right by 2 position

let arr = [1, 2, 3, 4, 5, 6, 7];

// utils for reverse the arrays
const reverseArrays = (arr, start, end) => {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

// brute force ---> O(k)+O(n−k)+O(k) = O(n)
const left_rotate_by_d = (arr, k, n) => {
  let temp = [];
  for (let i = 0; i < k; i++) {
    temp[i] = arr[i];
  }
  for (let i = k; i < n; i++) {
    arr[i - k] = arr[i];
  }
  for (let i = n - k; i < n; i++) {
    arr[i] = temp[i - n + k];
  }
  console.log("temp", temp);
  console.log("n - k", n - k);
  console.log("n", n);
};

const optimal_left_rotate_by_d = (arr, k, n) => {
  console.log("inside optimal");
  k = k % n;
  reverseArrays(arr, 0, k - 1);
  reverseArrays(arr, k, n - 1);
  reverseArrays(arr, 0, n - 1);
  console.log("optimal completed");
};

// left_rotate_by_d(arr, 2, arr.length);
optimal_left_rotate_by_d(arr, 1, arr.length);
console.log("arr", arr);
