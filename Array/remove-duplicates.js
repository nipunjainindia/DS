/**
 * Removes duplicates from sorted array such that each element appears at most twice.
 * Modifies the array in-place and returns the new length.
 * LeetCode Problem: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 *
 * Approach:
 * - Use two pointers: one for iterating (itr), one for placing valid elements (index).
 * - Use a counter (ct) to track occurrences of the current number.
 * - Only allow up to two occurrences of each number.
 *
 * @param {number[]} nums - The sorted input array.
 * @return {number} The length of the array after removing extra duplicates.
 */
var removeDuplicates = function(nums) {
    var len = nums.length;

    // If array has 2 or fewer elements, all are allowed
    if (len <= 2) return len;

    var index = 1; // Position to place the next valid element
    var ct = 1;    // Counter for occurrences of current number

    // Start from the second element and process each number
    for (var itr = 1; itr < len ; itr++) {
        if (nums[itr] == nums[itr - 1]) {
            // Same as previous, increment count
            ct++;

            if (ct <= 2) {
                // Allow up to 2 occurrences
                nums[index] = nums[itr];
                index++;
            }
        } else {
            // New number encountered, reset count
            ct = 1;
            nums[index] = nums[itr];
            index++;
        }
    }

    // index is the new length of the array with at most two duplicates
    return index;
};
