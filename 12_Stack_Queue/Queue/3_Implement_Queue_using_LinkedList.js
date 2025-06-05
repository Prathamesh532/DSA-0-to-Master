class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(x) {
    let newNode = new Node(x);

    // when there is no element
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (this.head == null) return null;

    let val = this.head.data;
    this.head = this.head.next;

    if (this.head === null) this.tail = null;

    return val;
  }

  front() {
    if (this.head === null) return null;
    return this.head.data;
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

  printQueue() {
    let temp = this.head;
    let output = [];

    while (temp !== null) {
      output.push(temp.data);
      temp = temp.next;
    }

    console.log("Queue (front -> rear):", output.join(" -> "));
  }
}

const q = new Queue();

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.printQueue(); // Queue (front -> rear): 10 -> 20 -> 30

console.log("Dequeued:", q.dequeue()); // 10
console.log("Front:", q.front()); // 20
console.log("Size:", q.size()); // 2
console.log("Is Empty:", q.isEmpty()); // false
q.printQueue(); // Queue (front -> rear): 20 -> 30
