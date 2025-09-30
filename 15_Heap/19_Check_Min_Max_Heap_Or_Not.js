function isMinHeap(arr) {
  let n = arr.length;
  for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[i] > arr[left]) return false;
    if (right < n && arr[i] > arr[right]) return false;
  }
  return true;
}

function isMaxHeap(arr) {
  let n = arr.length;
  for (let i = 0; i <= Math.floor(n / 2) - 1; i++) {
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[i] < arr[left]) return false;
    if (right < n && arr[i] < arr[right]) return false;
  }
  return true;
}

function checkHeap(arr) {
  if (isMinHeap(arr)) return "Min-Heap";
  if (isMaxHeap(arr)) return "Max-Heap";
  return "Not a Heap";
}

// 🔹 Test Cases
console.log(checkHeap([1, 2, 3, 4, 5, 6])); // Min-Heap
console.log(checkHeap([9, 5, 6, 2, 3]));    // Max-Heap
console.log(checkHeap([10, 1, 5, 3]));      // Not a Heap
