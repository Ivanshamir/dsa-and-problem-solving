/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let firstIndex = 0
    let lastIndex = s.length - 1

    while(firstIndex <= lastIndex) {
        const temp = s[firstIndex] 
        s[firstIndex] = s[lastIndex]
        s[lastIndex] = temp

        firstIndex++
        lastIndex--
    }
};