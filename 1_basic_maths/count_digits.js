
const countDigits = (n) => {
    let count = 0

    while (n > 0) {
        n % 10
        count += 1
        n = Math.floor(n / 10)
    }
    console.log("count", count);
    return count
}

Math.floor(Math.log10(532)) + 1; // this also give the count

let result = countDigits(532) // o/p => 3
console.log("result : ", result);

function evenCount(n) {

    let N = n.toString();
    let cnt = 0;

    for(i in N){
        if(i == 0) continue
        else if(n % i == 0) {
            cnt += 1;
        }
    }

    return cnt;
}

let result2 = evenCount(532) // o/p => 3
console.log("result2 : ", result2);
