/**
 * PROBLEM DESCRIPTION:
 * --------------------
 * We are given 'n' ropes of different lengths. The task is to connect 
 * all ropes into one rope with minimum total cost.
 *
 * - Cost of connecting two ropes = sum of their lengths.
 * - The idea is always to connect the two smallest ropes first.
 * - This problem is a classic use-case of a Min Heap (Priority Queue).
 *
 * Example:
 * ropes = [4, 3, 2, 6]
 * Steps:
 *  - Connect 2 + 3 = 5 (cost = 5) → [4, 5, 6]
 *  - Connect 4 + 5 = 9 (cost = 14) → [6, 9]
 *  - Connect 6 + 9 = 15 (cost = 29) → [15]
 * Final Answer = 29
 *
 * --------------------------------------------------------------
 * Time Complexity: O(n log n)
 *   - Inserting n elements into heap → O(n log n)
 *   - Each delete/insert while combining ropes → O(n log n)
 * Space Complexity: O(n) (for storing heap elements)
 */

// ------------------------- MinHeap Implementation -------------------------

class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Get index of left child
    getLeftChild(i) {
        return 2 * i + 1;
    }

    // Get index of right child
    getRightChild(i) {
        return 2 * i + 2;
    }

    // Get index of parent
    getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    // Swap two values inside the heap array
    swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }

    // Insert element into heap and maintain min-heap property
    insert(val) {
        this.heap.push(val);
        this.heapifyUp();
    }

    // Heapify upwards after insertion
    heapifyUp() {
        let index = this.heap.length - 1;

        while (index > 0) {
            let parentIdx = this.getParent(index);
            // If parent is greater than current node → swap
            if (this.heap[parentIdx] > this.heap[index]) {
                this.swap(parentIdx, index);
                index = parentIdx;
            } else break;
        }
    }

    // Delete the root (minimum element) and fix heap
    delete() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        this.swap(this.heap.length - 1, 0); // swap last with root
        let min = this.heap.pop();          // remove last (min element)

        this.heapifyDown(0);                // fix heap property
        return min;
    }

    // Heapify downwards after deletion
    heapifyDown(index) {
        let size = this.heap.length;

        while (true) {
            let left = this.getLeftChild(index);
            let right = this.getRightChild(index);
            let smallest = index;

            if (left < size && this.heap[smallest] > this.heap[left])
                smallest = left;

            if (right < size && this.heap[smallest] > this.heap[right])
                smallest = right;

            if (smallest !== index) {
                this.swap(smallest, index);
                index = smallest;
            } else break;
        }
    }

    // Return min element (root)
    peek() {
        return this.heap[0];
    }

    // Return size of heap
    size() {
        return this.heap.length;
    }

    // Utility: return heap array
    getHeap() {
        return this.heap;
    }
}

// ------------------------- Main Function -------------------------

function connect2NRopes(arr) {
    let minHeap = new MinHeap();

    // Step 1: Insert all ropes into min heap
    for (let num of arr) minHeap.insert(num);

    let cost = 0;

    // Step 2: Keep connecting two smallest ropes until one rope remains
    while (minHeap.size() > 1) {
        let a = minHeap.delete(); // extract min
        let b = minHeap.delete(); // extract next min

        let sum = a + b;
        cost += sum;

        minHeap.insert(sum); // push back the new rope
    }

    return cost;
}

// ------------------------- Example Run -------------------------

let ropes = [4, 3, 2, 6];
let cost = connect2NRopes(ropes);
console.log(cost); // Output: 29
