/**
 * Design a stack that supports increment operations on its elements.
 *
 * Operations:
 *  - CustomStack(int maxSize): Initializes the stack with given max size.
 *  - push(x): Adds element x to top if size < maxSize.
 *  - pop(): Removes and returns top element, or -1 if stack is empty.
 *  - increment(k, val): Increments bottom k elements by val (brute).
 *  - increment_(k, val): Same operation in O(k) time directly (optimal).
 */

class CustomStack {
  constructor(maxSize) {
    this.stack = []; // Stack initialized as empty
    this.maxSize = maxSize; // Max size limit
  }

  // Push element x to top if there's space
  push(x) {
    if (this.stack.length < this.maxSize) {
      this.stack.push(x);
    }
  }

  // Pop top element or return -1 if empty
  pop() {
    return this.stack.length === 0 ? -1 : this.stack.pop();
  }

  /**
   * ❌ Brute-force version of increment using shift & unshift
   * This is inefficient as shift/unshift are O(n)
   */
  increment(k, val) {
    let temp = []; // Temp array to hold shifted elements
    let minLimit = Math.min(k, this.stack.length); // Operate only on min(k, stack.length)

    // Remove all elements and store in temp
    while (this.stack.length > 0) {
      temp.push(this.stack.shift());
    }

    // Increment first k elements
    for (let i = 0; i < minLimit; i++) {
      temp[i] += val;
    }

    // Restore elements in reverse to maintain original order
    while (temp.length > 0) {
      this.stack.unshift(temp.pop());
    }
  }

  /**
   * ✅ Optimal version of increment
   * In-place increment of bottom k elements
   * Time: O(k), Space: O(1)
   */
  increment_(k, val) {
    let limit = Math.min(k, this.stack.length);
    for (let i = 0; i < limit; i++) {
      this.stack[i] += val;
    }
  }
}

// 🔍 Sample usage
const stk = new CustomStack(3);
stk.push(1); // stack = [1]
stk.push(2); // stack = [1, 2]
console.log(stk.pop()); // ➜ 2 → stack = [1]
stk.push(2); // stack = [1, 2]
stk.push(3); // stack = [1, 2, 3]
stk.push(4); // Ignored → stack is full
stk.increment_(5, 100); // ➜ [101, 102, 103]
stk.increment_(2, 100); // ➜ [201, 202, 103]
console.log(stk.pop()); // ➜ 103
console.log(stk.pop()); // ➜ 202
console.log(stk.pop()); // ➜ 201
console.log(stk.pop()); // ➜ -1 (empty)
