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

// Next Smaller elements ---> Value
const nextSmaller_value = (arr) => {
  let n = arr.length;
  // make a array with fill -1 in case we dont find any smaller
  let nse = new Array(n).fill(-1);
  let stack = new Stack();

  // for value we will travers to right to left <----
  for (let i = n - 1; i >= 0; i--) {
    // check if and manitain the stack which has decrease oreder
    // if the top/peek element is greater than the current arr[i] we pop()
    while (!stack.isEmpty() && stack.peek() >= arr[i]) stack.pop();

    // put the stack peek in ith index if stack have elements
    nse[i] = stack.isEmpty() ? -1 : stack.peek();

    // pushing element to stack everytime
    stack.push(arr[i]);
  }

  return nse;
};

// Next Smaller Element ---> Indices/index
const nextSmaller_indices = (arr) => {
  let n = arr.length;

  // we fill the array with arr size number
  let nse = new Array(n).fill(n);
  let stack = new Stack();

  // traverse from right to left same
  for (let i = n - 1; i >= 0; i--) {
    // if check and maintain monotonic decreasing stack
    while (!stack.isEmpty() && arr[stack.peek()] >= arr[i]) stack.pop();

    nse[i] = stack.isEmpty() ? -1 : stack.peek(); // just changed this to get the index

    // we push the index to stack
    stack.push(i);
  }

  return nse;
};

// pervious smaller element ---> value
const pervSmaller_value = (arr) => {
  let n = arr.length;
  let pse = new Array(n).fill(-1);

  let stack = new Stack();

  for (let i = 0; i < n; i++) {
    while (!stack.isEmpty() && stack.peek() >= arr[i]) stack.pop();

    pse[i] = !stack.isEmpty() ? stack.peek() : -1;

    stack.push(arr[i]);
  }

  return pse;
};

// pervious smaller element ---> Indices/index
const pervSmaller_indices = (arr) => {
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

// Next Greater elements ---> Value
const nextGreater_value = (arr) => {
  let n = arr.length;
  let nge = new Array(n).fill(-1);

  let stack = new Stack();

  for (let i = n - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= arr[i]) stack.pop();

    nge[i] = !stack.isEmpty() ? stack.peek() : -1;

    stack.push(arr[i]);
  }

  return nge;
};

// Next Greater elements ---> indice/index
const nextGreater_indices = (arr) => {
  let n = arr.length;
  let nge = new Array(n).fill(-1);

  let stack = new Stack();

  for (let i = n - 1; i >= 0; i--) {
    while (!stack.isEmpty() && arr[stack.peek()] <= arr[i]) stack.pop();

    nge[i] = !stack.isEmpty() ? stack.peek() : -1;

    stack.push(i);
  }

  return nge;
};

// Previous Greater elements ---> value
const prevGreater_value = (arr) => {
  let n = arr.length;
  let pge = new Array(n).fill(-1);

  let stack = new Stack();

  for (let i = 0; i < n; i++) {
    while (!stack.isEmpty() && stack.peek() < arr[i]) stack.pop();

    pge[i] = !stack.isEmpty() ? stack.peek() : -1;

    stack.push(arr[i]);
  }

  return pge;
};

// Previous Greater elements ---> indices/index
const prevGreater_indices = (arr) => {
  let n = arr.length;
  let pge = new Array(n).fill(-1);

  let stack = new Stack();

  for (let i = 0; i < n; i++) {
    while (!stack.isEmpty() && arr[stack.peek()] < arr[i]) stack.pop();

    pge[i] = !stack.isEmpty() ? stack.peek() : -1;

    stack.push(i);
  }

  return pge;
};

const arr = [4, 8, 5, 2, 25];
const NSE = nextSmaller_value(arr);
const nse_ = nextSmaller_indices(arr);
const PSE = pervSmaller_value(arr);
const pse_ = pervSmaller_indices(arr);
const NGE = nextGreater_value(arr);
const nge_ = nextGreater_indices(arr);
const PGE = prevGreater_value(arr);
const pge_ = prevGreater_indices(arr);

console.log("Next Smaller Element:-", NSE);
console.log("Next Smaller Index:-", nse_);
console.log("Prev Smaller Value:-", PSE);
console.log("Prev Smaller Index:-", pse_);
console.log("Next Greater Value :-", NGE);
console.log("Next Greater Index :-", nge_);
console.log("Prev Greater Value :-", PGE);
console.log("Prev Greater Index :-", pge_);
