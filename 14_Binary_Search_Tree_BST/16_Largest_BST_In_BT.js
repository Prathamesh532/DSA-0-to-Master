/**
 * Problem: Find the size of the largest BST subtree in a Binary Tree.
 *
 * There are two approaches shown:
 * 1. Brute Force O(N^2)
 * 2. Optimized O(N)
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * Brute Force Approach
 * --------------------
 * Intuition:
 *   - For each node, check if the subtree rooted at that node is a valid BST.
 *   - If it is, count the number of nodes in that subtree.
 *   - Track the maximum size found.
 *   - Otherwise, recurse into left and right subtrees and repeat the process.
 *
 * Complexity:
 *   - `isValidBST` takes O(N) in worst case (traverses subtree).
 *   - `countNodes` also takes O(N).
 *   - For every node, we may re-traverse its entire subtree.
 *   - Worst case: O(N^2).
 *   - Space complexity: O(H) recursion stack (H = tree height, O(N) worst case).
 */
function findLargestBST(root) {
  if (!root) return 0;

  let maxBST = 0;

  function isValidBST(node, min, max) {
    if (!node) return true;
    if (node.data <= min || node.data >= max) return false;
    return (
      isValidBST(node.left, min, node.data) &&
      isValidBST(node.right, node.data, max)
    );
  }

  function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
  }

  function solve(node) {
    if (!node) return;

    if (isValidBST(node, -Infinity, Infinity)) {
      let size = countNodes(node);
      maxBST = Math.max(size, maxBST);
    }

    solve(node.left);
    solve(node.right);
  }

  solve(root);
  return maxBST;
}

/**
 * Optimized Approach
 * ------------------
 * Intuition:
 *   - Instead of recomputing validity and size for each subtree separately,
 *     use a bottom-up approach (postorder traversal).
 *   - For each node, return:
 *       - min value in its subtree
 *       - max value in its subtree
 *       - size of the subtree
 *       - whether it's a BST or not
 *   - If left & right subtrees are BST and current node value is valid
 *     (greater than left.max and smaller than right.min), then current
 *     subtree is also a BST. Update maxBST.
 *   - Otherwise, mark it as not a BST.
 *
 * Complexity:
 *   - Each node is visited once and combines results from children in O(1).
 *   - Time: O(N).
 *   - Space: O(H) recursion stack (H = tree height, worst O(N)).
 */
function findLargestBST_(root) {
  if (!root) return 0;

  let maxBST = 0;

  function solve(node) {
    if (!node) {
      return { max: -Infinity, min: Infinity, isBST: true, size: 0 };
    }

    let left = solve(node.left);
    let right = solve(node.right);

    let currNode = {};
    currNode.size = left.size + right.size + 1;
    currNode.max = Math.max(node.data, right.max);
    currNode.min = Math.min(node.data, left.min);

    if (
      left.isBST &&
      right.isBST &&
      node.data > left.max &&
      node.data < right.min
    ) {
      currNode.isBST = true;
      maxBST = Math.max(currNode.size, maxBST);
    } else {
      currNode.isBST = false;
    }

    return currNode;
  }

  solve(root);
  return maxBST;
}

// Example tree
const root = new Node(10);
root.left = new Node(5);
root.right = new Node(15);
root.left.left = new Node(3);
root.left.right = new Node(7);
root.right.left = new Node(13);
root.right.right = new Node(18);

console.log(findLargestBST(root)); // Brute force → 7
console.log(findLargestBST_(root)); // Optimized  → 7
