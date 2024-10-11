let arr = [1, 1, 2, 3, 3, 4, 4, 8, 8];

// brute force ---> O(N)
const bruteForce = (arr) => {
  let n = arr.length;
  let ans = -1;

  for (let i = 0; i < n; i++) {
    // for ele on index 0
    if (i == 0) {
      if (arr[i + 1] != arr[i]) {
        ans = arr[i];
      }
    }
    // last element
    else if (i == n - 1) {
      if (arr[i - 1] != arr[i]) {
        ans = arr[i];
      }
    } else {
      if (arr[i - 1] != arr[i] && arr[i + 1] != arr[i]) {
        ans = arr[i];
      }
    }
  }

  return ans;
};
console.log("Brute Ans, single element in arr : ", bruteForce(arr));

// using XOR ----> O(N)
const usingXOR = (arr) => {
  let n = arr.length;
  let xor = 0;
  for (let i = 0; i < n; i++) {
    xor ^= arr[i];
  }
  return xor;
};
console.log("using XOR Ans, single element in arr : ", usingXOR(arr));

// using Binary search
const usingBS = (arr) => {
  let n = arr.length;
  let low = 1;
  let high = n - 2;

  // for array  size 1
  if (n == 1) return arr[0];

  // for 1st element
  if (arr[0] != arr[1]) return arr[0];

  // for last element
  if (arr[n - 1] != arr[n - 2]) return arr[n - 1];

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] != arr[mid + 1] && arr[mid] != arr[mid - 1]) return arr[mid];
    else if (
      (mid % 2 == 1 && arr[mid] != arr[mid + 1]) ||
      (mid % 2 == 0 && arr[mid] != arr[mid - 1])
    ) {
      low = mid + 1;
    } else high = mid - 1;
  }
  return -1;
};
console.log("using Binary Ans, single element in arr : ", usingBS(arr));
