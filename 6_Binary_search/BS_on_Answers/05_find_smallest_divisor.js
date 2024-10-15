const e = require("express");

let arr = [44, 22, 33, 11, 1];

// bryute force ---> O(max) * O(N)
const linearSearch = (arr, limit) => {
  let n = arr.length;

  // find the max and loop still that
  let max = Math.max(...arr);

  for (let i = 1; i <= max; i++) {
    let sum = 0;
    for (let j = 0; j < n; j++) {
      sum += Math.ceil(arr[j] / i);
    }
    if (sum <= limit) {
      return i;
    }
  }

  return -1;
};
console.log("using linear", linearSearch(arr, 5));

// using binary search ---> O(log2 (max * N))
const divisorFun = (arr, d) => {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += Math.ceil(arr[i] / d);
  }
  return ans;
};

const smallestDivisor = (arr, limit) => {
  let n = arr.length;
  let ans = -1;
  let max = Math.max(...arr);

  let low = 1;
  let high = max;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let divisorSum = divisorFun(arr, mid);

    if (divisorSum <= limit) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};
console.log("using binary search", smallestDivisor(arr, 5));
