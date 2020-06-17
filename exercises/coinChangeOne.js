// You are given coins of different denominations and a total amount of money amount.
// Write a function to compute the fewest number of coins that you need to make up that amount.
// If that amount of money cannot be made up by any combination of the coins, return -1.
//
// Example 1:
// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Example 2:
// Input: coins = [2], amount = 3
// Output: -1

// Note:
// You may assume that you have an infinite number of each kind of coin.

module.exports.coinChangeOne = function (coins, amount) {
    let change = amount;
    let counter = 0;
    const smallestCoin = Math.min.apply(Math, coins);
    if (amount > smallestCoin) {
        while (change >= smallestCoin) {
            for (let i = 0; i < coins.length; i++) {
                if (change < coins[i]) {
                    coins.splice(coins.indexOf(coins[i], 1));
                }
            }
            const largestCoin = Math.max.apply(Math, coins);
            console.log(change, largestCoin);
            change = change - largestCoin;
            counter++;
        }
    } else {
        counter = -1;
    }
    return counter;
};
