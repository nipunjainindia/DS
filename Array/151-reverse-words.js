/**
 * LeetCode Problem: https://leetcode.com/problems/reverse-words-in-a-string/
 *
 * Approach:
 * - Split the input string by spaces to get all words (including empty strings for extra spaces).
 * - Iterate from the end of the array to the start, skipping empty strings (which represent extra spaces).
 * - Build the output string by appending non-empty words, adding a space between them as needed.
 * - This ensures words are reversed and extra spaces are removed.
 *
 * @param {string} s - The input string.
 * @return {string} - The string with words reversed and extra spaces removed.
 */
var reverseWords = function(s) {
    var len = s.length;

    if (len <= 1) return s; // Edge case: empty or single character string

    var out = '';
    var arr = s.split(' '); // Split by spaces (may include empty strings)

    // Iterate from end to start, skipping empty strings
    for (var itr = arr.length - 1; itr >= 0; itr--) {
        if (arr[itr] != '') {
            if (out != '') {
                out += ' '; // Add space between words
            } 
            out += arr[itr]; // Add the word
        }
    }

    return out;
};