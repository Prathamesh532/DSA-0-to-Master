let arr = [
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];

// brute force
const searchIn2D = (arr, target) => {
  let row = arr.length;
  let column = arr[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (arr[i][j] == target) {
        return true; // return index
      }
    }
  }
  return false;
};
console.log("Brute force", searchIn2D(arr, 100));

// using BS ---> O(N * log2(row*column))
const BS = (arr, k) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      return true;
    } else if (arr[mid] >= k) high = mid - 1;
    else low = mid + 1;
  }
  return false;
};

const searchIn2D_usingBS = (arr, target) => {
  let row = arr.length;
  let column = arr[0].length;

  for (let i = 0; i < row; i++) {
    if (arr[i][0] <= target && target <= arr[i][column - 1]) {
      return BS(arr[i], target);
    }
  }
  return false;
};
console.log("using BS", searchIn2D_usingBS(arr, 3));

// optimse ---> O(log2 (row * column))
const Optimse_BS = (arr, k) => {
  let row = arr.length;
  let column = arr[0].length;

  let low = 0;
  let high = row * column - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let rowIndex = Math.floor(mid / column);
    let columnIndex = mid % column;
    if (arr[rowIndex][columnIndex] == k) return true;
    else if (arr[rowIndex][columnIndex] > k) high = mid - 1;
    else low = mid + 1;
  }
  return false;
};
console.log("optimse using BS", Optimse_BS(arr, 3));
