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
validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); //false
validAnagram("awesome", "awesome"); // false
validAnagram("qwerty", "qeywrt"); // true
validAnagram("texttwisttime", "timetwisttext"); // true
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
