let arr = [4, 5, 6, 7, 0, 1, 2, 3];

// brute force ---> linear search O(N)
const linearSearch = (arr, k) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] == k) return i;
  }
  return -1;
};
console.log("Linear Search:", linearSearch(arr, 0));

// using Binary search ----> O(log2 )
const Binary_Search = (arr, k) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === k) {
      return mid;
    }
    if (arr[mid] >= arr[low]) {
      // left part is sorted
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      // right part is sorted
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }

  return -1;
};
console.log("Binary Search:", Binary_Search(arr, 0));

let arr2 = [3, 1, 2, 3, 3, 3, 3, 3];

// when array has  duplicates ---> 0(log2 N) best and average case. O(N/2)
const Rotated_Sorted_2 = (arr, k) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === k) {
      return true;
    }
    if (arr[mid] == arr[low] && arr[mid] == arr[high]) {
      low += 1;
      high -= 1;
      continue;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] <= k && k <= arr[mid]) {
        high = mid - 1;
      } else low = mid + 1;
    } else {
      if (arr[mid] <= k && k <= arr[high]) {
        low = mid + 1;
      } else high = mid - 1;
    }
  }
  return false;
};
console.log("Binary Search - 2:", Rotated_Sorted_2(arr2, 3));
