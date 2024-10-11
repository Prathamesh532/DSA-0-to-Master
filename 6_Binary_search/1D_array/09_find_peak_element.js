let arr = [1, 2];

// brute force --->
const bruteForce = (arr) => {
  let n = arr.length; // Size of array

  for (let i = 0; i < n; i++) {
    // Checking for the peak:
    if (
      (i === 0 || arr[i - 1] < arr[i]) &&
      (i === n - 1 || arr[i] > arr[i + 1])
    ) {
      return i;
    }
  }
  // Dummy return statement
  return -1;
};
console.log("Brute Ans , peak element is", bruteForce(arr));

// using Binary search
const usingBS = (arr) => {
  let n = arr.length;
  let low = 1;
  let high = n - 2;
  if (n == 0) return 0;
  if (arr[0] > arr[1]) return 0;
  if (arr[n - 1] > arr[n - 2]) return n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]) {
      return mid;
    } else if (arr[mid] > arr[mid - 1]) {
      low = mid + 1;
    } else if (arr[mid] > arr[mid + 1]) high = mid - 1;
    else low = mid + 1;
  }

  return -1;
};
console.log("using Bs Ans , peak element is", usingBS(arr));
