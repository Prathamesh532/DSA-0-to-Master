/*

Given a array gas of integers representing the gas station distances. 
You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from station i to its next station (i+1). 
You begin the journey with an empty tank at one of the gas stations.
Return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1.

Example 1:
Input: gas = [1,2,3,4,5], cost = [3,4,5,1,2]
Output: 3
Explanation:
Start at station 3 (index 3) and fill up with 4 unit of gas. Your tank = 0 + 4 = 4
Travel to station 4. Your tank = 4 - 1 + 5 = 8
Travel to station 0. Your tank = 8 - 3 + 1 = 1
Travel to station 1. Your tank = 1 - 3 + 2 = 2
Travel to station 2. Your tank = 2 - 3 + 3 = 3
You cannot travel back to station 3, as it's already full.
Therefore, you start at station 3.

*/

/*
Brute Force:
Time Complexity: O(N^2)
Space Complexity: O(1)
*/
function circularTour(petrol, distance) {
  const n = petrol.length;

  // Try starting from every petrol pump
  for (let start = 0; start < n; start++) {
    let tank = 0;
    let count = 0;
    let i = start;

    // Try to complete the full circle
    while (count < n) {
      tank += petrol[i] - distance[i];

      // If tank goes negative, break
      if (tank < 0) break;

      // Move to the next pump in circular manner
      i = (i + 1) % n;
      count++;
    }

    // If we completed all N stations, return the starting index
    if (count === n && tank >= 0) {
      return start;
    }
  }

  return -1; // No valid starting point found
}

/*
Optimal:
Time Complexity: O(N)
Space Complexity: O(1)
*/
function circularTour_(petrol, distance) {
  let depecity = 0; // Tracks total fuel shortage (deficit)
  let balance = 0; // Tracks current fuel in tank while traversing
  let start = 0; // Potential starting index

  for (let i = 0; i < petrol.length; i++) {
    // Update current fuel balance
    balance += petrol[i] - distance[i];

    // If balance goes negative, this segment can't be part of the tour
    if (balance < 0) {
      depecity += balance; // Add the deficit to total
      start = i + 1; // Try next index as starting point
      balance = 0; // Reset current balance
    }
  }

  // After full loop, check if total petrol >= total distance
  // (i.e., can we cover the deficit?)
  if (depecity + balance >= 0) return start;

  return -1; // No solution possible
}

const gas = [1, 2, 3, 4, 5];
const distance = [3, 4, 5, 1, 2];
console.log(circularTour(gas, distance)); // Output: 3
console.log(circularTour_(gas, distance)); // Output: 3

// const gas2 = [2, 3, 4];
// const distance2 = [3, 4, 3];
// console.log(circularTour_(gas2, distance2)); // Output: -1
