<details><summary>Master Common Problem Solving Patterns</summary>

## MASTER COMMON PROBLEM SOLVING PATTERNS

### 1. FREQUENCY COUNTER

This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays / strings.

#### AN EXAMPLE 1

Write a function called same, which accepts
two arrays. The function should return true
if every value in the array has it's correspoding
value squared in the second array. The frequency
of values must be the same. (The order doesn't matter.)

```javascript
same([1, 2, 3], [4, 1, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frequency)
```

##### A NAIVE SOLUTION

```javascript
// Time Complexity - O(N^2)
function same(arr1, arr2) {
  if (arr.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);

    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}
```

##### REFACTOR

```javascript
// Time Complexity - O(N)
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
```

#### AN EXAMPLE 2 - ANAGRAMS

Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman. You may assume the string contains only lowercase alphabets.

```javascript
validAnagram('', ''); // true
validAnagram('aaz', 'zza'); // false
validAnagram('anagram', 'nagaram'); // true
validAnagram('rat', 'car'); //false
validAnagram('awesome', 'awesome'); // false
validAnagram('qwerty', 'qeywrt'); // true
validAnagram('texttwisttime', 'timetwisttext'); // true
```

##### MY SOLUTION

```javascript
// Time Complexity - O(N)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  var freCounter1 = {};
  var freCounter2 = {};

  for (let char of str1) {
    freCounter1[char] = (freCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    freCounter2[char] = (freCounter2[char] || 0) + 1;
  }
  for (var key in freCounter1) {
    if (!(key in freCounter2)) {
      return false;
    }
    if (freCounter1[key] !== freCounter2[key]) {
      return false;
    }
  }
  return true;
}
```

##### CHALLENGE SOLUTION

```javascript
// Time Complexity - O(N)
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];

    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    //can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}
```

### 2. MULTIPLE POINTERS

Creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal space complexity as well.

#### AN EXAMPLE 1

Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sume to zero or undefined if a pair does not exist.

```javascript
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3, 3]
sumZero([-2, 0, 1, 3]); // undefined
sumZero([1, 2, 3]); // undefined
```

##### A NAIVE SOLUTION

```javascript
// Time Complexity - O(N^2)
// Space Complexity - O(1)
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
```

##### REFACTOR

```javascript
// Time Complexity - O(N)
// Space Complexity - O(1)
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
```

#### AN EXAMPLE 2 - countUniqueValues

Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```javascript
countUniqueValues([1, 1, 1, 1, 1, 1]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]); // 7
countUniqueValues([]); // 0
countUniqueValues([-2, -1, -1, 0, 1]); // 4
```

##### MY SOLUTION 1

```javascript
// Only works in a sorted array
// Time Complexity - O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  var count = 1;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}
```

##### MY SOLUTION 2

```javascript
// Time Complexity - O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  var freCounter = {};
  var count = 0;

  for (let i = 0; i < arr.length; i++) {
    var key = arr[i];
    freCounter[key] = (freCounter[key] || 0) + 1;
  }
  for (var key in freCounter) {
    count++;
  }
  return count;
}
```

##### CHALLENGE SOLUTION

```javascript
// Only works in a sorted array
// Time Complexity - O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;

  var i = 0;

  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
```

### 3. SLIDING WINDOW

This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string etc.

#### AN EXAMPLE 1

Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```javascript
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
maxSubarraySum([4, 2, 1, 6], 1); // 6
maxSubarraySum([4, 2, 1, 6, 2], 4); // 13
maxSubarraySum([], 4); // null
```

#### MY SOLUTION

```javascript
function maxSubarraySum(arr, n) {
  if (arr.length === 0) return null;

  var maxSum = -Infinity;
  var curSum = 0;

  for (let i = 0; i < arr.length - n + 1; i++) {
    for (let j = i; j < n + i; j++) {
      curSum += arr[j];
    }
    if (maxSum < curSum) {
      maxSum = curSum;
    }
    curSum = 0;
  }
  return maxSum;
}
```

##### A NAIVE SOLUTION

```javascript
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }

  var max = -Infinity;
  var temp;

  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
```

##### REFACTOR

```javascript
// Time Complexity - O(n)
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```

### 4. Devide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity.

#### AN EXAMPLE 1

Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1

```javascript
search([1, 2, 3, 4, 5, 6], 4); // 3
search([1, 2, 3, 4, 5, 6], 6); // 5
search([1, 2, 3, 4, 5, 6], 11); // -1
```

##### A NAIVE SOLUTION

```javascript
// Linear Search
// Time Complexity O(n)
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}
```

##### REFACTOR

```javascript
// Binary Search
// Time Complexity O(log n)
function search(arr, val) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
    return -1;
  }
}
```

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>

<details><summary>Search Algorithm</summary>

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

naiveSearch('lorie loled', 'loled');
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

naiveSearch('lorie loled', 'loled');
```

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>

<details><summary>Sort Algorithm</summary>

## SORT ALGORITHM

### WHAT IS SORTING?

Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order.

Examples:

- Sorting numbers from smallest to largest
- Sorting names alphabetically
- Sorting movies based on release year
- Sorting movies based on revenuse

### WHY DO WE NEED TO LEARN THIS?

- Sorting is an increadibly common task, so it's good to know how it works.
- There are many different ways to sort things, and different techniques have their own advantages and disadvantages.
- Sorting comes up in interviews many times!

##### JAVASCRIPT HAS A SORT METHOD

Yes, it does... but it doesn't always work the way you expect.

```javascript
// ["Algorithms", "Colt", "Data Structures", "Steel"]
['Steele', 'Colt', 'Data Structures', 'Algorithms'].sort();
```

```javascript
// [10, 15, 4, 6]
[6, 4, 15, 10].sort();
```

##### TELLING JAVASCRIPT HOW TO SORT

- The built- sort method accepts an optional comparator function.
- You can use this comparator function to tell JavaScript how you want it to sort.
- The comparator looks at pairs of elements(a and b), determines their sort order based on the return value.
  - If it returns a negative number, a should come before b.
  - If it returns a positive number, a should come after b.
  - If it returns 0, a and b are the same as far as the sort is concerned.

```javascript
function numberCompare(num1, num2) {
  return num1 - num2;
}

// [4, 6, 10, 15]
[6, 4, 15, 10].sort(numberCompare);
```

### BUBBLE SORT

A sorting algorithm where the largest values bubble up to the top!

##### BEFORE WE SORT, WE MUST SWAP!

Many sorting algorithms involve some type of swapping functionality(e.g. swapping to numbers to put them in order)

```javascript
// ES5
function swap(arr, idx1, idx2) {
    var temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES6
function swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}
```

##### PSEUDOCODE

- Start looping from a variable called i the end of the array towards the beginning.
- Start an inner loop with a variable called j from the beginning until i - 1.
- If arr[j] is greater than arr[j+1], swap those two values!
- Return the sorted array.

##### MY APPROACH

```javascript
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1]; //  no block scoping
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```

##### SOLUTION - LESS OPTIMIZED

```javascript
function bubbleSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

