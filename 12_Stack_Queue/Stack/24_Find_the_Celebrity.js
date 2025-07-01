/*

A celebrity is a person who is known to all but does not know anyone in the party. If you go to a party of N people, 
find if there is a celebrity in the party or not.
A square NxN matrix M[][] is used to represent people in the party such that if an element of row i and 
column j  is set to 1 it means ith person knows jth person. Here M[i][i] will always be 0.
Note: Follow 0 based indexing.

Example 1:
Input:
N = 3
M[][] = {{0 1 0},
    {0 0 0}, 
    {0 1 0}}
Output: -1
Explanation: No celebrity is present.

Example 2:
Input:
N = 2
M[][] = {{0 1},
    {1 0}}
Output: 1
Explanation: Celebrity is person 0.

*/

/*
Brute Force --> traversing 2D matix and generating a know-me and i-know arrays
Time Complexity --> O(N*N) + O(N)
Space Complexity --> O(2N)
*/
const celebrity = (mat) => {
  let n = mat.length;

  let personKnowMe = new Array(n).fill(0); // how many people know person i
  let personIKnow = new Array(n).fill(0); // how many people i know

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let x = mat[i][j];

      personIKnow[i] += x; // i knows j
      personKnowMe[j] += x; // j is known by i
    }
  }

  for (let i = 0; i < n; i++) {
    if (personIKnow[i] == 0 && personKnowMe[i] == n - 1) {
      return i;
    }
  }

  return -1;
};

/*
Using Stack -->
Time Complexity --> O(N) adding in stack + O(N) (comparing) + O(N) final check ===> O(N)
Space Complexity --> O(N)
*/
const celebrity_stack = (mat) => {
  let n = mat.length;
  let stack = [];

  // Step 1: Push all people (0 to n-1) into the stack → O(N)
  for (let i = 0; i < n; i++) {
    stack.push(i);
  }

  // Step 2: Find potential celebrity using pairwise comparison → O(N)
  while (stack.length > 1) {
    let a = stack.pop();
    let b = stack.pop();

    // If a knows b → a can't be celebrity, push b
    // Else → b can't be celebrity, push a
    if (mat[a][b] != 0) {
      stack.push(b);
    } else {
      stack.push(a);
    }
  }

  // Step 3: Validate the last person left in the stack → O(N)
  let mayBeClebs = stack.pop();

  for (let i = 0; i < n; i++) {
    if (i === mayBeClebs) continue;

    // Check if the candidate knows no one and is known by everyone
    if (mat[mayBeClebs][i] !== 0 || mat[i][mayBeClebs] === 0) {
      return -1; // Not a celebrity
    }
  }

  // Valid celebrity found
  return mayBeClebs;
};

/*
Optimal Using 2-Pointer -->
Time Complexity: O(N) to find the potential celebrity + O(N) for final validation = O(2N)
Space Complexity: O(1) - No extra space used
*/
const celebrity_2pointer = (mat) => {
  let n = mat.length;

  let top = 0;
  let down = n - 1;

  // Step 1: Find potential celebrity using 2 pointers → O(N)
  while (top < down) {
    if (mat[top][down] === 1) {
      // top knows down → top can't be celebrity
      top++;
    } else {
      // top doesn't know down → down can't be celebrity
      down--;
    }
  }

  // At this point, top === down → potential celebrity
  const candidate = top;

  // Step 2: Validate the candidate → O(N)
  for (let i = 0; i < n; i++) {
    if (i === candidate) continue;

    // Candidate should not know anyone, and everyone should know candidate
    if (mat[candidate][i] !== 0 || mat[i][candidate] !== 1) {
      return -1; // Not a celebrity
    }
  }

  // Valid celebrity found
  return candidate;
};

const matrix = [
  [0, 1, 0],
  [1, 0, 0],
  [0, 1, 0],
];

const check = celebrity_2pointer(matrix);

console.log(check);
