



const checkPalindrome = (N) => {    
    let actual = N;
    let ans = 0
    while(N > 0){
        let d = N % 10
        ans = (ans * 10) + d
        N = Math.floor(N / 10)
    }
    return ans == actual ? true : false
}




let a = checkPalindrome(11)
console.log("is palindrome" , a);