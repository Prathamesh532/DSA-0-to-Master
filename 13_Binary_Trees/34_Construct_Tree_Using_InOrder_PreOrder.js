/**
 * Problem:
 * Construct a binary tree from given inorder and preorder traversal arrays.
 *
 * Approach:
 * 1. In preorder traversal, the first element is always the root.
 * 2. In inorder traversal, the root splits the tree into left and right subtrees.
 * 3. Use recursion to build the tree using the current root from preorder and find its index in inorder.
 *
 * Time Complexity: O(n)
 *  - Each node is processed once.
 *  - `inorderMap.get()` is O(1), making the search fast.
 *
 * Space Complexity: O(n)
 *  - For the hashmap and the recursion stack (in worst case: skewed tree).
 */

// Node class to represent each node of the binary tree
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Builds the binary tree from inorder and preorder traversal arrays.
 *
 * @param {number[]} inorder - The inorder traversal of the tree.
 * @param {number[]} preorder - The preorder traversal of the tree.
 * @returns {Node} - The root of the constructed binary tree.
 */
function buildTree(inorder, preorder) {
  // Map to store the index of each value in the inorder traversal for O(1) lookup
  let inorderMap = new Map();
  inorder.forEach((element, index) => inorderMap.set(element, index));

  // Pointer to keep track of the current index in the preorder array
  let preOrderIndex = 0;

  /**
   * Recursive helper function to construct the binary tree
   *
   * @param {number} left - Left boundary index in inorder array
   * @param {number} right - Right boundary index in inorder array
   * @returns {Node|null} - The constructed subtree root or null
   */
  function solve(left, right) {
    // Base case: no elements to construct the tree
    if (left > right) return null;

    // The current root value is the next element in preorder
    let rootVal = preorder[preOrderIndex++];
    const root = new Node(rootVal);

    // Find the root index in inorder to split left and right subtrees
    let mid = inorderMap.get(rootVal);

    // Recursively build left and right subtrees
    root.left = solve(left, mid - 1);
    root.right = solve(mid + 1, right);

    return root;
  }

  // Build the tree from full range of inorder indices
  return solve(0, inorder.length - 1);
}

// Example input
const inorder = [9, 3, 15, 20, 7];
const preorder = [3, 9, 20, 15, 7];

// Output: Binary tree root node
console.log(buildTree(inorder, preorder));
