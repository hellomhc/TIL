# Data Structure

<details><summary>Singly Linked List</summary>

## SINGLY LINKED LIST

A data structure that contains a head, tail and length property. linked lists consist of nodes, and each node has a value and a pointer to another node or null.

##### COMPARISIONS WITH ARRAYS

###### LIST

- Do not have indexs!
- Connected via nodes with a next pointer
- Rnadom access is not allowed

###### ARRAY

- Indexed in order!
- Insertion and deletion can be expensive
- Can quickly be accessed at a spcific index

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }

    var current = this.head;
    var newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;

    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return newNode;
    }
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(val, index) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return Boolean(this.push(val));
    if (index === 0) return Boolean(this.unshift(val));
    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();
    var prev = this.get(index - 1);
    var removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return true;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }
}
```

##### PUSHING

Adding a new node to the end of the linked list

##### PSEUDOCODE

- This function should accept a value.
- Create a new node using the value passed to the function.
- If there is no head property on the list, set the head and tail to be the newly created node.
- Otherwise set the next property on the tail toe be the new node and set the tail property on the list to be the newly created node.
- Increment the length by one.

##### POPPING

Removing a node from the end of the linked list

##### PSEUDOCODE

- If there are no nodes in the list, return undefined.
- Loop through the list until you reach the tail.
- Set the next property of the 2nd to last node to be null.
- Set the tail to be the 2nd to last node.
- Decrement the length of the list by 1.
- Return the value of the node removed.

##### SHIFTING

Removing a new node from the beginning of the linked list

##### PSEUDOCODE

- If there are no nodes, return undefined.
- Store the current head property in a variable.
- Set the head property to be the current head's next property.
- Decrement the length by 1.
- Return the value of the node removed.

##### UNSHIFTING

Adding a new node to the beginning of the the linked list

##### PSEUDOCODE

- This function should accept a value.
- Create a new node using the value passed to the function.
- If there is no head property on the list, set the head and tail to be the newly created node.
- Otherwise set the newly created node's next property to be the current head property on the list.
- Set the head property on the list to be that newly created node.
- Increment the length of the list by 1.
- Return the linked list.

##### GET

Retrieving a node by it's position in the linked list

##### PSEUDOCODE

- This function should accept an index.
- If the index is less than zero or greater than or equal to the length of the list, return null.
- Loop through the list until you reach the index and return the node at that specific index.

##### SET

Changing the value of a node based on it's position in the linked list

##### PSEUDOCODE

- This function should accept a value and an index.
- Use your get function to find the specific node.
- If the node is not found, return false.
- If the node is found, set the value of that node to be the value passed to the function and return true.

##### INSERT

Adding a node to the linked list at a specific position

##### PSEUDOCODE

- If the index is less than zero or greater than the length, return false.
- If the index is the same as the length, push a new node to the end of the list.
- If the index is 0, unshift a new node to the start of the list.
- Otherwise, using the get method, access the node at the index -1.
- Set the next property on that node to be the new node.
- Set the next property on the new node to be the previous next.
- Increment the length.
- Return true.

##### REMOVE

Removing a node from the linked list at a specific position

##### PSEUDOCODE

- If the index is less than zero or greater than length, return undefined.
- If the index is the same as the length-1, pop.
- If the index is 0, shift.
- Otherwise, using the get method, access the node at the index-1.
- Set the next property on that node to be the next of the next node.
- Decrement the length.
- Return the value of the node removed.

##### REVERSE

Reversing the linked list in place

##### PSEUDOCODE

- Swap the head and tail.
- Create a variable called next.
- Create a variable called prev.
- Create a variable called node and initialize it to the head property.
- Loop through the list.
- Set next to be the next property on whatever node is.
- Set the next porperty on the node to be whatever prev is.
- Set prev to be the value of the node variable.
- Set the node variable to be the value of the next variable.

##### TIME COMPLEXITY

- INSERTION: O(1) (itself)
- REMOVAL: O(1) (itself)
- SEARCHING : O(n)
- ACCESS: O(n)

##### RECAP

- Singly linked lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required.
- Arrays contain a built in index whereas linked lists do not.
- The idea of a list data structure that consists of nodes is the foundation for other data structures like stacks and queues.

### DOUBLY LINKED LIST

Alomost identical to singly linked lists, except every node has another pointer, to the previous node

MORE MEMORY === MORE FLEXIBILITY
It's almost always a tradeoff!

```javascript
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    var shiftedNode = this.head;
    if (this.length === 1) {
      this.head === null;
      this.tail === null;
    } else {
      this.head = shiftedNode.next;
      this.head.prev = null;
      shiftedNode.next = null;
    }
    this.length--;
    return shiftedNode;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return newNode;
  }

  get(index) {
    if (!index || index < 0 || index >= this.length) return null;
    var count, current;
    if (index <= this.length / 2) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index, val) {
    var foundNdoe = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) !!this.unshift(val);
    if (index === this.length) !!this.push(val);

    var newNode = new Node(val);
    var beforeNode = this.get(index - 1);
    var afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return true;
  }
}
```

##### PUSHING

Adding a node to the end of the doubly linked list

##### PSEUDOCODE

- Create a new node with the value passed to the function.
- If the head property is null set the head and tail toe be the newly created node.
- If not, set the next porperty on the tail to be that node.
- Set the previous property on the newly created node to be the tail.
- Set the tail to be the newly created node.
- Increment the length.
- Return the doubly linked list.

##### PUPPING

Removing a node from the end of the doubly linked list

##### PSEUDOCODE

- If there is no head, return undefined.
- Store the current tail in a variable to return later.
- If the length is 1, set the head and tail to be null.
- Update the tail to be the previous node.
- Set the new tail's next to null.

##### SHIFTING

Removing a node from the beginning of the doubly linked list

##### PSEUDOCODE

- If length is 0, return undefined.
- Store the current head property in a variable(we'll call it old head).
- If the length is one
  - Set the head to be null.
  - Set the tail to be null.
- Update the head to be the next of the old head.

##### UNSHIFTING

Adding a node to the beginning of the doubly linked list.

##### PSEUDOCODE

- Create a new node with the value passed to the function.
- If the length is 0
  - Set the head to be the new node.
  - Set the tail to be the new node.
- Otherwise
  - Set the prev property on the head of the list to be the new node.
  - Set the next property on the new node to be the head property.
  - Update the head to be the new node.
  - Increment the length.
  - Return the list.

##### GET

Accessing a node in a doubly linked list by its position

##### PSEUDOCODE

- If the index less than 0 or greater or equal to the length, return null.
- If the index is less than or equal to half the length of the list
  - Loop through the list starting from the head and loop towards the middle.
  - Return the node once it is found.
- If the index is greater than half the length of the list
  - Loop through the list starting from the tail and loop towards the middle.
  - Return the node once it is found.

##### SET

Replacing the value of a node to the in a doubly linked list

##### PSEUDOCODE

- Create a variable which is the result of the get method at the index passed to the function.
  - If the get method returns a valid node, set the value of that node to be the value passed to the function.
  - Return true.

##### INSERTION

Adding a node in a doubly linked list by a certain position

##### PSEUDOCODE

- If the index is less than zero or greater than or equal to the length return false.
- If the index is 0, unshift.
- If the index is the same as the length, push.
- Use the get method to access the index-1.
- Set the next and prev properties on the correct nodes to link everything together.
- Increment the length.
- Return true.

##### REMOVE

Removing a node in a doubly linked list by a certain position

##### PSEUDOCODE

- If the index is less than zero or greater than or equal to the length return undefined.
- If the index is 0, shift.
- If the index is equal to the length-1, pop.
- Use the get method to retrieve the item to be removed.
- Update the next and prev properties to remove the found node from the list.
- Set next and prev to null on the found node.
- Decrement the length.
- Return the removed node.

##### TIME COMPLEXITY

- INSERTION: O(1) (itself)
- REMOVAL: O(1) (itself)
- SEARCHING : O(n) (Technically searching is O(n/2), but that's still O(n))
- ACCESS: O(n)

##### RECAP

- Doubly linked lists are almost identical to singly linked lists except there is an additional pointer to previous nodes.
- Better than singly linked lists for finding nodes and can be done in half the time!
- However, they do take up more memory considering the extra pointer.

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>

<details><summary>Stack</summary>

## STACK

### WHAT IS A STACK?

A stack is a LIFE data structure. The last element added to the stack will be the first element removed from the stack.

##### HOW IS IT USED?

Think about a stack of plates, or a stack of markers, or a stack of ... anything. As you pile it up the last thing (or the topmost thing) is what gets removed first.

##### WHERE STACKS ARE USED?

- Managing function invocations
- Undo / Redo
- Routing (the history object) is treated like a stack.

##### WHY LINKED LIST OVER ARRAY?

- We don't need indices.
- We don't need all the other dozen plus methods that an array comes with.
- All we need are the methods to add and remove in a last in last out fashion.

##### IMPLEMENTATION

```javascript
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

