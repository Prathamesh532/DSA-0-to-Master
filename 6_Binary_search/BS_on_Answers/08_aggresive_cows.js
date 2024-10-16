// Array representing stall positions
let stalls = [0, 3, 4, 7, 10, 9];

/**
 * Helper function to check if it's possible to place the given number of cows
 * with a minimum distance of 'index' between them.
 * @param {Array} arr - The array of stall positions (sorted).
 * @param {Number} index - The minimum distance between cows to check.
 * @param {Number} cows - The number of cows to place.
 * @returns {Boolean} - Returns true if it's possible to place all cows with the given minimum distance.
 */
const isPossibleToPlace = (arr, index, cows) => {
  let cowCnt = 1; // Place the first cow in the first stall
  let lastPlaceCow = arr[0]; // Last position where we placed a cow

  // Iterate over the array and place cows
  for (let i = 1; i < arr.length; i++) {
    // Check if the current stall is at least 'index' distance from the last placed cow
    if (arr[i] - lastPlaceCow >= index) {
      cowCnt++; // Place another cow
      lastPlaceCow = arr[i]; // Update the last position of the placed cow
    }
    // If we've placed all cows, return true
    if (cowCnt >= cows) return true;
  }
  return false; // If we couldn't place all cows, return false
};

/**
 * Brute force solution to find the largest minimum distance.
 * Time Complexity: O((max-min) * O(N)), where N is the length of the array.
 * @param {Array} stalls - Array of stall positions.
 * @param {Number} cows - Number of cows to place.
 * @returns {Number} - The largest minimum distance that can be achieved.
 */
const aggresiveCows = (stalls, cows) => {
  stalls.sort((a, b) => a - b); // Sort the stalls to ensure correct distance calculations
  let min = Math.min(...stalls); // Minimum position of stalls
  let max = Math.max(...stalls); // Maximum position of stalls

  // Try placing cows with increasing minimum distances and check if it's possible
  for (let i = 0; i <= max - min; i++) {
    if (isPossibleToPlace(stalls, i, cows)) {
      continue; // If it's possible to place cows, keep increasing the distance
    } else return i - 1; // Return the largest distance that worked
  }
  return -1; // Return -1 if no solution is found
};

// Example: Using brute force to find the largest minimum distance for placing 4 cows
console.log("Brute Force", aggresiveCows(stalls, 4)); // Output depends on stall positions

/**
 * Optimized solution using Binary Search to find the largest minimum distance.
 * Time Complexity: O(N * log(max - min)), where N is the length of the array.
 * @param {Array} stalls - Array of stall positions.
 * @param {Number} cows - Number of cows to place.
 * @returns {Number} - The largest minimum distance that can be achieved.
 */
const aggresiveCows_UsingBS = (stalls, cows) => {
  stalls.sort((a, b) => a - b); // Sort the stalls for binary search
  let low = 0; // Minimum possible distance
  let high = stalls[stalls.length - 1] - stalls[0]; // Maximum possible distance

  // Perform binary search to find the largest minimum distance
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Middle distance

    // Check if it's possible to place cows with the current mid distance
    if (isPossibleToPlace(stalls, mid, cows)) {
      low = mid + 1; // Try a larger distance
    } else {
      high = mid - 1; // Try a smaller distance
    }
  }
  return high; // The largest valid distance will be stored in 'high'
};

// Example: Using binary search to find the largest minimum distance for placing 4 cows
console.log("Using Binary Search", aggresiveCows_UsingBS(stalls, 4)); // Output depends on stall positions
