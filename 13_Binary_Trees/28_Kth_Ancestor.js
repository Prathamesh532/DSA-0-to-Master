/**
 * 🔍 Description:
 * Given a binary tree and a target node value, this function returns the K-th ancestor of the node.
 * An ancestor is any node in the path from the root to the target node (excluding the target).
 * The K-th ancestor is the one that is K steps above the target node.
 *
 * 📌 Example:
 * Tree:        1
 *             / \
 *            2   3
 *           / \
 *          4   5
 *
 * kthAncestor(root, 4, 2) → 1 (because 4 → 2 → 1)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * 🔁 Finds the k-th ancestor of a node in a binary tree.
 * @param {Node} root - Root node of the binary tree
 * @param {number} node - Target node whose k-th ancestor is to be found
 * @param {number} k - The k-th level to go up
 * @returns {number} - The k-th ancestor value, or -1 if it doesn't exist
 */
function kthAncestor(root, node, k) {
  let result = -1;

  /**
   * Recursively traverses the tree and maintains the path from root to current node.
   * Once the target node is found, calculates the k-th ancestor from the path.
   * @param {Node} root - current node in recursion
   * @param {number[]} path - array to store path from root to current node
   * @returns {boolean} - true if target is found in the subtree
   */
  function solve(root, path) {
    if (!root) return false;

    // Add current node to the path
    path.push(root.data);

    // If current node is the target
    if (root.data == node) {
      if (path.length - k - 1 >= 0) {
        result = path[path.length - k - 1];
      }
      return true; // stop searching
    }

    // Search left and right subtrees
    if (solve(root.left, path) || solve(root.right, path)) return true;

    // Backtrack if not found in this path
    path.pop();
    return false;
  }

  solve(root, []);
  return result;
}

// 🔧 Test
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log(kthAncestor(root, 4, 2)); // Output: 1