##### PUSHING

Add a value to the top of the stack.

##### PSEUDOCODE

- The function should accept a value.
- Create a new node with that value.
- If there are no nodes in the stack, set the first and last property to be the newly created node.
- If there is at least one node, create a variable that stores the current first property on the stack.
- Reset the first property to be the newly created node.
- Set the next property on the node to be the previously created variable.
- Increment the size of the stack by 1.

##### POPPING

Delete the value of the top of the stack.

##### PSEUDOCODE

- If there are no nodes in the stack, return null.
- Create a temporary variable to store the first property on the stack.
- If there is only 1 node, set the first and last property to be null.
- If there is more than one node, set the first porperty to be the next property on the current first.
- Decrement the size by 1.
- Return the value of the node removed.

##### TIME COMPLEXITY

- Insertion: O(1)
- Removal: O(1)
- Searching : O(n)
- Access: O(n)

##### RECAP

- Stacks are a LIFO data structure where the last value in is always the first one out.
- Stacks are used to handle function invocations(the call stack), for operations like undo/redo, and for routing(remember pasges you have visited and go back/forward) and much more.
- They are not a built in data structure in JavaScript, but are relatively simple to implement.

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>

<details><summary>Queue</summary>

## QUEUE

##### WHAT IS QUEUE?

A queue is a FIFO(First In First Out) data structure. Queues exist everywhere. Think about the last tiem you waited in line.

