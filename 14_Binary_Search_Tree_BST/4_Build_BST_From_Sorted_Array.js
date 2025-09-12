/**
 * Definition for a binary tree node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * sortedArrayToBST(arr)
 * ----------------------
 * Converts a sorted array into a height-balanced BST.
 * 
 * Intuition:
 * - The middle element of the array should be the root 
 *   (to ensure balanced left/right subtrees).
 * - Recursively repeat this for left half and right half.
 * 
 * Time Complexity: O(n) → we visit each element once
 * Space Complexity: O(log n) → recursion stack (height of balanced tree)
 */
function sortedArrayToBST(arr) {
  function build(left, right) {
    if (left > right) return null;

    // pick middle element as root
    let mid = Math.floor((left + right) / 2);
    let node = new Node(arr[mid]);

    // recursively build left & right subtrees
    node.left = build(left, mid - 1);
    node.right = build(mid + 1, right);

    return node;
  }

  return build(0, arr.length - 1);
}

/** -----------------
 * Example usage:
 * -----------------
 * Input: [-10, -3, 0, 5, 9]
 * Possible BST:
 *        0
 *      /   \
 *   -10     5
 *     \       \
 *     -3       9
 */
const arr = [-10, -3, 0, 5, 9];
const root = sortedArrayToBST(arr);

console.log(JSON.stringify(root, null, 2)); // print tree structure
