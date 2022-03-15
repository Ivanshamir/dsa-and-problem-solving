def sameBsts(arrayOne, arrayTwo):
    # Write your code here.
    return sameBstReturn(arrayOne, arrayTwo, 0, 0, float("-inf"), float("inf"))

def sameBstReturn(arrayOne, arrayTwo, rootIdOne, rootIdTwo, minVal, maxVal):
    if rootIdOne == -1 or rootIdTwo == -1:
        return rootIdOne == rootIdTwo

    if arrayOne[rootIdOne] != arrayTwo[rootIdTwo]:
        return False

    leftRootIdOne = leftFirstSmallest(arrayOne, rootIdOne, minVal)
    leftRootIdTwo = leftFirstSmallest(arrayTwo, rootIdTwo, minVal)
    rightRootIdOne = rightFistBiggest(arrayOne, rootIdOne, maxVal)
    rightRootIdTwo = rightFistBiggest(arrayTwo, rootIdTwo, maxVal)

    currentVal = arrayOne[rootIdOne]
    leftAreSame = sameBstReturn(arrayOne, arrayTwo, leftRootIdOne, leftRootIdTwo, minVal, currentVal)
    rightAreSame = sameBstReturn(arrayOne, arrayTwo, rightRootIdOne, rightRootIdTwo, currentVal, maxVal)

    return leftAreSame and rightAreSame

def leftFirstSmallest(array, rootIdOne, minVal):
    for i in range(rootIdOne +1, len(array)):
        if array[i] < array[rootIdOne] and array[i] >= minVal:
            return i 

    return -1

def rightFistBiggest(array, rootIdTwo, maxVal):
    for i in range(rootIdTwo +1, len(array)):
        if array[i] >= array[rootIdTwo] and array[i] < maxVal:
            return i
    return -1