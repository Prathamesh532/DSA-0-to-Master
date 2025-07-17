/**
 * Morris Inorder Traversal is a way to traverse a binary tree in-order without using recursion or a stack — instead, 
 * it uses threaded binary trees. This makes it O(1) space complexity, excluding the output.
 *
 * ✅ Intuition
 * For a given node:
 * If it doesn’t have a left child, visit it and move to the right.
 * If it has a left child, find its inorder predecessor (rightmost node in the left subtree):
 * If the predecessor's right is null, set it to the current node (create a thread) and move left.
 * If the predecessor's right is already pointing to the current node (thread exists), revert it to null, visit current node, 
 * and move right.
 */

// Node class for the Binary Tree
class Node {
  constructor(data) {
    this.data = data; // value of the node
    this.left = null; // left child
    this.right = null; // right child
  }
}

function morrisInorderTraversal(root) {
  let result = [];
  let current = root;

  while (current) {
    if (!current.left) {
      result.push(current.val); // Visit
      current = current.right;
    } else {
      // Find the inorder predecessor
      let predecessor = current.left;
      while (predecessor.right && predecessor.right !== current) {
        predecessor = predecessor.right;
      }

      if (!predecessor.right) {
        // Create a thread
        predecessor.right = current;
        current = current.left;
      } else {
        // Thread already exists, revert and visit
        predecessor.right = null;
        result.push(current.val); // Visit
        current = current.right;
      }
    }
  }

  return result;
}

const root = new Node(4);
root.left = new Node(2);
root.right = new Node(5);
root.left.left = new Node(1);
root.left.right = new Node(3);
// root.right.left = new Node(5);

console.log(morrisInorderTraversal(root));
