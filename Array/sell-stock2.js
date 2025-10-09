/**
 * Calculates the maximum profit from buying and selling stocks any number of times.
 * LeetCode Problem: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
 *
 * Approach:
 * - Iterate through the price array.
 * - Whenever the price increases from the previous day, add the difference to profit.
 * - This simulates buying on one day and selling on the next whenever profitable.
 * - The sum of all such increases gives the maximum profit.
 *
 * @param {number[]} prices - Array of stock prices by day.
 * @return {number} The maximum profit achievable.
 */
var maxProfit = function(prices) {
    var profit = 0;

    // Traverse the price array starting from the second day
    for (var itr = 1; itr < prices.length; itr++) {
        // If today's price is higher than yesterday's, add the difference to profit
        if (prices[itr] > prices[itr - 1]) {
            profit += prices[itr] - prices[itr-1];
        }
    }

    // Return the total accumulated profit
    return profit;
};