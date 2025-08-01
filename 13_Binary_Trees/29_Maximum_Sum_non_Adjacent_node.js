class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function getMaxSum(root) {
  function dfs(node) {
    if (!node) return [0, 0]; // [withNode, withoutNode]

    const [leftWith, leftWithout] = dfs(node.left);
    const [rightWith, rightWithout] = dfs(node.right);

    // If we include current node, we cannot include children
    const withNode = node.data + leftWithout + rightWithout;

    // If we exclude current node, we can choose max of including or excluding children
    const withoutNode =
      Math.max(leftWith, leftWithout) + Math.max(rightWith, rightWithout);

    return [withNode, withoutNode];
  }

  const [withRoot, withoutRoot] = dfs(root);
  return Math.max(withRoot, withoutRoot);
}

// Build the tree:
//         1
//       /   \
//     2       3
//   /       /   \
//  4       5     6

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.right.left = new Node(5);
root.right.right = new Node(6);

console.log(getMaxSum(root)); // Output: 16
