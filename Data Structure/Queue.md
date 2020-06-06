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
