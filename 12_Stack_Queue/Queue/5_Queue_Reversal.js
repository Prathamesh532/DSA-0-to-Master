/*

Given a Queue Q containing N elements, the task is to reverse the order of the elements in the queue.

Example 1:

Input:
Q = 1 2 3 4 5
Output: 
5 4 3 2 1

*/

class Queue {
  constructor() {
    this.elements = [];
  }

  enqueue(value) {
    this.elements.push(value);
  }

  dequeue() {
    return this.isEmpty() ? null : this.elements.shift();
  }

  isEmpty() {
    return this.elements.length === 0;
  }

  size() {
    return this.elements.length;
  }

  front() {
    return this.isEmpty() ? null : this.elements[0];
  }

  reversedQueue(q) {
    let stack = [];

    while (this.elements.length > 0) {
      stack.push(this.dequeue());
    }

    while (stack.length > 0) {
      this.enqueue(stack.pop());
    }

    this.printQueue();
  }

  printQueue() {
    console.log(this.elements);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("queue", queue);
console.log("Reversed Queue:", queue.reversedQueue(queue));
console.log("Dequeued Element:", queue.dequeue());
console.log("Front Element:", queue.front());
console.log("Is Empty:", queue.isEmpty());
console.log("Size:", queue.size());
