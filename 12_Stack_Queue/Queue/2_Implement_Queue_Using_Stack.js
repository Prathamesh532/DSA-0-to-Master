class Queue {
  constructor() {
    this.elements = [];
  }

  // Stack-like push: costly push to rotate queue
  enqueue(value) {
    this.elements.push(value);
    let size = this.elements.length;

    // Rotate to make the last pushed element appear at the front
    while (size > 1) {
      this.elements.push(this.elements.shift());
      size--;
    }
  }

  // Stack-like pop: remove from front (top of stack)
  dequeue() {
    if (this.isEmpty()) return null;
    return this.elements.pop();
  }

  // Stack-like top: peek at front
  front() {
    return this.isEmpty() ? null : this.elements[this.elements.length - 1];
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

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("queue", queue);
console.log("Dequeued Element:", queue.dequeue());
console.log("Front Element:", queue.front());
console.log("Is Empty:", queue.isEmpty());
console.log("Size:", queue.size());
