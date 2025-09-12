/**
 * Heapify function for Max-Heap
 * Ensures the subtree rooted at `index` follows the Max-Heap property:
 * - The value at the parent node is greater than or equal to its children.
 * Time Complexity (per call): O(log n)
 *   - In the worst case, we may traverse from root to leaf.
 * Space Complexity: O(log n) (due to recursive calls)
 */
function heapify_max(arr, size, index) {
    let leftIndex = 2 * index + 1; // left child index
    let rightIndex = 2 * index + 2; // right child index
    let largest = index; // assume parent is largest initially

    // If left child exists and is greater than parent
    if (leftIndex < size && arr[largest] < arr[leftIndex]) {
        largest = leftIndex;
    }

    // If right child exists and is greater than the largest so far
    if (rightIndex < size && arr[largest] < arr[rightIndex]) {
        largest = rightIndex;
    }

    // If the largest is not the parent, swap and recursively heapify
    if (largest !== index) {
        [arr[largest], arr[index]] = [arr[index], arr[largest]];
        heapify_max(arr, size, largest);
    }
}

/**
 * Heapify function for Min-Heap
 * Ensures the subtree rooted at `index` follows the Min-Heap property:
 * - The value at the parent node is smaller than or equal to its children.
 * Time Complexity (per call): O(log n)
 * Space Complexity: O(log n) (due to recursion)
 */
function heapify_min(arr, size, index) {
    let leftIndex = 2 * index + 1; // left child index
    let rightIndex = 2 * index + 2; // right child index
    let smallest = index; // assume parent is smallest initially

    // If left child exists and is smaller than parent
    if (leftIndex < size && arr[smallest] > arr[leftIndex]) {
        smallest = leftIndex;
    }

    // If right child exists and is smaller than the smallest so far
    if (rightIndex < size && arr[smallest] > arr[rightIndex]) {
        smallest = rightIndex;
    }

    // If the smallest is not the parent, swap and recursively heapify
    if (smallest !== index) {
        [arr[smallest], arr[index]] = [arr[index], arr[smallest]];
        heapify_min(arr, size, smallest);
    }
}

// Example Usage
let arr = [10, 5, 20, 2, 8, 15];
let size = arr.length;

// Build Max-Heap
for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify_max(arr, size, i);
}
console.log("Max Heap:", arr);

// Build Min-Heap
let arr_ = [10, 5, 20, 2, 8, 15];
let size_ = arr_.length;

for (let i = Math.floor(size_ / 2) - 1; i >= 0; i--) {
    heapify_min(arr_, size_, i);
}
console.log("Min Heap:", arr_);
