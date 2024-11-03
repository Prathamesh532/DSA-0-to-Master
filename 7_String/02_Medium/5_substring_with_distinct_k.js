let str = "abaaca";

// brute force ---> O(N^2) Space ----> O(N)
const findSubString = (str, k) => {
  let n = str.length;
  let res = 0;

  for (let i = 0; i < n; i++) {
    let set = new Set();
    for (let j = i; j < n; j++) {
      set.add(str[j]);

      if (set.size === k) res++;
      if (set.size > k) break;
    }
  }

  return res;
};
console.log("brute force", findSubString(str, 1));

//Optimally ---> O(N)
const findSubString_optimal = (str, k) => {
  let n = str.length;
  let res = 0; // Final result to store the count of substrings with exactly `k` distinct characters
  let cnt = 0; // Number of unique characters in the current window
  let i = 0; // Left boundary of the sliding window
  let j = 0; // Right boundary of the sliding window

  // Frequency array to track occurrences of each character in the window
  let hashArr = new Array(26).fill(0);

  // Expand the window by moving `j`
  while (j < n) {
    let char = str[j].charCodeAt() - "a".charCodeAt(); // Get index for current character
    hashArr[char]++; // Increment frequency for character `str[j]`

    // If this character is new to the window, increase the unique count
    if (hashArr[char] === 1) cnt++;

    // If there are more than `k` unique characters, shrink the window from the left (`i`)
    while (cnt > k) {
      let leftChar = str[i].charCodeAt() - "a".charCodeAt(); // Index for `str[i]`
      hashArr[leftChar]--; // Decrease frequency for character `str[i]`

      // If `str[i]` is no longer in the window, decrease unique count
      if (hashArr[leftChar] === 0) cnt--;

      i++; // Move the left boundary to the right
    }

    // When we have exactly `k` distinct characters, count the valid substrings
    // All substrings from `i` to `j` are valid with exactly `k` distinct characters
    if (cnt === k) res += j - i + 1;

    j++; // Move the right boundary to the right
  }
  return res;
};

// Example usage and testing
let k = 1;
console.log("Optimal Solution", findSubString_optimal(str, k));

/*
Sliding Window Movement:
The algorithm uses two pointers, i and j, to maintain a sliding window.
j iterates over the entire string once, moving from the start to the end. This contributes O(N) to the time complexity.
i also only moves forward and does not revisit positions once adjusted, so even though it’s in a nested loop, it still contributes only O(N) overall.
Constant-Time Operations Inside the Loop:
Each character addition (hashArr[char]++), deletion (hashArr[char]--), and check operation is O(1) because array operations and condition checks take constant time.
Thus, no operations inside the main loop introduce extra complexity.
In summary:

Time Complexity: O(N) — due to the single pass of both i and j over the string.
Space Complexity: O(1) if we exclude the input (since hashArr has a fixed size of 26 for lowercase letters).
*/
