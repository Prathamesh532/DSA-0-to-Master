/*

Given an array of integers A, find the sum of min(B), where B ranges over every subarray of A.
Since the answer may be large, return the answer modulo 109 + 7.

Example 1:
Input: [3,1,2,4]
Output: 17
Explanation: Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4].
Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.  Sum is 17.

*/

// Brute Force:- T.C = O(N^2) + O(N) , S.C = O(N)
const sumOfSubArrMin_brute = (arr) => {
  let subArr = [];

  // run a nested loop, Outer from 0 -> n
  for (let i = 0; i < arr.length; i++) {
    let currentSubArr = [];
    // run inner loop from i -> n
    for (let j = i; j < arr.length; j++) {
      // push the arr element at the index
      currentSubArr.push(arr[j]);
      // then push the curentArr to subArr, Hence we get all contigous sub-array elements
      subArr.push([...currentSubArr]);
    }
  }

  // we compte the minimum from all subarray and add then using reduce
  let res = subArr.reduce((acc, curr) => {
    let min = Math.min(...curr);
    return acc + min;
  }, 0);

  return res;
};

// Better Solution:- T.C = O(N^2) , S.C = O(1)
const sumOfSubArrMin_better = (arr) => {
  let result = 0;
  let mod = 1e9 + 7;
  // run a nested loop, Outer from 0 -> n
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    // run inner loop from i -> n
    for (let j = i; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      // we check the min right way
      result = (result + min) % mod;
    }
  }

  return result;
};

// optimal using mono stack
// Next Smaller elements
const nextSmaller = (arr) => {
  let nse = new Array(arr.length).fill(arr.length);
  let stack = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[i] <= arr[stack[stack.length - 1]]) {
      stack.pop();
    }

    nse[i] = stack.length ? stack[stack.length - 1] : arr.length;

    stack.push(i);
  }

  return nse;
};

// pervious smaller element
const pervSmaller = (arr) => {
  let pse = new Array(arr.length).fill(-1);
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i])
      stack.pop();

    pse[i] = stack.length ? stack[stack.length - 1] : -1;

    stack.push(i);
  }

  return pse;
};

/*
Time Complexityy:- O(2N)-> (nse) + O(2N)-> (pse) + O(N)-> (main func) ---> ~= O(5N) - O(N)
Space Complexity:- O(2N)-> (nse) + O(2N)-> (pse) ---> ~= O(4N) - O(N)
*/
const sumOfSubArrMin_optimal = (arr) => {
  let result = 0;
  let nse = nextSmaller(arr);
  let pse = pervSmaller(arr);
  let mod = 1e9 + 7;

  for (let i = 0; i < arr.length; i++) {
    let left = i - pse[i];
    let right = nse[i] - i;
    result = (result + arr[i] * left * right) % mod;
  }

  return result;
};

const arr = [3, 1, 2, 4];
const check = sumOfSubArrMin_optimal(arr);
console.log(check);
