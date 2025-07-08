/**
 * Given a Queue of even size. Your task is to rearrange the queue by interleaving its first half with the second half.
 * Note: Interleaving means place the first element from the first half and then first element from the 2nd half and
 * again 2nd element from the first half and then second element from the 2nd half and so on....
 *
 * Input: q = [2, 4, 3, 1]
 * Output: [2, 3, 4, 1]
 * Explanation: we place the first element of the first half 2 and after that place the first element of second half 3 and
 * after that repeat the same process one more time so the resulting queue will be [2, 3, 4, 1]
 *
 * Input: q = [3, 5]
 * Output: [3, 5]
 * Explanation: We place the first element of the first half 3 and first element of the second half 5 so the resulting queue is [3, 5]
 *
 */

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

// using queue
const rearrangeQueue = (q) => {
  if (q.length % 2 !== 0) {
    console.log("Input even number of integers.");
    return;
  }

  let size = q.size();
  let newQ = new Queue();

  // insert the 1st half in new Queue
  let first_half = size / 2;

  for (let i = 0; i < first_half; i++) {
    let val = q.front();
    q.dequeue();
    newQ.enqueue(val);
  }

  // insert inter-leave val in main queue
  while (!newQ.isEmpty()) {
    let val = newQ.front();
    newQ.dequeue();
    q.enqueue(val);

    let qval = q.front();
    q.dequeue();
    q.enqueue(qval);
  }
};

// using stack; TODO
const rearrangeQueue_usingstack = (q) => {
  if (q.size() % 2 != 0) return;

  let n = q.size();
  let stack = [];

  let first_half = n / 2;

  // put the first half in stack
  for (let i = 0; i < first_half; i++) stack.push(q.dequeue());

  // put back the stack element in q
  for (let i = 0; i < first_half; i++) q.enqueue(stack.pop());

  // pop 2nd half push back to q
  for (let i = 0; i < first_half; i++) q.enqueue(q.dequeue());

  // agian push the first in stack--> now its in proper order
  for (let i = 0; i < first_half; i++) stack.push(q.dequeue());

  while (stack.length > 0) {
    q.enqueue(stack.pop()); // first half
    q.enqueue(q.dequeue()); // second half
  }
};

const queue = new Queue();
queue.enqueue(11);
queue.enqueue(12);
queue.enqueue(13);
queue.enqueue(14);
queue.enqueue(15);
queue.enqueue(16);
queue.enqueue(17);
queue.enqueue(18);

console.log("Orignal Queue", queue);

rearrangeQueue_usingstack(queue);

console.log("Inter-Leave Queue", queue);

