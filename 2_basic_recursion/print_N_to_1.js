
// my brute force 
const print_Nto1 = (n) => {
    if (n == 0) return
    let cnt = 1;
    console.log(n);
    print_Nto1(n - (n - (n - cnt)))
}

// print_Nto1(3)

const print_Nto1_ = (i, n) => {
    if (i < 1) return
    console.log(i);
    print_Nto1_(i - 1, n)
}

// print_Nto1_(3, 3)

// using backtracking
const print_Nto1_backtracking = (i, n) => {
    if (i > n) return
    print_Nto1_backtracking(i + 1, n)
    console.log(i);
}

print_Nto1_backtracking(1, 3)

// console.log(3 > 0);
