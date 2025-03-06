// brute force ---> TC = O(N) & SC = O(N)
const singleNumber_ll = (arr) => {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  for (let [key, value] of map) {
    if (value === 1) return key;
  }
};

// better --> TC = O(N * Log N)
const singleNumber_ll_v2 = (arr) => {
  arr.sort((a, b) => a - b);
  for (let i = 1; i < arr.length; i = i + 3) {
    if (arr[i] !== arr[i - 1]) {
      return nums[i - 1];
    }
  }
  return arr[arr.length - 1];
};

// optimal using bits --> TC = O(N)
const singleNumber_ll_ = (arr) => {
  let ones = 0;
  let twos = 0;
  for (let i = 0; i < arr.length; i++) {
    ones = (ones ^ arr[i]) & ~twos;
    twos = (twos ^ arr[i]) & ~ones;
  }

  return ones;
};

const check = singleNumber_ll_([0, 1, 0, 1, 0, 1, 99]);
console.log(check);
