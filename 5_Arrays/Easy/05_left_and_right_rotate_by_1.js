// Example 1:
// Input:
//  N = 5, array[] = {1,2,3,4,5}
// Output:
//  2,3,4,5,1
// Explanation:

// Since all the elements in array will be shifted
// toward left by one so ‘2’ will now become the
// first index and and ‘1’ which was present at
// first index will be shifted at last.

let arr = [1, 2, 3, 4, 5];

// --> O(N)
const leftRotateByOne = (arr) => {
  let temp = arr[0];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
};

// [5,1,2,3,4] --> O(N)
const rightRotateByOne = (arr) => {
  let temp = arr[arr.length - 1];
  for (let i = arr.length - 1; i >= 1; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
};

// leftRotateByOne(arr); // [ 2, 3, 4, 5, 1 ]
rightRotateByOne(arr); //  [ 5, 1, 2, 3, 4 ]
console.log("arr ", arr);
