/*

Online Stock Span:- 
The stock span problem is a financial problem where we have a series of n daily price quotes for a stock and 
we need to calculate the span of the stock's price for all n days. 
The span Si of the stock's price on a given day i is defined as the maximum number of consecutive days for which the price of the 
stock on the current day is less than or equal to its price on the previous day. If the price of the stock on the current day 
is greater than the price of the stock on the previous day, then the span is 1. For example, if the stock price on day 0 is 100, 
on day 1 is 80, on day 2 is 60, on day 3 is 70, on day 4 is 60, on day 5 is 75 and on day 6 is 85, then the stock span for day 0 is 1, 
for day 1 is 1, for day 2 is 1, for day 3 is 2, for day 4 is 1, for day 5 is 4 and for day 6 is 6.

Example:-
Input: prices = [100, 80, 60, 70, 60, 75, 85]
Output: [1, 1, 1, 2, 1, 4, 6]


*/

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

// Naive implementation using an array
function StockSpanner() {
  this.arr = []; // Stores all the prices seen so far
}

StockSpanner.prototype.next = function (value) {
  let cnt = 1; // Start span at 1 for the current price

  this.arr.push(value); // Add current price to the array

  // Traverse backward and count how many previous prices are <= current
  for (let i = this.arr.length - 2; i >= 0; i--) {
    if (this.arr[i] <= value)
      cnt++; // Add to span if price is less than or equal
    else break; // Stop if a higher price is encountered
  }

  return cnt;
};

// ✅ Optimized version using a custom Stack (monotonic stack technique)
function StockSpanner_() {
  this.stack = new Stack(); // Stack stores [price, span] pairs
}

StockSpanner_.prototype.next_ = function (price) {
  let span = 1; // Start span at 1 for the current day

  // Collapse previous prices that are <= current price and accumulate their spans
  while (!this.stack.isEmpty() && this.stack.peek()[0] <= price) {
    span += this.stack.pop()[1]; // Add the span of the popped price
  }

  // Push the current price along with its total calculated span
  this.stack.push([price, span]);

  return span;
};

const spanner = new StockSpanner_();
const prices = [100, 80, 60, 70, 60, 75, 85];

const result = prices.map((price) => spanner.next_(price));
console.log(result);
