// Define the string to be checked for the longest palindrome
let str = "babad";

// brute force ----> TLE O(N^3)
/**
 * @param {string} s
 * @return {string}
 */

const isPalindrome = (s, i, j) => {
  while (i < j) {
    let char1 = s[i].charAt();
    let char2 = s[j].charAt();
    if (char1 !== char2) return false;
    i++;
    j--;
  }
  return true;
};

var longestPalindrome = function (s) {
  let maxLen = 0;
  let n = s.length;
  let start = 0,
    end = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (isPalindrome(s, i, j) === true) {
        if (j - i + 1 > maxLen) {
          maxLen = j - i + 1;
          start = i;
          end = j;
        }
      }
    }
  }
  return s.substring(start, end + 1);
};

/**
 * Expands around a given center point in the string to find the length of the longest palindrome.
 *
 * @param {string} s - The string to check for the longest palindrome.
 * @param {number} i - The starting index of the center point.
 * @param {number} j - The ending index of the center point.
 * @returns {number} The length of the longest palindrome centered at the given point.
 */
const expandAroundCircle = (s, i, j) => {
  // Expand the palindrome outward from the center point
  while (i >= 0 && j < s.length && s[i] === s[j]) {
    // Move the left index to the left and the right index to the right
    i--;
    j++;
  }

  // Return the length of the palindrome
  return j - i - 1;
};

/**
 * Finds the longest palindrome in a given string.
 *
 * @param {string} s - The string to check for the longest palindrome.
 * @returns {string} The longest palindrome in the string.
 */
var longestPalindrome = function (s) {
  // Get the length of the string
  let n = s.length;

  // Initialize the start and end indices of the longest palindrome
  let start = 0;
  let end = 0;

  // Iterate through each character in the string
  for (let i = 0; i < n; i++) {
    // Check for palindromes centered at the current character and the character to the right of it
    let len1 = expandAroundCircle(s, i, i);
    let len2 = expandAroundCircle(s, i, i + 1);

    // Choose the longer palindrome length
    let len = Math.max(len1, len2);

    // Update the start and end indices if the current palindrome is longer than the previous longest palindrome
    if (len > end - start) {
      start = i - Math.floor((len - 1) / 2);
      end = i + Math.floor(len / 2);
    }
  }

  // Return the longest palindrome substring
  return s.substring(start, end + 1);
};

// Test the function with the defined string
console.log(longestPalindrome(str));
