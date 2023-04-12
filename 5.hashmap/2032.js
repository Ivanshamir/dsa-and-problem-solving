/*----------using hashmap-------------*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let distinctObj = {}
    let result = []
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    nums3 = [...new Set(nums3)]

    for(let i = 0; i < nums1.length; i++) {
        setDistinctObj(distinctObj, nums1[i])
    }

    for(let i = 0; i < nums2.length; i++) {
        setDistinctObj(distinctObj, nums2[i])
    }

    for(let i = 0; i < nums3.length; i++) {
        setDistinctObj(distinctObj, nums3[i])
    }

    for (const key in distinctObj) {
        if(distinctObj[key] >= 2) result.push(Number(key))
    }

    return result
};

var setDistinctObj = function(distinctObj, num) {
    if(!distinctObj[num]) distinctObj[num] = 1
    else distinctObj[num] += 1
}

/*--------------------without hashmap --------------*/
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    let result = []
    
    for(let i = 1; i <= 100; i++) {
        if(nums1.includes(i) && nums2.includes(i)) result.push(i)
        else if(nums2.includes(i) && nums3.includes(i)) result.push(i)
        else if(nums1.includes(i) && nums3.includes(i)) result.push(i)
    }

    return result
};