let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const col = matrix.length;
const row = matrix[0].length;

// its has one question

let left = 0,
  top = 0;
let right = row - 1,
  bottom = col - 1;

let sprialMatrix = [];

while (top <= bottom && left <= right) {
  // left ---->? right , where the row (top) is constant
  for (let i = left; i <= right; i++) {
    sprialMatrix.push(matrix[top][i]);
  }
  top++;

  // top ---> bottom , where the col (right) is constant
  for (let i = top; i <= bottom; i++) {
    sprialMatrix.push(matrix[i][right]);
  }
  right--;

  if (top <= bottom) {
    // right ---> left , where the row (bottom) is constant
    for (let i = right; i >= left; i--) {
      sprialMatrix.push(matrix[bottom][i]);
    }
    bottom--;
  }

  if (left <= right) {
    // bottom ---> top where the col is (left) is constant
    for (let i = bottom; i >= top; i--) {
      sprialMatrix.push(matrix[i][left]);
    }
    left++;
  }
}

console.log("sprialMatrix", sprialMatrix);
