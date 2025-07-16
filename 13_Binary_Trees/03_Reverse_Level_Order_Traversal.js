const readline = require("readline");

// Create readline interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to wrap rl.question into a Promise (so we can use async/await)
const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

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

// Node class for the Binary Tree
class Node {
  constructor(data) {
    this.data = data; // value of the node
    this.left = null; // left child
    this.right = null; // right child
  }
}

function reverseLevelOrder(root) {
  if (!root) return [];

  const queue = [root];
  const stack = [];

  while (queue.length > 0) {
    const node = queue.shift();
    stack.push(node.data);

    // Enqueue right first
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }

  const result = [];
  while (stack.length > 0) {
    result.push(stack.pop());
  }

  return result;
}

function reverseLevelOrder_(root) {
  if (!root) return null;

  let queue = new Queue();
  let stack = new Array();

  queue.enqueue(root);
  queue.enqueue(null);
  stack.push(null);

  while (!queue.isEmpty()) {
    let front = queue.front();
    queue.dequeue();

    if (front == null) {
      if (!queue.isEmpty()) {
        stack.push(null);
        queue.enqueue(null);
      }
    } else {
      stack.push(front.data);

      if (front.left !== null) queue.enqueue(front.left);
      if (front.right !== null) queue.enqueue(front.right);
    }
  }

  let result = [];
  let level = [];

  while (stack.length > 0) {
    const val = stack.pop();
    if (val === null) {
      if (level.length > 0) {
        result.push(level);
        level = [];
      }
    } else {
      level.push(val);
    }
  }

  console.log("level", level);
  return result
}

// Example
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

// console.log(reverseLevelOrder(root)); // [4, 5, 6, 7, 2, 3, 1]
const levels = reverseLevelOrder_(root);
console.log(levels);

// levels.forEach((level) => console.log(level.join(" ")));

// Close the readline interface once done
rl.close();
