/*
📌 Problem: Merge K Sorted Arrays
--------------------------------
We are given k sorted arrays. The task is to merge them into a single 
sorted array efficiently.

Example:
Input:  [[1,3,5,7], [2,4,6,8], [0,9,10,11]]
Output: [0,1,2,3,4,5,6,7,8,9,10,11]

---

🔹 Intuition:
- Each array is already sorted.
- Instead of merging all arrays blindly, we can use a MinHeap to always 
  pick the smallest element across all arrays.
- This guarantees that we build the final sorted array step by step.

---

🔹 Steps (Heap-based Approach):
1. Push the first element of each array into a MinHeap.
   - Each heap entry stores (value, row, col).
   - row → index of array, col → index in that array.
   
2. Extract the minimum element from the heap (smallest value overall).
   - Append it to result.
   
3. Insert the next element from the same row (if it exists) into the heap.
   - This ensures all candidates for "next smallest" are considered.

4. Repeat until heap is empty.

---

🔹 Complexity:
- Let N = total number of elements across all arrays
- Heap size is at most K (one element from each array at a time).
- Each insertion/deletion in heap = O(log K).
- Processing all N elements = O(N log K).

⏱️ Time:  O(N log K)
💾 Space: O(K) for heap storage
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getLeftChild(i) {
        return 2 * i + 1;
    }
    getRightChild(i) {
        return 2 * i + 2;
    }
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // Insert a value and maintain heap property
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIdx = this.getParent(index);
            if (this.heap[parentIdx].data > this.heap[index].data) {
                this.swap(parentIdx, index); // maintain min-heap property
                index = parentIdx;
            } else break;
        }
    }

    // Remove root element (min) and restore heap
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(0, this.heap.length - 1);
        const removed = this.heap.pop();
        this.heapifyDown();
        return removed;
    }

    heapifyDown() {
        let index = 0;
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smallest = index;

            if (left < size && this.heap[left].data < this.heap[smallest].data)
                smallest = left;
            if (
                right < size &&
                this.heap[right].data < this.heap[smallest].data
            )
                smallest = right;

            if (smallest !== index) {
                this.swap(smallest, index);
                index = smallest;
            } else break;
        }
    }

    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
}

// Helper class for storing value + array info
class Node {
    constructor(data, row, col) {
        this.data = data; // element value
        this.row = row; // array index
        this.col = col; // index inside the array
    }
}

// Naive approach
// Time: O(N log K) & Space: O(N)
function mergeKArrays(arrs) {
    let merge = [].concat(...arrs);

    // alternate
    // let temp = [];
    // for (let arr of arrs) {
    //     temp.push(...arr);
    // }

    return merge.sort((a, b) => a - b);
}

// Optimized approach
// Time: O(N log K) & Space: O(K)
function mergeKArrays_heap(arr, k) {
    let minHeap = new MinHeap();

    // Step 1: insert the first element of each array into heap
    for (let i = 0; i < k; i++) {
        let node = new Node(arr[i][0], i, 0);
        minHeap.insert(node);
    }

    let result = [];

    // Step 2: extract min and insert next element from same array
    while (minHeap.size() > 0) {
        let curr = minHeap.delete();
        result.push(curr.data);

        let nextCol = curr.col + 1;
        if (nextCol < arr[curr.row].length) {
            let node = new Node(arr[curr.row][nextCol], curr.row, nextCol);
            minHeap.insert(node);
        }
    }

    return result;
}

// Example usage
let arrs = [
    [1, 3, 5, 7],
    [2, 4, 6, 8],
    [0, 9, 10, 11],
];
let k = arrs.length;
console.log(mergeKArrays_heap(arrs, k));
// Output: [0,1,2,3,4,5,6,7,8,9,10,11]
