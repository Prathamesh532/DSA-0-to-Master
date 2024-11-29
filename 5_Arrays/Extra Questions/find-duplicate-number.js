let arr = [1, 3, 4, 2, 2];

// Brute Force
// Time Complexity: O(n^2) -> Nested loops iterate over the array.
// Space Complexity: O(1) -> No extra space is used.
const findDuplicate = (arr) => {
  let n = arr.length;
  // Compare every pair of elements.
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      // If duplicate found, return it.
      if (arr[i] == arr[j]) return arr[i];
    }
  }
  // If no duplicate found (though the problem guarantees one).
  return -1;
};
console.log("Brute:", findDuplicate(arr));

// Better Solution (Using Map)
// Intuition: Use a map (or hash table) to track occurrences of each number.
// The first number with multiple occurrences is the duplicate.
// Time Complexity: O(n) -> Single traversal of the array.
// Space Complexity: O(n) -> Map stores up to n elements in the worst case.
const findDuplicate_usingMap = (arr) => {
  let n = arr.length;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    // If the number is already in the map, it's a duplicate.
    if (map.has(arr[i])) return arr[i];
    // Otherwise, store the number in the map.
    else map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  return -1;
};
console.log("Better:", findDuplicate_usingMap(arr));

// Optimal Solution (Using Slow and Fast Pointer Algorithm) Floyd’s cycle finding algorithm or Hare-Tortoise algorithm
// Intuition: Treat the array as a linked list, where the value at each index is a pointer to the next node.
// A duplicate value creates a cycle in the "linked list". Use Floyd's Cycle Detection Algorithm to find the duplicate.
// Time Complexity: O(n) -> Both slow and fast pointers traverse the array linearly.
// Space Complexity: O(1) -> No extra space is used.
const findDuplicate_slow_fast = (arr) => {
  let n = arr.length;
  let slow = 0;
  let fast = 0;

  // Phase 1: Detect cycle.
  // Move `slow` one step at a time and `fast` two steps at a time.
  do {
    slow = arr[slow]; // Move slow pointer.
    fast = arr[arr[fast]]; // Move fast pointer.
  } while (slow != fast); // Loop until slow and fast meet.

  // Phase 2: Find entry point of the cycle.
  // Reset `slow` to the start of the array.
  slow = 0;

  // Move both pointers one step at a time.
  while (slow != fast) {
    slow = arr[slow];
    fast = arr[fast];
  }

  // The point of intersection is the duplicate.
  return slow;
};
console.log("Optimal:", findDuplicate_slow_fast(arr));
