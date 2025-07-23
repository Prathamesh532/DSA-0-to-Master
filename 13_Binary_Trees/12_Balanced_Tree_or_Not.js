class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// 🔁 Recursively calculate the height of the tree
function height(root) {
  if (!root) return 0;

  let left = height(root.left);
  let right = height(root.right);

  // Height of current node = max height of children + 1
  return Math.max(left, right) + 1;
}

/**
 * 🔍 isBalanced() checks if the tree is height-balanced
 * ⚠️ This version is inefficient (calls height multiple times)
 *
 * Time Complexity: O(n^2)  -> because for every node, height() is called.
 * Space Complexity: O(h)   -> due to recursion stack, h = height of tree
 */
function isBalanced(root) {
  if (!root) return true;

  // Check if left and right subtrees are balanced
  let left = isBalanced(root.left);
  let right = isBalanced(root.right);

  // Check height difference at current node
  let diff = Math.abs(height(root.left) - height(root.right)) <= 1;

  return left && right && diff;
}

/**
 * ✅ Optimized Version: isBalanced_()
 * Returns both: is tree balanced AND height of the tree
 * Uses post-order traversal (bottom-up)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(h)  -> due to recursion stack
 *
 * Intuition: Instead of calculating height again and again,
 * return both balance status and height in one recursion
 */
function isBalanced_(root) {
  if (!root) return { balanced: true, height: 0 };

  let leftSubTree = isBalanced_(root.left);
  let rightSubTree = isBalanced_(root.right);

  let isBalancedHere =
    leftSubTree.balanced &&
    rightSubTree.balanced &&
    Math.abs(leftSubTree.height - rightSubTree.height) <= 1;

  return {
    balanced: isBalancedHere,
    height: Math.max(leftSubTree.height, rightSubTree.height) + 1,
  };
}

// 🌳 Sample Balanced Binary Tree:
//         3
//       /   \
//      9     20
//           /  \
//         15    7

const root = new Node(3);
root.left = new Node(9);
root.right = new Node(20);
root.right.left = new Node(15);
root.right.right = new Node(7);

// 🧪 Test both functions
console.log("Naive check:", isBalanced(root)); // true
console.log("Optimized check:", isBalanced_(root).balanced); // true
