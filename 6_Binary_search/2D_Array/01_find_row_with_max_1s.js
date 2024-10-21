let arr = [
  [0, 0],
  [1, 1],
];

// let column = arr[0].length;
// let row = arr.length;

// solution ---> O(row*column)
const rowWithMax1s = (arr) => {
  let column = arr[0].length;
  let row = arr.length;

  let max_cnt = -1;
  let index = -1;

  for (let i = 0; i < row; i++) {
    let cntRow = 0;
    for (let j = 0; j < column; j++) {
      if (arr[i][j] == 1) {
        cntRow += arr[i][j];
      }
    }
    if (cntRow > max_cnt) {
      max_cnt = cntRow;
      index = i;
    }
  }
  return index;
};
console.log("Max 1s in row is:", rowWithMax1s(arr));

// using Binary Search
const rowWithMax1s_usingBS = (arr) => {
  let column = arr[0].length;
  let row = arr.length;

  let max_cnt = -1;
  let index = -1;

  for (let i = 0; i < row; i++) {
    let totalOneInRow = column - lowerBond(arr[i], column, 1);

    if (totalOneInRow > max_cnt) {
      max_cnt = totalOneInRow;
      index = i;
    }
  }
  return index;
};

// lowerBond
const lowerBond = (arr, n, k) => {
  let low = 0;
  let high = n - 1;
  let ans = n;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] >= k) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }
  return ans;
};

console.log("Max 1s in row using Binary Search is:", rowWithMax1s_usingBS(arr));
