class Queue {
  constructor() {
    this.element = [];
  }

  // enqueue
  enqueue(value) {
    this.element.push(value);
  }

  // dequeue
  dequeue() {
    if (this.element.length == 0) return null;
    return this.element.shift();
  }

  // peek / front
  front() {
    return this.element[0] || null;
  }

  // size
  size() {
    return this.element.length;
  }

  isEmpty() {
    return this.element.length === 0;
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
