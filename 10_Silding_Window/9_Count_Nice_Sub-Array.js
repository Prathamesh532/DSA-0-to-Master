const numberOfSubarrays = (arr, k) => {
    let cnt = 0

    for (let i = 0; i < arr.length; i++) {
        let len = 0
        for (let j = i; j < arr.length; j++) {
            if (arr[j] % 2 !== 0) len++
            if (len == k) {
                cnt++
            }
        }
    }

    return cnt
}

const numberOfSubarrays_ = (arr, k) => {
    if (k < 0) return 0

    let cnt = 0
    let r = 0
    let l = 0

    let sum = 0

    while (r < arr.length) {
        sum += arr[r] % 2

        while (sum > k) {
            sum -= arr[l] % 2
            l++
        }

        if (sum <= k) cnt = cnt + (r - l + 1)

        r++
    }

    return cnt
}


let arr = [2, 2, 2, 1, 2, 2, 1, 2, 2, 2]
const check = numberOfSubarrays_(arr, 2) - numberOfSubarrays_(arr, 1)
console.log(check);
