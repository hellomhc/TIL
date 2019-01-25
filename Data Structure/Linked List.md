# LINKED LIST

### SINGLY LINKED LIST

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
