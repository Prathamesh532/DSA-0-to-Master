let arr = [2, 6, 5, 8, 11];
let target = 15;

// brute force ---> O(n^2)
function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        //   return "YES";
        return [i, j];
      }
    }
  }
  return "NO";
}

// better hashing ---> T.C = 0(N) + O(N) == O(N) , S.C = O(N)
let hashmap = new Map();
// pre compute
arr.forEach((key) => {
  if (hashmap.has(key)) {
    hashmap.set(key, hashmap.get(key) + 1);
  } else {
    hashmap.set(key, 1);
  }
});
function hashing2Sum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    let needed = target - ele;
    if (hashmap.has(needed)) {
      return "YES";
    }
  }
  return "NO";
}

// optimal 2 pointer ---> T.C = O(N) + O(N logN) , S.C = O(1)
const twoPointer2Sum = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  arr.sort((a, b) => a - b);
  while (left < right) {
    if (arr[left] + arr[right] > target) {
      right--;
    } else {
      left++;
    }
    if (arr[left] + arr[right] == target) return "YES";
  }
  return "NO";
};

let ans = twoPointer2Sum(arr, target);
console.log("ans", ans);
