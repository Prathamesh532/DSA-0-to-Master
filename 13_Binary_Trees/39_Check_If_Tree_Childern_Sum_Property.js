/**
 * Problem:
 * Check whether a given binary tree satisfies the "Children Sum Property":
 *   - For every node: node.data = (left child value) + (right child value)
 *   - If a child is missing (null), consider its value as 0.
 *   - Leaf nodes automatically satisfy the property.
 *
 * Approach:
 * Use recursion:
 * 1. Base Cases:
 *    - Null node → return true
 *    - Leaf node → return true
 * 2. Recursive Step:
 *    - Get left and right child values (0 if missing)
 *    - Check if current node's value = sum of children
 *    - Recursively check for left and right subtrees
 *
 * Time Complexity: O(N)
 *    - Each node is visited exactly once.
 * Space Complexity: O(H)
 *    - H = height of tree → O(log N) for balanced tree, O(N) for skewed tree
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function checkChildrenSumProperty(root) {
  // Null node satisfies property
  if (!root) return true;

  // Leaf node satisfies property
  if (!root.left && !root.right) return true;

  // Get left and right child values (0 if missing)
  let leftVal = root.left ? root.left.data : 0;
  let rightVal = root.right ? root.right.data : 0;

  // Check current node and recurse
  return (
    root.data === leftVal + rightVal &&
    checkChildrenSumProperty(root.left) &&
    checkChildrenSumProperty(root.right)
  );
}

// Example Usage:
const root = new Node(200);
root.left = new Node(100);
root.right = new Node(100);
root.left.left = new Node(50);
root.left.right = new Node(50);
root.right.left = new Node(50);
root.right.right = new Node(50);

console.log(checkChildrenSumProperty(root)); // true
