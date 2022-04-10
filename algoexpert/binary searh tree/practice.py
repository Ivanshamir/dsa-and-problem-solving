def rightSmallerThan(array):
    if len(array) == 0:
        return []

    lastIdx = len(array)-1
    bst = BST(array[lastIdx], lastIdx, 0)
    for i in reversed(range(len(array)-1)):
        bst.insert(array[i], i)

    finalArr = array[:]
    getFinalResult(bst, finalArr)
    return finalArr

def getFinalResult(bst, finalArr):
    if bst is None:
        return
    finalArr[bst.lastIdx] = bst.numSmallerAtInsertTime
    getFinalResult(bst.left, finalArr)    
    getFinalResult(bst.right, finalArr)    

class BST:
    def __init__(self, value, lastIdx, numSmallerAtInsertTime):
        self.value = value
        self.lastIdx = lastIdx
        self.numSmallerAtInsertTime = numSmallerAtInsertTime
        self.leftSubTreeSize = 0
        self.left = None
        self.right = None

    def insert(self, value, lastIdx, numSmallerAtInsertTime=0):
        if value < self.value:
            self.leftSubTreeSize += 1
            if self.left is None:
                self.left = BST(value, lastIdx, numSmallerAtInsertTime)
            else:
                self.left.insert(value, lastIdx, numSmallerAtInsertTime)
        else:
            numSmallerAtInsertTime += self.leftSubTreeSize
            if value > self.value:
                numSmallerAtInsertTime += 1
            if self.right is None:
                self.right = BST(value, lastIdx, numSmallerAtInsertTime)
            else:
                self.right.insert(value, lastIdx, numSmallerAtInsertTime)