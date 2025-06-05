/*
    Maintain a second stack minStack.
    Every time you push, also push the min between current value and top of minStack.
    When you pop, also pop from minStack.
*/

let MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

MinStack.prototype.push = function (val) {
  this.stack.push(val);
  const min =
    this.minStack.length === 0
      ? val
      : Math.min(val, this.minStack[this.minStack.length - 1]);
  this.minStack.push(min);
};

MinStack.prototype.pop = function () {
  if (this.stack.length === 0) return null;
  this.minStack.pop();
  return this.stack.pop();
};

MinStack.prototype.top = function () {
  return this.stack.length === 0 ? null : this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function () {
  return this.minStack.length === 0
    ? null
    : this.minStack[this.minStack.length - 1];
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin()); // -3
minStack.pop();
console.log(minStack.top()); // 0
console.log(minStack.getMin()); // -2