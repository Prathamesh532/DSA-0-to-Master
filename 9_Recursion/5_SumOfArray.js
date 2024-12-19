const sumOfArray = (arr, size) => {
  // base case
  if (size == 0) return 0;
  if (size == 1) return arr[0];

  // Recursive relation
  let remain = sumOfArray(arr.slice(1), size - 1);
  let sum = arr[0] + remain;
  return sum;
};

const check = sumOfArray([3, 4, 6, 8], 4);
console.log(check);
