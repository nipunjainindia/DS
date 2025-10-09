// Implements a data structure that supports insert, delete, and getRandom in average O(1) time.
// LeetCode Problem: https://leetcode.com/problems/insert-delete-getrandom-o1/

var set = {}; // Global object to store values as keys

var RandomizedSet = function() {
    // Initialize/reset the set when a new object is created
    set = {};
};

/** 
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    // If value already exists, return false
    if (set[val]) {
        return false;
    }

    // Otherwise, add value and return true
    set[val] = 1;
    return true;
};

/** 
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    // If value exists, delete it and return true
    if (set[val]) {
        delete set[val];
        return true;
    }

    // If value does not exist, return false
    return false;
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    var keys = Object.keys(set); // Get all keys in the set
    var len = keys.length;

    if (len == 0) return; // If set is empty, return undefined
    
    // Generate a random index between 0 and len-1
    var random = Math.floor(Math.random() * len);
    return parseInt(keys[random], 10); // Return the random key as a number
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */