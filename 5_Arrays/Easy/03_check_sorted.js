let arr = [3, 4, 5, 1, 2];

// check sorted
const checkSorted = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      return false;
    }
  }
  return true;
};

// check rotated sorted
const checkRotatedSorted = (arr) => {
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) count++;
    if (arr[arr.length - 1] > arr[0]) count++;
  }
  if (count <= 1) return true;
  return false;
};

let isSorted = checkRotatedSorted(arr);
console.log("arr", arr, "checkRotatedSorted", isSorted);
