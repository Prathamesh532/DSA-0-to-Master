let arr = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3,
];

// my solution ---> ~= O(N^2)
function bruteSolution(arr) {
  let ansEle = [];
  for (let i = 0; i < arr.length; i++) {
    if (ansEle.length == 0 || ansEle[ansEle.length - 1] != arr[i]) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
          count++;
        }
      }
      if (count > Math.floor(arr.length / 3)) {
        ansEle.push(arr[i]);
      }
    }
    if (ansEle.length == 2) break; // important ********
  }
  return ansEle;
}

let bruteAns = bruteSolution([11, 33, 33, 11, 33, 11]);
console.log("brute Ans: ", bruteAns);

// better --using hashing  ---> in js O(N) , in other O(N log N)
function usingHashing(arr) {
  let map = new Map();

  // iterted in map --> in js is O(n) in general -->O(N log N)
  arr.forEach((x) => {
    if (map.has(x)) {
      map.set(x, (map.get(x) || 0) + 1);
    } else {
      map.set(x, 1);
    }
  });

  // finding the ele > n /3  --> O(N)
  let ans = [];
  for (let [key, value] of map) {
    if (value > Math.floor(arr.length / 3)) {
      ans.push(key);
    }
  }
  console.log(map);
  return ans;
}
let betterAns = usingHashing([11, 33, 33, 11, 33, 11]);
console.log("better Ans: ", betterAns);

// optimal -- moore's votting algo
function optimalSolution(arr) {
  let cnt1 = 0,
    cnt2 = 0;
  let ele1, ele2;

  for (let i = 0; i < arr.length; i++) {
    if (cnt1 == 0 && arr[i] != ele2) {
      cnt1 = 1;
      ele1 = arr[i];
    } else if (cnt2 == 0 && arr[i] != ele1) {
      cnt2 = 1;
      ele2 = arr[i];
    } else if (ele1 == arr[i]) cnt1++;
    else if (ele2 == arr[i]) cnt2++;
    else cnt1--, cnt2--;
  }

  console.log("ele1", ele1);
  console.log("ele2", ele2);
  console.log("cnt1", cnt1);
  console.log("cnt2", cnt2);

  // checking both ele1 and ele2 are the > n/3
  (cnt1 = 0), (cnt2 = 0);
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ele1) cnt1++;
    if (arr[i] == ele2) cnt2++;
  }
  if (cnt1 > Math.floor(arr.length / 3)) ans.push(ele1);
  if (cnt2 > Math.floor(arr.length / 3)) ans.push(ele2);
  return ans;
}

let optimalAns = optimalSolution(arr);
console.log("optima ans: ", optimalAns);
