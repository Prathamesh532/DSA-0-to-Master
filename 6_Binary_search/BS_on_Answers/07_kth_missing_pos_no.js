// Given array 'arr' and integer 'k', we need to find the k-th missing positive integer
let arr = [4, 7, 9, 10];

// Brute force solution ---> O(N)
const missing = (arr, k) => {
  // Iterate over the elements of the array
  for (let i = 0; i < arr.length; i++) {
    // If the current element in the array is less than or equal to 'k',
    // this means we have fewer missing numbers than expected, so we increase 'k'.
    if (arr[i] <= k) {
      k++; // Increment 'k' since this number in the array is not missing
    } else {
      // If we find an element larger than 'k', it means we have found enough missing numbers, so we break the loop.
      break;
    }
  }
  // Return the k-th missing number
  return k;
};

// Example: Find the 4th missing positive integer
console.log(missing(arr, 4)); // Output: 6

// Optimized approach using binary search ---> O(log N)
const missingUsingBS = (arr, k) => {
  let n = arr.length; // Length of the array
  let low = 0; // Lower bound of the binary search
  let high = n - 1; // Upper bound of the binary search

  // Perform binary search on the array to find the position where the k-th missing number lies
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Calculate the middle index
    let missing = arr[mid] - (mid + 1); // Calculate how many numbers are missing up to arr[mid]

    // If the number of missing numbers until 'mid' is greater than 'k', search in the left half
    if (missing >= k) {
      high = mid - 1;
    } else {
      // Otherwise, search in the right half
      low = mid + 1;
    }
  }

  // The result is 'low + k' because after the binary search, 'low' points to the index
  // where the k-th missing number would be if inserted into the array.
  return low + k;
};

// Example: Find the 1st missing positive integer using binary search
console.log("Using Binary Search", missingUsingBS(arr, 1)); // Output: 1
