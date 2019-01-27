# TREE

### WHAT IS A TREE?

A tree is a data structure that consists of nodes in a parent / child relationship.

##### TREE TERMINOLOGY

- Root: The top node in a tree.
- Child: A node directly connected to another node when moving away from the Root.
- Parent: The converse notion of a child.
- Siblings: A group of nodes with the same parent.
- Leaf: A node with no children.
- Edge: The connection between one node and another.

##### WHAT IS IT LIKE IN THE REAL WORLD?

- HTML DOM
- Network Routing
- Abstract Syntax Tree
- Artificial Intelligence
- Folders in Operating Systems
- Computer File Systems

### BINARY SEARCH TREE

- Every parent node has at most two children.
- Every node to the left of a parent node is always less than the parent.
- Every node to the right of a parent node is always greater than the parent.

##### IMPLEMENTATION

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    if (this.root === null) return false;
    var current = this.root,
      found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}
```

##### MY IMPLEMENTATION

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    var newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    var currentNode = this.root;
    while (true) {
      if (newNode.value < currentNode.value && !currentNode.left) {
        currentNode.left = newNode;
        return this;
      }
      if (newNode.value > currentNode.value && !currentNode.right) {
        currentNode.right = newNode;
        return this;
      }
      newNode.value < currentNode.value
        ? (currentNode = currentNode.left)
        : (currentNode = currentNode.right);
    }
  }

  contains(val) {
    if (this.root === null) return null;
    var current = this.root;
    while (true) {
      if (val === current.value) {
        return true;
      }
      if (val > current.value) {
        if (!current.right) return false;
        current = current.right;
      }
      if (val < current.value) {
        if (!current.left) return false;
        current = current.left;
      }
    }
  }
}
```

##### INSERTING

Insert a node iteratively or recursively.

##### PSEUDOCODE

- Create a new node;
- Starting at the root
  - Check if there is a root, if not - the root now becomes that new node.
  - If there is a root, check if the value of the new node is greater than or less than the value of the root.
  - If it is greater
    - Check to see if there is a node to the right.
      - If there is, move to that node and repeat these steps.
      - If there is not, add that node as the right property.
  - If it is less
    - Check to see if there is a node to the left.
      - If there is, move to that node and repeat these steps.
      - If there is not, add that node as the left property.

##### FINDING

Find a node in a binary search tree iteratively or recursively.

##### PSEUDOCODE

- Starting at the root
  - Check if there is a root, if not - we're done searching.
  - If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done.
  - If not, check to see if the value is greater than or less than the value of the root.
  - If it is greater
    - Check to see if there is a node to the right.
      - If there is, move to that node and repeat these steps.
      - If there is not, we're done searching.
  - If it is less
    - Check to see if there is a node to the left.
      - If there is, move to that node and repeat these steps.
      - If there is not, we're done searching.

##### TIME COMPLEXITY

- Insertion: O(log n) (BEST AND EVERAGE CASE)
- Searching: O(log n) (BEST AND EVERAGE CASE)
  NOT GUARATEED(could be be O(n))!
