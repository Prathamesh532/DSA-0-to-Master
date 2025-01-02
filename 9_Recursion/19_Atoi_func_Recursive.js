const atoi = (str, index, result) => {
    // base case 
    // index is gone out of bound i.e lenght of str
    // char at str[index] smaller than 0 OR larger than 9 then its not a numeric value
    if (index >= str.length || str[index] < '0' || str[index] > '9') {
        return result
    }

    // take out the ASCII value and make a interger / mumeric value
    let digit = str[index].charCodeAt() - "0".charCodeAt()
    result = result * 10 + digit

    return atoi(str, index + 1, result)
}

const main = (str) => {
    let result = 0
    let index = 0
    let sign = 1

    const MAX_INT = 2 ** 31 - 1
    const MIN_INT = -(2 ** 31)

    // remove the whitespces 
    while (index < str.length && str[index] === " ") index++

    // check the sign -ve or +ve
    if (index < str.length && (str[index] === "-" || str[index] === "+")) {
        sign = str[index] === "-" ? -1 : 1
        index++
    }

    // recursive call
    result = atoi(str, index, result)

    if (sign * result > MAX_INT) return MAX_INT; // result cross the max 32 bit 
    if (sign * result < MIN_INT) return MIN_INT; // result cross the min 32 bit

    return result * sign
}

const check = main("4193 with words")
console.log(check);
