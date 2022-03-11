def minHeightBst(array):
    return construct(array, None, 0, len(array) - 1)

def construct(array, tree, start, end):
    if end < start:
        return

    mid = (start + end) // 2

    value = array[mid]

    if tree is None:
        tree = BST(value)
    else:
        tree.insert(value)
    
    construct(array, tree, start, mid-1)
    construct(array, tree, mid+1, end)
    return tree

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        if value < self.value:
            if self.left is None:
                self.left = BST(value)
            else:
                self.left.insert(value)
        else:
            if self.right is None:
                self.right = BST(value)
            else:
                self.right.insert(value)
