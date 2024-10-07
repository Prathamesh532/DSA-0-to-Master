
const cube = (n) => {
    return n*n*n;
}

const isArmStrong = (n) => {
    let actual = n;
    let toStr = n.toString()
    let ans = 0;
    while(n>0){
        let digit = n % 10
        ans = ans + Math.pow(digit ,toStr.length)
        n = Math.floor(n / 10);
    }
    console.log("act" , actual);
    console.log("ans" , ans);
    
    if(ans == actual){
        return true
    }
    return false
} 

let a = isArmStrong(371)
console.log("a" , a);
