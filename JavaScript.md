# 자바스크립트(JavaScript)

<details><summary>타입(Type)</summary>

## 느슨한 타입 언어 & 동적 프로그래밍 언어

자바스크립트는 느슨한 타입 언어(loosely typed language), 동적 프로그래밍 언어(dynamic programming language)<sup>[[1]](#type1)</sup>이다. 런타임에서 타입이 결정되기 때문에 변수를 선언할 때 변수에 할당되는 값의 타입<sup>[[2]](#type2)</sup>을 미리 선언할 필요가 없다.

## 데이터 타입(Data type)

자바스크립트는 총 7개의 타입이 있으며, 크게 기본 타입(primitive type), 참조 타입(reference type)으로 나뉜다. 기본 타입에는 null, undefined, boolean, number, string, symbol(ES6+)이 있으며, 참조 타입에는 object(array, function<sup>[[3]](#type3)</sup>, etc.)가 있다.

## typeof

typeof를 사용하면 변수에 할당된 값의 타입을 알아낼 수 있다. 반환되는 값은 스트링이며, null에 대한 typeof 연산 결과는 예외적으로 "object"이다. function 또한 예외적으로 typeof의 연산 결과 "function"을 반환한다(Date, Regex 등도 "function"을 반환).

```javascript
typeof null; // "object"
typeof undefined; // "undefined"
typeof true; // "boolean"
typeof 42; // "number"
typeof '42'; // "string"
typeof { name: 'object' }; // "object"
typeof Symbol(); // "symbol"
typeof function func() {}; // "function"
typeof Date; // "function"
typeof Date(); // "string"
typeof RegExp; // "function"
typeof RegExp(); // "object"
```

## undefined vs "undeclared"

undefined는 변수가 선언되었으나 현재 아무런 값도 할당되지 않은 상태를 가리키는 반면, undeclared는 변수 자체가 선언된 적이 없는 상태를 나타낸다.

## 참고 자료

- [JavaScript data types and data structures - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures 'JavaScript data types and data structures')
- [동적 프로그래밍 언어 - Wiki](https://ko.wikipedia.org/wiki/%EB%8F%99%EC%A0%81_%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D_%EC%96%B8%EC%96%B4 '동적 프로그래밍 언어')
- [Type - You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md 'Type')

---

1. <a name="type1"></a> 정적 언어에서 컴파일 과정 중 수행하는 특정 일들을 동적 언어에서는 실행 도중(런타임)에 수행한다. 동적 언어가 런타임에 수행하는 일은 코드 추가, 타입 시스템 변경 등이 있다.
2. <a name="type2"></a> 값에는 타입이 있지만 변수에는 타입이 없다.
3. <a name="type3"></a> ECMAScript 명세에는 호출 가능한 객체 (Callable Object, 내부 프로퍼티[[Call]]로 호출할 수 있는 객체)로서 object의 '하위 타입'이라고 명시되어 있다.
   </details>
