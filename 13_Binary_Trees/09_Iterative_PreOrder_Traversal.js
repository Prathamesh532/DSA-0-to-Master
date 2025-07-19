/**
 * Binary Tree Node class
 */
class Node {
  constructor(data) {
    this.data = data; // value of the node
    this.left = null; // left child
    this.right = null; // right child
  }
}

/**
 * Preorder Traversal using Iterative approach (with Stack)
 * Root → Left → Right
 * 
 */
function preOrderTraversal(root) {
  if (!root) return [];
  let result = [];

  // Stack to hold nodes to visit
  let stack = [root];

  // Loop until there are nodes left in stack
  while (stack.length > 0) {
    let popNode = stack.pop(); // Get the top node
    console.log(popNode.data); // Visit node
    result.push(popNode.data); // Add to result

    // Push right child first so left is processed first
    if (popNode.right) stack.push(popNode.right);
    if (popNode.left) stack.push(popNode.left);
  }

  return result;
}

/**
 * Preorder Traversal using Morris Traversal (O(1) space)
 * Root → Left → Right
 * Temporarily modifies the tree structure to avoid stack/recursion
 * 
 */
function preOrderTraversal_morris(root) {
  if (!root) return [];
  let result = [];

  let current = root;

  // Traverse the tree
  while (current) {
    // If left child is null, visit this node and move to right child
    if (!current.left) {
      result.push(current.data); // Visit current node
      current = current.right;
    } else {
      // Find the inorder predecessor of current (rightmost node in left subtree)
      let ip = current.left;

      // Keep going to right until null or back to current
      while (ip.right && ip.right !== current) {
        ip = ip.right;
      }

      if (!ip.right) {
        // First time visiting current node — create thread and visit
        console.log(current.data); // Log node
        result.push(current.data); // Visit current
        ip.right = current;        // Make a temporary thread
        current = current.left;    // Move to left child
      } else {
        // Thread already exists — remove it and go right
        ip.right = null;
        current = current.right;
      }
    }
  }

  return result;
}

// Sample Binary Tree
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

// Run Morris preorder traversal
console.log(preOrderTraversal_morris(root)); // Output: [4, 2, 1, 3, 5]
