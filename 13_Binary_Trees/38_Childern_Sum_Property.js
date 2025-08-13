/**
 * Problem:
 * Given a binary tree, modify it so that it follows the "Children Sum Property".
 *
 * Children Sum Property:
 * For every node, the value of the node should be equal to the sum of its children's values.
 * - If a child is missing, treat its value as 0.
 * - You can only increment node values (no decrements allowed).
 * - Tree structure must remain the same.
 *
 * Approach:
 * We use a top-down and bottom-up recursive strategy:
 *
 * 1. **Top-down phase**:
 *    - If the sum of children's values is greater than or equal to the current node's value,
 *      set the node's value to this sum.
 *    - If the current node's value is greater, propagate this value down to its children.
 *
 * 2. **Recursive call**:
 *    - Process left and right subtrees in the same way.
 *
 * 3. **Bottom-up phase**:
 *    - After recursion, update the current node's value to be the sum of its children's values.
 *    - This ensures final correctness after all lower levels are fixed.
 *
 * Time Complexity: O(N)
 * - We visit each node exactly once, doing O(1) work per node.
 *
 * Space Complexity: O(H)
 * - H = height of the tree (O(N) in the worst case for a skewed tree, O(log N) for balanced tree).
 */

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

const buildChildSumPropertyTree = (root) => {
  if (!root) return null;

  // Step 1: Calculate sum of child values
  let childSum = 0;
  if (root.left) childSum += root.left.data;
  if (root.right) childSum += root.right.data;

  // Step 2: Top-down adjustment
  if (childSum >= root.data) {
    // If children sum is greater/equal, set node to this sum
    root.data = childSum;
  } else {
    // If node value is greater, propagate it down to children
    if (root.left) root.left.data = root.data;
    if (root.right) root.right.data = root.data;
  }

  // Step 3: Recurse on left and right subtrees
  buildChildSumPropertyTree(root.left);
  buildChildSumPropertyTree(root.right);

  // Step 4: Bottom-up correction - set node value as sum of children's values
  let temp = 0;
  if (root.left) temp += root.left.data;
  if (root.right) temp += root.right.data;
  if (root.left || root.right) root.data = temp;
};

// Example usage
const root = new Node(50);
root.left = new Node(7);
root.right = new Node(2);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(1);
root.right.right = new Node(30);

buildChildSumPropertyTree(root);
console.log(JSON.stringify(root, null, 2));
