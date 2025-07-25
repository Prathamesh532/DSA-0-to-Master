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

// using level order traversal
function verticalTraversal(root) {
  if (!root) return;
  let queue = [{ hd: 0, node: root }]; // hd -> horizontal distance
  let map = new Map();
  let minHd = 0;
  let maxHd = 0;

  while (queue.length > 0) {
    const { hd, node } = queue.shift();

    if (!map.has(hd)) map.set(hd, []);
    map.get(hd).push(node.data);

    minHd = Math.min(minHd, hd);
    maxHd = Math.max(maxHd, hd);

    if (node.left) queue.push({ node: node.left, hd: hd - 1 });
    if (node.right) queue.push({ node: node.right, hd: hd + 1 });
  }

  let result = [];

  for (let i = minHd; i <= maxHd; i++) {
    if (map.has(i)) result.push(map.get(i));
  }

  return result;
}

let root = new Node(3);
root.left = new Node(1);
root.right = new Node(4);
root.left.left = new Node(0);
root.left.right = new Node(2);
root.right.left = new Node(2);
// root.right.right = new Node(7);

console.log(verticalTraversal(root));
