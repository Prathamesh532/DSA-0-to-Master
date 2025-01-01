// Function to check if the current cell is safe to visit
const isSafe = (x, y, n, m, visited) => {
    // Check if the cell is within the grid boundaries
    // Check if the cell has not been visited
    // Check if the cell is not blocked (value must be 1)
    if ((x >= 0 && x <= n - 1) && (y >= 0 && y <= n - 1) && visited[x][y] == 0 && m[x][y] == 1) {
        return true;
    }
    return false;
};

// Recursive function to find all paths in the maze
const RatInMaze = (m, n, x, y, visited, path, ans) => {
    // Base case: if we reach the bottom-right corner, store the path and return
    if (x == n - 1 && y == n - 1) {
        ans.push(path.join("")); // Convert path array to a string and add to the result
        return;
    }

    // Mark the current cell as visited
    visited[x][y] = 1;

    // Try all possible moves: Down, Up, Left, Right

    // Move Down
    let newX = x + 1; // New row
    let newY = y;     // Same column
    if (isSafe(newX, newY, n, m, visited)) {
        path.push("D"); // Add 'D' to the path
        RatInMaze(m, n, newX, newY, visited, path, ans); // Recursive call
        path.pop(); // Backtrack and remove 'D' from the path
    }

    // Move Up
    newX = x - 1; // New row
    newY = y;     // Same column
    if (isSafe(newX, newY, n, m, visited)) {
        path.push("U"); // Add 'U' to the path
        RatInMaze(m, n, newX, newY, visited, path, ans); // Recursive call
        path.pop(); // Backtrack and remove 'U' from the path
    }

    // Move Left
    newX = x;     // Same row
    newY = y - 1; // New column
    if (isSafe(newX, newY, n, m, visited)) {
        path.push("L"); // Add 'L' to the path
        RatInMaze(m, n, newX, newY, visited, path, ans); // Recursive call
        path.pop(); // Backtrack and remove 'L' from the path
    }

    // Move Right
    newX = x;     // Same row
    newY = y + 1; // New column
    if (isSafe(newX, newY, n, m, visited)) {
        path.push("R"); // Add 'R' to the path
        RatInMaze(m, n, newX, newY, visited, path, ans); // Recursive call
        path.pop(); // Backtrack and remove 'R' from the path
    }

    // Unmark the current cell as visited (backtracking)
    visited[x][y] = 0;
};

// Main function to initialize variables and call the recursive function
const main = (n, m) => {
    let ans = []; // Array to store all possible paths
    const visited = new Array(n).fill(0).map(() => new Array(n).fill(0)); // Visited array initialized to 0
    let srcX = 0; // Starting row
    let srcY = 0; // Starting column
    let path = []; // Array to store the current path

    // Call the recursive function to explore paths
    RatInMaze(m, n, srcX, srcY, visited, path, ans);

    // Sort the paths in lexicographical order
    ans.sort();
    return ans; // Return the sorted paths
};

// Input matrix representing the maze
let matrix = [[1, 0, 0, 0], [1, 1, 0, 1], [1, 1, 0, 0], [0, 1, 1, 1]];

// Print the size of the matrix (optional)
console.log(matrix[0].length);

// Call the main function with the maze and its size
const check = main(4, matrix);

// Print all possible paths
console.log(check);


/*

    Time complexity --> O(4*(m*n)) ----- because we check the 4 directions
    Space complexity --> O(n*n)

*/