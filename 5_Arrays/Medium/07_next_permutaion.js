let arr = [1, 3, 2];
let arr2 = [2, 1, 5, 4, 3, 0, 0];

const nextPermutation = (arr) => {
  let n = arr.length - 1;
  let index = -1;

  // Step 1: Find the largest index `index` such that arr[index] < arr[index + 1] element;
  for (let i = n - 1; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) {
      index = i;
      break;
    }
  }

  // if we dont find the deep element then this is last permuation so reverse it
  if (index == -1) {
    arr.reverse();
    return;
  }

  // Step 3: Find the largest index `j` such that arr[j] > arr[index]
  for (let i = n; i > index; i--) {
    if (arr[i] > arr[index]) {
      [arr[index], arr[i]] = [arr[i], arr[index]];
      break;
    }
  }

  // Step 5: Reverse the subarray starting from index + 1 to the end of the array
  let left = index + 1;
  let right = n;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  console.log("arr", arr);
};

nextPermutation(arr);
console.log(arr);
