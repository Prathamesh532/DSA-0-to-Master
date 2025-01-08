function solve(arr, index, target, sum) {
  // base case
  if (index === arr.length) {
    return sum === target ? 1 : 0;
  }

  let left = solve(arr, index + 1, target, sum + arr[index]);

  let right = solve(arr, index + 1, target, sum);

  return left + right;
}

const main = (arr, target) => {
  return solve(arr, 0, target, 0);
};

const check = main([1, 2, 3], 4);
console.log(check);
