let arr = [
  [1, 3, 5],
  [2, 6, 9],
  [3, 6, 9],
];

// brute force ---> O(n*m) + O(n*m * log(n*m))
const findMedian = (arr) => {
  let n = arr.length;
  let m = arr[0].length;

  // 2D --> 1D
  let temp = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      temp.push(arr[i][j]);
    }
  }

  temp.sort((a, b) => a - b);
  let median = Math.floor(temp.length / 2);
  return temp[median];
};
console.log("Brute force", findMedian(arr));

// using binary ---> O(Log2 Col) + O(row) + O(log2 col * row)

// uppper bond
const upperBond = (arr, col, k) => {
  let low = 0;
  let high = col - 1;
  let ans = col;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] > k) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};

// count number which is greater
const countNumber = (arr, row, col, k) => {
  let cnt = 0;
  for (let i = 0; i < row; i++) {
    cnt += upperBond(arr[i], col, k);
  }
  return cnt;
};

const findMedian_usingBS = (arr, row, col) => {
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < row; i++) {
    min = Math.min(min, arr[i][0]);
    max = Math.max(max, arr[i][col - 1]);
  }

  let low = min;
  let high = max;

  let req = Math.floor((row * col) / 2);

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let cnt = countNumber(arr, row, col, mid);
    if (cnt <= req) low = mid + 1;
    else high = mid - 1;
  }
  return low;
};
let row = arr.length;
let col = arr[0].length;
console.log("Using Binary Search", findMedian_usingBS(arr, row, col));
