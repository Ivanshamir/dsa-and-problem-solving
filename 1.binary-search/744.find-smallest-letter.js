/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if(letters[0] > target) return letters[0]

    let low = 0
    let high = letters.length - 1

    while(low <= high) {
        let mid = Math.floor((low + high) / 2)

        if(letters[mid] > target && letters[mid-1] <= target) {
            return letters[mid]
        } 

        if(letters[mid] > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    return letters[0]
};