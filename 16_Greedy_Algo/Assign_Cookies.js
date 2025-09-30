/**
 * Problem: Assign Cookies
 * 
 * You are given two integer arrays:
 *   - children[] where children[i] is the "greed factor" of the i-th child.
 *   - cookies[] where cookies[j] is the size of the j-th cookie.
 * 
 * A child i is satisfied if there exists a cookie j with cookies[j] >= children[i].
 * Each cookie can be assigned to at most one child.
 * 
 * Goal: Maximize the number of satisfied children.
 * 
 * Example:
 *   Input: children = [1,2,3], cookies = [1,1]
 *   Output: 1
 *   Explanation: Only one child can be satisfied.
 */


/**
 * Brute Force Approach
 * 
 * Intuition:
 * - For each child, check if there is any available cookie that can satisfy them.
 * - Mark the cookie as used once assigned.
 * - Continue until all children are checked.
 * 
 * Time Complexity: O(n * m), where n = children.length, m = cookies.length  
 *   - For each child, we potentially scan all cookies.
 * Space Complexity: O(m)  
 *   - We maintain an array to track used cookies.
 */
function findContentChildren(children, cookies) {
    let childrenStatify = 0;

    let usedCookies = new Array(cookies.length).fill(false);

    for (let i = 0; i < children.length; i++) {
        for (let j = 0; j < cookies.length; j++) {
            if (!usedCookies[j] && cookies[j] >= children[i]) {
                usedCookies[j] = true;
                childrenStatify++;
                break;
            }
        }
    }

    return childrenStatify;
}


/**
 * Optimized Greedy Approach
 * 
 * Intuition:
 * - Sort both arrays (children and cookies).
 * - Use two pointers: one for children, one for cookies.
 * - If the current cookie can satisfy the current child, assign it and move to the next child.
 * - Otherwise, try the next larger cookie.
 * 
 * Time Complexity: O(n log n + m log m), due to sorting.  
 * Space Complexity: O(1), no extra space apart from variables.
 */
function findContentChildren_(children, cookies) {
    children.sort((a, b) => a - b);
    cookies.sort((a, b) => a - b);

    let childrenIdx = 0;
    let cookiesIdx = 0;

    while (childrenIdx < children.length && cookiesIdx < cookies.length) {
        if (cookies[cookiesIdx] >= children[childrenIdx]) {
            childrenIdx++;
        }
        cookiesIdx++;
    }

    return childrenIdx;
}


// Example usage
const children = [1, 2, 3];
const cookies = [1, 1];
let check1 = findContentChildren(children, cookies);
let check2 = findContentChildren_(children, cookies);

console.log("Brute Force Result:", check1);
console.log("Greedy Result:", check2);
