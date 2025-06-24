/*

Sum of subarray ranges:-
You are given an integer array nums. 
The range of a subarray of nums is the difference between the largest and smallest element in the subarray.
Return the sum of all subarray ranges of nums.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,2,3]
Output: 4
Explanation: The 6 subarrays of nums are the following:
[1], range = largest - smallest = 1 - 1 = 0 
[2], range = 2 - 2 = 0
[3], range = 3 - 3 = 0
[1,2], range = 2 - 1 = 1
[2,3], range = 3 - 2 = 1
[1,2,3], range = 3 - 1 = 2
So the sum of all ranges is 0 + 0 + 0 + 1 + 1 + 2 = 4.

*/

/* 
Brute Force:- Generating all sub-array and then calculationg max and min 
Time Complexity -> O(N^2)
Space Complexity -> O(1)
*/
function subArrayRanges(arr) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    let max = arr[i];
    for (let j = i; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      max = Math.max(max, arr[j]);
      result += max - min;
    }
  }

  return result;
}

/* */
// Next Smaller Element (to right)
const nextSmaller = (arr) => {
  let res = new Array(arr.length).fill(arr.length);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
      res[stack.pop()] = i;
    }
    stack.push(i);
  }
  return res;
};

// Previous Smaller Element (to left)
const prevSmaller = (arr) => {
  let res = new Array(arr.length).fill(-1);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] >= arr[i]) {
      stack.pop();
    }
    res[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  return res;
};

// Next Greater Element (to right)
const nextGreater = (arr) => {
  let res = new Array(arr.length).fill(arr.length);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] < arr[i]) {
      res[stack.pop()] = i;
    }
    stack.push(i);
  }
  return res;
};

// Previous Greater Element (to left)
const prevGreater = (arr) => {
  let res = new Array(arr.length).fill(-1);
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    while (stack.length && arr[stack[stack.length - 1]] <= arr[i]) {
      stack.pop();
    }
    res[i] = stack.length ? stack[stack.length - 1] : -1;
    stack.push(i);
  }
  return res;
};

// Sum of subarray minimums
const subArrMin = (arr) => {
  const nse = nextSmaller(arr);
  const pse = prevSmaller(arr);
  let res = 0;
  const mod = 1e9 + 7;

  for (let i = 0; i < arr.length; i++) {
    let left = i - pse[i];
    let right = nse[i] - i;
    res = (res + arr[i] * left * right) % mod;
  }
  return res;
};

// Sum of subarray maximums
const subArrMax = (arr) => {
  const nge = nextGreater(arr);
  const pge = prevGreater(arr);
  let res = 0;
  const mod = 1e9 + 7;

  for (let i = 0; i < arr.length; i++) {
    let left = i - pge[i];
    let right = nge[i] - i;
    res = (res + arr[i] * left * right) % mod;
  }
  return res;
};

// Final Answer
function subArrayRanges_optimal(arr) {
  const mod = 1e9 + 7;
  let maxSum = subArrMax(arr);
  let minSum = subArrMin(arr);
  return (maxSum - minSum + mod) % mod; // ensure non-negative result
}

// TODO: DRY RUN
function subArrayRanges_(nums) {
  const n = nums.length;
  let answer = 0;
  const stack = [];

  // Find the sum of all the minimum.
  for (let i = 0; i <= n; ++i) {
    while (
      stack.length > 0 &&
      (i === n || nums[stack[stack.length - 1]] >= nums[i])
    ) {
      const mid = stack.pop();
      const left = stack.length === 0 ? -1 : stack[stack.length - 1];
      answer -= nums[mid] * (i - mid) * (mid - left);
    }
    stack.push(i);
  }

  // Find the sum of all the maximum.
  stack.length = 0; // Clear the stack
  for (let right = 0; right <= n; ++right) {
    while (
      stack.length > 0 &&
      (right === n || nums[stack[stack.length - 1]] <= nums[right])
    ) {
      const mid = stack.pop();
      const left = stack.length === 0 ? -1 : stack[stack.length - 1];
      answer += nums[mid] * (right - mid) * (mid - left);
    }
    stack.push(right);
  }
  return answer;
}

const arr = [1, 3, 3];
const check = subArrayRanges_optimal(arr);
console.log("Check", check);
