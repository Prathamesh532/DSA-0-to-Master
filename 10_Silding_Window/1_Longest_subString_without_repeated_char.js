const lengthOfLongestSubstring = (s) => {
    // brute force ------------->>
    // let ans = Number.MIN_SAFE_INTEGER
    // for (let left = 0; left < s.length; left++) {
    //     let set = new Set()
    //     for (let right = left; right < s.length; right++) {
    //         if (set.has(s[right])) {
    //             ans = Math.max(ans, right - left)
    //             break
    //         }
    //         set.add(s[right])
    //     }
    // }
    // return ans

    // optimal solution ------------>
    let left = 0
    let right = 0

    let n = s.length
    let ans = Number.MIN_SAFE_INTEGER

    let map = new Map()

    while (right < n) {

        if (map.has(s[right]) && map.get(s[right]) >= left) {
            left = map.get(s[right]) + 1
        }

        map.set(s[right], right)

        ans = Math.max(ans, right - left + 1)

        right++
    }

    return ans
}

const check = lengthOfLongestSubstring("bbbbb")
console.log(check);
