# Network

<details><summary>HTTP Cache</summary>

## HTTP 캐시

### 캐시란?

캐시란 데이터를 임시로 저장해두는 공간이다. 캐시의 목적은 자주 사용되는 데이터를 빠르게 접근할 수 있는 공간에 임시로 저장하고 필요할 때마다 재사용함으로써 성능을 높이는 것이다. 캐시는 CPU, 하드 디스크, RAM 뿐만 아니라 게이트웨이 캐시, CDN, 리버스 프록시 캐시 등 여기저기에서 사용된다.

### 그렇다면 HTTP 캐시란?

똑똑한 브라우저 개발자들은 브라우저에도 캐시를 구현해 놓았다. 이른바 HTTP 캐시(웹 캐시라고도 한다)가 바로 그 구현체이다. 브라우저는 웹 페이지를 최초 방문하고서 이미지 파일, html, css, js와 같은 일부 파일들을 사용자의 하드 디스크에 저장한다. 그리고 만약 사용자가 다시 방문하게 되면 파일이 변경되지 않았다면 서버에 데이터를 요청하지 않고 하드 디스크에 저장된 파일들을 재사용한다. 브라우저에서 HTTP 캐시를 지원하지 않았다면 사용자는 매번 중복된 파일들을 서버로부터 다운로드 받아야할 것이다. 사용자가 브라우저 캐시 삭제를 하고 사이트에 접속하면 로딩 속도가 느린 것도 이러한 이유에서이다.

### HTTP 캐시 제어

민감한 정보(은행 데이터 등)가 캐시에 저장되는 것을 피하기 위해 혹은 다른 이유로 캐싱를 컨트롤할 필요가 있다. HTTP 캐시는 Cache-control 헤더를 제공(HTTP/1.1 기준)함으로써 캐싱을 제어하는 방법을 제공한다.

- no-store: 캐시를 사용하지 않는다. 다시 말해, 서버에 매번 데이터를 요청하여 전달받는다.
- no-cache: 캐시에 저장된 데이터를 사용하기 전에 서버에 먼저 유효성 검증을 요청하여 이를 통과해야 한다. 유효성이 검증되면 브라우저는 캐시에 저장된 데이터를 사용할 수 있다. 그렇지 않으면 서버로부터 데이터를 전달받는다.
- private: 단일 사용자(사용자 브라우저)에게만 캐시를 허용한다.
- public: 단일 사용자 외에도 캐시를 허용한다.
- max-age=1536000: 캐시에 저장된 데이터의 만료 시간을 설정할 수 있다. 만료 시간이 지나면 해당 데이터는 유효성을 잃게된다(Cache is stale).

  <div align="center">
    <img src="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-decision-tree.png?hl=ko" width="400" align="middle"></img> 
      <br>
      <br>
      <sup>Cache-Control Flow&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</sup>  
         <br>
      <br>
  </div>

* 참고로 HTTP/1.0을 지원하려면 [Pragma](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Pragma) 헤더를 사용하자.

### HTTP 캐시 데이터 만료 기간 갱신

Cache-Control 헤더를 캐시에 저장된 데이터에 만료 기간을 주어 유효성 여부를 파악할 수 있다. 만료 기간이 지나 캐시에 저장된 데이터가 유효성을 잃는다면 그 데이터는 제거되어야 할까? 아니다. 만료 기간이 지났어도 서버의 데이터가 갱신되지 않았다면 이는 여전히 서버와 동일한 데이터이다. 그렇다면 이를 어떻게 구분할 것인가?

#### ETag와 If-None-Match

서버는 자원을 기반으로 생성된 특수한 토큰 값을 Etag 헤더에 담아 클라이언트에 전송한다. 그리고 클라이언트는 이 토큰 값을 가지고 있다가 서버에 데이터를 요청할 때 토큰 값을 If-None-Match 헤더에 담아 전송한다.

  <div align="center">
    <img src="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-control.png?hl=ko" width="400" align="middle"></img> 
      <br>
      <br>
      <sup>서버 ETag 헤더와 클라이언트 If-None-Match 헤더</sup>  
         <br>
      <br>
  </div>

