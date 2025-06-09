/*

Given an array, print the Next Smaller Element (NSE) for every element. 
The NSE for an element x is the first smaller element on the right side of x in the array. 
For elements for which no smaller element exists (on the right side), then consider NSE as -1. 

Input: [4, 8, 5, 2, 25]
Output: [2, 5, 2, -1, -1]
Explanation: 
The first element smaller than 4 having index > 0 is 2.
The first element smaller than 8 having index > 1 is 5.
The first element smaller than 5 having index > 2 is 2.
There are no elements smaller than 4 having index > 3.
There are no elements smaller than 4 having index > 4.

*/

// Brute Force
const nextSmallerElement_brute = (arr) => {
  let n = arr.length;
  let result = [];

  // run a nested loop,
  for (let i = 0; i < n; i++) {
    let found = false;
    for (let j = i + 1; j < n; j++) {
      // check for next smaller element
      if (arr[j] < arr[i]) {
        result.push(arr[j]);
        found = true;
        break;
      }
    }

    // if no smaller element found
    if (!found) result.push(-1);
  }

  return result;
};

// Optimal
const nextSmallerElement_Optimal = (arr) => {
  let n = arr.length;
  // result array to store NSE
  let result = new Array(n).fill(-1);
  // stack to store indices
  let stack = [];

  // traverse the array
  for (let i = 0; i < n; i++) {
    // pop elements from stack that are smaller than current element
    while (stack.length && arr[i] < arr[stack[stack.length - 1]])
      result[stack.pop()] = arr[i];

    // push current index onto stack as a candidate for NSE of next element
    stack.push(i);
  }

  return result;
};

const arr = [4, 8, 5, 2, 25];
const NSE = nextSmallerElement_Optimal(arr);
console.log("Next Smaller Element:-", NSE);
