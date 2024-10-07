let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 4, 5, 6];

// brute force --> use the set --> T.C == O(n + m)
let set = new Set();
for (let i of arr1) {
  set.add(i);
}
for (let i of arr2) {
  set.add(i);
}
// shorthand
let set2 = new Set([...arr1, ...arr2]);

console.log("set", set);

// 2 pointer apporach --> T.C == O(n1 + n2) , S.C == O(n)
const findUnion = (arr1, arr2) => {
  let n1 = arr1.length;
  let n2 = arr2.length;
  let pointer1 = 0;
  let pointer2 = 0;
  let union = [];

  while (pointer1 < n1 && pointer2 < n2) {
    if (arr1[pointer1] <= arr2[pointer2]) {
      if (union.length == 0 || union[union.length - 1] != arr1[pointer1]) {
        union.push(arr1[pointer1]);
      }
      pointer1++;
    } else {
      if (union.length == 0 || union[union.length - 1] != arr2[pointer2]) {
        union.push(arr2[pointer2]);
      }
      pointer2++;
    }
  }

  while (pointer1 < n1) {
    if (union.length == 0 || union[union.length - 1] != arr1[pointer1]) {
      union.push(arr1[pointer1]);
    }
    pointer1++;
  }
  while (pointer2 < n2) {
    if (union.length == 0 || union[union.length - 1] != arr2[pointer2]) {
      union.push(arr2[pointer2]);
    }
    pointer2++;
  }

  return union;
};

let unionArr = findUnion(arr1, arr2);
console.log("unionArr", unionArr);
