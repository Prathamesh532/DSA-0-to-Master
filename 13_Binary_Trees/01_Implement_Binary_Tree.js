const readline = require("readline");

// Create readline interface to read input from the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to wrap rl.question into a Promise (so we can use async/await)
const ask = (query) => new Promise((resolve) => rl.question(query, resolve));

// Node class for the Binary Tree
class Node {
  constructor(data) {
    this.data = data;     // value of the node
    this.left = null;     // left child
    this.right = null;    // right child
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

  // Close the readline interface once done
  rl.close();
})();
