class Queue {
  constructor() {
    this.elements = [];
  }

  // Stack-like push: costly push to rotate queue
  push(value) {
    this.elements.push(value);
    let size = this.elements.length;

    // Rotate to make the last pushed element appear at the front
    while (size > 1) {
      this.elements.push(this.elements.shift());
      size--;
    }
  }

  // Stack-like pop: remove from front (top of stack)
  pop() {
    if (this.isEmpty()) return null;
    return this.elements.shift();
  }

  // Stack-like top: peek at front
  front() {
    return this.isEmpty() ? null : this.elements[0];
  }

  // Size of stack
  size() {
    return this.elements.length;
  }

  // Check if stack is empty
  isEmpty() {
    return this.elements.length === 0;
  }
}

// Test
const stack = new Queue();

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Popped:", stack.pop()); // 5
console.log("Top Element:", stack.front()); // 4
console.log("Is Empty:", stack.isEmpty()); // false
console.log("Size:", stack.size()); // 4
