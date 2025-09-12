/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

/**
 * Validate if a binary tree is a BST
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  // Helper function with range checking
  function validate(node, min, max) {
    if (!node) return true; // Empty tree/subtree is valid

    // Node value must lie strictly between min and max
    if (node.val <= min || node.val >= max) return false;

    // Left must be < node.val
    // Right must be > node.val
    return (
      validate(node.left, min, node.val) &&
      validate(node.right, node.val, max)
    );
  }

  return validate(root, -Infinity, Infinity);
};

// ------------------ TESTING ------------------

// Build a valid BST
const root1 = new TreeNode(10);
root1.left = new TreeNode(5);
root1.right = new TreeNode(15);
root1.right.left = new TreeNode(12);
root1.right.right = new TreeNode(20);

console.log("Valid BST?", isValidBST(root1)); // true

// Build an invalid BST
const root2 = new TreeNode(10);
root2.left = new TreeNode(5);
root2.right = new TreeNode(15);
root2.right.left = new TreeNode(6); // ❌ invalid (should be > 10)

console.log("Valid BST?", isValidBST(root2)); // false
