const GenerateParenthese = (n, open, close, output, ans) => {
    // Base case
    if (open === n && close === open) {
        ans.push(output); // Add the current valid combination to ans
        return;
    }

    // Add an open parenthesis if possible
    if (open < n) {
        GenerateParenthese(n, open + 1, close, output + "(", ans); // Pass a new string
    }

    // Add a close parenthesis if possible
    if (close < open) {
        GenerateParenthese(n, open, close + 1, output + ")", ans); // Pass a new string
    }
};

const main = (n) => {
    let ans = [];
    GenerateParenthese(n, 0, 0, "", ans); // Initialize with empty output string
    return ans;
};

const check = main(2);
console.log(check);
