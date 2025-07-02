/*
Design a stack data structure that supports the following four operations, each in constant time complexity, i.e., O(1):
    push(x): Insert an element x onto the top of the stack.
    pop(): Remove and return the element at the top of the stack.
    findMiddle(): Retrieve the middle element of the stack without removing it.
    deleteMiddle(): Remove the middle element from the stack.

Examples:
    Input: operations =["push", "push", "findMiddle", "pop", "deleteMiddle"]
    values = [[1], [2], [], [], []]
    Output: 2 1
    Explanation: Let's break down the sequence of operations more clearly:

    First Operation: Push the value 1 onto the stack.
    Second Operation: Push the value 2 onto the stack. At this point, the stack (from bottom to top) is: [1, 2].
    Third Operation: Retrieve the middle element. Since the stack contains two items, the middle element is defined as 2 (second middle).
    Fourth Operation: Pop the top element, which is 2, removing it from the stack.
    Fifth Operation: Delete the middle element. With 2 already removed, only 1 remains; hence, 1 is also deleted.

*/

// This using array only
// class Stack {
//   constructor() {
//     this.left = []; // Holds the lower half (including mid)
//     this.right = []; // Holds the upper half
//   }

//   // Push value to the top of stack
//   push(val) {
//     this.right.push(val);
//     this._balance();
//   }

//   // Pop top value from stack
//   pop() {
//     if (this.right.length === 0 && this.left.length === 0) return null;

//     if (this.right.length === 0) {
//       // If right is empty, shift one from left to right
//       this.right.push(this.left.pop());
//     }

//     const val = this.right.pop();
//     this._balance();
//     return val;
//   }

//   // Find the middle element
//   findMiddle() {
//     if (this.left.length === 0) return null;
//     return this.left[this.left.length - 1]; // Top of left is middle
//   }

//   // Delete the middle element
//   deleteMiddle() {
//     if (this.left.length === 0) return null;
//     const val = this.left.pop();
//     this._balance();
//     return val;
//   }

//   // Internal: Balances left and right stacks to maintain middle access
//   _balance() {
//     // Balance so that left.length = ceil(total_length / 2)
//     while (this.left.length < this.right.length) {
//       this.left.push(this.right.shift()); // Move from right to left
//     }

//     while (this.left.length > this.right.length + 1) {
//       this.right.unshift(this.left.pop()); // Move from left to right
//     }
//   }
// }

/*
 * using Doubly linked List
 */
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null; // Top of stack
    this.mid = null; // Middle node
    this.size = 0; // Stack size
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.head = newNode;
      this.mid = newNode;
    } else {
      newNode.prev = this.head;
      this.head.next = newNode;
      this.head = newNode;

      // Update mid pointer
      if (this.size % 2 === 0) {
        this.mid = this.mid.next;
      }
    }
    this.size++;
  }

  pop() {
    if (this.size === 0) return null;

    const val = this.head.data;

    if (this.size === 1) {
      this.head = null;
      this.mid = null;
    } else {
      this.head = this.head.prev;
      this.head.next = null;

      // Update mid pointer
      if (this.size % 2 === 1) {
        this.mid = this.mid.prev;
      }
    }

    this.size--;
    return val;
  }

  findMiddle() {
    if (this.mid === null) return null;
    return this.mid.data;
  }

  deleteMiddle() {
    if (this.size === 0) return null;

    const val = this.mid.data;

    if (this.size === 1) {
      this.head = null;
      this.mid = null;
    } else if (this.size === 2) {
      this.mid = this.head;
      this.head.prev = null;
    } else {
      const prev = this.mid.prev;
      const next = this.mid.next;

      if (prev) prev.next = next;
      if (next) next.prev = prev;

      // Update mid pointer
      if (this.size % 2 === 0) {
        this.mid = prev; // previous was mid
      } else {
        this.mid = next; // next becomes mid
      }
    }

    this.size--;
    return val;
  }
}

// Demo
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log("Middle:", stack.findMiddle()); // 3

stack.deleteMiddle(); // Deletes 3
console.log("Middle after deletion:", stack.findMiddle()); // 4

stack.pop(); // Pops 5
console.log("Middle after pop:", stack.findMiddle()); // 2
