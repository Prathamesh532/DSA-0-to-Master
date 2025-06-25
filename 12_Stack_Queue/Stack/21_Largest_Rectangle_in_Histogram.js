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

Given n non-negative integers representing the histogram's bar height where the width of each bar is 1, 
find the area of largest rectangle in the histogram.

Example:
Input: [2,1,5,6,2,3]
Output: 10
Explanation: The largest rectangle is shown in the red area, which has an area = 10 units.

*/

/* NOT WORK For all cases */
function largestRectangleArea(arr) {
  let units = 0;

  for (let i = 1; i < arr.length; i++) {
    let diff = Math.abs(arr[i] - arr[i - 1]);
    let totalUnits = arr[i] + arr[i - 1] - diff;
    units = Math.max(units, totalUnits);
  }

  return units;
}

/* 
Brute using Next and Prev Smaller Element Index
Time Complexity -> O(2N) (nse) + O(2N) (pse) + O(N) (final) == O(5N) ≈ O(N)
space Complexity -> O(2N) (nse) + O(2N) (pse) == O(4N) ≈ O(N)
*/
const nextSmaller = (arr) => {
  let n = arr.length;
  let nse = new Array(n).fill(n);
  let stack = new Stack();

  for (let i = n - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) stack.pop();

    nse[i] = !stack.isEmpty() ? stack.peek() : n;

    stack.push(i);
  }

  return nse;
};

const prevSmaller = (arr) => {
  let n = arr.length;
  let pse = new Array(n).fill(-1);

  let stack = new Stack();

  for (let i = 0; i < n; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) stack.pop();

    pse[i] = !stack.isEmpty() ? stack.peek() : -1;

    stack.push(i);
  }

  return pse;
};

function largestRectangleArea_brute(arr) {
  let result = 0;

  let nse = nextSmaller(arr);
  let pse = prevSmaller(arr);

  for (let i = 0; i < arr.length; i++) {
    let area = arr[i] * (nse[i] - pse[i] - 1);
    result = Math.max(result, area);
  }

  return result;
}

/*
Optimal without using or computing nse and pse, Computing pse ongoing and travsering back or looking back for nse
Time Complexity -> O(N) + O(N) for pooping stack == O(2N) ≈ O(N)
Space Complexity -> O(N)
*/
function largestRectangleArea_(arr) {
  let result = 0;
  let stack = new Stack();

  for (let i = 0; i < arr.length; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] > arr[i]) {
      let element = stack.pop();

      let pse = !stack.isEmpty() ? stack.peek() : -1;
      let nse = i;

      let area = arr[element] * (nse - pse - 1);
      result = Math.max(result, area);
    }

    stack.push(i);
  }

  while (!stack.isEmpty()) {
    let element = stack.pop();
    let pse = !stack.isEmpty() ? stack.peek() : -1;
    let nse = arr.length;

    let area = arr[element] * (nse - pse - 1);
    result = Math.max(result, area);
  }

  return result;
}

const heights = [2, 1, 5, 6, 2, 3];
const check = largestRectangleArea_(heights);
console.log("Result: ", check);

// const nse = nextSmaller(heights);
// console.log("Next Smaller: ", nse);

// const pse = prevSmaller(heights);
// console.log("Prev Smaller: ", pse);
