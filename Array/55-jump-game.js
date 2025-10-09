/**
 * Determines if you can reach the last index starting from the first index.
 * LeetCode Problem: https://leetcode.com/problems/jump-game/
 *
 * Approach:
 * - Start from the end of the array and work backwards.
 * - Keep track of the "destination" index that needs to be reached.
 * - For each position, check if you can jump from there to the current destination.
 * - If yes, update the destination to the current position.
 * - If you can move the destination all the way to the start (index 0), return true.
 * - Otherwise, return false.
 *
 * @param {number[]} nums - Array where each element is the max jump length from that position.
 * @return {boolean} True if you can reach the last index, false otherwise.
 */
var canJump = function(nums) {
    var len = nums.length;

    // If array has 0 or 1 element, you are already at the end
    if (len <= 1) return true;

    var dest = len - 1; // The last index we need to reach
    // Traverse the array backwards
    for (var itr = len - 2; itr >= 0; itr--) {
        // If from current position, you can reach or go beyond the destination
        if (nums[itr] + itr >= dest) {
            dest = itr; // Update destination to current position
        }
    }

    // If we can move destination to the start, return true
    return dest == 0;
};