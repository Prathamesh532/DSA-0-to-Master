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

// Recursive function to build the binary tree
async function buildBinaryTree(message = "Enter data: ") {
  // Ask the user for input and convert it to number
  let input = await ask(message);
  let data = parseInt(input);

  // If the input is -1, it means no node (null), return null
  if (data === -1) return null;

  // Create a new node with the given data
  const node = new Node(data);

  // Recursively build the left and right subtree
  node.left = await buildBinaryTree(`Enter data for left child of ${data}: `);
  node.right = await buildBinaryTree(`Enter data for right child of ${data}: `);

  // Return the constructed node (with its children)
  return node;
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


// Example
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(reverseLevelOrder(root)); // [4, 5, 6, 7, 2, 3, 1]

// Close the readline interface once done
rl.close();