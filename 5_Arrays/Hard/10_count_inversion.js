let arr = [2, 4, 1, 3, 5];

// brute force ---> O(N^2)
function bruteForce(arr) {
  let n = arr.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}
let bruteAns = bruteForce(arr);
console.log("Brute Ans:", bruteAns);

// optimal solution ---> O(N)
function mregeArray(arr, l, m, r) {
  let temp = [];
  let left = l;
  let right = m + 1;
  let cnt = 0;

  while (left <= m && right <= r) {
    if (arr[left] <= arr[right]) {
      temp.push(arr[left]);
      left++;
    } else {
      temp.push(arr[right]);
      cnt += m - left + 1; //// Important **********
      right++;
    }
  }

  while (left <= m) {
    temp.push(arr[left]);
    left++;
  }

  while (right <= r) {
    temp.push(arr[right]);
    right++;
  }

  return cnt;
}

function optimalUsing_mergeSort(arr, l, r) {
  let mid = Math.floor((l + r) / 2);
  let cnt = 0;
  if (l >= r) return cnt; /// important ************
  cnt += optimalUsing_mergeSort(arr, l, mid);
  cnt += optimalUsing_mergeSort(arr, mid + 1, r);
  cnt += mregeArray(arr, l, mid, r);
  return cnt;
}

let optimalAns = optimalUsing_mergeSort(arr, 0, arr.length - 1);
console.log("Optimal Ans: ", optimalAns);
