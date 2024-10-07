const printName = (i, n) => {
    if (i > n) return
    console.log("pk");
    printName(i + 1, n)
}

// printName(1, 5)

const printNameWithOneParams = (n) => {
    if (n == 0) return
    console.log("pk");
    printNameWithOneParams(n - 1)
}

printNameWithOneParams(3)
