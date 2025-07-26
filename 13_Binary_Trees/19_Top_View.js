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

function topView(root) {
  if (!root) return [];

  const map = new Map(); // horizontal distance -> node value
  const queue = [{ node: root, hd: 0 }];
  let minHd = 0,
    maxHd = 0;

  while (queue.length) {
    const { node, hd } = queue.shift();

    // store the first node at horizontal distance
    if (!map.has(hd)) {
      map.set(hd, node.val);
      minHd = Math.min(minHd, hd);
      maxHd = Math.max(maxHd, hd);
    }

    if (node.left) queue.push({ node: node.left, hd: hd - 1 });
    if (node.right) queue.push({ node: node.right, hd: hd + 1 });
  }

  const result = [];
  for (let i = minHd; i <= maxHd; i++) {
    result.push(map.get(i));
  }

  return result;
}

const root = new Node(10);
root.left = new Node(8);
root.right = new Node(12);
root.left.left = new Node(3);
root.left.right = new Node(5);
root.right.left = new Node(11);
root.right.right = new Node(15);

console.log(topView(root));
