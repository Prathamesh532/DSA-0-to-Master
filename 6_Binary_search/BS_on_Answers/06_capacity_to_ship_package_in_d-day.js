let weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// brute force ---> O(N*(max - sumofarr + 1))
const loads = (arr, cap) => {
  let days = 1;
  let load = 0;
  for (let i = 0; i < arr.length; i++) {
    if (load + arr[i] > cap) {
      days += 1;
      load = arr[i];
    } else load += arr[i];
  }
  return days;
};

const daysToShip = (arr, days) => {
  let max = Math.max(...arr);
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
  }
  for (let i = max; i <= sumOfArr; i++) {
    if (loads(arr, i) <= days) {
      return i;
    }
  }
  return -1;
};
console.log("brute force:", daysToShip(weights, 1));

// using binary search  ---> O(N*log2 (max - sumOfArr + 1))
const usingBS = (arr, days) => {
  let max = Math.max(...arr);
  let sumOfArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumOfArr += arr[i];
  }

  let low = max;
  let high = sumOfArr;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (loads(arr, mid) <= days) {
      high = mid - 1;
    } else low = mid + 1;
  }
  return low;
};
console.log("using Binary search:", usingBS(weights, 1));
