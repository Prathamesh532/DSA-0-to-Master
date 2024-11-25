let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];

// Brute Force Approach ---> O(3N) and space complexity = O(2N)
function trappingRainWater(height) {
  let n = height.length; // Get the size of the input array.

  // Create two arrays to store the maximum height to the left and right of each element.
  let left = new Array(n);
  let right = new Array(n);

  let water = 0; // Variable to store the total trapped water.

  // Step 1: Fill the `left` array with the maximum heights from the left.
  left[0] = height[0]; // The first element's left max is the element itself.
  for (let i = 1; i < n; i++) {
    left[i] = Math.max(left[i - 1], height[i]); // Current max is the greater of the previous max or the current height.
  }

  // Step 2: Fill the `right` array with the maximum heights from the right.
  right[n - 1] = height[n - 1]; // The last element's right max is the element itself.
  for (let i = n - 2; i >= 0; i--) {
    right[i] = Math.max(right[i + 1], height[i]); // Current max is the greater of the next max or the current height.
  }

  // Step 3: Calculate the water trapped above each element.
  for (let i = 1; i < n; i++) {
    // Water above the current bar is the minimum of left and right max heights minus the height of the bar.
    water += Math.min(left[i], right[i]) - height[i];
  }

  return water; // Return the total trapped water.
}

// Optimal Approach ---> O(N)
const trappingRainWater_Optimal = (height) => {
  let n = height.length; // Get the size of the input array.

  // Two pointers to traverse the array from both ends.
  let left = 0;
  let right = n - 1;

  // Variables to track the maximum heights from the left and right.
  let lmax = 0;
  let rmax = 0;

  let res = 0; // Variable to store the total trapped water.

  // Use the two-pointer technique to find trapped water more efficiently.
  while (left < right) {
    if (height[left] < height[right]) {
      // Update the left max if the current height is greater than the tracked max.
      lmax = Math.max(lmax, height[left]);
      // Add the trapped water above the current bar on the left side.
      res += lmax - height[left];
      left++; // Move the left pointer.
    } else {
      // Update the right max if the current height is greater than the tracked max.
      rmax = Math.max(rmax, height[right]);
      // Add the trapped water above the current bar on the right side.
      res += rmax - height[right];
      right--; // Move the right pointer.
    }
  }

  return res; // Return the total trapped water.
};

console.log(trappingRainWater(height)); // Output for the brute force approach
console.log("optimal ->", trappingRainWater_Optimal(height)); // Output for the optimal approach
