let arr = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

//brute force  ---> O(N log n) + O(2N)
function bruteSolution(arr) {
  let n = arr.length;
  let ans = [];
  arr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < n; i++) {
    let start = arr[i][0];
    let end = arr[i][1];

    if (ans.length != 0 && end <= ans[ans.length - 1][1]) continue;

    for (let j = i + 1; j < n; j++) {
      if (arr[j][0] <= end) {
        end = Math.max(end, arr[j][1]);
      } else break;
    }
    ans.push([start, end]);
  }
  return ans;
}
let bruteAns = bruteSolution(arr);
console.log("brute Ans", bruteAns);

// optimal solution ---> O(N log n) + O(N)
function optimalSolution(arr) {
  let n = arr.length;
  let ans = [];
  arr.sort((a, b) => a[0] - b[0]);
  ans.push(arr[0]);
  for (let i = 1; i < n; i++) {
    let lastInAns = ans[ans.length - 1];
    let currentArr = arr[i];

    if (currentArr[0] <= lastInAns[1]) {
      lastInAns[1] = Math.max(lastInAns[1], currentArr[1]);
    } else {
      ans.push(arr[i]);
    }
  }
  return ans;
}
let optimalAns = optimalSolution(arr);
console.log("optima Ans", optimalAns);
