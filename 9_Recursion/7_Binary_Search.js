const BS_by_recursion = (arr, size, k) => {
  // base case
  if (size == 0) return false;

  let mid = Math.floor(size / 2);
  if (arr[mid] == k) return true;
  else if (arr[mid] > k) return BS_by_recursion(arr.slice(0, mid), mid, k);
  else return BS_by_recursion(arr.slice(mid + 1, size), size - mid - 1, k);
};

const BS_by_recursion_optimized = (arr, left, right, k) => {
  // base case
  if (left > right) return "Not Found";

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === k) return "Found!";
  else if (arr[mid] > k)
    return BS_by_recursion_optimized(arr, left, mid - 1, k);
  else return BS_by_recursion_optimized(arr, mid + 1, right, k);
};

const check = BS_by_recursion_optimized([1, 2, 3, 4, 5, 6], 0, 5, 1);
console.log(check);
