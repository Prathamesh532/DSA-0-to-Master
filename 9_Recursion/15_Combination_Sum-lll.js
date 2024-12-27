
const combinationSum = (start, end, k, target, output, ans) => {
    if (target == 0 && output.length == k) {
        ans.push([...output])
        return
    }

    for (let i = start; i <= end; i++) {
        output.push(i)
        combinationSum(i + 1, end, k, target - i, output, ans)
        output.pop()

    }
}

const main = (k, n) => {
    let ans = []
    let output = []
    combinationSum(1, 9, k, n, output, ans)
    return ans
}

const check = main(3, 7)
console.log(check);
