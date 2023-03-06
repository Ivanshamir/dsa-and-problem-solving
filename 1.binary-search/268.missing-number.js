/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let arrNumsSum = 0
    let arrSum = 0
    for (let i = 1; i <= nums.length; i++) {
        arrNumsSum = arrNumsSum + i
    }

    for (let i = 0; i < nums.length; i++) {
        arrSum = arrSum + nums[i]
    }
    console.log(arrNumsSum, arrSum)
    return arrNumsSum - arrSum
};