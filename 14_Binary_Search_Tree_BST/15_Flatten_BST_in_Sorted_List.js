class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function flattenBST(root) {
  // step: 1 -> create a array of nodes from inorder travseral

  let inorderArr = [];

  // Left -> Node -> right
  function inorder(node) {
    // base case
    if (!node) return;

    // go to left
    inorder(node.left);

    // proccess node
    inorderArr.push(node);

    // go to right
    inorder(node.right);
  }

  inorder(root);

  // step: 2 -> loop on the array of nodes and create a List (all in right part)

  for (let i = 0; i < inorderArr.length - 1; i++) {
    inorderArr[i].left = null;
    inorderArr[i].right = inorderArr[i + 1];
  }

  inorderArr[inorderArr.length - 1].left = null;
  inorderArr[inorderArr.length - 1].right = null;

  return inorderArr[0];
}

const root = new Node(5);
root.left = new Node(3);
root.right = new Node(7);
root.left.left = new Node(2);
root.left.right = new Node(4);
root.right.left = new Node(6);
root.right.right = new Node(8);

console.log(flattenBST(root));
