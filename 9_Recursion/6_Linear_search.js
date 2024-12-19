const linearSearch = (arr, size, k) => {
  // base case
  if (size == 0) return -1;

  if (arr[0] == k) return true;

  // recursion relation
  return linearSearch(arr.slice(1), size - 1, k);
};

const check = linearSearch([1, 2, 3, 4, 5, 6], 6, 1);
console.log(check);
