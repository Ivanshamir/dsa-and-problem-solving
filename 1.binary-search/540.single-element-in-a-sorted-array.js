/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let start = 0
    let last = nums.length - 1
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)
        
        if(nums[mid] != nums[mid-1] && nums[mid] != nums[mid+1]) {
            return nums[mid]
        }

        const leftsize = (nums[mid] !== nums[mid+1]) ? mid + 1 : mid

        if(leftsize % 2 === 0) {
            start = mid + 1
        } else  {
            last = mid - 1
        } 
    }
    
    return -1;
};