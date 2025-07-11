/*

A Circular Queue is a way of implementing a normal queue where the last element of the queue is connected to the first element of the queue forming a circle.
The operations are performed based on the FIFO (First In First Out) principle. It is also called 'Ring Buffer'. 
In a normal Queue, we can insert elements until the queue becomes full. However once the queue becomes full, 
we can not insert the next element even if there is a space in front of the queue.

*/

/**
 * BruteForceQueue uses a simple array and shifts elements after each dequeue.
 * This is not efficient due to O(n) time on each dequeue.
 */
class CircularQueue_Brute {
  constructor(size) {
    this.size = size;
    this.arr = new Array(size);
    this.count = 0;
  }

  /**
   * Adds a value to the end of the queue.
   * Time Complexity: O(1)
   */
  enqueue(val) {
    if (this.count >= this.size) {
      console.log("Queue Overflow");
      return;
    }
    this.arr[this.count++] = val;
  }

  /**
   * Removes the front value and shifts all elements.
   * Time Complexity: ❌ O(n)
   */
  dequeue() {
    if (this.count === 0) {
      console.log("Queue Underflow");
      return null;
    }

    const val = this.arr[0];

    // Shift elements to the left (expensive operation)
    for (let i = 1; i < this.count; i++) {
      this.arr[i - 1] = this.arr[i];
    }

    this.count--;
    return val;
  }

  /**
   * Prints the current queue.
   * Time Complexity: O(n)
   */
  printQueue() {
    return this.arr.slice(0, this.count);
  }

  isFull() {
    return this.count === this.size;
  }

  isEmpty() {
    return this.count === 0;
  }
}

/**
 * CircularQueue implements a fixed-size circular buffer queue.
 * It supports O(1) enqueue and dequeue operations by wrapping around the array.
 */
class CircularQueue {
  constructor(size) {
    this.size = size; // Maximum size of queue
    this.arr = new Array(size); // Array to store queue elements
    this.front = 0; // Points to the front element
    this.rare = 0; // Points to the position where new element will go (calculated dynamically)
    this.elements = 0; // Number of elements currently in the queue
  }

  /**
   * Inserts a new element at the rear of the queue.
   * Time Complexity: O(1)
   */
  enqueue(val) {
    if (this.elements == this.size) {
      console.log("Queue Overflow");
      return;
    }

    this.rare = (this.front + this.elements) % this.size; // Calculate next available position
    this.arr[this.rare] = val;
    this.elements++;
  }

  /**
   * Removes and returns the front element of the queue.
   * Time Complexity: O(1)
   */
  dequeue() {
    if (this.elements == 0) {
      console.log("Queue Underflow");
      return null;
    }

    let val = this.arr[this.front]; // Get front value
    this.front = (this.front + 1) % this.size; // Move front pointer forward (circularly)
    this.elements--; // Decrease element count

    return val;
  }

  /**
   * Checks if the queue is full.
   * Time Complexity: O(1)
   */
  isFull() {
    return this.elements === this.size;
  }

  /**
   * Checks if the queue is empty.
   * Time Complexity: O(1)
   */
  isEmpty() {
    return this.elements === 0;
  }

  /**
   * Prints all elements in queue in order.
   * Time Complexity: O(n)
   */
  printQueue() {
    if (this.isEmpty()) return [];

    const result = [];
    for (let i = 0; i < this.elements; i++) {
      result.push(this.arr[(this.front + i) % this.size]);
    }
    return result;
  }
}

const cq = new CircularQueue(5);

cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
console.log(cq.printQueue()); // [10, 20, 30, 40, 50]

console.log(cq.dequeue()); // 10
console.log(cq.printQueue()); // [20, 30, 40, 50]

cq.enqueue(60);
console.log(cq.printQueue()); // [20, 30, 40, 50, 60]

console.log(cq.isFull()); // true
console.log(cq.isEmpty()); // false
