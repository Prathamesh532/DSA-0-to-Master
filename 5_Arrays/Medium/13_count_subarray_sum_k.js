let arr = [1, -1, 0];

// brute force ---> O(N^3)
function bruteSol(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += arr[k];
      }
      if (sum == target) count++;
    }
  }
  return count;
}

let bruteAns = bruteSol(arr, 0);
console.log("brute ans", bruteAns);

// better solution ---> O(N^2)
function betterSol(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    for (let j = i; j < arr.length; j++) {
      sum += arr[j];
      if (sum == target) count++;
    }
  }
  return count;
}

let betterAns = betterSol(arr, 0);
console.log("better ans", betterAns);

// optima  solution ---> preFix sum hash map ---->
function optimalSum(arr, target) {
  let map = new Map();
  let sum = 0;
  let count = 0;

  // THIS IS IMPORTANT -------> ***
  map.set(0, 1);
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    // if (sum == target) count++;
    let rem = sum - target;
    if (map.has(rem)) count += map.get(rem);
    map.set(sum, (map.get(sum) || 0) + 1);
  }

  console.log(map);
  return count;
}

let optimalAns = optimalSum(arr, 0);
console.log("optimal ans", optimalAns);
