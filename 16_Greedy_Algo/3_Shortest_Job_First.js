/**
 * Problem Statement:
 * -------------------
 * Geek is a software engineer and is assigned the task of calculating
 * the average waiting time of all processes by following the
 * Shortest Job First (SJF) scheduling policy.
 *
 * Given an array of integers `jobs` where jobs[i] represents the burst time
 * of the i-th process, return the average waiting time rounded down to
 * the nearest integer.
 *
 * Assumptions:
 * - All processes arrive at time = 0
 * - Scheduling follows Non-Preemptive SJF (shortest job next)
 *
 * Example:
 * --------
 * Input: jobs = [4, 3, 7, 1]
 * Sorted jobs = [1, 3, 4, 7]
 * Waiting Times = [0, 1, 4, 8]
 * Average = (0 + 1 + 4 + 8) / 4 = 3.25 → 3
 *
 * Intuition:
 * ----------
 * In SJF, we minimize waiting time by always executing the shortest job first.
 * Since all processes arrive at the same time (0), we simply sort the burst
 * times and calculate cumulative waiting times.
 *
 * Time Complexity: O(n log n)  (due to sorting)
 * Space Complexity: O(1)       (in-place computation)
 */

function shortestJobFirst(jobs) {
    // Step 1: Sort jobs by burst time (shortest first)
    jobs.sort((a, b) => a - b);

    // total accumulated waiting time
    let waitingTime = 0;

    // keeps track of when the last process ended
    let processEndTime = 0;

    // Step 2: Calculate waiting time for each process
    for (let job of jobs) {
        // current job waits until previous jobs finish
        waitingTime += processEndTime;

        // update time after executing this job
        processEndTime += job;
    }

    // Step 3: Compute average waiting time (floor as per problem statement)
    let avgTime = Math.floor(waitingTime / jobs.length);

    return avgTime;
}

// Example usage
const jobs = [1, 2, 3, 4];
const waitTime = shortestJobFirst(jobs);
console.log("Average Waiting Time:", waitTime);
