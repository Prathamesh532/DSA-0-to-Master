// First approach (brute force), but it doesn't work for all cases
const maxScore = (cardPoints, k) => {
    let sum = 0;
    let maxSum = 0;
    let n = cardPoints.length;

    // Sum the first k elements from the left side
    for (let i = 0; i < k; i++) {
        sum += cardPoints[i];
        maxSum = Math.max(maxSum, sum); // Track the maximum sum
    }

    sum = 0; // Reset sum for the second loop

    // Sum the last k elements from the right side
    for (let j = n - 1; j >= n - k; j--) {
        sum += cardPoints[j];
        maxSum = Math.max(maxSum, sum); // Track the maximum sum
    }

    return maxSum; // Return the maximum sum found
};

// Improved approach with sliding window technique
const maxScore_ = (arr, k) => {
    let n = arr.length;
    let leftSum = 0;    // Stores the sum of the left part (first k elements)
    let rightsum = 0;   // Stores the sum of the right part (last elements)
    let maxSum = 0;     // Stores the maximum sum

    // Sum the first k elements from the left
    for (let i = 0; i < k; i++) leftSum += arr[i];
    maxSum = leftSum;  // Set initial maxSum to the leftSum

    let rightIndex = n - 1;

    // Iterate through the array from the end and move elements from the right to the left
    for (let i = k - 1; i >= 0; i--) {
        leftSum -= arr[i];          // Remove element from the left part
        rightsum += arr[rightIndex]; // Add element to the right part
        rightIndex--;               // Move the right index to the left
        maxSum = Math.max(maxSum, leftSum + rightsum); // Update maxSum with the new sum
    }

    return maxSum; // Return the maximum sum found
};

let score = [100, 40, 17, 9, 73, 75];

// Call the improved version of maxScore function and log the result
const check = maxScore_(score, 3);
console.log(check);  // Expected output: 192 (100 + 75 + 73)
