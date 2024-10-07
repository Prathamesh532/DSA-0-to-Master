let arr = [1, 2, 0];

// brute force
// arr.sort((a, b) => a - b);
// console.log("arr", arr);

// optimal ---> O(N)
function sort012(arr) {
  let left = 0;
  let right = arr.length - 1;
  let mid = 0;
  while (mid <= right) {
    if (arr[mid] == 0) {
      [arr[left], arr[mid]] = [arr[mid], arr[left]];
      mid++;
      left++;
    } else if (arr[mid] == 1) {
      mid++;
    } else {
      [arr[right], arr[mid]] = [arr[mid], arr[right]];
      right--;
    }
  }
}
// Dutch National Flag problem
sort012(arr);
console.log("ans", arr);
