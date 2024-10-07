let arr = [1, 2, -4, -5];

// brute force ---> O(N + N/2) , S.C = O(N)
function alternativePosNeg(arr) {
  let posTemp = [];
  let negTemp = [];
  let ans = [];
  let n = arr.length;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      negTemp.push(arr[i]);
    }
    if (arr[i] > 0) {
      posTemp.push(arr[i]);
    }
  }

  for (let i = 0; i < n / 2; i++) {
    arr[i * 2] = posTemp[i];
    arr[i * 2 + 1] = negTemp[i];
  }
  console.log(ans);
}

alternativePosNeg(arr);
console.log(arr);

// optimal force ---> O(N) , S.C = O(N)
function OptimalAlternativePosNeg(arr) {
  let n = arr.length;
  let ans = new Array(n).fill(0);

  let posIndex = 0,
    negIndex = 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      ans[negIndex] = arr[i];
      negIndex += 2;
    }
    if (arr[i] > 0) {
      ans[posIndex] = arr[i];
      posIndex += 2;
    }
  }

  console.log(ans);
}
OptimalAlternativePosNeg(arr);

// if there is un even +ve and -ve element
// T.C == O(2N) , S.C == O(N)
const unevenAlternative = (arr) => {
  let posTemp = [];
  let negTemp = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) posTemp.push(arr[i]);
    else negTemp.push(arr[i]);
  }

  if (posTemp.length > negTemp.length) {
    for (let i = 0; i < negTemp.length; i++) {
      arr[i * 2] = posTemp[i];
      arr[i * 2 + 1] = negTemp[i];
    }
    let index = negTemp.length * 2;
    for (let i = negTemp.length; i < posTemp.length; i++) {
      arr[index] = posTemp[i];
      index++;
    }
  } else {
    for (let i = 0; i < posTemp.length; i++) {
      arr[i * 2] = posTemp[i];
      arr[i * 2 + 1] = negTemp[i];
    }
    let index = posTemp.length * 2;
    for (let i = posTemp.length; i < negTemp.length; i++) {
      arr[index] = negTemp[i];
      index++;
    }
  }
  console.log(arr);
};

let ans = unevenAlternative([1, 2, -4, -5, 3, 4, -2, -12, -23, -23, -2334, -3]);
