// ✅ Node definition for a binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * 🧮 Helper Function: sum()
 * Calculates the total sum of values in a subtree
 * Time Complexity: O(n)
 * Space Complexity: O(h) — recursion stack
 */
function sum(root) {
  if (!root) return 0;
  return sum(root.left) + sum(root.right) + root.data;
}

/**
 * ❌ Naive Approach: isSumTree()
 * Checks if a binary tree is a sum tree using sum() helper
 *
 * Time Complexity: O(n²)
 *   - sum() is called for each node -> leads to repeated traversal
 * Space Complexity: O(h)
 *   - due to recursive call stack
 *
 * Intuition:
 * - At each node, check:
 *   1. Left subtree is sum tree
 *   2. Right subtree is sum tree
 *   3. Current node's value == sum of left + right subtree values
 */
function isSumTree(root) {
  // Base case: null or leaf node is a sum tree
  if (!root || (!root.left && !root.right)) return true;

  // Check if left and right subtrees are sum trees
  let left = isSumTree(root.left);
  let right = isSumTree(root.right);

  // Calculate the sum of left and right subtrees
  let leftSum = sum(root.left);
  let rightSum = sum(root.right);

  // Check if current node value equals leftSum + rightSum
  let CheckSum = leftSum + rightSum === root.data;

  return CheckSum && left && right;
}

/**
 * ✅ Optimized Approach: isSumTree_()
 * Returns an object: { isSum: boolean, sum: number }
 *
 * Time Complexity: O(n)
 *   - Each node is visited only once
 * Space Complexity: O(h)
 *   - Due to recursion stack
 *
 * Intuition:
 * - Post-order traversal (left → right → node)
 * - Return both:
 *   1. Whether the subtree is a sum tree
 *   2. The sum of values in the subtree
 */
function isSumTree_(root) {
  // Base case: null node is a sum tree with sum = 0
  if (!root) return { isSum: true, sum: 0 };

  // Leaf node is always a sum tree, its own value is the sum
  if (!root.left && !root.right) return { isSum: true, sum: root.data };

  // Recursively get results for left and right subtrees
  let left = isSumTree_(root.left);
  let right = isSumTree_(root.right);

  // Extract subtree sums
  let leftSum = left.sum;
  let rightSum = right.sum;

  // Check if current node satisfies sum tree property
  let checkSum = leftSum + rightSum === root.data;

  return {
    isSum: left.isSum && right.isSum && checkSum,
    sum: checkSum ? root.data + left.sum + right.sum : 0, // only return valid sum if subtree is valid
  };
}

// ✅ Sample Binary Tree
//         3
//       /   \
//      1     2

const root = new Node(3);
root.left = new Node(1);
root.right = new Node(2);

// 🧪 Output:
// true from both naive and optimized versions
console.log("Naive Sum Tree:", isSumTree(root)); // true
console.log("Optimized Sum Tree:", isSumTree_(root).isSum); // true
