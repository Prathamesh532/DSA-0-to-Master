let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log("orginal matrix", matrix);

const col = matrix.length;
const row = matrix[0].length;

function brute90deg(matrix, n, m) {
  let col = m;
  let row = n;
  let ansMatrix = new Array(row).fill(0).map(() => new Array(col).fill(0)); // imprtant ***
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ansMatrix[j][n - i - 1] = matrix[i][j];
    }
  }
  return ansMatrix;
}

// let bruteAns = brute90deg(matrix, col, row);
// console.log("brute ans ", bruteAns);

function optimal90Deg(arr, n) {
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // swap
      [arr[i][j], arr[j][i]] = [arr[j][i], arr[i][j]];
    }
  }
  for (let i = 0; i < n; i++) {
    arr[i].reverse();
  }
}

optimal90Deg(matrix, row);
console.log("optimal matrix ans", matrix);
