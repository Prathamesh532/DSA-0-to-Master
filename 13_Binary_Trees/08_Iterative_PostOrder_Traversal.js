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

function postOrderTraversal(root) {
  if (!root) return;

  let stack_1 = [root];
  let stack_2 = [];

  while (stack_1.length > 0) {
    let node = stack_1.pop();
    stack_2.push(node);

    if (node.left) stack_1.push(node.left);
    if (node.right) stack_1.push(node.right);
  }

  let res = [];
  while (stack_2.length > 0) {
    res.push(stack_2.pop().data);
  }

  return res;
}

function postOrderTraversal_(root) {
  if (!root) return;
  let result = [];
  let stack = [];
  let lastvisited = null;
  let curr = root;

  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr);
      curr = curr.left;
    } else {
      let peekNode = stack[stack.length - 1];
      if (peekNode.right && peekNode.right !== lastvisited) {
        curr = peekNode.right;
      } else {
        result.push(peekNode.data);
        lastvisited = stack.pop();
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

console.log(postOrderTraversal(root));
console.log(postOrderTraversal_(root));
