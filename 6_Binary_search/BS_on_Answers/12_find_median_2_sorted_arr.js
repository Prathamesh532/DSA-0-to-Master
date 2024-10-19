let arr1 = [2, 4, 6];
let arr2 = [1, 3];

// brute force
const findMedian = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let i = 0;
  let j = 0;

  let temp = [];

  while (i < n1 && j < n2) {
    if (arr1[i] <= arr2[j]) {
      temp.push(arr1[i]);
      i++;
    } else {
      temp.push(arr2[j]);
      j++;
    }
  }

  while (i < n1) {
    temp.push(arr1[i]);
    i++;
  }

  while (j < n1) {
    temp.push(arr2[j]);
    j++;
  }

  let n = n1 + n2;

  if (n % 2 == 1) {
    return temp[Math.floor(n / 2)];
  } else {
    return (temp[n / 2] + temp[n / 2 - 1]) / 2;
  }
};
console.log("Brute Solution", findMedian(arr1, arr2));

//better solution
const findMedian_better = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;

  let i = 0;
  let j = 0;

  let n = n1 + n2;

  let index1 = Math.floor(n / 2);
  let index2 = index1 - 1;

  let ele1 = -1;
  let ele2 = -1;

  let cnt = 0;

  while (i < n1 && j < n2) {
    if (arr1[i] < arr2[j]) {
      if (cnt == index1) ele1 = arr1[i];
      if (cnt == index2) ele2 = arr1[i];
      cnt++;
      i++;
    } else {
      if (cnt == index1) ele1 = arr2[i];
      if (cnt == index2) ele2 = arr2[i];
      cnt++;
      j++;
    }
  }

  while (i < n1) {
    if (cnt == index1) ele1 = arr1[i];
    if (cnt == index2) ele2 = arr1[i];
    cnt++;
    i++;
  }

  while (j < n2) {
    if (cnt == index1) ele1 = arr2[i];
    if (cnt == index2) ele2 = arr2[i];
    cnt++;
    j++;
  }

  if (n % 2 == 1) return ele1;
  else return (ele1 + ele2) / 2;
};
console.log("better Solution", findMedian_better(arr1, arr2));

// using binary search
const findMedian_usingBS = (arr1, arr2) => {
    
};
