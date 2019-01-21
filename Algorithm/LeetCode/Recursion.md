# RECURSION

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
