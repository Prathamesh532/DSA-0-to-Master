const numberOfSubstrings = (str) => {
    let ans = 0

    for (let i = 0; i < str.length; i++) {
        let map = new Map()
        for (let j = i; j < str.length; j++) {
            map.set(str[j], (map.get(str[j]) || 0) + 1)
            if (map.size === 3) {
                ans += str.length - j
                break
            }
        }
    }

    return ans
}

// using silding-window
const numberOfSubstrings_ = (str) => {
    let cnt = 0
    let freq = { "a": -1, "b": -1, "c": -1 }

    for (let i = 0; i < str.length; i++) {
        freq[str[i]] = i

        if (freq["a"] !== -1 && freq["b"] !== -1 && freq["c"] !== -1) {
            cnt = cnt + (1 + Math.min(freq["a"], freq["b"], freq["c"]))
        }
    }
    return cnt
}

const check = numberOfSubstrings_("abcabc")
console.log(check);
