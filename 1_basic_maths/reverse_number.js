
function reverse(N) {
    let ans = 0
    while(N > 0){
        let d = N % 10
        ans = (ans * 10) + d
        N = N / 10
    }

    return ans
}

let N = 123456;
let ans = 0
while(N > 0){
    let d = N % 10
    ans = (ans * 10) + d
    N = Math.floor(N / 10)
}


console.log(ans)