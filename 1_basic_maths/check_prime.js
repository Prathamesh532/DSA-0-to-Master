

const isPrime = (n) => {
    let cnt = 0;
    for(let i = 1; i<= Math.sqrt(n); i++){ // optimal we traveser still sqrt of n
        if(n%i == 0){
            cnt = cnt + 1

            // optimal
            if(n/i != i) {
                cnt = cnt + 1
            }
        }
    }
    if(cnt == 2){
        return true
    }
    console.log("cnt" , cnt);
    return false
}


let a = isPrime(5);
console.log("a" , a);
