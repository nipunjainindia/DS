/**
 * LeetCode Problem: https://leetcode.com/problems/jump-game-ii/
 * Solution approach inspired by: https://www.youtube.com/watch?v=7SBVnw7GSTk
 *
 * Greedy approach:
 * - At each step, determine the farthest index you can reach in the current jump.
 * - Use two pointers (start, end) to represent the current range of indices you can reach with the current number of jumps.
 * - For each index in the current range, update the farthest index you can reach.
 * - When you finish the current range, increment the jump count and set the new range to the farthest index found.
 * - Repeat until you reach or pass the last index.
 *
 * @param {number[]} nums - Array where each element is the max jump length from that position.
 * @return {number} The minimum number of jumps to reach the last index.
 */
var jump = function(nums) {
    var len = nums.length;

    // If array has 0 or 1 element, no jumps needed
    if (len <= 1) return 0;

    var jumps = 0;      // Number of jumps made
    var start = 0;      // Start index of the current jump range
    var end = 0;        // End index of the current jump range

    // Continue until the end of the current range reaches or passes the last index
    while (end < len - 1) {
        var farthest = end; // Farthest index reachable in the next jump

        // For all indices in the current range, find the farthest reachable index
        for (var itr = start; itr <= end; itr++) {
            if (farthest < itr + nums[itr]) {
                farthest = itr + nums[itr];
            }
        }

        // Move to the next range
        start = end + 1;
        end = farthest;

        jumps++; // Increment jump count
    }
    
    return jumps;
};