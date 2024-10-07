let arr = [1, 0, 2, 3, 0, 4, 0, 1];

const moves_zeros = (arr) => {
  let j = 0;
  // find the 1st 0 in arr
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      j = i;
      break;
    }
  }
  //if there is no 0s returns
  if (j === -1) return arr;

  // start from the next index of j pointer and find the non zeroz and swap it
  for (let i = j + 1; i < arr.length; i++) {
    if (arr[i] != 0) {
      j++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
};

moves_zeros(arr);
console.log("arr", arr);
