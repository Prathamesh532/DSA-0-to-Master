/**
 * Node class representing each node of the binary tree.
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Method 1: countNodes
 * ----------------------------------
 * Description:
 * This function uses a simple recursive traversal (Preorder)
 * to count the number of nodes in a binary tree.
 *
 * Time Complexity: O(n)
 *   - Visits each node once.
 * Space Complexity: O(h)
 *   - Due to recursion stack; worst case O(n) for skewed tree, O(log n) for balanced tree.
 */
function countNodes(root) {
  let count = 0;

  function traverse(root) {
    if (!root) return;
    count++; // count the current node
    traverse(root.left); // recursively count left subtree
    traverse(root.right); // recursively count right subtree
  }

  traverse(root);

  return count;
}

/**
 * Method 2: countNodes_ (Optimized for Complete Binary Tree)
 * ----------------------------------------------------------
 * Description:
 * This function leverages the property of a complete binary tree to optimize node counting.
 * - A complete binary tree is a binary tree in which all the levels are completely filled
 *   except possibly the last, which is filled from the left.
 * - If the left and right subtree heights are the same, it's a perfect binary tree, and we can directly
 *   calculate total nodes using the formula (2^h - 1).
 * - If not, recursively count the nodes in left and right subtrees.
 *
 * Time Complexity: O((log n)^2)
 *   - At each level, height is calculated in O(log n), and recursion goes log n levels deep.
 * Space Complexity: O(log n)
 *   - Due to recursive calls stack depth.
 */
function countNodes_(root) {
  let leftNodes = getLeftNodes(root);
  let rightNodes = getRightNodes(root);

  if (leftNodes === rightNodes) {
    // Perfect binary subtree
    return (1 << leftNodes) - 1; // same as Math.pow(2, leftNodes) - 1
  }

  // Otherwise, recursively count both subtrees
  return 1 + countNodes_(root.left) + countNodes_(root.right);
}

/**
 * Helper function to compute height by traversing the leftmost path
 */
function getLeftNodes(root) {
  if (!root) return 0;
  return 1 + getLeftNodes(root.left);
}

/**
 * Helper function to compute height by traversing the rightmost path
 */
function getRightNodes(root) {
  if (!root) return 0;
  return 1 + getRightNodes(root.right); // 🛠️ FIXED: was incorrectly calling getLeftNodes()
}

// Test Example
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log("Total Nodes (Simple Traversal):", countNodes(root)); // Output: 7
console.log("Total Nodes (Optimized):", countNodes_(root)); // Output: 7
