/**
 * Symmetric Tree Checker
 * ----------------------
 * This code defines a binary tree structure and provides a method to check
 * if the tree is symmetric (i.e., a mirror image around its center).
 *
 * A tree is symmetric if the left subtree is a mirror reflection of the right subtree.
 * This is solved using a recursive approach comparing opposite nodes.
 */

/**
 * Binary tree node structure
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Recursive function to check if two subtrees are mirror images of each other.
 *
 * Root node of the left subtree.
 * Root node of the right subtree.
 * Returns true if subtrees are mirrors, false otherwise.
 */
function symmetricTree(rootLeft, rootRight) {
  // If both nodes are null, they're symmetric
  if (!rootLeft || !rootRight) {
    return rootLeft === rootRight;
  }

  // If values are not equal, tree is not symmetric
  if (rootLeft.data !== rootRight.data) return false;

  // Recursively check outer and inner mirror nodes
  let left = symmetricTree(rootLeft.left, rootRight.right);
  let right = symmetricTree(rootLeft.right, rootRight.left);

  return left && right;
}

/**
 * Main function to check if the entire tree is symmetric
 *
 * Root node of the binary tree.
 * Returns true if the tree is symmetric, false otherwise.
 */
function symmetricTreeCheck(root) {
  if (!root) return true; // An empty tree is symmetric
  return symmetricTree(root.left, root.right);
}

// Test Case
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(4);
root.right.left = new Node(4);
root.right.right = new Node(3);

console.log(symmetricTreeCheck(root)); // Output: true
