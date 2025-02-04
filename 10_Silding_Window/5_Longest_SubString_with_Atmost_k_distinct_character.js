const longestSubstringKDistinct = (str, k) => {
    let maxLen = 0

    for (let i = 0; i < str.length; i++) {
        let map = new Map()
        for (let j = i; j < str.length; j++) {
            map.set(str[j], (map.get(str[j]) || 0) + 1)
            if (map.size <= k) maxLen = Math.max(maxLen, j - i + 1)
            else break
        }
    }

    return maxLen
}

// using sliding-window
const longestSubstringKDistinct_ = (str, k) => {
    let maxLen = 0
    let left = 0
    let right = 0

    let map = new Map()

    while (right < str.length) {
        map.set(str[right], (map.get(str[right]) || 0) + 1)

        if (map.size > k) {
            map.set(str[left], (map.get(str[left]) || 0) - 1)
            if (map.get(str[left]) === 0) map.delete(str[left])
            left++
        }

        if (map.size <= k) {
            maxLen = Math.max(maxLen, right - left + 1)
        }

        right++
    }

    return maxLen

}

const check = longestSubstringKDistinct_("aabacbebebe", 3)
console.log(check);
