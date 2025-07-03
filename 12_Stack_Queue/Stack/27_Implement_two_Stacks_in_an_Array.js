/*

Create a data structure twoStacks that represent two stacks. Implementation of twoStacks should use only one array, i.e., 
both stacks should use the same array for storing elements. 
Following functions must be supported by twoStacks.

push1(int x) --> pushes x to first stack 
push2(int x) --> pushes x to second stack
pop1() --> pops an element from first stack and return the popped element 
pop2() --> pops an element from second stack and return the popped element

Input: push1(2), push1(3), push2(4), pop1(), pop2(), pop2()
Output: [3, 4, -1]
Explanation: push1(2) the stack1 will be [2]
                        push1(3) the stack1 will be [2,3]
                        push2(4) the stack2 will be [4]
                        pop1() the popped element will be 3 from stack1 and stack1 will be [2]
                        pop2() the popped element will be 4 from stack2 and now stack2 is empty
                        pop2() the stack2 is now empty hence returned -1

Input: push1(1), push2(2), pop1(), push1(3), pop1(), pop1()
Output: [1, 3, -1]
Explanation: push1(1) the stack1 will be [1]
push2(2) the stack2 will be [2]
pop1() the popped element will be 1 
push1(3) the stack1 will be [3]
pop1() the popped element will be 3
pop1() the stack1 is now empty hence returned -1

*/

class Stack {
  constructor(n) {
    // Initialize total size of array for two stacks
    this.size = n;

    // Create an array of size 'n' to store both stacks
    this.arr = new Array(n);

    // top1 starts from the beginning (left side) for Stack 1
    this.top1 = -1;

    // top2 starts from the end (right side) for Stack 2
    this.top2 = n;
  }

  // Push element to Stack 1 (left side)
  push1(val) {
    // Check if there is space between the two tops
    if (this.top1 < this.top2 - 1) {
      this.top1++;
      this.arr[this.top1] = val; // Insert value at top1 position
    } else {
      console.log("Stack Overflow in Stack1");
    }
  }

  // Push element to Stack 2 (right side)
  push2(val) {
    // Check if there is space between the two tops
    if (this.top1 < this.top2 - 1) {
      this.top2--;
      this.arr[this.top2] = val; // Insert value at top2 position
    } else {
      console.log("Stack Overflow in Stack2");
    }
  }

  // Pop element from Stack 1
  pop1() {
    // If stack1 is not empty
    if (this.top1 >= 0) {
      const val = this.arr[this.top1]; // Get the top element
      this.top1--; // Decrease top1 pointer
      return val;
    }
    return -1; // Return -1 if stack1 is empty
  }

  // Pop element from Stack 2
  pop2() {
    // If stack2 is not empty
    if (this.top2 < this.size) {
      const val = this.arr[this.top2]; // Get the top element
      this.top2++; // Increase top2 pointer (moving right)
      return val;
    }
    return -1; // Return -1 if stack2 is empty
  }
}

const stack = new Stack(7);
stack.push2(2); // stack2: [2]
console.log(stack.pop1()); // stack1 is empty → -1
stack.push1(3); // stack1: [3]
console.log(stack.pop1()); // → 3
console.log(stack.pop1()); // → -1
