/**
 * Problem Description:
 * --------------------
 * Given two Max-Heaps (heap1 and heap2) represented as arrays,
 * merge them into a single Max-Heap and return the merged heap.
 *
 * Approach:
 * 1. Merge the two heaps into a single array.
 * 2. Rebuild the Max-Heap from the merged array using the heapify process.
 *
 * Example:
 * heap1 = [10, 5, 6, 2]
 * heap2 = [12, 7, 9]
 *
 * Merged Heap = [12, 10, 9, 2, 5, 7, 6]
 *
 * --------------------
 * Time Complexity:
 * - Merging two heaps: O(n1 + n2)   (concatenation)
 * - Building heap (heapify from bottom-up): O(n1 + n2)
 *   → Overall: O(n1 + n2)
 *
 * Space Complexity:
 * - Extra array for merged heap: O(n1 + n2)
 */

/**
 * Heapify function to maintain the Max-Heap property.
 */
function heapify(arr, size, index) {
    let largest = index;
    let left = 2 * index + 1; // Left child
    let right = 2 * index + 2; // Right child

    // If left child is larger than current largest
    if (left < size && arr[largest] < arr[left]) largest = left;

    // If right child is larger than current largest
    if (right < size && arr[largest] < arr[right]) largest = right;

    // If largest is not the root node, swap and heapify recursively
    if (largest !== index) {
        [arr[largest], arr[index]] = [arr[index], arr[largest]];
        heapify(arr, size, largest);
    }
}

/**
 * Merge two Max-Heaps into a single Max-Heap.
 */
function merge2Heap(heap1, heap2) {
    // Step 1: Merge two heaps into one array
    let merged = [...heap1, ...heap2];

    // Step 2: Build max-heap using bottom-up heapify
    let n = merged.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(merged, n, i);
    }

    return merged;
}

// Example 1
let heap1 = [10, 5, 6, 2];
let heap2 = [12, 7, 9];
console.log("Merged Heap:", merge2Heap(heap1, heap2));
// Expected Output (Max-Heap): [12, 10, 9, 2, 5, 7, 6]

// Example 2 (Edge Case: one heap empty)
let heap3 = [];
let heap4 = [15, 10, 8];
console.log("Merged Heap:", merge2Heap(heap3, heap4));
// Expected Output: [15, 10, 8]

// Example 3 (Both empty)
let heap5 = [];
let heap6 = [];
console.log("Merged Heap:", merge2Heap(heap5, heap6));
// Expected Output: []
