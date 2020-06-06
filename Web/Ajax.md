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
(function () {
  var xhr;
  document.getElementById("reqBtn").addEventListener("click", makeRequest);

  function makeRequest() {
    // IE 7+, Chrome, Mozila, Safari ...
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      // IE 6 and older
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (!xhr) {
      console.log("Can't make a httpReqeust.");
      return false;
    }
    // Call the function when the request changes state.
    xhr.onreadystatechange = checkState;
    // Initializes a request.
    xhr.open("GET", "http://www.example.org/some.file");
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
      console.log("Caught Exception: " + e.description);
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
(function () {
  var xhr;
  var userName = document.getElementById("userName").value;
  var url = "http://www.example.org/some.file";

  document.getElementById("reqBtn").addEventListener("click", makeRequest);

  function makeRequest(url, userName) {
    // IE 7+, Chrome, Mozila, Safari ...
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
      // IE 6 and older
    } else {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
    if (!xhr) {
      console.log("Cannot create an XMLHTTP instance");
      return false;
    }
    // Call the function when the request changes state.
    xhr.onreadystatechange = checkState;
    // Initializes a request.
    xhr.open("POST", url);
    // Set the MIME type of the request for form data sent as a query string
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // Sends the request.
    xhr.send("userName=" + encodeURIComponent(userName));
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
          console.log("something went wrong.");
        }
      }
      // e.g. the server went down.
    } catch (e) {
      console.log("Caught Exception: " + e.description);
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

- [Ajax - Namuwiki](https://namu.wiki/w/AJAX "Ajax")
- [Ajax - Wikipedia](<https://en.wikipedia.org/wiki/Ajax_(programming)> "Ajax")
- [Ajax - MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started "Ajax")

---

1.<a name="ajax1"></a> 기존의 웹 애플리케이션 방식에 따르면 클라이언트인 웹페이지의 회원가입 입력폼에서 폼을 채우고 회원가입을 누르면 서버는 이를 처리하고 다시 기존과 중복되는 부분이 많은 웹페이지를 만들어 클라이언트에 보낸다. 이는 비슷한 페이지를 다시 보내어 대역폭을 낭비한다는 점에서 비효율적이며 서버에 부담이 된다. Ajax를 사용하면 새로고침없이 필요한 데이터만 교환하여 대역폭 낭비 없이 회원가입을 처리할 수 있다.

2. <a name="ajax2"></a>문서나 스크립트가 다른 출처의 리소스와 통신하는 것을 제한하는 중요한 보안 방식이다.
