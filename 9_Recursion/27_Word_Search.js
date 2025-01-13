const isFound = (x, y, board, visited) => {
  return (
    x >= 0 &&
    x < board.length &&
    y >= 0 &&
    y < board[0].length &&
    visited[x][y] === 0
  );
};

const wordSearch = (board, x, y, index, word) => {
  // Base case: if the current index matches the word's length, we found the word
  if (index === word.length) return true;

  // Check boundaries and if the cell matches the current word character
  if (
    x < 0 ||
    x >= board.length ||
    y < 0 ||
    y >= board[0].length ||
    board[x][y] !== word[index]
  ) {
    return false;
  }

  // Mark the cell as visited by temporarily changing its value
  const temp = board[x][y];
  board[x][y] = "#"; // Mark as visited

  // Explore all four directions: DOWN, UP, RIGHT, LEFT
  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (const [dx, dy] of directions) {
    if (wordSearch(board, x + dx, y + dy, index + 1, word)) {
      return true;
    }
  }

  // Backtrack: Restore the original value of the cell
  board[x][y] = temp;

  return false;
};

const main = (board, word) => {
  let m = board.length;
  let n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (wordSearch(board, i, j, 0, word)) return true;
    }
  }

  return false;
};

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const word = "SEE";

const check = main(board, word);
console.log(check);
