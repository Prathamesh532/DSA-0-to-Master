let arr1 = [1, 4, 8, 10];
let arr2 = [2, 3, 9];

// 1 solution  ---> O(min(n,m)) + O(n log n) + O(m log n)
function optiaml1(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let left = n - 1;
  let right = 0;

  while (left >= 0 && right < m) {
    if (arr1[left] > arr2[right]) {
      [arr1[left], arr2[right]] = [arr2[right], arr1[left]];
      left--;
      right++;
    } else {
      break;
    }
  }
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
}

optiaml1(arr1, arr2);
console.log("Arr 1 :", arr1, "Arr 2", arr2);

// 2 solution ---> gap method , shell sort
