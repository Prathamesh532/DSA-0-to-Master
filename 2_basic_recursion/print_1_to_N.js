
const print_1toN = (i, N) => {
    if (i > N) return
    console.log(i);
    print_1toN(i + 1, N)
}

// print_1toN(1, 5)

const print_1toN_WithOneParams = (n) => {

}

// using backtracking 
const print_1toN_backtracking = (i, n) => {
    if (i < 1) return
    print_1toN_backtracking(i - 1, n)
    console.log(i);
}

print_1toN_backtracking(3, 3)