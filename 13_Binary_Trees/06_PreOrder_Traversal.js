/**
 *
 *
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function preOrderTraversal(root) {
  if (root === null) return;

  console.log(root.data);
  preOrderTraversal(root.left);
  preOrderTraversal(root.right);
}

const root = new Node(1);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(7);
root.left.right = new Node(11);
root.right.left = new Node(17);

preOrderTraversal(root);
