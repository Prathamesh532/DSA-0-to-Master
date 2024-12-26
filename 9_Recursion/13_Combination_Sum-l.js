function combinationSum(arr, index, target, output, ans) {
    // base case
    if (index == arr.length) {
        if (target == 0) {
            ans.push([...output])
        }
        return
    }

    // excludes call
    combinationSum(arr, index + 1, target, output, ans)

    // includes call
    if (arr[index] <= target) {
        output.push(arr[index])
        combinationSum(arr, index, target - arr[index], output, ans)
        output.pop()
    }

}

const main = (arr, target) => {
    let ans = []
    let output = []
    combinationSum(arr, 0, target, output, ans)
    return ans
}

const check = main([2, 3, 6, 7], 7)
console.log(check);
