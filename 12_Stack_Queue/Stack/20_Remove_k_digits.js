/*
Given a non-negative integer num represented as a string, 
remove k digits from the number so that the new number is the smallest possible.

Example 1:
Input: num = "1432219", k = 3
Output: "1219"
Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.
*/

var removeKdigits = function (num, k) {
  let stack = [];

  for (let i = 0; i < num.length; i++) {
    while (stack.length > 0 && k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros
  while (stack.length > 0 && stack[0] === "0") {
    stack.shift();
  }

  return stack.length === 0 ? "0" : stack.join("");
};