##### HOW DO WE USE THEM IN PROGRAMMING?

- Background tasks
- Uploading resources
- Printing / Task processing

##### IMPLEMENTATION

```javascript
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  enqueue(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

##### PSEUDOCODE

- This function accepts some value.
- Create a new node using that value passed to the function.
- If there are no nodes in the queue, set this node to be the first and last property of the queue.
- Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node.

##### PSEUDOCODE

- If there is no first property, just return null.
- Store the first property in a variable.
- See if the first is the same as the last(check if there is only 1 node). If so, set the first and last to be null.
- If there is more than 1 node, set the first property to be the next property of first.
- Decrement the size by 1.

##### TIME COMPLEXITY

- Insertion: O(1)
- Removal: O(1)
- Searching : O(n)
- Access: O(n)

##### RECAP

- Queues are a FIFO data structure, all elements are first in first out.
- Queues are useful for processing tasks and are foundational for more complex data structures.
- Insertion and Removal can be done in O(1).

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>

<details><summary>Tree</summary>

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
    while(queue.length) {
      node = queue.shift();
      data.push(node);
      if(node.left) queue.push(node.left);
      if(node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    var data = [];

    function traverse(node) {
      data.push(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    var data = [];

    function traverse(node) {
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    var data = [];

    function traverse(node) {
      // node.left && traverse(node.left);
      if(node.left) traverse(node.left);
      data.push(node.value);
      // node.right && traverse(node.right);
      if(node.right) traverse(node.right);
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

</details>
