/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let start = 0
    let last = x
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)
        let result = mid * mid
        let nextResult = Number(mid+1) * Number(mid+1)

        if(result <= x && nextResult > x) {
            return mid
        } 

        if(result > x) {
            last = mid - 1
        } else if(result < x) {
            start = mid + 1
        }
    }

    return -1
};