/**
 * Problem:
 * ----------
 * Given the root of a binary tree, return the **maximum width** of the tree.
 *
 * The width of one level is defined as the distance between the **leftmost** and **rightmost** non-null nodes,
 * based on a complete binary tree structure (i.e., including imaginary null nodes in between).
 *
 * To track actual positions, we assign an index to each node:
 * - Left child index = 2 * current_index
 * - Right child index = 2 * current_index + 1
 *
 * This helps us compute accurate widths even in sparse trees.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = this.right = null;
  }
}

/**
 * widthOfBinaryTree:
 * -------------------
 * Calculates the maximum width of a binary tree using level-order traversal (BFS).
 *
 * @param {Node} root - The root node of the binary tree.
 * @returns {number} - The maximum width among all levels.
 *
 * Time Complexity: O(n) - Each node is visited once.
 * Space Complexity: O(n) - Queue stores nodes level by level.
 */
function widthOfBinaryTree(root) {
  if (!root) return 0;

  let maxWidth = 0;
  // Queue stores [node, index] where index represents the position in a complete binary tree
  let queue = [[root, 0]];

  while (queue.length > 0) {
    const len = queue.length;

    // Index of first node at this level (used for normalization)
    const start = queue[0][1];

    let first = 0; // normalized index of first node in this level
    let last = 0; // normalized index of last node in this level

    for (let i = 0; i < len; i++) {
      const [node, index] = queue.shift();

      // Normalize the index to avoid integer overflow
      const normalizeIdx = index - start;

      // Track first and last normalized indices at this level
      if (i === 0) first = normalizeIdx;
      if (i === len - 1) last = normalizeIdx;

      // Add children with their calculated indices
      if (node.left) queue.push([node.left, 2 * normalizeIdx]);
      if (node.right) queue.push([node.right, 2 * normalizeIdx + 1]);
    }

    // Width of current level = last - first + 1
    maxWidth = Math.max(maxWidth, last - first + 1);
  }

  return maxWidth;
}

// Sample Binary Tree
//         1
//       /   \
//      2     3
//     / \   / \
//    4   5 6   7

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Maximum Width of Binary Tree:", widthOfBinaryTree(root)); // Output: 8
