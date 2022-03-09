def findClosestValueInBst(tree, target):
    closest = tree.value
    while tree is not None:
        if abs(target -closest) > abs(tree.value - target):
            closest = tree.value
        if target < tree.value:
            tree = tree.left
        elif target > tree.value:
            tree = tree.right
        else:
            break
    return closest


# This is the class of the input tree. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None
