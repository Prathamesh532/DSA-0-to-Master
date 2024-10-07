let arr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

const n = arr.length;
const m = arr[0].length;

//   // brute force ---> near about O(N^3)
//   // - iterated ini matrix find the o and mark the row and col to -1
//   // - iterated again and marked that -1 to 0
function bruteSetMatrix0(arr) {
  // o(m)
  function markRow(i) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] !== 0) arr[i][j] = -1;
    }
  }

  // O(n)
  function markCol(j) {
    for (let i = 0; i < n; i++) {
      if (arr[i][j] !== 0) arr[i][j] = -1;
    }
  }

  // O(n*m)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) {
        markRow(i);
        markCol(j);
      }
    }
  }

  // O(n*m)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == -1) {
        arr[i][j] = 0;
      }
    }
  }
  console.log("brute arr --->", arr);
}

// better solution ---> near O(2*N+M) ---> O(N^2) , S.C =O(n+m)
// - make the arrat of n and m size and makr them as we get the 0 in matrix
// - mark all 0 where one of the n or m is mark for that non zero element
function betterSetMatrix0(arr) {
  let row = new Array(n).fill(0);
  let col = new Array(m).fill(0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (row[i] || col[j]) {
        arr[i][j] = 0;
      }
    }
  }
  console.log("better arr -->", arr);
}

// optimal solution --->
// without taking the col and row array marking the col and row in place matrxi only
// taking the whole row but the col should be taking from 1 place ahead from its positions
// make the variable col ---> which points to the arr[0][0]
// we have to 1st mark the martix exculding / levaing the row nad col which we use for marking
// and for checking the first row and col we first check for col then row
function optimalSetMatrix0(arr) {
  let col = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (arr[i][j] == 0) {
        arr[i][0] = 0;
        if (j != 0) {
          arr[0][j] = 0;
        } else {
          col = 0;
        }
      }
    }
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (arr[i][j] != 0) {
        if (arr[i][0] == 0 || arr[0][j] == 0) {
          arr[i][j] = 0;
        }
      }
    }
  }

  if (arr[0][0] == 0) {
    for (let i = 0; i < m; i++) arr[0][i] = 0;
  }
  if (col == 0) {
    for (let i = 0; i < n; i++) arr[i][0] = 0;
  }

  console.log("optimal Array", arr);
}

console.log("Orginal Array", arr);
// bruteSetMatrix0(arr);
// betterSetMatrix0(arr);
optimalSetMatrix0(arr);
