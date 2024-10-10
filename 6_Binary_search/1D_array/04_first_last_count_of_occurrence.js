let arr = [3, 4, 13, 13, 13, 20, 40];

// lower bond
const lb = (arr, x) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
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

// upper bond
const ub = (arr, x) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
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

//first occurence
const findFirstOccur = (arr, k) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let first = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == k) {
      first = mid;
      high = mid - 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return first;
};

//last occurence
const findLastOccur = (arr, k) => {
  let n = arr.length;
  let low = 0;
  let high = n - 1;
  let last = -1;

  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] == k) {
      last = mid;
      low = mid + 1;
    } else if (arr[mid] > k) {
      high = mid - 1;
    } else low = mid + 1;
  }

  return last;
};

// count occurence
const findCountOfOccurence = (arr, k) => {
  let first = findFirstOccur(arr, k);
  if (first == -1) return 0;
  let last = findLastOccur(arr, k);
  return last - first + 1;
};

const first_last_occurence = (arr, k) => {
  let n = arr.length;
  let first = lb(arr, k);
  if (first == n || arr[first] != k) return [-1, -1];
  let last = ub(arr, k) - 1;
  return [first, last];
};

let k = 20;

console.log("FIRST & LAST occurence is", first_last_occurence(arr, k));
console.log("FIRST & LAST occurence is", [
  findFirstOccur(arr, k),
  findLastOccur(arr, k),
]);
console.log("THE COUNT OF", k, "is : ", findCountOfOccurence(arr, k));
