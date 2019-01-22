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

BEST - O(n)
WORST - O(n^2)
