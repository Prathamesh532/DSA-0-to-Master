/**
 *
 * Given an array of size n, the task is to implement k queues using the array.
 * enqueue(qn, x) :  Adds the element x into the queue number qn
 * dequeue(qn, x) :  Removes the front element from queue number qn
 * isFull(qn) : Checks if the queue number qn is full
 * isEmpty(qn) : Checks if the queue number qn is empty.
 *
 */

class KQueue {
  constructor(n, k) {
    this.n = n;
    this.k = k;
    this.sizePerQueue = Math.floor(n / k);
    this.arr = new Array(n).fill(null);
    this.front = new Array(k).fill(-1);
    this.rear = new Array(k).fill(-1);
  }

  enqueue(q, val) {
    let start = Math.floor(q * this.sizePerQueue);
    let end = start + this.sizePerQueue - 1;

    if (this.rear[q] === -1) {
      this.front[q] = start;
      this.rear[q] = start;
      this.arr[start] = val;
    } else if (this.rear[q] < end) {
      this.rear[q]++;
      this.arr[this.rear[q]] = val;
    } else return "Queue Overflow";
  }

  dequeue(q) {
    if (this.front[q] === -1 || this.front[q] > this.rear[q]) {
      console.log(`Queue ${q} Underflow`);
      return null;
    }

    let val = this.arr[this.front[q]];
    this.arr[this.front[q]] = null;
    this.front[q]++;

    if (this.front[q] > this.rear[q]) {
      this.front[q] = -1;
      this.rear[q] = -1;
    }

    return val;
  }

  isFull(q) {
    let start = Math.floor(q * this.sizePerQueue);
    let end = start + this.sizePerQueue - 1;
    return this.rear[q] === end;
  }

  isEmpty(q) {
    return this.front[q] === -1;
  }

  printQueue(q) {
    if (this.isEmpty(q)) return [];
    return this.arr.slice(this.front[q], this.rear[q] + 1);
  }
}

const q = new KQueue(10, 2); // 2 queues in array of size 10

q.enqueue(0, 1);
q.enqueue(0, 2);
q.enqueue(0, 3);
q.enqueue(1, 100);
q.enqueue(1, 200);

console.log(q.printQueue(0)); // [1, 2, 3]
console.log(q.printQueue(1)); // [100, 200]

console.log(q.dequeue(0)); // 1
console.log(q.printQueue(0)); // [2, 3]

console.log(q.isFull(0)); // false
console.log(q.isEmpty(1)); // false

/**
 * Class to implement k queues in a single array
 * using linked-list style index tracking.
 */
class KQueue_ {
  constructor(n, k) {
    this.arr = new Array(n); // Stores actual data
    this.front = new Array(k).fill(-1); // Front indices of each queue
    this.rear = new Array(k).fill(-1);  // Rear indices of each queue
    this.next = new Array(n);           // Next available index or next pointer
    this.freeSpot = 0;                  // Points to the next free index in arr

    // Initialize the next array to link all free slots
    for (let i = 0; i < n - 1; i++) {
      this.next[i] = i + 1;
    }
    this.next[n - 1] = -1; // -1 marks end of free list
  }

  /**
   * Enqueues an element `val` into queue `q`
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  enqueue(q, val) {
    if (this.freeSpot === -1) return "Queue Overflow";

    // Get index of first free slot
    let index = this.freeSpot;

    // Update freeSpot to next free slot
    this.freeSpot = this.next[index];

    // If it's the first element in this queue
    if (this.front[q] === -1) {
      this.front[q] = index;
    } else {
      // Link the last node of this queue to new index
      this.next[this.rear[q]] = index;
    }

    // Update rear to new index
    this.rear[q] = index;

    // Mark end of queue
    this.next[index] = -1;

    // Store the value
    this.arr[index] = val;
  }

  /**
   * Dequeues and returns element from queue `q`
   * Time Complexity: O(1)
   * Space Complexity: O(1)
   */
  dequeue(q) {
    if (this.front[q] === -1) {
      return "Queue Underflow";
    }

    // Get index of front element
    let index = this.front[q];

    let val = this.arr[index]; // Store value to return

    // Move front to next element
    this.front[q] = this.next[index];

    // Add this index back to free list
    this.next[index] = this.freeSpot;
    this.freeSpot = index;

    return val;
  }

  /**
   * Checks if queue `q` is empty
   * Time Complexity: O(1)
   */
  isEmpty(q) {
    return this.front[q] === -1;
  }

  /**
   * Checks if overall array is full (no space in any queue)
   * Time Complexity: O(1)
   */
  isFull() {
    return this.freeSpot === -1;
  }

  /**
   * Prints all elements in queue `q` in order
   * Time Complexity: O(m), where m = elements in q
   */
  printQueue(q) {
    const result = [];
    let i = this.front[q];
    while (i !== -1) {
      result.push(this.arr[i]);
      i = this.next[i];
    }
    return result;
  }
}


console.log("Queue 2");

const q2 = new KQueue_(10, 2);

q2.enqueue(0, 1);
q2.enqueue(0, 2);
q2.enqueue(0, 3);
q2.enqueue(1, 100);
q2.enqueue(1, 200);

console.log(q2.printQueue(0)); // [1, 2, 3]
console.log(q2.printQueue(1)); // [100, 200]

console.log(q2.dequeue(0)); // 1
console.log(q2.printQueue(0)); // [2, 3]

console.log(q2.isEmpty(1)); // false