이 때 서버는 현재 서버의 자원과 클라이언트에서 전달받은 토큰을 서로 비교한다. 서로 값이 일치하지 않는다는 것은 서버의 자원이 변경되었다는 것을 의미하기 때문에 서버는 새로운 자원을 반환한다. 그러나 값이 일치한다면 변경되지 않은 것으로 서버는 자원을 반환하지 않고 '304 Not Modifed'을 응답한다. 이로 인해 캐시에 저장된 데이터는 만료 기간이 갱신되고 다시 유효성이 확인된 상태가 된다.

 <div align="center">
    <img src="https://mdn.mozillademos.org/files/13771/HTTPStaleness.png" width="500" align="middle"></img> 
      <br>
      <br>
      <sup>캐시 데이터의 유효성 확인과 만료 기간 갱신</sup>  
         <br>
      <br>
  </div>

### 캐시의 문제점

캐시 자원의 만료 기간을 길게 설정하면 캐시에 저장된 자원은 오래오래 재사용할 수 있다. 그러나 캐시에 저장된 자원의 유효 기간이 만료되지 않은 상태에서 서버의 참조 자원이 수정되면 즉시 클라이언트에 반영되지 않는 문제가 발생한다. 예를 들어 일반 사용자가 어떤 웹 페이지에 처음으로 접속하였고 브라우저가 다음 index.html과 stylecss 두 자원을 캐시에 저장하였다고 가정해보자.

```html
// index.html
<html>
  <head>
    // ...
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    // some code here...
  </body>
</html>
```

```css
/* style.css */
body {
  background-color: red;
}
```

만약 해당 서버 관리자가 style.css 파일의 background-color를 blue로 바꾸고 서버에 반영한지 얼마 지나지 않아 사용자가 다시 그 웹 페이지에 접속했을 때 업데이트가 반영되어 있을까? 반영되지 않는다. 이러현 현상이 발생하는 이유는 서버의 css 파일 내용 자체는 수정되었지만 여전히 html 파일 안에 있는 css를 참조하는 url 링크에는 변한 것이 없기 때문이다. 이로 인해 유효성 검사는 문제없음을 확인한 클라이언트는 캐시에 저장된 style.css를 가져와 사용하게 되는 것이다. (단 캐시에 저장된 데이터의 만료 기간이 종료되었다면 위에서 살펴본 서버 자원과 클라이언트의 If-None-Match 헤더에 담긴 토큰 값 비교 과정에서 유효성 검증이 실패하기 때문에 새로운 자원을 서버로부터 가져온다.)

### Revving 전략

그렇다면 style.css처럼 서버의 변경 사항을 빠르게 반영하기 위해서는 어떻게 해야할까? 자원에 수정이 발생할 때마다 해당 자원을 참조하는 링크를 수정하는 것이다. 일반적으로 다음 코드처럼 파일 이름에 고유의 식별 번호를 지정하고 이를 링크에 반영하면 된다.

```html
// index.html
<html>
  <head>
    // ...
    <!-- style.css v1 -->
    <!-- <link rel="stylesheet" href="style.css" />  -->
    <link rel="stylesheet" href="style.3da37df.css" />
  </head>
  <body>
    // some code here...
  </body>
</html>
```

```css
/* style.3da37df.css */
body {
  background-color: blue; // 즉시 반영된다.
}
```

다음 그림들을 보면 더 쉽게 이해될 것이다. 이미지, css, javascript 파일 모두 변경 사항이 생기면 이를 구분하기 위해 고유의 값을 파일 이름에 반영한다.

<div align="center">
    <img src="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/images/http-cache-hierarchy.png?hl=ko" width="500" align="middle"></img>
      <br>
      <br>
      <sup>Revving 설명 그림1</sup>
         <br>
      <br>
  </div>

<div align="center">
    <img src="https://mdn.mozillademos.org/files/13779/HTTPRevved.png" width="500" align="middle"></img>
      <br>
      <br>
      <sup>Revving 설명 그림 2</sup>
         <br>
      <br>
  </div>

### HTTP 캐시의 이점

HTTP 캐시를 사용하여 얻을 수 있는 이점은 다음과 같다.

- 불필요한 데이터 전송 감소로 대역폭 낭비 방지하고 트래픽을 줄일 수 있다.
- 서버 부담을 줄이고 안정성(처리량)을 높일 수 있다.
- 지연 감소로 인한 응답 시간을 향상시킬 수 있다.

### 참고 문서

- [The hidden components of Web Caching - freeCodeCamp](https://medium.freecodecamp.org/the-hidden-components-of-web-caching-970854fe2c49)
- [HTTP Caching - Google Web Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)
- [HTTP Caching - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)

</details>
