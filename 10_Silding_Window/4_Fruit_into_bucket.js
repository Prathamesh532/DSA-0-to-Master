const fruitIntoBusket_brute = (arr) => {
    let maxLen = 0

    for (let i = 0; i < arr.length; i++) {
        let set = new Set()
        for (let j = i; j < arr.length; j++) {
            set.add(arr[j])
            if (set.size <= 2) {
                maxLen = Math.max(maxLen, j - i + 1)
            } else {
                break
            }
        }
    }

    return maxLen
}

// using sliding window
const fruitIntoBusket_optimal = (arr) => {
    let left = 0
    let right = 0
    let maxLen = 0
    let map = new Map()

    while (right < arr.length) {
        map.set(arr[right], (map.get(arr[right]) || 0) + 1)

        // if the map has mpre than 2 diff elements
        if (map.size > 2) {
            map.set(arr[left], (map.get(arr[left]) || 0) - 1)
            if (map.get(arr[left]) == 0) {
                map.delete(arr[left])
            }
            left++
        }

        if (map.size <= 2) {
            maxLen = Math.max(maxLen, right - left + 1)
        }

        right++
    }

    return maxLen
}

const tree = [1, 0, 3, 4, 3]
const check = fruitIntoBusket_optimal(tree)
console.log(check);
