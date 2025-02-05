const characterReplacement = (str, k) => {
    let maxLen = 0

    for (let i = 0; i < str.length; i++) {
        let hashArr = new Array(26).fill(0)
        let maxFreq = 0

        for (let j = i; j < str.length; j++) {
            hashArr[str.charCodeAt(j) - "A".charCodeAt(0)]++
            maxFreq = Math.max(maxFreq, hashArr[str.charCodeAt(j) - "A".charCodeAt(0)])
            const replacements = (j - i + 1) - maxFreq
            if (replacements <= k) {
                maxLen = Math.max(maxLen, j - i + 1)
            }
        }
    }

    return maxLen
}

// using 2 pointer
const characterReplacement_ = (str, k) => {
    let maxLen = 0

    let left = 0
    let right = 0

    const hashArr = new Array(26).fill(0)
    let maxFreq = 0

    while (right < str.length) {
        let charCode = str.charCodeAt(right) - "A".charCodeAt(0)

        hashArr[charCode]++

        maxFreq = Math.max(maxFreq, hashArr[charCode])

        let replacements = (right - left + 1) - maxFreq

        if (replacements > k) {
            let leftCharCode = str.charCodeAt(left) - "A".charCodeAt(0)
            hashArr[leftCharCode]--
            left++
        }

        if (replacements <= k) maxLen = Math.max(maxLen, right - left + 1)

        right++
    }

    console.log("maxFreq", maxFreq);
    console.log(hashArr);

    return maxLen
}

let str = "AABABBA"
const check = characterReplacement_(str, 1)
console.log(check);


