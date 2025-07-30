/**
 *  Path Sum III
 *
 * Given the root of a binary tree and an integer targetSum,
 * return the number of paths where the sum of the values along the path equals targetSum.
 *
 * - The path does not need to start or end at the root or a leaf.
 * - But it must go downward (from parent to child).
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
 * @param {TreeNode} root - Root node of the binary tree
 * @param {number} targetSum - Target sum to find among all downward paths
 * @return {number} - Count of all valid paths that sum to targetSum
 */
function pathSum(root, targetSum) {
  let count = 0;

  // DFS traversal from each node
  function solve(root, path) {
    if (!root) return;

    // Add current node's value to the path
    path.push(root.data);

    // Recur for left and right subtrees
    solve(root.left, path);
    solve(root.right, path);

    // Check all suffix paths ending at current node to see if they sum to targetSum
    let sum = 0;
    for (let i = path.length - 1; i >= 0; i--) {
      sum += path[i];
      if (sum === targetSum) count++;
    }

    // Backtrack: remove current node from path
    path.pop();
  }

  solve(root, []);
  return count;
}

// Sample binary tree
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(-3);
root.left.left = new Node(3);
root.left.left.left = new Node(3);
root.left.left.right = new Node(-2);
root.left.right = new Node(2);
root.left.right.right = new Node(1);
root.left.left.right.right = new Node(1);
root.right.right = new Node(11);

console.log(pathSum(root, 8));
