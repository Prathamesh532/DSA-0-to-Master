let arr = [2, 2, 1, 1, 1, 1];

// brute force --> T.C == O(N^2)
let ans = -1;
for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] == arr[i]) {
      count++;
    }
  }
  if (count > Math.floor(arr.length / 2)) {
    ans = arr[i];
  }
}
console.log(ans);

//better solution ---> T.C == O(N) + O(N log M) , S.C == O(N)
{
  let hashMap = new Map();
  arr.forEach((key) => {
    if (hashMap.has(key)) {
      hashMap.set(key, hashMap.get(key) + 1);
    } else {
      hashMap.set(key, 1);
    }
  });
  for (let [key, value] in hashMap) {
    if (value > Math.floor(arr.length / 2)) {
      return key;
    }
  }
  // console.log("hashMap", hashMap);
}

// optimal ---> Moore’s Voting Algorithm

const mooresVotingAlgo = (arr) => {
  let ele;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (count == 0) {
      ele = arr[i];
      count = 1;
    } else if (ele == arr[i]) {
      count++;
    } else count--;
  }

  // can skip where majority of element is confrimed
  count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele) count++;
  }
  if (count > Math.floor(arr.length / 2)) return ele;
  return -1;
};

let optAns = mooresVotingAlgo(arr);
console.log("optAns", optAns);
