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

- [Values - You don't know JS](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch2.md "Values")

---

1. <a name="number1"></a> 컴퓨터가 실수를 이해할 수 있도록 부동 소수점 방식을 사용해 실수를 표현한다. 이는 부호(S), 지수(E), 가수(M) 형태로 메모리에 저장된다. 참고로 C에서 double은 배정밀도(부호 1비트, 지수 11비트, 가수 52비트로 총 64비트) 표준 포맷으로, float는 단정밀도 표준 포맷(부호 1 비트, 지수 8 비트, 가수 23 비트로 총 32비트)으로 나타낸다.
2. <a name="number2"></a> 머신 입실론은 컴퓨터가 이해할 수 있는 가장 작은 숫자 단위이다. 자바스크립트 숫자의 머신 입실론은 2<sup>-52</sup>이다.
