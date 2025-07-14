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

// Function to perform level order traversal
function levelOrderTraversal(root) {
  // If the tree is empty, there's nothing to traverse
  if (!root) return;

  // Initialize a queue and push the root node into it
  let queue = [];
  queue.push(root);

  // Add a null marker to indicate the end of the current level
  queue.push(null);

  // Loop until the queue becomes empty
  while (queue.length > 0) {
    // Dequeue the front element
    let front = queue.shift();

    // If we hit a null, it means we've finished printing one level
    if (front === null) {
      console.log(""); // Move to the next line for the next level

      // If the queue still has nodes, add a marker for the next level
      if (queue.length > 0) {
        queue.push(null);
      }
    } else {
      // Print the current node's data on the same line
      process.stdout.write(front.data + " ");

      // Enqueue left child if it exists
      if (front.left !== null) queue.push(front.left);

      // Enqueue right child if it exists
      if (front.right !== null) queue.push(front.right);
    }
  }
}

// Immediately invoked async function to start the program
(async () => {
  // Build the binary tree starting from the root
  const root = await buildBinaryTree();
  console.log("Binary Tree constructed!");

  // Optional: Print the tree in preorder (Root -> Left -> Right)
  function printPreorder(node) {
    if (!node) return;
    console.log(node.data);
    printPreorder(node.left);
    printPreorder(node.right);
  }

  // Display the tree structure
  printPreorder(root);

  // level order traversal
  console.log("Level Order Traversal");
  levelOrderTraversal(root);

  // Close the readline interface once done
  rl.close();
})();
