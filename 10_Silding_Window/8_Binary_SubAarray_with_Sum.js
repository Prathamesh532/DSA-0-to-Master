const numSubarraysWithSum = (arr, k) => {
    let count = 0

    for (let i = 0; i < arr.length; i++) {
        let sum = 0
        for (let j = i; j < arr.length; j++) {
            sum += arr[j]
            if (sum == k) count++
        }
    }

    return count
}

// using prefix ---> Time complexity = O(N) and Space complexity = O(N)
const numSubarraysWithSum_ = (arr, k) => {
    let cnt = 0
    let map = new Map()
    let sum = 0

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]

        if (sum == k) cnt++

        let rem = sum - k

        if (map.has(rem)) {
            cnt += map.get(rem)
        }

        map.set(sum, (map.get(sum) || 0) + 1)
    }

    return cnt
}

// using sliding window
const numSubarraysWithSum_2pointer = (arr, k) => {
    if (k < 0) return 0

    let count = 0
    let left = 0
    let sum = 0

    for (let right = 0; right < arr.length; right++) {
        sum += arr[right];

        while (sum > k) {
            sum -= arr[left];
            left++;
        }

        count += (right - left + 1);
    }

    return count
}

let arr = [1, 0, 1, 0, 1]
const check = numSubarraysWithSum_(arr, 2)
console.log(check);

// time optimal solution
let k = 2
const optimal = numSubarraysWithSum_2pointer(arr, k) - numSubarraysWithSum_2pointer(arr, k - 1)
console.log("Time Optimal: ", optimal);
