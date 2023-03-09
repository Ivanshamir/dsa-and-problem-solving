/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let start = 0
    let last = num
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)
        let result = mid * mid

        if(result === num) {
            return true
        } else if(result > num) {
            last = mid - 1
        } else if(result < num) {
            start = mid + 1
        }
    }

    return false
};