let arr = [1, 2, 3, 4, 6];

// brute force
const distanceForGasStation = (arr, k) => {
  let n = arr.length;
  let howMany = new Array(n - 1).fill(0);

  for (let i = 1; i <= k; i++) {
    let maxIndex = -1;
    let maxDiff = -1;

    for (let i = 0; i < n - 1; i++) {
      let diff = arr[i + 1] - arr[i];
      let sectionLength = diff / (howMany[i] + 1);
      if (sectionLength > maxDiff) {
        maxDiff = sectionLength;
        maxIndex = i;
      }
    }
    howMany[maxIndex]++;
  }

  let ans = -1;
  for (let i = 0; i < n - 1; i++) {
    let diff = arr[i + 1] - arr[i];
    let sectionLength = diff / (howMany[i] + 1);
    ans = Math.max(ans, sectionLength);
  }
  return ans;
};
console.log("Brute Force Ans:", distanceForGasStation(arr, 4));

//
const isPossible = (arr, dist) => {
  let cnt = 0;
  for (let i = 1; i < arr.length; i++) {
    let diff = Math.floor((arr[i] - arr[i - 1]) / dist);
    if (arr[i] - arr[i - 1] === dist * diff) {
      cnt += diff - 1;
    } else cnt += diff;
  }
  return cnt;
};

// binary search
const distanceForGasStation_usingBS = (arr, k) => {
  let n = arr.length;
  let maxDiff = 0;
  for (let i = 0; i < n - 1; i++) {
    maxDiff = Math.max(maxDiff, arr[i + 1] - arr[i]);
  }

  let low = 0;
  let high = maxDiff;

  // 10^-6 ---> 1e-6
  while (high - low > Math.pow(10, -6)) {
    let mid = (low + high) / 2.0;
    let cnt = isPossible(arr, mid);
    if (cnt > k) {
      low = mid;
    } else {
      high = mid;
    }
  }
  return high;
};
console.log("Binary Search Ans:", distanceForGasStation_usingBS(arr, 4));
