let arr1 = [1, 2];
let arr2 = [3, 4];

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
      if (cnt == index1) ele1 = arr2[j];
      if (cnt == index2) ele2 = arr2[j];
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
    if (cnt == index1) ele1 = arr2[j];
    if (cnt == index2) ele2 = arr2[j];
    cnt++;
    j++;
  }

  if (n % 2 == 1) return ele1;
  else return (ele1 + ele2) / 2;
};
console.log("better Solution", findMedian_better(arr1, arr2));

// using binary search
const findMedian_usingBS = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;
  if (n1 > n2) return findMedian_usingBS(arr2, arr1);

  let n = n1 + n2;
  let left = Math.floor((n1 + n2 + 1) / 2);

  let low = 0;
  let high = n1;

  while (low <= high) {
    let mid1 = Math.floor((low + high) / 2);
    let mid2 = left - mid1;
    let l1 = Number.MIN_SAFE_INTEGER;
    let l2 = Number.MIN_SAFE_INTEGER;
    let r1 = Number.MAX_SAFE_INTEGER;
    let r2 = Number.MAX_SAFE_INTEGER;

    if (mid1 < n1) r1 = arr1[mid1];
    if (mid2 < n2) r2 = arr2[mid2];
    if (mid1 - 1 >= 0) l1 = arr1[mid1 - 1];
    if (mid2 - 1 >= 0) l2 = arr2[mid2 - 1];
    if (l1 <= r2 && l2 <= r1) {
      if (n % 2 == 1) return Math.max(l1, l2);
      else return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
    } else if (l1 > r2) high = mid1 - 1;
    else low = mid1 + 1;
  }
  return -1;
};
console.log("optimal Solution using BS", findMedian_usingBS(arr1, arr2));
