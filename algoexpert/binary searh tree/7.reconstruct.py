# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class TreeInfo:
    def __init__(self, curId):
        self.curId = curId

def reconstructBst(preOrderTraversalValues):
    # Write your code here.
    treeInfo = TreeInfo(0)
    return reconstructBstFinal(float("-inf"), float("inf"), preOrderTraversalValues, treeInfo)

def reconstructBstFinal(lower, upper, preOrderTraversalValues, treeInfo):
    if treeInfo.curId == len(preOrderTraversalValues):
        return None

    rootVal = preOrderTraversalValues[treeInfo.curId]

    if rootVal < lower or rootVal >= upper:
        return None

    treeInfo.curId += 1

    lowerVal = reconstructBstFinal(lower, rootVal, preOrderTraversalValues, treeInfo)
    upperVal = reconstructBstFinal(rootVal, upper, preOrderTraversalValues, treeInfo)
    return BST(rootVal, lowerVal, upperVal)