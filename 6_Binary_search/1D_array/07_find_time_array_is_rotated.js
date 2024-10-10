let arr = [0, 1, 2, 3];

const using_BS = (arr) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;

  let mini = Infinity;
  let index = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);

    if (arr[low] <= arr[high]) {
      if (arr[low] < mini) {
        index = low;
        mini = arr[low];
      }
      break;
    }
    if (arr[low] <= arr[mid]) {
      if (arr[low] < mini) {
        index = low;
        mini = arr[low];
      }
      low = mid + 1;
    } else {
      if (arr[mid] < mini) {
        index = mid;
        mini = arr[mid];
      }
      high = mid - 1;
    }
  }

  return index;
};

console.log("The Array is Rotated ", using_BS(arr), "Times");
