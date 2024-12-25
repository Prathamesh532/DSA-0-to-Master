const subset_withduplicate = (arr, index, output, ans) => {
    ans.push([...output])
    for (let i = index; i < arr.length; i++) {
        // duplicate condition
        if (index !== i && arr[i] == arr[i - 1]) continue
        output.push(arr[i])
        subset_withduplicate(arr, i + 1, output, ans)
        output.pop()
    }
}

const subset = (arr) => {
    let ans = []
    let output = []
    subset_withduplicate(arr, 0, output, ans)
    return ans
}

const check = subset([1, 2, 2])
console.log(check);
