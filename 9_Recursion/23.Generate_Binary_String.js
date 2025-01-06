const generateAllBinaryString = (k) => {
    // If k is less than or equal to 0, no strings can be generated.
    if (k <= 0) return;

    // Result array to store the generated strings.
    let result = [];

    // Temporary array to hold the current binary string being constructed.
    let str = new Array(k);

    // Start with the first character as "0" and solve for the rest of the string.
    str[0] = "0";
    solve(k, str, 1, result);

    // Start with the first character as "1" and solve for the rest of the string.
    str[0] = "1";
    solve(k, str, 1, result);

    // Print all the generated strings.
    console.log(result.join("\n"));
};


// Recursive helper function to construct binary strings.
function solve(k, str, n, result) {
    // Base case: If the current position `n` equals the string length `k`, store the string in the result.
    if (n == k) {
        result.push(str.join("")); // Join the array into a string and add it to the result.
        return;
    }

    // If the previous character is "1", the current character can only be "0".
    if (str[n - 1] == "1") {
        str[n] = "0"; // Set the current character to "0".
        solve(k, str, n + 1, result); // Recur for the next position.
    }

    // If the previous character is "0", the current character can be "0" or "1".
    if (str[n - 1] == "0") {
        // Set the current character to "0" and recur for the next position.
        str[n] = "0";
        solve(k, str, n + 1, result);

        // Set the current character to "1" and recur for the next position.
        str[n] = "1";
        solve(k, str, n + 1, result);
    }
}

// Example usage:
let K = 3; // Length of the binary strings to generate.
generateAllBinaryString(K);
