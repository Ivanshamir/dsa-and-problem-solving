# This is an input class. Do not edit.
class BST:
    def __init__(self, value, left=None, right=None):
        self.value = value
        self.left = left
        self.right = right


def validateThreeNodes(nodeOne, nodeTwo, nodeThree):
    # Write your code here
    if isDesc(nodeTwo, nodeOne):
        return isDesc(nodeThree, nodeTwo)
    
    if isDesc(nodeTwo, nodeThree):
        return isDesc(nodeOne, nodeThree)

    return False

def isDesc(node, target):
    while node is not None and node is not target:
        node = node.left if target.value < node.value else node.right

    return node is target