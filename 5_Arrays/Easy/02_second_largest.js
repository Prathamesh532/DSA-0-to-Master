let arr = [9, 5, 1, 3, 0];

// navie sort and return the n -2th element
// const sort = () => {
//   arr.sort((a, b) => a - b);
//   if (arr[arr.length - 1] == arr[arr.length - 2]) return arr[arr.length - 3]; // this will not work when there is mutliple same elements in arr
//   return arr[arr.length - 1];
// };
// let a = sort();
// console.log(arr);

// console.log(a);

function secondLargest() {
  if (arr.length < 2) {
    console.log("Array has fewer than two elements.");
    return -1;
  }

  let largest = -Infinity;
  let second_largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // If current element is larger than 'largest'
    if (arr[i] > largest) {
      second_largest = largest; // Update second largest
      largest = arr[i]; // Update largest
    }
    // If current element is between largest and second largest
    else if (arr[i] > second_largest && arr[i] != largest) {
      second_largest = arr[i];
    }
  }

  if (second_largest === -Infinity) {
    console.log("No second largest element found.");
    return -1;
  }

  console.log("Largest:", largest);
  console.log("Second Largest:", second_largest);
}
// secondLargest();

function secondSmaller() {
  let small = Infinity;
  let second_smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < small) {
      second_smallest = small;
      small = arr[i];
    } else if (arr[i] < second_smallest && arr[i] != small)
      second_smallest = arr[i];
  }
  console.log("small:", small);
  console.log("Second smallest:", second_smallest);
}

secondSmaller();
