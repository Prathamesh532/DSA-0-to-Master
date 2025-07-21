/**
 * 🔍 Problem: Diameter of a Binary Tree
 * -------------------------------------
 * The **diameter** of a binary tree is the length (number of edges)
 * of the longest path between any two nodes in the tree.
 * This path may or may not pass through the root.
 *
 * 👉 This implementation provides:
 *    1. A naive O(N^2) approach using recursive height calculation
 *    2. An optimized O(N) approach that calculates diameter and height in a single traversal
 *
 * 🧠 Definitions:
 * - Height of a node: Number of nodes on the longest path from the node to a leaf
 * - Diameter: Max value of (leftHeight + rightHeight) for any node
 *
 * 🌲 Example Tree:
 *         4
 *        / \
 *       2   5
 *      / \
 *     1   3
 *
 * ✅ Expected Diameter: 3 (Path: 1 -> 2 -> 4 -> 5 or 3 -> 2 -> 4 -> 5)
 */

class Node {
  constructor(data) {
    this.data = data; // Value of the node
    this.left = null; // Left child
    this.right = null; // Right child
  }
}

// Helper to find the height of a binary tree
function findMaxHeight(root) {
  if (!root) return 0;
  return 1 + Math.max(findMaxHeight(root.left), findMaxHeight(root.right));
}

// 🔴 Naive approach — Time: O(N^2), Space: O(N)
function findDiameter(root) {
  if (!root) return 0;

  // Get diameter in left and right subtrees
  let leftDiameter = findDiameter(root.left);
  let rightDiameter = findDiameter(root.right);

  // Height of left and right subtrees
  let height = findMaxHeight(root.left) + findMaxHeight(root.right);

  // Max of all three possibilities
  return Math.max(leftDiameter, rightDiameter, height);
}

// ✅ Optimized approach — Time: O(N), Space: O(N)
// Returns both diameter and height in one recursive pass
function findDiameter_faster(root) {
  if (!root) return { diameter: 0, height: 0 };

  let left = findDiameter_faster(root.left);
  let right = findDiameter_faster(root.right);

  // Diameter could be in left subtree, right subtree, or across current node
  let diameter = Math.max(
    left.diameter,
    right.diameter,
    left.height + right.height
  );
  let height = 1 + Math.max(left.height, right.height);

  return { diameter, height };
}

// Wrapper function to return only the diameter
function findDiameter_(root) {
  return findDiameter_faster(root).diameter;
}

// Test Case
const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);

console.log("Diameter (Naive):", findDiameter(root)); // Output: 3
console.log("Diameter (Optimized):", findDiameter_(root)); // Output: 3
