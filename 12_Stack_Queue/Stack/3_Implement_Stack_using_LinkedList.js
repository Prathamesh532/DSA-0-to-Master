class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
  }

  push(x) {
    let newNode = new Node(x);

    // when there is no element
    if (this.head == null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }

    temp.next = newNode;
  }

  pop() {
    if (this.head == null) return null;

    // only 1 element
    if (this.head.next == null) {
      let val = this.head.data;
      this.head = null;
      return val;
    }

    let temp = this.head;
    while (temp.next.next !== null) temp = temp.next;

    let val = temp.next.data;
    temp.next = null;
    return val;
  }

  peek() {
    if (this.head === null) return null;
    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }
    return temp.data;
  }

  isEmpty() {
    return this.head === null;
  }

  size() {
    let temp = this.head;
    let cnt = 0;
    while (temp !== null) {
      cnt++;
      temp = temp.next;
    }
    return cnt;
  }

  printStack() {
    let temp = this.head;
    let output = [];

    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    console.log("Stack (bottom -> top):", output.join(" -> "));
  }
}

// TODO : Check the DRY RUN
class Stack_V2_OPTIMAL {
  constructor() {
    this.head = null; // top of stack
    this.count = 0; // for tracking size
  }

  // Push to top: O(1)
  push(x) {
    const newNode = new Node(x);
    newNode.next = this.head;
    this.head = newNode;
    this.count++;
  }

  // Pop from top: O(1)
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const poppedValue = this.head.data;
    this.head = this.head.next;
    this.count--;
    return poppedValue;
  }

  // Peek: O(1)
  peek() {
    return this.isEmpty() ? null : this.head.data;
  }

  // Is stack empty?
  isEmpty() {
    return this.head === null;
  }

  // Size of the stack
  size() {
    return this.count;
  }

  // Utility method to print stack
  printStack() {
    let temp = this.head;
    const result = [];
    while (temp) {
      result.push(temp.data);
      temp = temp.next;
    }
    console.log("Stack:", result.join(" -> "));
  }
}

const stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.printStack();

console.log("Popped Element:", stack.pop());
console.log("Peek Element:", stack.peek());
console.log("Is Empty:", stack.isEmpty());
console.log("Size:", stack.size());
stack.printStack();
