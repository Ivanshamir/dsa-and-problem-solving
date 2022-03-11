# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right

class TreeInfo:
    def __init__(self, numberOfNodeVisited, lastVisitedNodeVal):
        self.numberOfNodeVisited = numberOfNodeVisited
        self.lastVisitedNodeVal = lastVisitedNodeVal

def findKthLargestValueInBst(tree, k):
    treeInfo = TreeInfo(0, -1)
    reverseInOrder(tree, k, treeInfo)
    return treeInfo.lastVisitedNodeVal

def reverseInOrder(node, k, treeInfo):
    if node is None or treeInfo.numberOfNodeVisited >= k:
        return
    
    reverseInOrder(node.right, k, treeInfo)
    if treeInfo.numberOfNodeVisited < k:
        treeInfo.lastVisitedNodeVal = node.value
        treeInfo.numberOfNodeVisited += 1
        reverseInOrder(node.left, k, treeInfo)
