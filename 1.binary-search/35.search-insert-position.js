/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    if (nums[nums.length - 1] < target) return nums.length
    if (nums[0] > target) return 0
    let start = 0
    let last = nums.length - 1
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)

        if(nums[mid] === target || (nums[mid-1] < target && nums[mid] > target)) {
            return mid
        } else if(nums[mid] > target) {
            last = mid - 1
        } else {
             start = mid + 1
        }
    }
};