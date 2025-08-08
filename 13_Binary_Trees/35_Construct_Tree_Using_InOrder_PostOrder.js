/**
 * Problem:
 * Construct a binary tree from given inorder and postorder traversal arrays.
 *
 * Approach:
 * 1. In postorder traversal, the last element is the root.
 * 2. In inorder traversal, the root splits the tree into left and right subtrees.
 * 3. Use recursion to build the tree using the current root from postorder and find its index in inorder.
 * 4. Build the right subtree first, then left subtree (important for postorder).
 *
 * Time Complexity: O(n)
 *  - Each node is visited once.
 *
 * Space Complexity: O(n)
 *  - For the hashmap and recursion stack.
 */

// Node class to represent each binary tree node
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Builds the binary tree from inorder and postorder traversal arrays.
 *
 * @param {number[]} inorder - The inorder traversal of the tree.
 * @param {number[]} postorder - The postorder traversal of the tree.
 * @returns {Node} - The root of the constructed binary tree.
 */
function buildTree(inorder, postorder) {
  // Map for quick index lookup in inorder array
  let inorderMap = new Map();
  inorder.forEach((element, index) => inorderMap.set(element, index));

  // Start from the end of the postorder array (root of the tree)
  let postorderIndex = postorder.length - 1;

  /**
   * Recursive helper to construct the tree.
   * @param {number} left - Left boundary in inorder
   * @param {number} right - Right boundary in inorder
   * @returns {Node|null}
   */
  function solve(left, right) {
    if (left > right) return null;

    // Pick current root from postorder
    let rootVal = postorder[postorderIndex--];
    const root = new Node(rootVal);

    // Find the index of the root in inorder
    let mid = inorderMap.get(rootVal);

    // Build right subtree before left (due to postorder traversal)
    root.right = solve(mid + 1, right);
    root.left = solve(left, mid - 1);

    return root;
  }

  return solve(0, inorder.length - 1);
}

// Example input
const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

// Corrected function call with postorder
console.log(buildTree(inorder, postorder));
