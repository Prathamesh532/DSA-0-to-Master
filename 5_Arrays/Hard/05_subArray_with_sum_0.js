let arr = [9, -3, 3, -1, 6, -5];

// brute force
function bruteSolution(arr) {
  let maxLen = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
        if (sum == 0) {
          maxLen = Math.max(maxLen, j - i + 1);
        }
      }
    }
  }
  return maxLen;
}
let bruteAns = bruteSolution([6, -2, 2, -8, 1, 7, 4, -10]);
console.log("bruteAns :", bruteAns);

// better solution
function betterSolution(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == 0) {
        max = Math.max(max, j - i + 1);
      }
    }
  }
  return max;
}
let betterAns = betterSolution(arr);
console.log("betterAns :", betterAns);

// optimal solution
function OptimalSolution(arr) {
  let max = 0;
  let map = new Map();
  let sum = 0;
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    sum += arr[i];
    if (sum == 0) {
      max = i + 1;
    } else if (map.has(sum)) {
      max = Math.max(max, i - map.get(sum));
    } else {
      map.set(sum, i);
    }
  }
  return max;
}
let OptimalAns = OptimalSolution(arr);
console.log("OptimalAns :", OptimalAns);
