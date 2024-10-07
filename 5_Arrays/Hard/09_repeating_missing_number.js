let arr = [3, 1, 2, 5, 3];

// brute force
function duplicates(arr) {
  let n = arr.length;
  arr.sort((a, b) => a - b); // important *****
  let ans = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] == arr[i + 1]) {
      ans.push(arr[i]);
    }
  }
  return ans;
}
// let duplicate = duplicates(arr);

// brute force ---> O(N^2)
function bruteForce(arr) {
  let n = arr.length;
  let repeating = -1;
  let missing = -1;

  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
      if (arr[j] == i) {
        cnt++;
      }
    }
    if (cnt == 2) repeating = i;
    else if (cnt == 0) missing = i;

    if (missing != -1 && repeating != -1) break;
  }
  return [repeating, missing];
}

let bruteAns = bruteForce(arr);
console.log("Brute Ans: ", bruteAns);

// better solution ---> using hashing ---> O(2N) , S.C == O(N)
function usingHashing(arr) {
  let n = arr.length;
  let hashMap = new Array(n).fill(0);
  let repeating = -1;
  let missing = -1;

  for (let i = 0; i < n; i++) {
    hashMap[arr[i]]++;
  }

  for (let i = 1; i <= n; i++) {
    if (hashMap[i] == 2) repeating = i;
    else if (hashMap[i] == 0) missing = i;
    if (repeating != -1 && missing != -1) break;
  }
  return [repeating, missing];
}

let betterAns = usingHashing(arr);
console.log("Brute Ans: ", betterAns);

// Optimal solution ---> Math
function usingMath(arr) {
  let n = arr.length;

  let sumofn = (n * (n + 1)) / 2;
  let sumOfn2 = (n * (n + 1) * (2 * n + 1)) / 6;
  let S = 0;
  let S2N = 0;

  for (let i = 0; i < n; i++) {
    S += arr[i];
    S2N += arr[i] * arr[i];
  }

  let first = S - sumofn;
  let second = S2N - sumOfn2;
  second = second / first;

  let x = (second + first) / 2;
  let y = x - first;

  return [x, y];
}

let mathAns = usingMath(arr);
console.log("mathAns Ans: ", mathAns);
