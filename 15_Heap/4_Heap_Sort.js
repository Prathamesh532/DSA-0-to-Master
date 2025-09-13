/**
 * MaxHeap Implementation
 * ----------------------
 * - A binary heap where each parent is >= its children.
 * - Stored as an array for easy index math.
 * - Supports efficient insertions and max-element retrieval.
 * 
 * Operations:
 *   Insert: O(log n)   [bubble-up until heap property holds]
 *   Heapify: O(log n)  [fix subtree from top to bottom]
 *   HeapSort: O(n log n) overall
 */

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // Get parent index of a node
  getParentNode(index) {
    return Math.floor((index - 1) / 2);
  }

  // Get left child index of a node
  getLeftChildNode(index) {
    return 2 * index + 1;
  }

  // Get right child index of a node
  getRightChildNode(index) {
    return 2 * index + 2;
  }

  // Swap two elements in the heap array
  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  /**
   * Insert a new value into the heap
   * - Push at the end of array
   * - "Bubble up" until heap property is restored
   * Time Complexity: O(log n) [height of heap]
   * Space Complexity: O(1)
   */
  insert(val) {
    this.heap.push(val);
    let index = this.heap.length - 1;

    while (index > 0) {
      let parentIndex = this.getParentNode(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex; // keep moving up
      } else {
        break;
      }
    }
  }

  /**
   * Bubble-up Heapify (used internally)
   * - Similar to insert’s balancing step
   * - Rearranges node upwards if property is violated
   * Time Complexity: O(log n)
   */
  heapify() {
    let index = this.heap.length - 1;
    while (index > 0) {
      let parentIndex = this.getParentNode(index);
      if (this.heap[parentIndex] < this.heap[index]) {
        this.swap(parentIndex, index);
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  // Print heap array
  print() {
    console.log(this.heap);
  }

  // Get the raw heap array
  getHeap() {
    return this.heap;
  }
}

/**
 * Downward Heapify
 * ----------------
 * Ensures the subtree at index `i` follows max-heap property.
 * - Compare node with left/right children
 * - Swap with larger child if violated
 * - Recurse downwards
 * Time Complexity: O(log n)
 * Space Complexity: O(log n) [recursive] or O(1) [iterative version]
 */
function heapify(arr, size, index) {
  let largest = index;
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  if (left < size && arr[largest] < arr[left]) largest = left;
  if (right < size && arr[largest] < arr[right]) largest = right;

  if (largest !== index) {
    [arr[largest], arr[index]] = [arr[index], arr[largest]];
    heapify(arr, size, largest); // continue down
  }
}

/**
 * Heap Sort
 * ---------
 * - Step 1: Assume array is already a Max-Heap
 * - Step 2: Swap root (max) with last element
 * - Step 3: Shrink heap size & restore heap property via heapify
 * - Step 4: Repeat until array is sorted
 * 
 * Intuition:
 *   Each extraction places the current maximum at the end of the array.
 *   After n extractions, the array becomes sorted in ascending order.
 * 
 * Time Complexity: O(n log n)
 *   - n extractions × O(log n) heapify
 * Space Complexity: O(1) [in-place sort]
 */
function heapSort(heapArr) {
  let size = heapArr.length;

  while (size > 1) {
    [heapArr[0], heapArr[size - 1]] = [heapArr[size - 1], heapArr[0]];
    size--; // shrink heap
    heapify(heapArr, size, 0);
  }
}

// Example Usage
const maxHeap = new MaxHeap();
maxHeap.insert(23);
maxHeap.insert(18);
maxHeap.insert(14);
maxHeap.insert(12);
maxHeap.insert(10);
maxHeap.insert(9);
maxHeap.insert(8);
maxHeap.insert(3);

console.log("Heap before sort:", maxHeap.getHeap());

let heapArr = [...maxHeap.getHeap()]; // copy array for sorting
heapSort(heapArr);

console.log("Heap after HeapSort:", heapArr);
