/**
 * 🔍 Problem: Longest Bloodline (Root-to-Leaf Path with Maximum Sum)
 *
 * Given a binary tree, find the sum of the longest root-to-leaf path.
 * If there are multiple paths with the same length, return the one with the **maximum sum**.
 *
 * 👉 Example Tree:
 *          1
 *        /   \
 *       2     3
 *      / \     \
 *     4   5     6
 *
 * Paths:
 * - 1 → 2 → 4 → sum = 7, length = 3
 * - 1 → 2 → 5 → sum = 8, length = 3
 * - 1 → 3 → 6 → sum = 10, length = 3
 *
 * ✅ Output: 10 (longest path with maximum sum)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Finds the sum of the longest root-to-leaf path (bloodline) in the binary tree.
 * If multiple such paths exist, returns the one with the maximum sum.
 *
 * The root of the binary tree.
 * Maximum sum of the longest path.
 */
function longestBloodlineSum(root) {
  let maxSum = -Infinity; // Stores the maximum sum for the longest path
  let maxLen = 0; // Stores the maximum length encountered so far

  /**
   * Recursive helper function to traverse and track sum and length.
   * Current node
   * Sum along the current path
   * Length of the current path
   */
  function solve(root, sum, len) {
    if (!root) {
      // Update maxLen and maxSum based on longest path criteria
      if (len > maxLen) {
        maxLen = len;
        maxSum = sum;
      } else if (len === maxLen) {
        maxSum = Math.max(maxSum, sum);
      }
      return;
    }

    // Add current node's value to path sum
    sum += root.data;

    // Recurse to left and right children
    solve(root.left, sum, len + 1);
    solve(root.right, sum, len + 1);
  }

  solve(root, 0, 0);
  return maxSum;
}

// 🌳 Example usage:
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(6);

console.log(longestBloodlineSum(root)); // Output: 10
