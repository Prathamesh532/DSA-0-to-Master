const permutationString = (str, index, ans) => {
  // base case
  if (index >= str.length) {
    ans.push(str); // deep copy
    return;
  }

  // rescursive relation
  for (let i = index; i < str.length; i++) {
    str = swap(str, index, i);
    permutationString(str, index + 1, ans);
    // for making str as it is ----> backtracking
    str = str = swap(str, index, i);
  }
};

const permutationString_array = (arr, index, ans) => {
  // base case
  if (index >= arr.length) {
    ans.push([...arr]); // deep copy
    return;
  }

  // rescursive relation
  for (let i = index; i < arr.length; i++) {
    swap_arr(arr, index, i);
    permutationString(arr, index + 1, ans);
    // for making str as it is ----> backtracking
    swap_arr(arr, index, i);
  }
};

function swap(str, i, j) {
  let arr = str.split("");
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}

function swap_arr(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function main(str) {
  let ans = [];
  permutationString(str, 0, ans);
  return ans;
}

const check = main("abc");
console.log(check);
