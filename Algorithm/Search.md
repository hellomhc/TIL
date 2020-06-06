## SEARCH ALGORITHM

### HOW DO WE NORMALLY SEARCH?

Given an array, the simplest way to search for an value is to look at every element in the array and check if it's the value we want. This is called linear search.

##### JAVASCRIPT HAS BUILT-IN SEARCH FUNCTIONS!

There are many different search methods on arrays in JavaSCript.

- indexOf
- includes
- find
- findIndex

But how do these functions work?

### LINEAR SEARCH

##### AN EXAMPLE

Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1. Don't use indexOf to implement this function!  
Examples:

```javascript
linearSearch([10, 15, 20, 25, 30], 15); //1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4); // 5
linearSearch([100], 100); // 0
linearSearch([1, 2, 3, 4, 5], 6); // -1
linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 10); // -1
linearSearch([100], 200); // -1
```

##### PSEUDOCODE

- This function accpets an array and a value
- Loop through the array and check if the current array element is equal to the value
- If it is, return the index at which the element is found
- If the value is never found, return -1

##### SOLUTION

```javascript
// Time Complexity - O(n)
function linearSearch(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

linearSearch([10, 15, 20, 25, 30], 15);
```

##### TIME COMPLEXITY

- BEST: O(1)
- AVERAGE: O(n)
- WORST : O(n)

### BINARY SEARCH

- Binary search is a much faster from of search
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time
- Binary search only works on sorted arrays!

##### AN EXAMPLE

Return the index at which the value exists. Otherwise, return -1.

```javascript
binarySearch([1, 2, 3, 4, 5], 2); // 1
binarySearch([1, 2, 3, 4, 5], 3); // 2
binarySearch([1, 2, 3, 4, 5], 5); // 4
binarySearch([1, 2, 3, 4, 5], 6); // -1
```

##### PSEUDOCODE

- This function accepts a sorted array and a value
- Create a left pointer at the start of the array, and a right pointer at the end of the array
- While the left pointer comes before the right pointer.
  - Create a pointer in the middle
  - If you find the value you want, return the index
  - If the value is too small, move the left pointer up
  - If the value is too large, move the right pointer down
- If you never find the value, return -1

##### SOLUTION

```javascript
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start < end) {
    if (elem < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (arr[middle] == elem) {
    return middle;
  }
  return -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
```

##### REFACTOR

```javascript
function binarySearch(arr, elem) {
  var start = 0;
  var end = arr.length - 1;
  var middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start < end) {
    if (elem < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] == elem ? middle : -1;
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15);
```

##### TIME COMPLEXITY

- BEST: O(1)
- AVERAGE: O(log n)
- WORST : O(log n)

### NAIVE STRING SEARCH

- Suppose you want to count the number of times a smaller string appears in a longer string
- A straightforward approach involes checking pairs of characters individually

##### Pseudocode

- Loop over the longer string
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters do match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- Return the count

##### MY APPROACH

```javascript
function naiveSearch(str, word) {
  var count = 0;
  var isMatched;

  for (let i = 0; i < str.length - word.length + 1; i++) {
    isMatched = true;
    for (let j = i; j < word.length + i; j++) {
      if (str[j] !== word[j - i]) {
        isMatched = false;
        break;
      }
    }
    if (isMatched) count++;
  }
  return count;
}

naiveSearch("lorie loled", "loled");
```

##### SOLUTION

```javascript
function naiveSearch(long, short) {
  var count = 0;

  for (var i = 0; i < long.length; i++) {
    for (var j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) break;
      if (j === short.length - 1) count++;
    }
  }
  return count;
}

naiveSearch("lorie loled", "loled");
```

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)
