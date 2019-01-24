# SORT

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
