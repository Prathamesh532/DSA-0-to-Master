/**
 * ✅ Check if Two Binary Trees are the Same
 *
 * Two trees are the same if:
 * 1. They are structurally identical
 * 2. Each corresponding node has the same value
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * isSame(root1, root2)
 * 🔁 Recursively compares both trees
 *
 * Time Complexity: O(n)
 *   - Where n is the number of nodes (in the smaller tree)
 * Space Complexity: O(h)
 *   - h = height of the tree (due to recursion stack)
 *
 * Intuition:
 * - Traverse both trees simultaneously
 * - At each step:
 *   - If both nodes are null -> return true
 *   - If only one is null -> return false
 *   - Check if values are equal and recursively check left & right subtrees
 */
function isSame(root1, root2) {
  // If both nodes are null, they are the same
  if (!root1 && !root2) return true;

  // If only one is null, not the same
  if (!root1 || !root2) return false;

  // Check current values and recursively check left and right children
  let checkVal = root1.data === root2.data;
  let left = isSame(root1.left, root2.left);
  let right = isSame(root1.right, root2.right);

  return checkVal && left && right;
}

// 🌳 Tree 1
const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);

// 🌳 Tree 2 (Identical to Tree 1)
const root2 = new Node(1);
root2.left = new Node(2);
root2.right = new Node(3);

// 🧪 Output: true
console.log("Are trees same:", isSame(root, root2));
