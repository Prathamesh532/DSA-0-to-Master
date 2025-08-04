/**
 *
 * Problem Statement:- All Nodes Distance K in Binary Tree Given the root of a binary tree, the value of a target node target, and an integer k,
 * return an array of the values of all nodes that have a distance k from the target node.
 *
 * example:- Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2 Output: [7,4,1]
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

function distanceK(root, target, k) {
  let map = new Map();

  // step: 1
  function buildNodeParenetChildLink(root, parent) {
    if (!root) return;
    if (!map.has(root.data)) map.set(root.data, []);

    if (parent) {
      map.get(root.data).push(parent.data);
      if (!map.has(parent.data)) map.set(parent.data, []);
      map.get(parent.data).push(root.data);
    }

    buildNodeParenetChildLink(root.left, root);
    buildNodeParenetChildLink(root.right, root);
  }

  buildNodeParenetChildLink(root, null);

  // step: 2
  let queue = [target];
  let visited = new Set();
  visited.add(target);
  let distance = 0;

  while (queue.length > 0) {
    if (distance === k) {
      return queue;
    }
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let front = queue.shift();

      for (let neighbor of map.get(front)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    distance++;
  }

  return [];
}

const root = new Node(3);
root.left = new Node(5);
root.right = new Node(1);
root.left.left = new Node(6);
root.left.right = new Node(2);
root.right.left = new Node(0);
root.right.right = new Node(8);
root.left.right.left = new Node(7);
root.left.right.right = new Node(4);

console.log(distanceK(root, 5, 2));
