// Define the Roman numeral to be converted
let romanNumber = "MCMXCIV";

/**
 * Converts a Roman numeral to an integer.
 *
 * @param {string} s - The Roman numeral to convert.
 * @returns {number} The integer equivalent of the Roman numeral.
 */
const romanToInteger = (s) => {
  // Define a mapping of Roman numerals to their integer values
  let roman = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

  // Initialize the result variable to 0
  let result = 0;

  // Iterate through each character in the Roman numeral string
  for (let i = 0; i < s.length; i++) {
    // Check if the current numeral is less than the next one
    if (i + 1 < s.length && roman[s[i]] < roman[s[i + 1]]) {
      // If so, subtract the current numeral's value from the result
      result -= roman[s[i]];
    } else {
      // Otherwise, add the current numeral's value to the result
      result += roman[s[i]];
    }
  }

  // Return the final result
  return result;
};

// Test the function with the defined Roman numeral
console.log("romanToInteger", romanToInteger(romanNumber));
