class Stack {
  constructor() {
    this.element = [];
  }

  // push
  push(value) {
    this.element.push(value);
  }

  // pop
  pop() {
    if (this.element.length == 0) return null;
    return this.element.pop();
  }

  // peek
  peek() {
    return this.element[this.element.length - 1];
  }

  // isEmpty
  isEmpty() {
    return this.element.length == 0;
  }

  size() {
    return this.element.length;
  }
}

/*

Given a rows x cols binary matrix filled with 0's and 1's, find the largest rectangle containing only 1's and return its area.

Example:
Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]
Output: 6
Explanation: The maximal rectangle is shown in the above picture.

*/

/*
Time complexity = O(row * col) (prefixSum) + O(2 * col) (find largest histogram)
Space complexity = O(row * col) (perfixSum) + O(N) (stack) 
*/

const largestRectangleArea_ = (arr) => {
  let result = 0;
  let stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {
      let element = stack.pop();
      let nse = i;
      let pse = !stack.isEmpty() ? stack.peek() : -1;

      let area = arr[element] * (nse - pse - 1);
      result = Math.max(result, area);
    }

    stack.push(i);
  }

  while (!stack.isEmpty()) {
    let element = stack.pop();
    let nse = arr.length;
    let pse = !stack.isEmpty() ? stack.peek() : -1;

    let area = arr[element] * (nse - pse - 1);
    result = Math.max(result, area);
  }

  return result;
};

function maximalRectangle(matrix) {
  let result = 0;

  let row = matrix.length;
  let col = matrix[0].length;

  let perfixMat = new Array(row).fill(0).map(() => new Array(col).fill(0));

  // step 1: compute perfix sum
  for (let i = 0; i < col; i++) {
    let sum = 0;
    for (let j = 0; j < row; j++) {
      sum += Number(matrix[j][i]);
      if (matrix[j][i] == 0) sum = 0;
      perfixMat[j][i] = sum;
    }
  }

  // step 2: use largest rectangle histogram solution to every row
  for (let mat of perfixMat) {
    let area = largestRectangleArea_(mat);
    result = Math.max(result, area);
  }

  return result;
}

// more optimal computing the perfix Sum and area in one pass
function maximalRectangle_(matrix) {
  let result = 0;

  let row = matrix.length;
  let col = matrix[0].length;

  let heights = Array(col).fill(0);

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      heights[j] = matrix[i][j] === "1" ? heights[j] + 1 : 0;
    }
    let area = largestRectangleArea_(heights);
    result = Math.max(result, area);
  }

  return result;
}

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
const check = maximalRectangle(matrix);
console.log(check);
