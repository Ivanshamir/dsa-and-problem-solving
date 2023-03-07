/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let start = 0
    let last = arr.length - 1
     
    while(start <= last) {
        let mid = Math.floor((start + last) / 2)

        if(arr[mid] >= arr[mid-1] && arr[mid] >= arr[mid+1]) {
            return mid
        } else if(arr[mid] < arr[mid-1]) {
            last = mid - 1
        } else  {
            start = mid + 1
        }
    }
};