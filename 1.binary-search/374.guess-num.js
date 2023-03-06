/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lowest = 1
    let highest = n
    while (lowest <= highest) {
        let pick = Math.floor((lowest + highest)/2)
        let gues = guess(pick)
        if(gues == 0) return pick
        else if (gues < 0) highest = pick - 1
        else lowest = pick + 1
    }

    return -1
};