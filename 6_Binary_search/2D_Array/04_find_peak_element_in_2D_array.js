let arr = [
  [10, 20, 15],
  [21, 30, 14],
  [7, 16, 32],
];

const findMax = (arr, n, mid) => {
  let maxLen = -1;
  let index = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i][mid] > maxLen) {
      maxLen = arr[i][mid];
      index = i;
    }
  }
  return index;
};

const findPeakElement2D = (arr) => {
  let n = arr.length;
  let m = arr[0].length;

  let low = 0;
  let high = m - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let maxEle = findMax(arr, n, mid);
    let left = mid - 1 >= 0 ? arr[maxEle][mid - 1] : -1;
    let right = mid + 1 < m ? arr[maxEle][mid + 1] : -1;
    if (arr[maxEle][mid] > left && arr[maxEle][mid] > right)
      return { maxEle, mid };
    else if (arr[maxEle][mid] < left) high = mid - 1;
    else low = mid + 1;
  }
  return [-1, -1];
};
console.log("Peak Element in 2D array", findPeakElement2D(arr));
