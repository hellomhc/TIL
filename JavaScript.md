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

<details><summary>숫자(Number)</summary>

## 배정밀도 부동 소수점

자바스크립트는 모든 숫자를 number 타입 하나로 표현한다. number 타입은 IEEE754의 부동소수점 표준을 따르며 그 중에서도 정확히 배정밀도 표준 포맷(64비트 바이너리)<sup>[[1]](#number1)</sup>을 사용한다.

<div align="center">
	<img src="https://www.wikihow.com/images/thumb/e/ea/Teachme.jpg/728px-Teachme.jpg" align="middle"></img> 
    <br>
    <sub>위 그림은 단정밀도 부동 소수점 표현(32비트)과 배정밀도 부동 소수점 표현(64비트)을 나타낸다. 출처 - <a href="https://www.wikihow.com/Convert-a-Number-from-Decimal-to-IEEE-754-Floating-Point-Representation">Wikihow</a></sub>  
    <br><br>
</div>

## 안전한 정수

정수의 안전 범위는 대략 -(2<sup>53</sup>-1)(약 -9천조) 와 2<sup>53</sup>-1(약 9천조) 사이이다. 이들 각각은 ES6에서 Number.MAX_SAFE_INTEGER, Number.MIN_SAFE_INTEGER로 구현되어 있다. 그러나 비트 연산처럼 32비트 숫자에서만 가능한 연산을 고려하면 실제 정수의 안전 범위는 Math(-2, 31)(약 -21억)에서 Math.pow(2,31)-1(약 21억) 사이이다.

## 0.1 + 0.2 === 0.3?

0.1 + 0.2 === 0.3의 결과는 false이다. 이는 대부분의 십진 소수는 정확하게 이진 소수로 표현될 수 없다. 실제로 저장되는 값은 근사값이기 때문이다. 동등 비교를 하고 싶다면 ES6의 Number.EPSILON<sup>[[2]](#number2)</sup>을 사용하자.

## 참고 자료

- [Values - You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md 'Values')

---

1. <a name="number1"></a> 컴퓨터가 실수를 이해할 수 있도록 부동 소수점 방식을 사용해 실수를 표현한다. 이는 부호(S), 지수(E), 가수(M) 형태로 메모리에 저장된다. 참고로 C에서 double은 배정밀도(부호 1비트, 지수 11비트, 가수 52비트로 총 64비트) 표준 포맷으로, float는 단정밀도 표준 포맷(부호 1 비트, 지수 8 비트, 가수 23 비트로 총 32비트)으로 나타낸다.
2. <a name="number2"></a> 머신 입실론은 컴퓨터가 이해할 수 있는 가장 작은 숫자 단위이다. 자바스크립트 숫자의 머신 입실론은 2<sup>-52</sup>이다.
   </details>
