let arr = [-1, 0, 1, 2, -1, -4];

// brute force ----> T.C == O(N^3)  , S.C == O(N) + O(N)
function bruteForce(arr) {
  let n = arr.length;
  let ans = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] + arr[k] == 0) {
          let temp = [arr[i], arr[j], arr[k]];
          temp.sort((a, b) => a - b);
          ans.push(temp);
        }
      }
    }
  }
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

let bruteAns = bruteForce(arr);
console.log("brute force", bruteAns);

// better ----> O(N^2)
function usingHashing(arr) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    let map = new Map();
    for (let j = i + 1; j < arr.length; j++) {
      let k = -(arr[i] + arr[j]);
      if (map.has(k)) {
        let temp = [arr[i], arr[j], k];
        temp.sort((a, b) => a - b);
        ans.push(temp);
      }
      map.set(arr[j], 1);
    }
  }
  let set = new Set(ans.map(JSON.stringify));
  ans = Array.from(set).map(JSON.parse);
  return ans;
}

let betterAns = usingHashing(arr);
console.log("better", betterAns);

// optimal -- 2 pointer apporach ---->
function twoPointer(arr) {
  let ans = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i > 0 && arr[i] == arr[i - 1]) continue;
    let j = i + 1;
    let k = arr.length - 1;

    while (j < k) {
      let sum = arr[i] + arr[j] + arr[k];
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        let temp = [arr[i], arr[j], arr[k]];
        ans.push(temp);
        j++;
        k--;
        while (j < k && arr[j] == arr[j - 1]) j++; // important *****
        while (j < k && arr[k] == arr[k + 1]) k--; // important *****
      }
    }
  }
  return ans;
}

let optiamlAns = twoPointer(arr);
console.log("Optimal", optiamlAns);
