def rightSmallerThan(array):
    if len(array) == 0:
        return []

    lastIdx = len(array) - 1
    bst = BST(array[lastIdx], lastIdx, 0)
    for i in reversed(range(len(array) - 1)):
        bst.insert(array[i], i)
    
    rightSmaller = array[:]
    getRightSmaller(bst, rightSmaller)
    return rightSmaller 

def getRightSmaller(bst, rightSmaller):
    if bst is None:
        return
    rightSmaller[bst.idx] = bst.numSmallerAtInsertTime
    getRightSmaller(bst.left, rightSmaller)
    getRightSmaller(bst.right, rightSmaller)
    

class BST:
    def __init__(self, value, idx, numSmallerAtInsertTime):
        self.value = value
        self.idx = idx
        self.numSmallerAtInsertTime = numSmallerAtInsertTime
        self.leftSubTreeSize = 0
        self.left = None
        self.right = None

    def insert(self, value, idx, numSmallerAtInsertTime=0):
        if value < self.value:
            self.leftSubTreeSize += 1
            if self.left is None:
                self.left = BST(value, idx, numSmallerAtInsertTime)
            else:
                self.left.insert(value, idx, numSmallerAtInsertTime)
        else:
            numSmallerAtInsertTime += self.leftSubTreeSize
            if value > self.value:
                 numSmallerAtInsertTime += 1
            if self.right is None:
                self.right = BST(value, idx, numSmallerAtInsertTime)
            else:
                self.right.insert(value, idx, numSmallerAtInsertTime)