let arr = [1, 3, 2, 3, 1];

// brute force  ---> O(N^2)
function bruteSolution(arr) {
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > 2 * arr[j]) {
        cnt++;
      }
    }
  }
  return cnt;
}

let bruteAns = bruteSolution(arr);
console.log("Brute Ans:", bruteAns);

// optimal Solution ---->  O(2N log N)
// O(N log N)
function mregeArr(arr, low, mid, high) {
  let temp = [];
  let left = low;
  let right = mid + 1;

  while (left <= mid && right <= high) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= high) {
    temp.push(arr[right]);
    right++;
  }
  // transferring all elements from temporary to arr
  for (let i = low; i <= high; i++) {
    arr[i] = temp[i - low];
  }
}

function mergeSort(arr, low, high) {
  let cnt = 0;
  if (low >= high) return cnt;
  let mid = Math.floor((low + high) / 2);
  cnt += mergeSort(arr, low, mid);
  cnt += mergeSort(arr, mid + 1, high);
  cnt += isPair(arr, low, mid, high);
  mregeArr(arr, low, mid, high);
  return cnt;
}

// O(N Log n) // important *****
function isPair(arr, low, mid, high) {
  let right = mid + 1;
  let cnt = 0;
  for (let i = low; i <= mid; i++) {
    while (right <= high && arr[i] > 2 * arr[right]) right++; // important *****
    cnt += right - (mid + 1); // important *****
  }
  return cnt;
}

function optimal(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}

let optimalAns = optimal(arr);
console.log("Optimal Ans:", optimalAns);
