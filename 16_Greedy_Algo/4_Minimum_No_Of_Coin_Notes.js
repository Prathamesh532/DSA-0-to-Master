/**
 * Problem Statement:
 * -------------------
 * Given an amount N, determine the minimum number of coins/notes required
 * to make that amount using the available denominations.
 *
 * Available denominations: [1, 2, 5, 10, 20, 50, 100, 500, 1000]
 *
 * Example:
 * Input: N = 49
 * Output: 6  (using 20 + 20 + 5 + 2 + 2)
 *
 * Intuition:
 * ----------
 * To minimize the number of coins/notes, always use the largest denomination
 * possible at each step (Greedy Approach). Subtract that denomination from
 * the amount and repeat until the amount becomes 0.
 *
 * Time Complexity: O(n) → traversing denominations array once
 * Space Complexity: O(1) → only using a few variables
 */

function minimumNumberOfCoinNotes(N) {
    // List of available currency denominations sorted in ascending order
    const currency = [1, 2, 5, 10, 20, 50, 100, 500, 1000];

    // to count minimum coins/notes required
    let totalCoinNotes = 0;

    // start from largest denomination
    let currencyIndex = currency.length - 1;

    // Loop until the amount N becomes 0
    while (N > 0) {
        if (N >= currency[currencyIndex]) {
            // Use this denomination
            totalCoinNotes++;

            // reduce amount by this denomination
            N -= currency[currencyIndex];
        } else {
            // Move to next smaller denomination
            currencyIndex--;
        }
    }

    return totalCoinNotes;
}

// Example usage
const amount = 121;
let check = minimumNumberOfCoinNotes(amount);
console.log("Minimum number of coins/notes:", check); 
