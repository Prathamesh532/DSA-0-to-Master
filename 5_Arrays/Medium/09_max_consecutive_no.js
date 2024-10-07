let arr = [100, 4, 200, 1, 3, 2];

function linerSearch(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      return true;
    }
  }
  return false;
}

// brute force ---> O(N^2)
const bruteMaxConsecutive = (arr) => {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];
    let count = 1;
    while (linerSearch(arr, x + 1) == true) {
      count++;
      x++;
    }
    max = Math.max(max, count);
  }
  return max;
};

let ans = bruteMaxConsecutive(arr);
console.log("ans", ans);

// better ----> O(N log N) + O(N)
const bettterAns = (arr) => {
  arr.sort((a, b) => a - b); // important sort first
  let count = 0;
  let longest = 1;

  let last_small = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - 1 == last_small) {
      count++;
      last_small = arr[i];
    } else if (last_small !== arr[i]) {
      count = 1;
      last_small = arr[i];
    }
    longest = Math.max(longest, count);
  }
  return longest;
};

let better_ans = bettterAns(arr);
console.log("better ans", better_ans);

// optimal
const usingSet = (arr) => {
  let n = arr.length;
  let set = new Set();
  let count = 0;
  let longest = 1;

  for (let i = 0; i < n; i++) {
    set.add(arr[i]);
  }

  for (let x of set) {
    if (!set.has(x - 1)) {
      count = 1;
      let y = x;
      while (set.has(y + 1)) {
        count++;
        y = y + 1;
      }
      longest = Math.max(longest, count);
    }
  }
  return longest;
};

let optimalans = usingSet(arr);
console.log("Optimal Ans", optimalans);
