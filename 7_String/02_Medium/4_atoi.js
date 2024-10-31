// Basic atoi implementation - converts a numeric string to an integer
const atoi = (s) => {
  let result = 0; // Stores the final integer result

  for (let i = 0; i < s.length; i++) {
    let char = s[i]; // Current character
    let charCode = char.charCodeAt(); // ASCII code of current character

    // Check if character is a digit (ASCII code 48 to 57)
    if (charCode >= 48 && charCode <= 57) {
      // Convert character to its integer value by subtracting '0' ASCII (48)
      result = result * 10 + (charCode - 48);
    } else {
      // If character is not a digit, return "Not Valid String"
      return "Not Valid String";
    }
  }
  return result; // Return final converted integer
};

console.log("Atoi", atoi("042")); // Output: 42

// Another approach with trim and check for non-digit
const atoi_V2 = (s) => {
  s = s.trim(); // Remove leading/trailing whitespace
  let result = 0; // Stores the final integer result

  for (let i = 0; i < s.length; i++) {
    let char = s[i]; // Current character

    // If character is not a number, return 0
    if (isNaN(char)) {
      return 0;
    }

    // Convert character to number and build the result
    result = result * 10 + Number(char);
  }
  return result; // Return final integer result
};

console.log("Atoi_V2", atoi_V2("   42")); // Output: 42

// More complete atoi function that considers whitespaces, signs, and limits
const ultimate_atoi_function = (s) => {
  let result = 0; // Stores the converted integer result
  let sign = 1; // Determines the sign of the result (1 for positive, -1 for negative)
  let i = 0; // Iterator index for traversing the string

  const MAX_INT = 2 ** 31 - 1; // Maximum 32-bit signed integer
  const MIN_INT = -(2 ** 31); // Minimum 32-bit signed integer

  // Step 1: Skip leading whitespaces
  while (i < s.length && s[i] === " ") i++;

  // Step 2: Check for sign character
  if (i < s.length && (s[i] === "-" || s[i] === "+")) {
    sign = s[i] === "-" ? -1 : 1; // Set sign based on character
    i++; // Move index past the sign character
  }

  // Step 3: Convert numeric characters to integer
  while (i < s.length && s[i] >= "0" && s[i] <= "9") {
    let digit = s[i].charCodeAt() - "0".charCodeAt(); // Convert character to digit
    result = result * 10 + digit; // Build the result integer

    // Step 4: Handle overflow by clamping to 32-bit integer range
    if (sign * result > MAX_INT) return MAX_INT;
    if (sign * result < MIN_INT) return MIN_INT;

    i++; // Move to the next character
  }

  // Step 5: Return the final result with the appropriate sign
  return sign * result;
};

console.log("Ultimate Atoi", ultimate_atoi_function("4193 with words")); // Output: 4193
console.log("Ultimate Atoi", ultimate_atoi_function("   -42")); // Output: -42
console.log("Ultimate Atoi", ultimate_atoi_function("21474836460")); // Output: 2147483647 (clamped to MAX_INT)
