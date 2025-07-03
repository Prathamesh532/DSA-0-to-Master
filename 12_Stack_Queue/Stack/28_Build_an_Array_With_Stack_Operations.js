/*

Build an Array With Stack Operations:
A target array (strictly increasing, values from 1 to n)
An integer n, representing the upper bound of a number stream [1, 2, 3, ..., n]
You can use only two stack operations:
Push: add the next number from the stream to the stack
Pop: remove the top element from the stack

Your task: Simulate stack operations so that at the end, the stack looks exactly like target, from bottom to top, and no extra operations beyond what’s needed.

Example:
Input: target = [1, 2, 3, 4, 5], n = 5
Output: ["Push", "Push", "Push", "Push", "Push"]

Input: target = [1,3], n = 3
Output: ["Push","Push","Pop","Push"]
Explanation: Initially the stack s is empty. The last element is the top of the stack.
Read 1 from the stream and push it to the stack. s = [1].
Read 2 from the stream and push it to the stack. s = [1,2].
Pop the integer on the top of the stack. s = [1].
Read 3 from the stream and push it to the stack. s = [1,3].

*/

const buildArray_brute = (target, n) => {
  let res = [];
  let stack = [];
  let t = 0; // pointer for target array

  for (let i = 1; i <= n; i++) {
    // Always push every number
    res.push("Push");
    stack.push(i);

    // If the top of the stack doesn't match the current target element, pop it
    if (stack[stack.length - 1] !== target[t]) {
      res.push("Pop");
      stack.pop();
    } else {
      // If it matches, move to the next target element
      t++;
    }

    // Stop if we've matched the entire target array
    if (t === target.length) break;
  }

  return res;
};

const buildArray = (target, n) => {
  let res = [];
  let t = 0; // pointer for target array

  for (let i = 1; i <= n; i++) {
    if (t === target.length) break; // stop if target is fully built

    if (i === target[t]) {
      res.push("Push");
      t++; // move to next target element
    } else {
      res.push("Push");
      res.push("Pop"); // skip the number
    }
  }

  return res;
};

console.log(buildArray([1, 3], 3));
