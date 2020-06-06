## TREE

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

  BFS() {
    var node = this.root,
      data = [],
      queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];

    function traverse(node) {
      // node.left && traverse(node.left);
      if (node.left) traverse(node.left);
      data.push(node.value);
      // node.right && traverse(node.right);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
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

##### BFS

##### PSEUDOCODE

- Create a queue (this can be an array) and a variable to store the values of nodes visited.
- Place the root node in the queue.
- Loop as long as there is anything in the queue.
  - Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
  - If there is a left property on the node dequeued - add it to the queue.
  - If there is a right property on the node dequeued - add it to the queue.
- Return the variable that stores the values.

##### DFS

Pursue all nodes they visit or traverse nodes vertically down to the end of the tree before visiting sibling nodes.

##### PSEUDOCODE

- Create a variable to store the values of nodes visited.
- Store the root of the BST in a variable called current.
- Write a helper function which accepts a node.

###### PreOrder

- Push the value of the node to the variable that stores.
- If the node has a left property, call the helper function with the left property on the node.
- If the node has a right property, call the helper function with the right property on the node.
- Invoke the helper function with the current variable.

###### PostORder

- If the node has a left property, call the helper function with the left property on the node.
- If the node has a right property, call the helper function with the right property on the node.
- Push the value of the node to the variable that stores.
- Invoke the helper function with the current variable.

###### InOrder

- If the node has a left property, call the helper function with the left property on the node.
- Push the value of the node to the variable that stores.
- If the node has a right property, call the helper function with the right property on the node.
- Invoke the helper function with the current variable.

- Return the array of values.

##### BFS vs DFS?

- DFS(InOrder): Used commonly with BST's. Notice we get all nodes in the tree in their underlying order.
- DFS(PreOrder): Can be used to "export" a tree structure so that it is easily reconstructed or copied.

##### RECAP

- Trees are non-linear data structures that contain a root and child nodes.
- Binary Trees can have values of any type, but at most two children for each parent.
- Binary Search Trees are a more specific version of binary trees where every node to the left of a parent is less than it's value and every node to the right is greater.
- We can search through trees using BFS and DFS.

##### TIME COMPLEXITY

NOT GUARATEED!(could be be O(n))

- Insertion: O(log n) (BEST AND EVERAGE CASE)
- Searching: O(log n) (BEST AND EVERAGE CASE)

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)
