let arr = [
  [1, 4, 7, 11, 15],
  [2, 5, 8, 12, 19],
  [3, 6, 9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30],
];

//navie solution ---> O(row * col)
const search = (arr, target) => {
  let row = arr.length;
  let col = arr[0].length;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (arr[i][j] == target) {
        return { i, j };
      }
    }
  }
  return [-1, -1];
};
console.log("Navie solution", search(arr, 14));

//better solution using BS ---> O(log2 N)
const BS = (arr, k) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] == k) {
      return mid;
    } else if (arr[mid] > k) high = mid - 1;
    else low = mid + 1;
  }
  return -1;
};

// O(N * log2 M)
const search_usingBS = (arr, k) => {
  let row = arr.length;
  let col = arr[0].length;

  for (let i = 0; i < row; i++) {
    let index = BS(arr[i], k);
    if (index != -1) {
      return { i, index };
    }
  }
  return [-1, -1];
};
console.log("Binary Search solution", search_usingBS(arr, 14));

// optimse solution
const optimse_search = (arr, k) => {
  let n = arr.length;
  let m = arr[0].length;

  let rowIndex = 0;
  let colIndex = m - 1;

  while (rowIndex < n && colIndex >= 0) {
    if (arr[rowIndex][colIndex] == k) return { rowIndex, colIndex };
    else if (arr[rowIndex][colIndex] < k) rowIndex++;
    else colIndex--;
  }
  return [-1, -1];
};
console.log("Binary Search Optimise solution", optimse_search(arr, 14));
