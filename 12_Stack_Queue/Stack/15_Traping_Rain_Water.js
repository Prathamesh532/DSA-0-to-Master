/*

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

Example:
Input: [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6

*/

// Brute force approach:- TC = O(N) + O(N) + O(N) = O(3N) =~ O(N) & SC = O(N) + O(N)
/* 
Still the brute force approach is much better
The perfixMath & sufixMath can find for traversing from left to right and from right to left respectively
*/
const trap_brute = (arr) => {
  let n = arr.length;
  let result = 0;
  let perfixMath = new Array(n).fill(0);
  let suffixMath = new Array(n).fill(0);

  // first we store all left max in perfixMath array
  perfixMath[0] = arr[0];
  for (let i = 1; i < n; i++)
    perfixMath[i] = Math.max(perfixMath[i - 1], arr[i]);

  // second we travers from right to left and store all max to the suffixMath
  suffixMath[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--)
    suffixMath[i] = Math.max(suffixMath[i + 1], arr[i]);

  // now we calcualte the total trap water
  for (let i = 0; i < n; i++) {
    // more optimal condition
    if (arr[i] < perfixMath[i] && arr[i] < suffixMath[i])
      result += Math.min(perfixMath[i], suffixMath[i]) - arr[i];
  }

  return result;
};

// Better: usinf sufixMath only
/*
Time Complexity:- O(N) + O(N) = O(2N) =~ O(N)
Space Complexity:- O(N)
*/
const trap_better = (arr) => {
  let n = arr.length;
  let result = 0;
  let suffixMath = new Array(n).fill(0);

  // second we travers from right to left and store all max to the suffixMath
  suffixMath[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--)
    suffixMath[i] = Math.max(suffixMath[i + 1], arr[i]);

  // now we calcualte the total trap water
  let leftMax = arr[0];
  for (let i = 0; i < n; i++) {
    // more optimal condition
    leftMax = Math.max(leftMax, arr[i]);
    let waterLevel = Math.min(leftMax, suffixMath[i]);
    if (arr[i] < waterLevel) result += waterLevel - arr[i];
  }

  return result;
};

// Optimal approach:- Using 2 pointer approach
const trap_pointers = (arr) => {
  let n = arr.length;
  let result = 0;

  let left = 0;
  let right = n - 1;

  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (arr[left] <= arr[right]) {
      if (leftMax > arr[left]) {
        result += leftMax - arr[left];
      } else {
        leftMax = arr[left];
      }
      left++;
    } else {
      if (rightMax > arr[right]) {
        result += rightMax - arr[right];
      } else {
        rightMax = arr[right];
      }
      right--;
    }
  }

  return result;
};

// Optimal approach:- Using Stack
const trap_stack = (arr) => {
  let n = arr.length;
  let result = 0;
  let stack = [];

  let currenIdx = 0;

  while (currenIdx < n) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] < arr[currenIdx]) {
      let pop = stack.pop();

      if (stack.length == 0) break;

      let peek = stack[stack.length - 1];
      let distance = currenIdx - peek - 1;

      let height = Math.min(arr[currenIdx], arr[peek]) - arr[pop];

      result += distance * height;
    }

    stack.push(currenIdx);
    currenIdx++;
  }

  return result;
};

const arr = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap_brute(arr));
