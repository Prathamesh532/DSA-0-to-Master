/**
 * Checks if there exists a root-to-leaf path in a binary tree
 * such that the sum of the values along the path equals a given target sum.
 *
 * @param {Node} root - The root node of the binary tree.
 * @param {number} targetSum - The sum to check against.
 * @returns {boolean} - True if such a path exists, otherwise false.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function hasPathSum(root, targetSum) {
  // Base case: if the tree is empty, no path exists
  if (!root) return false;

  // Subtract the current node's value from targetSum
  targetSum -= root.data;

  // If the current node is a leaf, check if targetSum now equals zero
  if (!root.left && !root.right) return targetSum === 0;

  // Recursively check left and right subtrees
  let left = hasPathSum(root.left, targetSum);
  let right = hasPathSum(root.right, targetSum);

  // Return true if any subtree has a valid path
  return left || right;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

console.log(hasPathSum(root, 5));
