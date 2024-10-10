let arr = [4, 4, 4, 4, 5, 5, 5, 5, 6, 7, 1, 2, 3, 3, 3, 3, 3];

// brute force
function findMin(arr) {
  let n = arr.length; // size of the array.
  let mini = Infinity;
  for (let i = 0; i < n; i++) {
    // Always keep the minimum.
    mini = Math.min(mini, arr[i]);
  }
  return mini;
}

// using BS
const BS = (arr) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let mini = Infinity;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[low] <= arr[mid]) {
      // left is sorted
      mini = Math.min(mini, arr[low]);
      low = mid + 1;
    } else {
      mini = Math.min(mini, arr[mid]);
      high = mid - 1;
    }
  }
  return mini;
};
console.log("Min in array using BS", BS(arr));
