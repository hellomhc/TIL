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

<details><summary>로컬 스토리지 vs 세션 스토리지 vs 쿠키</summary>

## 로컬 스토리지(LocalStorage)

- 저장되는 데이터의 만료 기간이 없다.
- 웹페이지를 닫아도 저장된 데이터는 삭제되지 않는다.
- 자바스크립트로 삭제하거나 브라우저 캐시 / 로컬 저장된 데이터를 클리어하여 삭제해야 한다.
- 저장할 수 있는 공간은 세션 스토리지, 쿠키보다 크다.
- 클라이언트에서만 사용할 수 있다.

## 세션 스토리지(SessionStorage)

- 저장되는 데이터의 만료 기간이 있다.
- 웹페이지를 닫으면 저장된 데이터는 삭제된다.(세션이 끝나면 삭제된다)
- 저장할 수 있는 공간은 쿠키보다 크다.(최소 5MB)
- 클라이언트에서만 사용할 수 있다.

## 쿠키(Cookie)

- 만료 기간이 있으며 이는 서버 또는 클라이언트에서 설정할 수 있다.(보통 서버에서 설정한다)
- 주로 서버로 전송해야할 데이터를 저장한다.(로그인 유지, 사용자 환경 설정 등)
- 저장할 수있는 공간은 쿠키당 4096자(4KB)으로 제한된다.
- 클라이언트뿐만 아니라 서버에서도 사용할 수 있다.
- 쿠키에 httpOnly 플래그를 설정하여 쿠키의 보안을 높일 수 있다. 이는 쿠키에 대한 클라이언트의 접근을 차단한다.

### 쿠키 생성 과정

1. 클라이언트는 텀블러(tumblr.) 서버에 로그인 요청(POST)을 한다.
2. 로그인에 성공하면 텀블러 서버는 필요한 데이터와 쿠키(이름, 값, 만료날짜 등을 가짐)를 클라이언트에게 응답한다.
3. 클라이언트는 쿠키를 하드디스크에 저장한다.
4. 서버는 클라이언트가 요청할 때마다 쿠키에 담긴 정보를 읽어 클라이언트를 식별하고 맞춤화된 서비스를 제공한다.

## 비교

<table>
  <thead>
    <tr>
      <th>구분</th>
      <th>만료 기간</th>
      <th>저장 크기 제한</th>
      <th>삭제 방법</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>로컬 스토리지</td>
      <td>X</td>
      <td>최소 5MB</td>
      <td>자바스크립트 또는 브라우저 기능</td>
    </tr>
    <tr>
      <td>세션 스토리지</td>
      <td>O</td>
      <td>최소 5MB</td>
      <td>세션 종료(브라우저 닫기)</td>
    </tr>
    <tr>
      <td>쿠키</td>
      <td>O</td>
      <td>최대 4KB</td>
      <td>자바스크립트 또는 브라우저 기능</td>
    </tr>
  </tbody>
</table>

## 참고 자료

