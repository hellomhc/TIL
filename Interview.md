## HTML

<details><summary>doctype을 선언하는 이유에 대해 설명하시오.</summary>
doctype은 웹 브라우저가 HTML 문서를 읽어낼 때 그 문서가 어떤 문서 형식을 따르고 있는지 명시적으로 웹브라우저에 알리는 방법이다. 웹 브라우저는 문서 내의 doctype 선언이 존재하는지, 선언되었다면 어떤 버전이 선언되었는지에 따라 레이아웃 엔진의 렌더링 방식을 결정한다. 여기에는 quirks mode, almost standards mode, standards mode 3가지 방식이 있는데 quirks mode는 IE5 이하 버전처럼 오래된 레거시 웹페이지들의 하위 호환성을 유지하기 위한 목적으로 옛 버전 기준에 따라 문서를 렌더링하고 almost standards mode는 일부를 제외하고 HTML5 표준에 따라 문서를 렌더링한다. 그리고 마지막으로 standards mode는 HTML5 표준을 엄격히 따라 문서를 렌더링한다.
</details>

## JavaScript

<details><summary>자바스크립트 엔진의 동작 방식을 설명하시오.</summary>
현대의 웹브라우저를 기준으로 자바스크립트 엔진은 코드를 파싱(구문 분석)하고 추상 구문 트리(Abstract Syntax Tree)를 생성한다. 추상 구문 트리가 생성되면 인터프리터는 이에 기초하여 중간 언어(IR, intermediate representation)인 바이트 코드를 생성한다. 이렇게 생성된 바이트 코드는 다시 컴파일 과정을 거쳐 고도로 최적화된 기계어 코드로 변환된다. 
</details>
<details><summary>null, undefined, undeclared의 차이를 설명하시오.</summary>
undefined는 접근 가능한 스코프에 변수가 선언되었으나 현재 아무런 값이 할당되지 않은 상태를 나타내는 특수 값이고, undeclared는 접근 가능한 스코프에 변수 자체가 선언조차 되지 않았음을 나타낸다. 그리고 마지막으로 null은 값이 없음을 명시적으로 나타내기 위한 특수 값이다.
</details>
<details><summary>이벤트 위임(Event Delegation)을 설명하시오.</summary>
이벤트 위임이란 다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를 바인딩하여 자식 요소의 이벤트를 처리하는 테크닉이다. 브라우저에서 click과 같은 이벤트가 발생하였을 때 이벤트 버블링이 발생한다는 특징을 이용한 것으로 이벤트 핸들러의 바인딩 수의 증가에 따른 성능상 이슈, 코드의 장황함을 해결할 수 있다.
</details>
<details><summary>이벤트 버블링(Event Bubbling)과 이벤트 캡처링(Event Capturing)을 설명하시오.</summary>
이벤트 버블링이란 요소가 중첩된 구조에서 이벤트가 발생하였을 때 중첩 구조의 자식 요소에서 부모 요소의 방향으로 이벤트가 전파되는 것을 의미한다. 반대로 이벤트 캡처링이란 중첩 구조의 부모 요소에서 자식 요소의 방향으로 이벤트가 전파되는 것을 의미힌다.
</details>
<details><summary>==(Loose Equals)와 ===(Strict Equals)의 차이를 설명하시오.</summary>
값의 동등 여부를 확인할 때 ==는 값의 타입 강제 변환을 허용하여 비교하지만  ===는 값의 타입 강제 변환을 허용하지 않고 비교한다.
</details>
<details><summary>이벤트 루프(Event Loop)를 설명하시오.</summary>
호출 스택(Call Stack)과 작업 큐(Task Queue)의 상태를 확인하여 호출 스택이 비어있을 때마다 작업 큐에서 대기하고 있는 이벤트 핸들러를 호출 스택에 추가하여 실행하는 메커니즘이다.
</details>
<details><summary>고차 함수(higher-order function)를 설명하시오.</summary>
고차 함수는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다. 즉, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다. 자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있다.
</details>

## ETC.

<details><summary>트리 쉐이킹(Tree shaking)을 설명하시오.</summary>
트리 쉐이킹이란 자바스크립트 진영에서 흔히 사용되는 용어로 죽은(사용되지 않는) 코드를 제거하는 테크닉이다. 이는 정적 구조의 ES2015 모듈 문법(i.e. import 와 export)에 의존하고 있다. ECMAScript 기반의 Dart, JavaScript, TypeScript와 같은 언어는 컴파일 단계에서 코드를 번들링하는 동안 사용되지 않는 코드를 제거하는 코드 최적화 작업을 수행한다. 여기서 알아두어야 할 점은 트리 쉐이킹은 사용하지 않는 코드를 제거한다기보다는 번들링 과정에서 실제로 사용할 코드만 포함하는 작업이라는 점이다. 즉, 살아 있는 코드 포함 작업이라 할 수 있다.
</details>
