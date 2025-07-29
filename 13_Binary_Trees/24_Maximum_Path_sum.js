/**
 * 🔍 Problem: Maximum Path Sum in Binary Tree
 *
 * Given a non-empty binary tree, find the maximum path sum.
 * A path is defined as any sequence of nodes from some starting node to any node in the tree
 * along the parent-child connections (the path does not need to go through the root).
 * The path must contain at least one node and does not need to go through both children.
 *
 * Example:
 * Input:
 *        -10
 *       /   \
 *      9    20
 *          /  \
 *         15   7
 *
 * Output: 42 (15 → 20 → 7)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Finds the maximum path sum in a binary tree.
 * The root of the binary tree.
 * The maximum path sum.
 */
function maximumPathSum(root) {
  // Initialize maxSum to negative infinity to handle negative values in nodes
  let maxSum = -Infinity;

  /**
   * Recursive helper function to calculate maximum gain from each node.
   * Current node.
   * Maximum gain from this node to any leaf.
   */
  function solve(root) {
    if (!root) return 0;

    // Recursively get max path sum from left and right subtrees,
    // ignore negative paths by comparing with 0
    let left = Math.max(solve(root.left), 0);
    let right = Math.max(solve(root.right), 0);

    // Max path sum with current node as the highest node
    let pathSum = root.data + left + right;

    // Update the global maximum if needed
    maxSum = Math.max(maxSum, pathSum);

    // Return the max gain if continuing the path through the parent
    return root.data + Math.max(left, right);
  }

  solve(root);
  return maxSum;
}

// 🌳 Example usage
const root = new Node(-10);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

console.log(maximumPathSum(root)); // Output: 42
