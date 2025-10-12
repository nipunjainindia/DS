/**
 * LeetCode Problem: https://leetcode.com/problems/product-of-array-except-self/
 * Solution approach inspired by: https://www.youtube.com/watch?v=bNvIQI2wAjk
 *
Approach (previous version with prefix and suffix arrays):
 * - Create two arrays: prefix and suffix.
 * - prefix[i] stores the product of all elements to the left of i.
 * - suffix[i] stores the product of all elements to the right of i.
 * - For each index i, the answer is prefix[i] * suffix[i].
 *
 * Example:
 * nums   = [1, 2, 3, 4]
 * prefix = [1, 1, 2, 6]    // prefix[0]=1 (no left), prefix[1]=1, prefix[2]=1*2=2, prefix[3]=1*2*3=6
 * suffix = [24, 12, 4, 1]  // suffix[3]=1 (no right), suffix[2]=4, suffix[1]=3*4=12, suffix[0]=2*3*4=24
 * result = [24, 12, 8, 6]  // result[i] = prefix[i] * suffix[i]
 *
 * This approach uses O(n) extra space for prefix and suffix arrays.
 * 
 * Approach2:
 * - The goal is to return an array where each element at index i is the product of all elements in nums except nums[i].
 * - Do not use division and achieve O(n) time and O(1) extra space (output array does not count as extra space).
 * - First, build a prefix product for each index (product of all elements to the left of i).
 * - Then, traverse from the end to multiply each index by the suffix product (product of all elements to the right of i).
 *
 * @param {number[]} nums - Input array of numbers.
 * @return {number[]} - Output array where each element is the product except self.
 */
var productExceptSelf = function(nums) {
    var len = nums.length;

    if (len <= 1) return nums; // Edge case: single element or empty array

    var out = (new Array(len)).fill(1); // Output array, initialized to 1
    var suffix = 1; // To store the running product from the right

    // First pass: build prefix products for each index
    // out[i] = product of all elements to the left of i
    for (var itr = 1; itr < len; itr++) {
        out[itr] = out[itr - 1] * nums[itr - 1]; 
    }

    // Second pass: multiply by suffix products (from the right)
    // suffix = product of all elements to the right of i
    for (var itr = len - 2; itr >= 0; itr--) {
        suffix *= nums[itr + 1];
        out[itr] = out[itr] * suffix;
    }

    return out;
};