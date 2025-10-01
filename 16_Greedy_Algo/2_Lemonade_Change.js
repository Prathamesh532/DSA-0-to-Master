/**
 * Problem Description:
 * You are running a lemonade stand where each lemonade costs $5.
 * Customers pay with either $5, $10, or $20 bills. 
 * You must provide exact change to each customer. 
 * Determine if you can serve all customers in order without running out of change.
 * 
 * Example:
 * Input: bills = [5,5,5,10,20]
 * Output: true
 * Explanation: You can give change for every customer.
 *
 * Input: bills = [5,5,10,10,20]
 * Output: false
 * Explanation: You cannot provide change for the last customer.
 */


/**
 * Intuition:
 * Keep track of the total money (or denominations) you have.
 * For each customer:
 * - If they pay $5, just add to your cash.
 * - If they pay $10, you must have at least one $5 to give as change.
 * - If they pay $20, you need $15 as change. Prefer giving $10 + $5 if possible, otherwise 3*$5.
 *
 * Time Complexity: O(n) - iterate through all bills once
 * Space Complexity: O(1) - only a few counters are used
 */
function lemonadeChange(bills) {
    let sum = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            sum += 5;
        } else if (bills[i] === 10) {
            let change = 5; // need one $5 back
            if (sum >= change) sum -= change;
            else return false;
            sum += 10; // add the $10 bill
        } else { // $20 bill
            let change = 15; // need $15 back
            if (sum >= change) sum -= change;
            else return false;
            sum += 20; // add the $20 bill
        }
    }

    return true;
}


/**
 * Intuition:
 * Instead of keeping a total sum, track individual denominations ($5, $10, $20)
 * - This allows giving exact change more efficiently, especially for $20 bills.
 *
 * Time Complexity: O(n) - iterate through all bills once
 * Space Complexity: O(1) - only three counters are used
 */
function lemonadeChange_(bills) {
    let five = 0;
    let ten = 0;
    let twenty = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            five++;
        } else if (bills[i] === 10) {
            ten++;
            if (five > 0) five--;
            else return false;
        } else { // $20 bill
            twenty++;
            // Prefer giving $10 + $5 as change
            if (ten > 0 && five > 0) {
                ten--;
                five--;
            } else if (five >= 3) {
                five -= 3;
            } else {
                return false;
            }
        }
    }

    return true;
}


// Test Cases
const testCases = [
    { bills: [5, 5, 5, 10, 20], expected: true },
    { bills: [5, 5, 10, 10, 20], expected: false },
    { bills: [5, 5, 5, 5, 10, 5, 10, 10, 10, 20], expected: false },
    { bills: [5, 10, 5, 10, 5, 20], expected: false },
    { bills: [5, 5, 5, 5, 5, 5, 10, 20, 20, 20], expected: false }
];

console.log("Using sum-based approach:");
testCases.forEach(({ bills, expected }, idx) => {
    console.log(`Test Case ${idx + 1}:`, lemonadeChange(bills) === expected ? "Passed" : "Failed");
});

console.log("\nUsing denomination-count approach:");
testCases.forEach(({ bills, expected }, idx) => {
    console.log(`Test Case ${idx + 1}:`, lemonadeChange_(bills) === expected ? "Passed" : "Failed");
});
