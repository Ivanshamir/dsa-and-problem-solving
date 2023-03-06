/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let last = nums.length - 1
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)

        if(nums[mid] === target) {
            return mid
        } else if(nums[mid] > target) {
            last = mid - 1
        } else if(nums[mid] < target) {
             start = mid + 1
        }
    }

    return -1
};