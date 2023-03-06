/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    const sortedNums = nums.sort(function(a, b){return a - b})
    let arr = []

    for(let i=0; i < sortedNums.length; i++) {
        if(sortedNums[i] === target) {
            arr.push(i)
        }
    }

    return arr
};