- [LocalStorage vs SessionStorage vs Cookies - Renat Galyamov](https://renatello.com/code/localstorage-vs-sessionstorage-vs-cookies/ 'LocalStorage vs SessionStorage vs Cookies')
- [Local Storage vs Session Storage vs Cookie - Pratyush](https://scotch.io/@PratyushB/local-storage-vs-session-storage-vs-cookie 'Local Storage vs Session Storage vs Cookie')

---

   </details>

<details><summary>Ajax(Asynchronous JavaScript and XML)</summary>

## Ajax란?

브라우저 백그라운드에서 서버와 비동기 통신을 하여 빠르게 동작하는 동적인 웹 페이지를 만들기 위한 개발 기법이다.

## Ajax를 이루는 구성 요소

- 문서의 구조와 스타일링을 위한 HTML, CSS
- 화면을 동적으로 다루기 위한 DOM
- 통신을 위한 데이터 형식인 JSON, XML, html, text etc.
- 웹 서버와의 비동기 통신을 위한 XMLHttpRequest 객체
- 전체 작업의 제어를 위한 JavaScript

## Ajax의 장단점

### 장점

- 웹페이지 일부를 갱신하기 위해 페이지 새로고침을 할 필요가 없다.
- 서버의 응답을 기다리지 않고 비동기적으로 백그라운드 영역에서 데이터 처리가 가능하다.
- 서버는 클라이언트가 요청하는 데이터만 전달하면 되기 때문에 서버의 부담이 줄어든다.<sup>[[1]](#ajax1)</sup>
- 클라이언트가 요청하는 데이터만 별도로 전달받기 때문에 클라이언트가 수신하는 데이터의 양이 감소한다.

### 단점

- Ajax를 지원하지 않는 브라우저가 있다. (오페라 7 이하, IE 4 이하 등)
- 동적 페이지 렌더링으로 인해 자바스크립트를 해석하지 못하는 검색 엔진에서는 내용이 검색되지 않는다.
- 브라우저에서 자바스크립트 기능을 꺼버리면 Ajax 기반 사이트는 제대로 작동되지 않는다.
- 쿼리 요청은 서버에 부담이 크다. 이를 악용하여 무제한 요청-응답으로 인해 서버 과부하를 증가시킬 수 있다.
- 동일 출처 정책(Same-origin policy)<sup>[[2]](#ajax2)</sup>이 적용되어 CORS(Cross-Origin Resource Sharing)없이는 다른 서버와 통신하는 것이 제한된다.
- Ajax hijacking으로 인한 보안 문제가 있다.
- Ajax는 풀링 방식을 사용하므로, 서버 푸시 방식의 실시간 서비스는 만들 수 없다.

## Ajax 구현하기

### GET

```html
<button id="reqBtn" type="button">Make a Request</button>
```

```javascript
(function() {
  var xhr;
  document.getElementById('reqBtn').addEventListener('click', makeRequest);

  function makeRequest() {
    // IE 7+, Chrome, Mozila, Safari ...
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      // IE 6 and older
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (!xhr) {
      console.log("Can't make a httpReqeust.");
      return false;
    }
    // Call the function when the request changes state.
    xhr.onreadystatechange = checkState;
    // Initializes a request.
    xhr.open('GET', 'http://www.example.org/some.file');
    // Sends the request.
    xhr.send();
  }

  function checkState() {
    try {
      // The data transfer has been completed successfully or failed.
      if (xhr.readyState === XMLHttpReqeust.DONE) {
        // The request was successful.
        if (xhr.status === 200) {
          console.log(xhr.responseText);
          // There was a problem with the request.
        } else {
          console.log("There's something wrong.");
        }
      }
      // e.g. the server went down.
    } catch (e) {
      console.log('Caught Exception: ' + e.description);
    }
  }
})();
```

### POST

```html
<label>Your name: <input type="text" id="userName" /> </label>
<button id="reqBtn">Make a request</button>
```

```javascript
(function() {
  var xhr;
  var userName = document.getElementById('userName').value;
  var url = 'http://www.example.org/some.file';

  document.getElementById('reqBtn').addEventListener('click', makeRequest);

  function makeRequest(url, userName) {
    // IE 7+, Chrome, Mozila, Safari ...
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      // IE 6 and older
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP');
    }
    if (!xhr) {
      console.log('Cannot create an XMLHTTP instance');
      return false;
    }
    // Call the function when the request changes state.
    xhr.onreadystatechange = checkState;
    // Initializes a request.
    xhr.open('POST', url);
    // Set the MIME type of the request for form data sent as a query string
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // Sends the request.
    xhr.send('userName=' + encodeURIComponent(userName));
  }

  function checkState() {
    try {
      // The data transfer has been completed successfully or failed.
      if (xhr.readyState === XMLHttpReqeust.DONE) {
        // The request was successful.
        if (xhr.status === 200) {
          // Assume that the server response with {"userData":"Jane","computedString":"Hi, Jane!"}.
          var result = JSON.parse(httpRequest.responseText);
          console.log(result.computedString);
          // There was a problem with the request.
        } else {
          console.log('something went wrong.');
        }
      }
      // e.g. the server went down.
    } catch (e) {
      console.log('Caught Exception: ' + e.description);
    }
  }
})();
```

## 요약

- Ajax는 비동기식 자바스크립트 XML(Asynchronous JavaScript and XML) 약어이다.
- Ajax는 비동기 웹 애플리케이션 개발에 사용된다.
- Ajax는 하나의 새로운 기술이 아닌 기존의 여러 기술들을 사용하는 새로운 접근 방식이다.
- Ajax는 HTML, CSS, JavaScript, DOM, XMLHttpRequest 객체를 사용하여 구현된다.
- XMLHttpRequest 객체를 사용하여 서버와 데이터를 주고 받는다.
- JSON, XML, HTML, Text file 등 다양한 형식의 정보를 주고 받을 수 있다.
- 서버에서 전송된 데이터를 가지고 웹페이지 리로딩없이 웹페이지의 일부를 업데이트할 수 있다.

## 참고 자료

- [Ajax - Namuwiki](https://namu.wiki/w/AJAX 'Ajax')
- [Ajax - Wikipedia](<https://en.wikipedia.org/wiki/Ajax_(programming)> 'Ajax')
- [Ajax - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started 'Ajax')

---

1.<a name="ajax1"></a> 기존의 웹 애플리케이션 방식에 따르면 클라이언트인 웹페이지의 회원가입 입력폼에서 폼을 채우고 회원가입을 누르면 서버는 이를 처리하고 다시 기존과 중복되는 부분이 많은 웹페이지를 만들어 클라이언트에 보낸다. 이는 비슷한 페이지를 다시 보내어 대역폭을 낭비한다는 점에서 비효율적이며 서버에 부담이 된다. Ajax를 사용하면 새로고침없이 필요한 데이터만 교환하여 대역폭 낭비 없이 회원가입을 처리할 수 있다.

2. <a name="ajax2"></a>문서나 스크립트가 다른 출처의 리소스와 통신하는 것을 제한하는 중요한 보안 방식이다.
   </details>
