let piles = [30, 11, 23, 4, 20];

// using linear search
const findMax = (arr) => {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i]);
  }
  return max;
};

const reqHourToComplete = (arr, hrs) => {
  let totalTime = 0;
  for (let i = 0; i < arr.length; i++) {
    totalTime += Math.ceil(arr[i] / hrs);
  }
  return totalTime;
};

const linearSearch = (arr, deadline) => {
  let max = findMax(arr);

  for (let i = 0; i <= max; i++) {
    let reqTime = reqHourToComplete(arr, i);
    if (reqTime <= deadline) {
      return i;
    }
  }
  return -1;
};

console.log("Using linear search", linearSearch(piles, 5));

// using binary search
const kokoEatingBanana = (arr, deadline) => {
  let max = findMax(arr);

  let low = 0;
  let high = max;
  let ans = -1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let reqTime = reqHourToComplete(arr, mid);
    if (reqTime <= deadline) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};
console.log("Using binary search", kokoEatingBanana(piles, 5));
