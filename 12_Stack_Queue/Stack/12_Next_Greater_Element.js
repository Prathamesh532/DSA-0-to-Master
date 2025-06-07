/*

Problem Statement:- Next Greater Element I
                    We are given:
                    - Two arrays nums1 (subset of nums2) and nums2.
                    - For each element in nums1, we need to find the next greater element in nums2.
                    Note:-> Next Greater Element: For an element x, it's the first element greater than x to its right in nums2.

E.g.:- nums1 = [4,1,2], nums2 = [1,3,4,2]
       Output: [-1,3,-1]
       Explanation: The next greater element for each element of nums1 is as follows:
                    - 4 in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
                    - 1 in nums2 = [1,3,4,2]. The next greater element is 3.
                    - 2 in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

Approach 1 (Brute Force):
  - For each element in nums1, find its index in nums2 and check all elements to its right for the next greater.
  - Time Complexity: O(n * m)

Approach 2 (Optimal - Monotonic Stack):
  - Traverse nums2 once and use a decreasing stack to build a map of next greater elements.
  - Then map each element in nums1 using this map.
  - Time Complexity: O(n + m)

*/

const nextGreaterElement_brute = (arr1, arr2) => {
  let result = [];

  // Traverse each element in arr1
  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    let start = arr2.indexOf(arr1[i]); // Find index in arr2

    // Check for next greater element in arr2 after the found index
    for (let j = start + 1; j < arr2.length; j++) {
      if (arr2[j] > arr1[i]) {
        result.push(arr2[j]);
        found = true;
        break;
      }
    }

    // If no greater element found, push -1
    if (!found) result.push(-1);
  }

  return result;
};

const nextGreaterElement_optimal = (arr1, arr2) => {
  let stack = [];
  let map = new Map(); // Store next greater for each number in arr2

  // Traverse nums2 to build the map
  for (let num of arr2) {
    // While current num is greater than stack top, it is the next greater
    while (stack.length && num > stack[stack.length - 1]) {
      let top = stack.pop(); // pop the smaller one
      map.set(top, num); // map it to the next greater (current num)
    }
    stack.push(num); // push current num as a candidate
  }

  // Map each element in arr1 to its next greater from the map
  return arr1.map((n) => map.get(n) ?? -1); // use ?? to handle undefined safely
};

const arr1 = [4, 1, 2];
const arr2 = [1, 3, 4, 2];

const result = nextGreaterElement_optimal(arr1, arr2);
console.log("Result:-", result);
