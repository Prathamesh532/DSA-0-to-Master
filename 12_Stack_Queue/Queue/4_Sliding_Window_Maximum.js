class Queue {
  constructor() {
    this.element = [];
  }

  // enqueue
  enqueue(value) {
    this.element.push(value);
  }

  // dequeue
  dequeue() {
    if (this.element.length == 0) return null;
    return this.element.shift();
  }

  pop() {
    if (this.element.length == 0) return null;
    return this.element.pop();
  }

  // peek / front
  front() {
    return this.element.length > 0 ? this.element[0] : null;
  }

  back() {
    return this.element.length > 0
      ? this.element[this.element.length - 1]
      : null;
  }

  // size
  size() {
    return this.element.length;
  }

  isEmpty() {
    return this.element.length === 0;
  }
}

/*

Sliding Window Maximum: 
Given an array nums, there is a sliding window of size k which is moving from the very left of the array to the very right.
You can only see the k numbers in the window. Each time the sliding window moves right by one position.
Return the max sliding window.

Example 1:
Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
Output: [3,3,5,5,6,7]
Explanation: 
Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7       3
 1 [3  -1  -3] 5  3  6  7       3
 1  3 [-1  -3  5] 3  6  7       5
 1  3  -1 [-3  5  3] 6  7       5
 1  3  -1  -3 [5  3  6] 7       6
 1  3  -1  -3  5 [3  6  7]      7

*/

/*
Brute force
Time Complexity: - O(N*K) 
Space Complexity: - O(N)
*/
const maxSlidingWindow = (arr, k) => {
  let n = arr.length;
  let left = 0;
  let right = k - 1;

  let result = [];

  while (right < n) {
    let max = 0;
    for (let i = left; i <= right; i++) {
      max = Math.max(max, arr[i]);
    }
    result.push(max);
    left++;
    right++;
  }

  return result;
};

/*
optimal using dequeue data structure
Time Complexity: - O(N) + O(N) = O(2N) =~ O(N)
Space Complexity: - O(k) + O(N) (for answer)
*/
const maxSlidingWindow_ = (arr, k) => {
  let n = arr.length;
  let result = [];

  let dq = new Queue(); // Monotonic queue to store indices of elements

  for (let i = 0; i < n; i++) {
    // Remove indices that are out of the current window
    // i - k is the left boundary of the window
    if (!dq.isEmpty() && dq.front() <= i - k) {
      dq.dequeue();
    }

    // Maintain the queue in decreasing order
    // Remove indices from the back whose corresponding values are less than or equal to arr[i]
    while (!dq.isEmpty() && arr[dq.back()] <= arr[i]) {
      dq.pop();
    }

    // Push the current index to the deque
    dq.enqueue(i);

    // If the first full window is formed (i >= k - 1),
    // push the max element (which is at the front of the deque) to the result
    if (i >= k - 1) {
      result.push(arr[dq.front()]);
    }
  }

  return result;
};

const arr = [1, 3, -1, -3, 5, 3, 6, 7];
let k = 3;

const check = maxSlidingWindow_(arr, k);
console.log(check);
