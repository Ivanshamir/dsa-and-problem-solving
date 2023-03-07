/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    if(nums.length === 1) return 0

    let start = 0
    let last = nums.length - 1
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)
        
        if (nums[mid+1] === undefined && nums[mid] >= nums[mid-1]) return mid 
        else if (nums[mid-1] === undefined && nums[mid] >= nums[mid+1]) return mid 
        else if(nums[mid] >= nums[mid+1] && nums[mid] >= nums[mid-1]) return mid 

        if(nums[mid] < nums[mid-1]) {
            last = mid - 1
        } else  {
            start = mid + 1
        }
    }
};