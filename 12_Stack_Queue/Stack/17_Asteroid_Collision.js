/*
Asteroid Collision: Problem Statement = Given an array asteroids of integers representing asteroids in a row.
For each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).
Each asteroid moves at the same speed.
The asteroids that are close together will collide, and only one of them will remain in the array.
Return an array of the asteroids that will remain in the array after all collisions.

Example 1:
Input: asteroids = [5,10,-5]
Output: [5,10]
Explanation: The 10 and -5 collide resulting in 10. The 5 and 10 never collide.

*/

const asteroidCollision = (arr) => {
  let stack = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) stack.push(arr[i]);
    else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] > 0 &&
        stack[stack.length - 1] < Math.abs(arr[i])
      ) {
        stack.pop();
      }
      if (stack.length > 0 && stack[stack.length - 1] == Math.abs(arr[i])) {
        stack.pop(); // both explode
      } else if (stack.length > 0 || stack[stack.length - 1] < 0) {
        stack.push(arr[i]); // no collision
      }
    }
  }

  return stack;
};

const asteroid = [5, 10, -5];
console.log(asteroidCollision(asteroid));
