const solve = (arr, index, output, ans) => {
  // base case
  if (index >= arr.length) {
    ans.push([...output]);
    return;
  }

  // excludes
  solve(arr, index + 1, output, ans);

  // includes
  let element = arr[index];
  output.push(element);
  solve(arr, index + 1, output, ans);

  output.pop();
};

const subset = (arr) => {
  let ans = [];
  let index = 0;
  let output = [];
  solve(arr, index, output, ans);
  return ans;
};

const arr = [1, 2, 3];
const check = subset(arr);
console.log(check);
