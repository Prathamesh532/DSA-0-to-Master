let arr = [1, 1, 2, 2, 3, 3];

// using set
const usingSet = (arr) => {
  let set = new Set(arr);
  let unique = Array.from(set);
  for (let i = 0; i < unique.length; i++) {
    unique[i] = arr[i];
  }
  console.log("set ", set);
};

// remove duplicates and place in order
const removeDuplicates = (arr) => {
  let j = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }
  for (let i = j + 1; i < arr.length; i++) {
    arr[i] = 0;
  }
};

removeDuplicates(arr);
// usingSet(arr);
console.log(arr);
