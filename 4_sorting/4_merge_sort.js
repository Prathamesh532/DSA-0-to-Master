let arr = [1, 2, 4, 5, 6];
let n = arr.length - 1;

// merge sort
function merge_sort(arr, low, high) {
  if (low >= high) return;
  let mid = Math.floor((low + high) / 2);
  console.log("mid", mid);

  merge_sort(arr, low, mid);
  merge_sort(arr, mid + 1, high);
  mergeArr(arr, low, mid, high);
  console.log("runs ");
}

function mergeArr(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  // comparing the 2 sort arrays
  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }
  // if elements are there is left part of arrays (when the array is odd size)
  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }
  // if elements are there is right part of arrays (when the array is odd size)
  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  // Copy the sorted elements back to the original array
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
  console.log("temp", temp);
}

merge_sort(arr, 0, n);
console.log("merge sort", arr);
