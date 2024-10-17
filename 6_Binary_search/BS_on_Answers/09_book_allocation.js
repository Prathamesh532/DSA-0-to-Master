// Problem Statement: Given an array ‘arr of integer numbers, ‘arr[i]’ represents the number of pages in the ‘i-th’ book.
// There are ‘m’ number of students, and the task is to allocate all the books to the students.
// Allocate books in such a way that:
// 1. Each student gets at least one book.
// 2. Each book should be allocated to only one student.
// 3. Book allocation should be in a contiguous manner.
// 4. Allocate the books to ‘m’ students such that the maximum number of pages assigned to a student is minimized.
// If allocation is not possible, return -1.
// Example:
// Input: n = 4, m = 2, arr[] = {12, 34, 67, 90}
// Output: 113
// Explanation: The allocation is 12, 34, 67 | 90. One student gets the first three books and the other gets the last one.
// The maximum number of pages assigned is 113.

let arr = [7, 2, 5, 10, 8];

// Helper function to check if a given number of pages can be allocated to the given number of students
const canAllocated = (arr, pages) => {
  let studentCnt = 1; // Number of students required
  let pageStart = 0; // Tracks the current number of pages assigned to a student

  for (let i = 0; i < arr.length; i++) {
    // If the current book can be added to the current student's allocation
    if (pageStart + arr[i] <= pages) {
      pageStart += arr[i];
    } else {
      // If not, allocate the book to the next student
      pageStart = arr[i];
      studentCnt++;
    }
  }
  return studentCnt; // Return the total number of students used for the current allocation
};

// Brute-force approach using linear search ---> Time Complexity: O(N * (sumOfBooks - max))
const book_allocation = (books, students) => {
  if (books.length < students) return -1; // Edge case: Not enough books for students

  let max = Math.max(...books); // Maximum number of pages in a single book
  let sumOfbooks = books.reduce((acc, pages) => acc + pages, 0); // Sum of all book pages

  // Linear search from max book pages to total pages
  for (let i = max; i <= sumOfbooks; i++) {
    let allocated = canAllocated(books, i); // Check if we can allocate with max `i` pages
    if (allocated == students) {
      return i; // Return the maximum number of pages if allocation is successful
    }
  }
};
console.log("Brute-force using linear search:", book_allocation(arr, 2));

// Optimized approach using binary search ---> Time Complexity: O(N * log(sumOfBooks - max))
// This function applies binary search to find the minimal maximum number of pages
const book_allocation_usingBS = (books, students) => {
  if (books.length < students) return -1; // Edge case: Not enough books for students

  let sumOfbooks = books.reduce((acc, pages) => acc + pages, 0); // Total number of pages
  let low = Math.max(...books); // The minimum value to search is the largest book
  let high = sumOfbooks; // The maximum value is the sum of all pages

  // Binary search to find the smallest maximum page allocation
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Middle value (potential answer)
    let allocated = canAllocated(books, mid); // Check how many students we need to allocate with `mid` pages

    // If the number of students required matches the actual number of students
    if (allocated <= students) {
      high = mid - 1; // Too many students, reduce `mid`
    } else low = mid + 1; // Not enough students, increase `mid`
  }
  return low;
};
console.log("Using Binary search:", book_allocation_usingBS(arr, 2));

// Split Array Largest Sum problem
/* Given an integer array nums and an integer k, split nums into k non-empty subarrays 
   such that the largest sum of any subarray is minimized.
   Return the minimized largest sum of the split. 
   A subarray is a contiguous part of the array.
*/
var splitArray = function (nums, k) {
  let n = nums.length;
  let sumOfnums = nums.reduce((acc, num) => acc + num, 0); // Total sum of array elements
  let low = Math.max(...nums); // The largest element (minimum value for max subarray sum)
  let high = sumOfnums; // Total sum of elements (maximum possible value for max subarray sum)
  let ans = -1; // To store the answer

  // Binary search to minimize the largest sum of the subarrays
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Middle point (potential answer)
    let maxLen = canAllocated(nums, mid); // Check how many subarrays we need for `mid` sum

    if (maxLen <= k) {
      ans = mid; // If we can split into `k` or fewer subarrays, this is a valid answer
      high = mid - 1; // Try for a smaller maximum sum
    } else low = mid + 1; // Otherwise, increase the possible maximum sum
  }
  return ans; // Return the minimized largest sum
};
console.log(
  "Using Binary search for Split Array Largest Sum:",
  splitArray(arr, 2)
);
