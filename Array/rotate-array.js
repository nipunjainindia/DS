/**
 * Rotates the array to the right by k steps, in-place.
 * LeetCode Problem: https://leetcode.com/problems/rotate-array/description/
 * 
 * The approach is to:
 * 1. Reverse the entire array.
 * 2. Reverse the first k elements.
 * 3. Reverse the remaining n-k elements.
 * This results in the array being rotated k steps to the right.
 * 
 * @param {number[]} nums - The array to rotate.
 * @param {number} k - Number of steps to rotate the array.
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    var len = nums.length;
    // If k is greater than array length, reduce it to within bounds
    while (k >= len) {
        k = k - len;
    }

    if (len == 0) return; // Edge case: empty array

    // Step 1: Reverse the entire array
    reverse(nums, 0, len - 1);
    // Step 2: Reverse the first k elements
    reverse(nums, 0, k - 1);
    // Step 3: Reverse the remaining elements
    reverse(nums, k, len - 1);
};

/**
 * Helper function to reverse elements in the array from start to end indices.
 * Swaps elements from both ends moving towards the center.
 * 
 * @param {number[]} nums - The array to reverse.
 * @param {number} start - Starting index.
 * @param {number} end - Ending index.
 */
var reverse = function(nums, start, end) {
    // Calculate the midpoint for swapping
    var loopUpto = (end - start) / 2 + start;

    // Swap elements from both ends towards the center
    for (var itr = start; itr <= loopUpto; itr++) {
        var right = end - itr + start;

        var temp = nums[itr];
        nums[itr] = nums[right];
        nums[right] = temp;
    }
}