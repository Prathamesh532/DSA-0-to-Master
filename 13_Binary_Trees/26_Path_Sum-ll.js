/**
 * Problem: Return all root-to-leaf paths in a binary tree where the sum of the node values equals the given targetSum.
 * This is equivalent to Leetcode 113 - Path Sum II.
 *
 * Each valid path must:
 * - Start from the root node
 * - End at a leaf node (no left or right children)
 * - The sum of node values in the path should equal targetSum
 *
 * Approach:
 * - Use DFS (depth-first search) with backtracking.
 * - At each node, track the running path and current sum.
 * - If a leaf is reached and the sum matches targetSum, store a copy of the current path.
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
 * Finds all root-to-leaf paths with the given target sum
 * @param {Node} root - The root of the binary tree
 * @param {number} targetSum - The sum to match
 * @returns {number[][]} - All paths that sum to targetSum
 */
function pathSum(root, targetSum) {
  let result = [];

  /**
   * Recursive helper function to perform DFS
   * @param {Node} root - Current node
   * @param {number} sum - Current sum of the path
   * @param {number[]} path - Current path of node values
   */
  function solve(root, sum, path) {
    if (!root) return;

    path.push(root.data); // Add current node to the path
    sum += root.data; // Add current node's value to the running sum

    // If it's a leaf node and the sum matches, store a copy of the path
    if (!root.left && !root.right && sum === targetSum) {
      result.push([...path]); // Use spread to clone the path array
    }

    // Recur on left and right subtrees
    solve(root.left, sum, path);
    solve(root.right, sum, path);

    path.pop(); // Backtrack to explore other paths
  }

  solve(root, 0, []);

  return result;
}

// Sample binary tree
const root = new Node(5);
root.left = new Node(4);
root.right = new Node(8);
root.left.left = new Node(11);
root.left.left.left = new Node(7);
root.left.left.right = new Node(2);
root.right.left = new Node(13);
root.right.right = new Node(4);
root.right.right.left = new Node(5);
root.right.right.right = new Node(1);

// Output: [[5,4,11,2], [5,8,4,5]]
console.log(pathSum(root, 22));