##### REFACTOR - ES5

```javascript
function bubbleSort(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

##### REFACTOR - ES6

```javascript
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}
```

##### REFACTOR AGAIN!

if it didn't swap anything in the last time, you're not going to swap them the next time. Let's optimize with noSwaps to short the circuit.

```javascript
function bubbleSort(arr) {
  var noSwaps;

  for (var i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
  }
  if(noSwaps) break;
  return arr;
}
```

##### TIME COMPLEXITY

- BEST: O(n)
- AVERAGE: O(n^2)
- WORST : O(n^2)

##### SPACE COMPLEXITY

- O(1)

##### TIPS

- Bubble sort is a good candidate when we know that the data is very nearly sorted.

### SELECTION SORT

Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

##### PSEUDOCODE

- Store the first element as the smallest value you've seen so far.
- Compare this item to the next item in the array until you find a smaller number.
- If a smaller number is found, designate that smaller number to be the new "minumum" and continue until the end of the array.
- If the "minumum" is not the value (index) you initially began with, swap the two values.
- Repeat this with the next element until the array is sorted.

##### MY APPROACH

```javascript
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    var temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}
```

##### SOLUTION - ES5

```javascript
function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) {
      var temp = arr[i];
      arr[i] = arr[lowest];
      arr[lowest] = temp;
    }
  }
  return arr;
}
```

##### SOLUTION - ES6

```javascript
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };

  for (var i = 0; i < arr.length; i++) {
    var lowest = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}
