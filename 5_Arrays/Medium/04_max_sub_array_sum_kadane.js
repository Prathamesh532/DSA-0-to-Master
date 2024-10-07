let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// brute force --> T.C == o(n^3)
function brute_subArry_sum(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
}

// better soultion T.C == o(n^2)
function better_subArry_sum(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      max = Math.max(max, sum);
    }
  }
  return max;
}

let betterans = better_subArry_sum(arr);
console.log("betterans", betterans);

// optiaml kadane's algo --->
const kadanesAlgo = (arr) => {
  let max = -Infinity;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) max = sum;
    if (sum < 0) sum = 0;
  }
  return max;
};

const kadanesAlgoPrintSubArray = (arr) => {
  let max = -Infinity;
  let sum = 0;

  let start = 0;
  let ansStart = -1;
  let ansEnd = -1;

  for (let i = 0; i < arr.length; i++) {
    if (sum == 0) start = i;
    sum += arr[i];
    if (sum > max) {
      max = sum;
      ansStart = start;
      ansEnd = i;
    }
    if (sum < 0) sum = 0;
  }
  // PRINT SUB ARRAY OF MAX SUM
  let sub_array = [];
  for (let i = ansStart; i <= ansEnd; i++) sub_array.push(arr[i]);
  return { max, sub_array };
};

let optimalAns = kadanesAlgoPrintSubArray(arr);
console.log("optimalAns", optimalAns);
