// using set data structure
function combinationSum(arr, index, target, output, ans) {
    // base case
    if (index == arr.length) {
        if (target == 0) ans.push([...output])
        return
    }

    // excludes
    combinationSum(arr, index + 1, target, output, ans)

    // includes 
    if (arr[index] <= target) {
        output.push(arr[index])
        combinationSum(arr, index + 1, target - arr[index], output, ans)
        output.pop()
    }
}

// better apporach
function combinationSum_v2(arr, index, target, output, ans) {
    // base case
    if (target == 0) {
        ans.push([...output])
        return
    }

    for (let i = index; i < arr.length; i++) {
        if (arr[i] > target) break
        if (i > index && arr[i] == arr[i - 1]) continue
        output.push(arr[i])
        combinationSum_v2(arr, i + 1, target - arr[i], output, ans)
        output.pop()
    }
}

const main = (arr, target) => {
    let ans = []
    let output = []
    arr.sort((a, b) => a - b)
    /* for set using logic */
    // combinationSum(arr, 0, target, output, ans)
    // let set = new Set(ans.map(el => JSON.stringify(el)))
    // return [...set].map(str => JSON.parse(str))

    /* better */
    combinationSum_v2(arr, 0, target, output, ans)
    return ans
}

const check = main([10, 1, 2, 7, 6, 1, 5], 8)
console.log(check);
