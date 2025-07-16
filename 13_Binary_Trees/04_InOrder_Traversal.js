/**
 * Inorder traversal is a depth-first traversal method that follows this sequence:
 * Left subtree is visited first.
 * Root node is processed next.
 * Right subtree is visited last.
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function inorderTraversal(root) {
  if (root === null) return;

  inorderTraversal(root.left);
  console.log(root.data);
  inorderTraversal(root.right);
}

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(7);
root.left.right = new Node(11);
root.right.left = new Node(17);

inorderTraversal(root)