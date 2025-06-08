/** Brute-force approach for Next Greater Element II (circular array)
 * Time Complexity: O(n^2)
 * For each element, we scan the next n-1 elements to find the next greater.
 */
const nextGreaterElement_II_brute = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    // Loop through the next n-1 elements using circular indexing
    for (let j = 1; j < arr.length; j++) {
      let nextIndex = (i + j) % arr.length;

      // If we find the next greater element
      if (arr[nextIndex] > arr[i]) {
        result.push(arr[nextIndex]);
        found = true;
        break;
      }
    }

    // If no greater element found, push -1
    if (!found) result.push(-1);
  }

  return result;
};

/** Optimal approach using Stack for Next Greater Element II (circular array)
 * Time Complexity: O(n)
 * We simulate circular behavior by traversing the array twice (2n times).
 */
const nextGreaterElement_II_Optimal = (arr) => {
  let n = arr.length;
  let result = new Array(n).fill(-1); // Initialize result array with -1
  let stack = []; // Stack to store next greater elements

  // Traverse the array twice in reverse to simulate circular array
  for (let i = 2 * n - 1; i >= 0; i--) {
    let index = i % n; // Actual index in the array

    // Pop elements from stack that are less than or equal to current
    while (stack.length && stack[stack.length - 1] <= arr[index]) {
      stack.pop();
    }

    // Fill result only in the first pass (i < n)
    if (i < n) {
      result[index] = stack.length ? stack[stack.length - 1] : -1;
    }

    // Push current element onto stack as a candidate for next greater
    stack.push(arr[index]);
  }

  return result;
};

// Test input
const arr = [1, 2, 1];

// Call and print result from optimal function
const result = nextGreaterElement_II_Optimal(arr);
console.log("Result:-", result); // Output: [2, -1, 2]
