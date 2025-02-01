const maxConsecutiveOne = (arr, k) => {
    // brute 
    let maxLen = 0

    for (let i = 0; i < arr.length; i++) {
        let count0 = 0
        for (let j = i; j < arr.length; j++) {
            if (arr[j] == 0) {
                count0 = count0 + 1
            }
            if (count0 <= k) maxLen = Math.max(maxLen, j - i + 1)
        }
    }

    return maxLen
}

const maxConsecutiveOne_2pointer = (arr, k) => {
    let maxLen = 0
    let left = 0
    let right = 0

    let count = 0

    while (right < arr.length) {
        if (arr[right] == 0) count++

        while (count > k) {
            if (arr[left] == 0) count--
            left++
        }

        if (count <= k) {
            maxLen = Math.max(maxLen, right - left + 1)
        }

        right++
    }

    return maxLen
}

const maxConsecutiveOne_2pointer_ = (arr, k) => {
    let maxLen = 0
    let left = 0
    let right = 0

    let count = 0

    while (right < arr.length) {
        if (arr[right] == 0) count++

        if (count > k) {
            if (arr[left] == 0) count--
            left++
        }

        if (count <= k) maxLen = Math.max(maxLen, right - left + 1)

        right++
    }

    return maxLen
}

let arr = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0]
const check = maxConsecutiveOne_2pointer_(arr, 2)
console.log(check);
