/**
 * Given an array of size n, the task is to implement k stacks using a single array. We mainly need to perform the following type of queries on the stack.
 *
 * push(x, i) :  This operations pushes the element x into stack i
 * pop(i) : This operation pops the top of stack i
 * Here i varies from 0 to k-1
 *
 */

/**
 * NStack class implements k stacks in a single array of size n.
 * Each stack gets a fixed-size segment of the array.
 * Time complexity: O(1)
 * Space complexity: O(n+k)
 * Wastes space if some stacks are underutilized and others overflow.
 * Fixed-size per stack makes it inefficient for real dynamic usage patterns.
 */
class NStack {
  constructor(n, k) {
    this.n = n; // Total size of the array
    this.k = k; // Total number of stacks
    this.sizePerStack = Math.floor(n / k); // Size allotted to each stack
    this.arr = new Array(n).fill(null); // Main array to hold all stacks
    this.top = new Array(k).fill(-1); // Array to track top of each stack
  }

  push(stack, val) {
    const start_idx = stack * this.sizePerStack; // Start index of this stack's range
    const end_idx = start_idx + this.sizePerStack - 1; // End index of this stack's range

    if (this.top[stack] === -1) {
      // Stack is empty → insert at start index
      this.top[stack] = start_idx;
      this.arr[this.top[stack]] = val;
    } else if (this.top[stack] < end_idx) {
      // Stack has space → increment top and insert
      this.top[stack]++;
      this.arr[this.top[stack]] = val;
    } else {
      // Stack full → cannot insert
      console.log("Stack Overflow for stack", stack);
    }
  }

  pop(stack) {
    if (this.top[stack] === -1) {
      // Stack is empty
      console.log("Stack is Empty");
      return null;
    }

    const val = this.arr[this.top[stack]]; // Get the top value

    if (this.top[stack] === stack * this.sizePerStack) {
      // Stack has only one element → now becomes empty
      this.top[stack] = -1;
    } else {
      // Decrement top to remove top element
      this.top[stack]--;
    }

    return val;
  }
}

/**
 * Most efficient approach, space-optimized version
 * Time Complexity: O(1)
 * Space Complexity: O(n+k)
 * Maximizes space use
 */
class NStack_ {
  constructor(n, k) {
    this.arr = new Array(n).fill(null);
    this.top = new Array(k).fill(-1);
    this.next = new Array(n);
    this.freeSpot = 0;

    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }

    this.next[n - 1] = -1;
  }

  push(stack, val) {
    if (this.freeSpot === -1) {
      console.log("Stack Overflow");
      return;
    }

    // Get index of free spot
    let index = this.freeSpot;

    // Update freeSpot to next free
    this.freeSpot = this.next[index];

    // then insert the val the free spot index
    this.arr[index] = val;

    // Link new value to previous top
    this.next[index] = this.top[stack - 1];

    // update the top
    this.top[stack - 1] = index;
  }

  pop(stack) {
    // check the underflow
    if (this.top[stack - 1] == -1) {
      console.log("stack is empty");
      return null;
    }

    // Index of top element in this stack
    let index = this.top[stack - 1];

    // Move top to next element in the stack
    this.top[stack - 1] = this.next[index];

    // Add index back to free list
    this.next[index] = this.freeSpot;

    // Update free spot
    this.freeSpot = index;

    this.arr[index] = null;

    // Return popped value
    return this.arr[index];
  }
}

const stack = new NStack(10, 3); // 10 size array, 3 stacks
const stack_ = new NStack_(10, 3);

// stack.push(0, 10);
// stack.push(0, 20);
// stack.push(1, 30);
// stack.push(2, 40);

// console.log(stack.arr); // [10, 20, null, null, null, 30, null, null, 40, null]

// console.log(stack.pop(0)); // 20
// console.log(stack.pop(1)); // 30

stack_.push(1, 10);
console.log("stack_.push(1, 10);", stack_.arr);

stack_.push(1, 20);
console.log("stack_.push(1, 20);", stack_.arr);
stack_.push(2, 30);
console.log("stack_.push(2, 30);", stack_.arr);
stack_.push(3, 40);
console.log("stack_.push(3, 40);", stack_.arr);

console.log(stack_.pop(2));
console.log("stack.pop(2)", stack_.arr);
stack_.push(1, 50);
console.log("stack_.push(1, 50);", stack_.arr);

console.log(stack_.pop(1));
console.log("stack_.pop(1)", stack_.arr);
console.log(stack_.pop(2));
console.log("stack_.pop(2)", stack_.arr);
console.log(stack_.pop(3));
console.log("stack_.pop(3)", stack_.arr);
