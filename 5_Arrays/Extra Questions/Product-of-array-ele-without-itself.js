let arr = [1, 2, 3, 4]; // Input array

// Brute force approach: O(n^2)
// Compute the product of all elements except the current one by using nested loops.
const findProduct = (arr) => {
  let n = arr.length; // Get the size of the array
  let res = new Array(n); // Resultant array to store the products

  for (let i = 0; i < n; i++) {
    let prod = 1; // Initialize product for the current index
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        // Multiply only if the indices are not the same
        prod = prod * arr[j];
      }
    }
    res[i] = prod; // Store the product in the result array
  }
  return res;
};
console.log("Brute: ", findProduct(arr));

// Better approach: O(n) with prefix and postfix arrays
// Avoid nested loops by precomputing prefix and postfix products.
const findProduct_better = (arr) => {
  let n = arr.length; // Get the size of the array
  let res = new Array(n); // Resultant array to store the final products

  // Prefix array: stores cumulative product of elements before the current index
  let prefix = new Array(n);
  prefix[0] = 1; // First element has no prefix product

  for (let i = 1; i < n; i++) {
    prefix[i] = arr[i - 1] * prefix[i - 1]; // Prefix product is product of previous element and cumulative prefix
  }

  // Postfix array: stores cumulative product of elements after the current index
  let postfix = new Array(n);
  postfix[n - 1] = 1; // Last element has no postfix product

  for (let i = n - 2; i >= 0; i--) {
    postfix[i] = arr[i + 1] * postfix[i + 1]; // Postfix product is product of next element and cumulative postfix
  }

  // Combine prefix and postfix products for each index
  for (let i = 0; i < n; i++) {
    res[i] = prefix[i] * postfix[i];
  }

  return res;
};
console.log("Better: ", findProduct_better(arr));

// Optimal approach: O(n) with constant space (excluding result array)
// Combine prefix and postfix computation into a single pass.
const findProduct_optimal = (arr) => {
  let n = arr.length; // Get the size of the array
  let res = new Array(n).fill(1); // Resultant array initialized to 1

  // Compute prefix products and store directly in the result array
  for (let i = 1; i < n; i++) {
    res[i] = res[i - 1] * arr[i - 1]; // Prefix product for each element
  }

  // Compute postfix products on the fly and multiply with the result array
  let postfix = 1; // Initialize postfix product as 1
  for (let i = n - 1; i >= 0; i--) {
    res[i] *= postfix; // Multiply current result with postfix product
    postfix *= arr[i]; // Update postfix product with current element
  }

  return res;
};
console.log("Optimal: ", findProduct_optimal(arr));
