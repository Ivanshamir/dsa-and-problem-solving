# Do not edit the class below except for
# the insert, contains, and remove methods.
# Feel free to add new properties and methods
# to the class.

class BST:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

    def insert(self, value):
        # Write your code here.
        # Do not edit the return statement of this method.
        current = self

        while True:
            if value < current.value:
                if current.left is None:
                    current.left = BST(value)
                    break
                else:
                    current = current.left
            else:
                if current.right is None:
                    current.right = BST(value)
                    break
                else:
                    current = current.right

        return self

    def contains(self, value):
        # Write your code here.
        current = self
        while current is not None:
            if value < current.value:
                current = current.left
            elif value > current.value:
                current = current.right
            else:
                return True
		return False

    def remove(self, value, parent = None):
        # Write your code here.
        # Do not edit the return statement of this method.
        current = self

        while current is not None:
            if value < current.value:
                parent = current
                current = current.left
            elif value > current.value:
                parent = current
                current = current.right
            else:
                if current.left is not None and current.right is not None:
                    current.value = current.right.getMinVal()
                    current.right.remove(current.value, current)
                elif parent is None:
                    if current.left is not None:
                        current.value = current.left.value
						current.right = current.left.right
                        current.left = current.left.left
                        
                    elif current.right is not None:
                        current.value = current.right.value
                        current.left = current.right.left
                        current.right = current.right.right
                    else:
                        pass

                elif parent.left == current:
                        parent.left = current.left if current.left is not None else current.right
                elif parent.right == current:
                        parent.right = current.left if current.left is not None else current.right
                break
        return self

    def getMinVal(self):
        current = self
        while current.left is not None:
            current = current.left
        return current.value