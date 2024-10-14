let bloomDays = [1, 10, 3, 10, 2];
let m = 3;
let k = 1;

// brute force --> using linear search ---> O(min-max+1) + O(N)
const isPossible = (arr, day, m, k) => {
  let cnt = 0;
  let noOfDay = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= day) {
      cnt++;
      if (cnt === k) {
        // If we can form a bouquet
        noOfDay++;
        cnt = 0; // Reset the count for the next potential bouquet
      }
    } else {
      cnt = 0;
    }
  }
  return noOfDay >= m;
};

const linearSearch = (arr, m, k) => {
  let n = arr.length;
  let val = m * k;
  if (val > n) return -1; // edge case where the m * k greter than the number of array

  // find min and max
  let mini = Infinity,
    max = -Infinity;
  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, arr[i]);
    max = Math.max(max, arr[i]);
  }

  for (let i = mini; i <= max; i++) {
    if (isPossible(arr, i, m, k)) return i;
  }

  return -1;
};
console.log("using linear search", linearSearch(bloomDays, m, k));

// using binary search --->
const binarySearch = (arr, m, k) => {
  let n = arr.length;

  let val = m * k;
  if (val > n) return -1;

  let mini = Infinity,
    max = -Infinity;
  for (let i = 0; i < n; i++) {
    mini = Math.min(mini, arr[i]);
    max = Math.max(max, arr[i]);
  }

  let low = mini;
  let high = max;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isPossible(arr, mid, m, k)) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};
console.log("using binary search", binarySearch(bloomDays, m, k));
