/**
 * 
 * Zig-Zag (or Spiral) Traversal of a binary tree is a level-order traversal where the direction of traversal alternates 
 * at each level:
 * Left to Right at Level 1
 * Right to Left at Level 2
 * Left to Right at Level 3
 * and so on...
 * 
 *      1
      /   \
     2     3
    / \   / \
   4   5 6   7

   Output → 1, 3, 2, 4, 5, 6, 7
 * 
 */

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Time complexity -> O(N)
// space complexity -> O(N)
function zigZagTraversal(root) {
  if (!root) return;
  let ans = []; // to store the ans level wise

  let queue = [root];
  let leftToRight = true; // true means left --> right, when false right ---> left

  while (queue.length > 0) {
    let size = queue.length;
    let temp = new Array(size); //

    for (let i = 0; i < size; i++) {
      let level = queue.shift();

      let index = leftToRight ? i : size - 1 - i;

      temp[index] = level.data;

      if (level.left) queue.push(level.left);
      if (level.right) queue.push(level.right);
    }

    ans.push([...temp]);
    leftToRight = !leftToRight;
  }

  return ans;
}

const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);

console.log(zigZagTraversal(root));