```

##### TIME COMPLEXITY

- BEST - O(n)
- AVERAGE - O(n^2)
- WORST - O(n^2)

##### SPACE COMPLEXITY

- O(1)

### INSERTION SORT

Builds up the sort by gradually creating a larger left half which is always sorted.

##### PSEUDOCODE

- Start by picking the second element in the array.
- Now compare the second element with the one before it and swap if necessary.
- Continue to the next element and if it is in the incorrect order, iterate through the sorted portion(i.e. the left side) to place the element in the correct place.
- Repeat until the array is sorted.

##### MY APPROACH

```javascript
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      if (arr[j] <= arr[j + 1]) break;
      var temp = arr[j + 1];
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
}
```

##### SOLUTION

```javascript
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 9, 76, 4]);
```

##### TIME COMPLEXITY

- BEST: O(n)
- AVERAGE: O(n^2)
- WORST : O(n^2)

##### SPACE COMPLEXITY

- O(1)

### RECAP

- Sorting is fundamental!
- Bubble sort, selection sort, and insertion sort are all roughly equivalent.
- All have average time complexities that are quadratic.
- We can do better... but we need more complex algorithms!

### FASTER SORTS

- There is a family of sorting algorithms that can improve time complexity from O(n^2) to O(nlogn).
- There's a tradeoff between efficiency and simplicity.
- The more efficient algorithms are much less simple, and generally take longer to understand.
- Let's dive in!

### MERGE SORT

- It's a combination of two things - merging and sorting!
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by decomposing an array into smaller arrays of 0 or 1 elements, then building up a newly sorted array.

##### PSEUDOCODE

###### merge

- In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays.
- Given two arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two input arrays.
- This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.
- Create an empty array, take a look at the smallest values in each input array.
- While there are still values we haven't looked at..
  - If the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array.
  - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
  - Once we exhaust one array, push in all remaining values from the other array.

###### mergeSort

- Break up the array into halves until you have arrays that are empty or have one element.
- Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
- Once the array has been merged back together, return the merged (and sorted!) array.

##### SOLUTION

```javascript
function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let mid = Math.flooar(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}
```

##### TIME COMPLEXITY

- BEST: O(nlogn)
- AVERAGE: O(nlogn)
- WORST : O(nlogn)

##### SPACE COMPLEXITY

- O(n)

### QUICK SORT

- Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by selecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.
- Once the pivot is positioned appropriately, quick sort can be applied on either side of the pivot.

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>

<details><summary>Recursion</summary>

## RECURSION

### 1. WHAT IS RECURSION?

Recursion is a process(a function in our case) that calls itself.

##### BUT FIRST... LET'S TALKE ABOUT FUNCTIONS

- In alomost all program langauges, there is a built in data structure that manages what happens when functions are invoked.

##### THE CALL STACK

- It's a stack data structure -we'll talk about that later!
- Any time a function is invoked it is placed(pushed) on the top of the call stack.
- When JavaScript sees the return keyword or when the function ends, the JavaScript engine will remove(pop).

##### IT'S EVERYWHERE!

- JSON.parse / JSON.stringfy
- document.getElementById and DOM traversal algorithms
- Object traversal
- We will see it with more complex data structures
- It's sometimes a cleaner alternative to iteration

##### WHY DO I CARE?

- You're used to functions being pushed on the call stack and popped off when they are done.
- When we write recursive functions, we keep pushing new functions onto the call stack!

### 2. HOW RECURSIVE FUNCTIONS WORK?

Invoke the same function with a different input until you reach your base case!

##### BASE CASE

The condition when the recursion ends. This is the most important concept to understand.

##### TWO ESSENTIAL PARTS OF A RECURSIVE FUNCTION!

- Base Case
- Different Input

##### AN EXAMPLE 1 - RECURSIVE FUNCTION

```javascript
function countDown(num) {
  if (num <= 0) {
    console.log('All done!');
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}
```

##### AN EXAMPLE 2 - RECURSIVE FUNCTION

```javascript
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
```

##### CHECK-LIST

- Can you spot the base case?
- Do you notice the different input?
- What would happen if we didn't return?

##### NON-RECURSIVE SOLUTION - FACTORIAL

```javascript
function factorial(num) {
  let total = 1;

  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}
```

##### RECURSIVE SOLUTION - FACTORIAL

```javascript
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}
```

##### WHERE THINGS GO WRONG

- No base case
- Forgetting to return or returning the wrong thing!
- Stack overflow!(e.g. Maximum call stack size exceeded)

```javascript
// This is ok.
function factorial(num) {
  if (num === 1) return 1;
  return num * factorial(num);
}

factorial(5);
```

```javascript
// Never end!
function factorial(num) {
  if (num === 1) console.log(1);
  return num * factorial(num - 1);
}

factorial(5);
```

### 3. HELPER VS PURE

##### HELPER METHOD RECURSION

```javascript
function outer(input) {
  var outerScopedVariable = [];

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--);
  }
  helper(input);
  return outerScopedVariable;
}
```

##### ANOTHER EXAMPLE

Let's try to collect all of the odd values in an array!

```javascript
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }

  helper(arr);
  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

##### PURE RECURSION

```javascript
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);
```

##### PURE RECURSION TIPS

- For arrays, use methods like slice, the spread operator, and concat that make copies of arrays so you do not mutate them.
- Remember that strings are imumutable so you will need to use methods like slice, substr, or substring to make copies of strings.
- To make copies of objects use Object.assign, or the spread operator.

### REFERENCE

[JavaScript Algorithms and Data Structures Masterclass - Udemy](https://www.udemy.com/js-algorithms-and-data-structures-masterclass/)

</details>
