/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 * used binary search. for move left or right just used this logic: arr[mid] - (mid + 1) < k. because we want to check the value exists if arr[mid] - (mid + 1) === 0. suppose we have array [1,2,3] so if arr[mid] = 2 and mid = 1 then arr[mid] - (mid + 1) will be 0
 */
var findKthPositive = function(arr, k) {
    if(arr[0] > k) return k

    let lowest = 0
    let highest = arr.length - 1
    let closest = 0
    while(lowest <= highest) {
        let mid = Math.ceil((lowest + highest)/2)
        if(arr[mid] - (mid + 1) < k) {
            closest = mid + 1
            lowest = mid + 1
        } else {
            highest = mid - 1
        }
    }

    return k + closest
};