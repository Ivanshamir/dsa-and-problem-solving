/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    let numsObj = {}

    for(let i = 0; i < nums.length; i++) {
        if(numsObj[nums[i]]) numsObj[nums[i]] += 1
        else numsObj[nums[i]] = 1
    }

    let total = 0
    for (const key in numsObj) {
        if(numsObj[key] === 1) total += Number(key)
    }

    return total
};