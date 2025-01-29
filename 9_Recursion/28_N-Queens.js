const addValues = (board, ans, n) => {
    let temp = []

    for (let i = 0; i < n; i++) {
        temp.push(board[i].join(""))
    }

    ans.push(temp)
}

const isSafe = (row, col, board, n) => {
    let x = row
    let y = col

    // for same row
    while (y >= 0) {
        if (board[x][y] == "Q") return false
        y--
    }


    // same diagonal
    x = row
    y = col
    while (x < n && y >= 0) {
        if (board[x][y] == "Q") return false
        y--
        x++
    }

    x = row
    y = col
    while (x >= 0 && y >= 0) {
        if (board[x][y] == "Q") return false
        y--
        x--
    }

    return true

}

const NQueen = (board, n, col, ans) => {
    // base case
    if (col == n) {
        // add all the value of board (matix) in ans
        addValues(board, ans, n)
        return
    } 

    // recursive relation
    for (let row = 0; row < n; row++) {
        if (isSafe(row, col, board, n)) {
            // place the queen
            board[row][col] = "Q"
            // call the recursive function
            NQueen(board, n, col + 1, ans)
            // backtrack it
            board[row][col] = "."
        }
    }
}

const main = (n) => {
    let ans = [] // which will return at the end
    let board = new Array(n).fill(".").map(() => new Array(n).fill(".")) // matrix for queen placements

    let column = 0 // we will place the queen in every possible column

    NQueen(board, n, column, ans)

    return ans
}

const check = main(4)
console.log(check);
