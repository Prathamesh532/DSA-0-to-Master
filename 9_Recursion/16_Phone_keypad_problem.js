function letterCombination(digits, index, output, ans, mapping) {
    // base case
    if (index >= digits.length) {
        ans.push(output.join(''))
        return
    }

    let number = digits[index]
    let mappedLetters = mapping[number]

    for (let i = 0; i < mappedLetters.length; i++) {
        output.push(mappedLetters[i])
        letterCombination(digits, index + 1, output, ans, mapping)
        output.pop()
    }
}

const main = (digits) => {
    let ans = []
    let output = []
    const mapping = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    letterCombination(digits, 0, output, ans, mapping)
    return ans
}

const check = main("23")
console.log(check);
