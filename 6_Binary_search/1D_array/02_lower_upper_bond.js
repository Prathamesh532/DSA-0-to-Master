let arr = [1, 2, 2, 3];

// lower bond algo --> which finding the lowest/smallest index of element which is '>=' to the given x
const lowerBond = (arr, x) => {
  let n = arr.length;
  let low = 0,
    high = n - 1;

  let ans = n;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] >= x) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

// upper bond algo --> which finding the lowest/smallest index of element which is '>' to the given x
const upperBond = (arr, x) => {
  let n = arr.length;
  let low = 0,
    high = n - 1;

  let ans = n;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] > x) {
      ans = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return ans;
};

console.log(
  "Lower Bond: the Array",
  arr,
  "is ---> at index - ",
  lowerBond(arr, 2)
);

console.log(
  "Upper Bond: the Array",
  arr,
  "is ---> at index - ",
  upperBond(arr, 2)
);
