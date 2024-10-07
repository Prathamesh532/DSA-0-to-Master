// Problem Statement: This problem has 3 variations. They are stated below:
// Variation 1: Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.
// Variation 2: Given the row number n. Print the n-th row of Pascal’s triangle.
// Variation 3: Given the number of rows n. Print the first n rows of Pascal’s triangle.
// In Pascal’s triangle, each number is the sum of the two numbers directly above it as shown in the figure below:

// pascal triangle
// 1
// 1,1
// 1,2,1
// 1,3,3,1
// 1,4,5,4,1
// 1,5,10,5,1

// -----
// Given row number r and column number c. Print the element at position (r, c) in Pascal’s triangle.

function nCr(n, r) {
  let result = 1;
  for (let i = 0; i < r; i++) {
    result = result * (n - i);
    result = result / (i + 1);
  }
  return result;
}

let ans = nCr(5 - 1, 4 - 1); // doing n-1 and r-1 is important
console.log("ans for 4C2: ", ans);

// ---------------------
//Given the row number n. Print the n-th row of Pascal’s triangle. ---> O(N)
function printNthRow(n) {
  let ans = 1;
  let result = [1];
  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = ans / i;
    result.push(ans);
  }
  return result;
}

let rowN = printNthRow(5);
// console.log("rowN", rowN);

// -----------------
// Given the number of rows n. Print the first n rows of Pascal’s triangle. ---> O(N^2)
function printPascalTriangle(n) {
  let ans = [];
  for (let i = 1; i <= n; i++) {
    ans.push(printNthRow(i));
  }
  return ans;
}

let printPascal = printPascalTriangle(5);
console.log("printPascal", printPascal);

for (let i = 0; i < printPascal.length; i++) {
  console.log(printPascal[i].join(" "));
}
