/**
 * Definition for a binary tree node
 */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

/**
 * findMode(root)
 * 
 * Approach 1: Using HashMap (count frequencies of each value).
 * -----------------------------------------------------------
 * 1. Traverse the entire tree (DFS).
 * 2. Count the frequency of each node's value in a map.
 * 3. Find the maximum frequency.
 * 4. Collect all keys with frequency == max frequency.
 * 
 * Time Complexity: O(n)  -> we visit each node once
 * Space Complexity: O(n) -> map stores up to n unique values
 */
function findMode(root) {
  let map = new Map();

  function solve(root) {
    if (!root) return;
    map.set(root.data, (map.get(root.data) || 0) + 1); // count freq
    solve(root.left);
    solve(root.right);
  }

  solve(root);

  let maxFreq = 0;
  for (let [, freq] of map) {
    maxFreq = Math.max(maxFreq, freq);
  }

  let ans = [];
  for (let [key, freq] of map) {
    if (freq === maxFreq) ans.push(key);
  }

  return ans;
}

/**
 * findMode_(root)
 * 
 * Approach 2: Inorder Traversal (BST property).
 * ---------------------------------------------
 * - In a BST, inorder traversal gives sorted values.
 * - Repeated values will appear consecutively.
 * - We track current streak count and max count on the fly.
 * 
 * Time Complexity: O(n)  -> inorder traversal visits each node once
 * Space Complexity: O(h) -> recursion stack (h = tree height, O(log n) for balanced, O(n) for skewed)
 */
function findMode_(root) {
  if (!root) return [];

  let prev = null;
  let ans = [];
  let count = 1;
  let maxCount = 0;

  function solve(root) {
    if (!root) return;

    solve(root.left);

    if (prev !== null && prev === root.data) {
      count++;
    } else {
      count = 1;
    }

    if (count > maxCount) {
      maxCount = count;
      ans = [root.data];
    } else if (count === maxCount) {
      ans.push(root.data);
    }

    prev = root.data;

    solve(root.right);
  }

  solve(root);
  return ans;
}

/** -----------------
 * Example usage:
 * -----------------
 * Tree:
 *     1
 *      \
 *       2
 *      /
 *     2
 */
const root = new Node(1);
root.right = new Node(2);
root.right.left = new Node(2);

console.log(findMode(root));   // [2]
console.log(findMode_(root));  // [2]
