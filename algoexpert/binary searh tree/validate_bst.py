# This is an input class. Do not edit.
class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def validateBst(tree):
    # Write your code here.
    return validateBstHelper(tree, float("-inf"), float("inf"))

def validateBstHelper(tree, min, max):
    if tree.value is None:
        return True
    
    if tree.value < min or tree.value > max:
        return False

    leftTree = validateBstHelper(tree.left, min, tree.value)
    return leftTree and validateBstHelper(tree.right, tree.value, max)