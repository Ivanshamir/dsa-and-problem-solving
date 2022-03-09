# This is the class of the input root. Do not edit it.
class BinaryTree:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None


def branchSums(root):
    # Write your code here.
    sums = []
    allResults(root, 0, sums)
    return sums

def allResults(current, total, sums):
    if current is None:
        return

    total += current.value

    if current.left is None and current.right is None:
        sums.append(total)

    allResults(current.left, total, sums)
    allResults(current.right, total, sums)

    
