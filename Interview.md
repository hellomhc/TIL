## Database

<details><summary>트랜잭션(Transaction)이란?</summary>

---

### 트랜잭션이란?

데이터베이스에서 논리적인 작업의 단위로 하나의 작업을 수행하기 위해 필요한 데이터베이스의 연산들을 모아놓은 것을 의미한다.

<div align="center">
	<img src="https://dbscthumb-phinf.pstatic.net/4515_000_1/20160715113146717_7IPQEMRXW.jpg/ka26_194_i1.jpg?type=w530_fst_n&wm=Y" align="middle"></img> 
    <br><br>
    <sup>계좌이체 트랜잭션</sup>
</div>

### 참고 문서

[데이터베이스 개론, 트랜잭션의 개념 - 김연희](https://terms.naver.com/entry.nhn?docId=3431258&cid=58430&categoryId=58430&expCategoryId=58430)

---

</details>

<details><summary>ACID란?</summary>

---

### ACID란?
데이터베이스의 트랜잭션이 안전하게 수행되기 위해 필요한 특성들을 의미한다.

- 원자성(Atomicity): 트랜잭션의 연산들이 부분적으로 실행되지 않고 하나의 작업으로 처리되어야 한다. 
- 일관성(Consistency): 트랜잭션이 성공적으로 끝나면 데이터베이스가 일관적인 상태를 유지해야 한다.
- 격리성(Isolation): 트랜잭션이 완료될 때까지 해당 트랜잭션의 중간 연산 결과에 다른 트랜잭션들이 접근할 수 없다.
- 지속성(Durability): 트랜잭션이 성공적으로 끝나고 데이터베이스에 반영된 트랜잭션 결과는 손실되지 않고 영구적이어야 한다. 

### 참고 문서


[데이터베이스 개론, 트랜잭션의 특성 - 김연희](https://terms.naver.com/entry.nhn?docId=3431259&cid=58430&categoryId=58430&expCategoryId=58430)

---

</details>


## Network

<details><summary>HTTP란?</summary>

---

### HTTP란?

www상에서 클라이언트와 서버 간의 정보를 주고받는 데 사용되는 프로토콜이다. TCP와 UDP를 사용하고 80번 포트를 사용하며 현재 HTTP 버전 2까지 나왔다.  

##### HTTP의 대표적인 특징

- 비연결성: 클라이언트의 요청으로 서버와 한번 연결을 맺은 후 서버가 응답하면 연결을 끊어버린다. 연결을 유지하지 않기 때문에 자원을 아낄 수 있지만 연결/해제 과정에서 오버헤드가 발생한다는 단점이 있다.
- 무상태: 연결이 유지되지 않는 무상태(stateless)의 특징을 가지기 때문에 페이지 리로딩이 발생하면 서버는 클라이언트를 식별할 수 없다. 이를 해결하기 위해 서버에서 쿠키, 세션을 사용하여 클라이언트를 식별하거나 또는 서버의 부담을 줄이기 위해 토큰 기반의 인증 방식을 사용한다. 
- 상태 코드: HTTP 프로토콜은 상태 코드를 가진다. 클라이언트가 서버에 요청을 하면, 서버는 요청에 대한 결과를 숫자 코드로 반환한다. 대표적으로 400번대는 클라이언트 에러를, 500번대 에러는 서버 에러를 의미한다. 우리가 흔히 보는 404에러가 여기에 속한다. 
- HTTP 메서드: 클라이언트가 서버로 요청할 때, 요청의 의미를 표현하기 위한 메서드가 존재한다. 여기에는 대표적으로 get, post, put, delete, patch 등이 있다. 
- HTTP 헤더: 클라이언트와 서버가 요청-응답 과정에서 전달하는 메시지인 헤더이다. 헤더에는 인증 정보를 담고 있는 헤더, 캐시를 다루기 위한 헤더, 쿠키를 설정하기 위한 헤더, CORS를 제어하기 위한 헤더 등 다양한 헤더들이 있다. 

이러한 HTTP의 특징을 좀 더 극대화하여 효율적으로 이용하기 위해 만들어진 아키텍처 구조가 있는데 이를 [REST](https://meetup.toast.com/posts/92)라고 한다.

---

</details>

<details><summary>HTTP 헤더란?</summary>

---

### HTTP 헤더란?

클라이언트와 서버 간의 통신인 요청-응답 과정에서 필요한 정보를 전달하기 위한 수단이다. 크게 요청 헤더와 응답헤더로 나뉘며 용도에 따라 인증 헤더, 캐시 설정 헤더, 캐시 데이터의 유효성 확인을 위한 헤더, 쿠키 설정 헤더, CORS 헤더 등 다양한 헤더들이 있다.

---

</details>

<details><summary>HTTP/1.1과 HTTP/2.0의 차이는?</summary>

---

### HTTP/1.1과 HTTP/2.0의 차이는?

먼저, 기존 HTTP 1.1버전의 경우 요청-응답 과정에서 텍스트 기반의 프로토콜을 사용해왔지만 HTTP 2버전에서는 바이너리 기반의 프로토콜을 사용한다. HTTP/2의 경우 기존의 헤더 필드를 효율적으로 압축하여 프로토콜 오버헤드를 최소화하였다. 그 외에도 서버 푸시 지원 등 지연을 줄이고 성능과 보안 향상을 위한 여러 개선 사항이 있다. HTTP/2는 최신 브라우저에서는 거의 지원하지만 특정 브라우저에서는 호환성 문제가 발생할 수 있다.(IE 기준으로 11 버전에서 부분적으로 지원)

---

</details>

<details><summary>HTTP와 HTTPS의 차이는?</summary>

---

### HTTP와 HTTPS의 차이는?

- HTTP: www상에서 클라이언트와 서버 간의 정보를 주고받는 데 사용되는 프로토콜로 현재 HTTP/2.0까지 나왔으며 HTTP/1.1 버전 이하는 텍스트 기반의 프로토콜을 사용하고 HTTP/2.0부터는 바이너리 기반의 프로토콜을 사용한다.

- HTTPS: HTTP는 HTTP/1.1 버전 이하 기준으로 텍스트 기반의 프로토콜을 사용한다. 정보를 텍스트로 전송하기 때문에 네트워크에서 이 정보를 몰래 엿볼 수 있다. 이런 보안 문제로 인해 클라이언트가 먼저 서버와 암호화 통신 채널을 설정한 후에 텍스트 기반의 HTTP 메시지를 보내도록 하여 정보 유출을 막도록 보완한 것을 HTTPS라고 한다. 여기서 암호화 채널은 이전에 SSL이라고 불렸던 TLS 프로토콜(SSL은 넷스케이프가 개발한 프로토콜이고 이를 IETF에서 좀 더 보완하고 개선하여 만든 프로토콜이 TLS임)을 사용한다. 클라이언트와 서버는 서로의 TLS 버전을 확인하고 인증서를 사용해 서로 신뢰가 가능한지 먼저 검증한다. 검증이 확인되면 서로 간의 통신에 사용할 암호를 교환하고 이때부터 해당 암호를 사용하여 서로 통신을 하게 된다. HTTPS를 사용함으로써 보안을 높일 수 있는 것은 큰 장점이지만 암호화와 복호화 과정에서 발생하는 오버헤드로 인해 성능 이슈가 발생할 수 있다는 단점이 있다.

---

</details>

<details><summary>TCP와 UDP의 차이는?</summary>

---

### TCP와 UDP의 차이는?

##### TCP

- 연결 지향적이다.
- 데이터 신뢰성을 보장한다.
- 데이터가 제대로 도착했는지 확인할 수 있다.(확인 응답)
  - TCP는 확인 응답이 되지 않은 데이터를 재전송함(TCP 재전송)
- 데이터의 순서를 보장한다.(순서 제어)
- 송신측과 수신측의 속도를 일치시키거나 또는 네트워크 혼잡으로 송신률을 감속하기 위해 데이터 속도를 조절할 수 있다.(흐름 제어, 혼잡 제어)
- 체크섬 외에도 오류를 제어하는 방법이 있다.(오류 검출)
- 헤더가 크고 복잡하여 오버헤드가 크다.(최소 20바이트)
- 단일 노드에게 신뢰성이 보장된 데이터를 전송해야할 때 유용하다(파일 전송, 이메일, 웹 HTTP 통신 등)

<div align="center">
	<img src="https://dbscthumb-phinf.pstatic.net/3578_000_1/20141023224428291_SPTU2CKWQ.jpg/ka8_127_i1.jpg?type=w530_fst_n&wm=Y" width="400" align="middle"></img> 
    <br><br>
    <sup>TCP 헤더 구조</sup>
</div>

##### UDP

- 비연결지향적이다.
- 데이터 신뢰성을 보장하지 않는다.
- 데이터가 제대로 도착했는지 확인할 방법이 없다.
- 데이터의 순서를 보장하지 않는다.
- 데이터 속도를 조절할 수 없다.
- 체크섬 외에는 오류 검출 방법이 존재하지 않는다.
  - UDP를 사용하는 프로그램측에서 오류 제어 기능을 제공해야함
- 헤더가 작고 단순하여 오버헤드가 상대적으로 작다.(8바이트)
- 구조가 단순하기 때문에 전송 효율이 좋고 고속 전송이 필요한 환경에 유용하다.(실시간 스트리밍)

<div align="center">
	<img src="https://dbscthumb-phinf.pstatic.net/3578_000_1/20141023224438889_6S6WSGUNU.jpg/ka8_136_i1.jpg?type=w460_fst_n&wm=Y" align="middle"></img> 
    <br><br>
    <sup>UDP 헤더 구조</sup>
</div>

### 참고 문서

[TCP 헤더 - 데이터 통신과 컴퓨터 네트워크](https://terms.naver.com/entry.nhn?docId=2271914&cid=51207&categoryId=51207&expCategoryId=51207)  
[UDP 헤더 - 데이터 통신과 컴퓨터 네트워크](https://terms.naver.com/entry.nhn?docId=2271923&cid=51207&categoryId=51207&expCategoryId=51207)  
[TCP - 정보통신기술용어해설](http://www.ktword.co.kr/abbr_view.php?nav=&m_temp1=347&id=428)  
[UDP - 정보통신기술용어해설](http://www.ktword.co.kr/abbr_view.php?m_temp1=323)

---

</details>

<details><summary>CORS란?</summary>

---

### CORS란?

브라우저는 동일 출처 정책(same origin policy)로 인해 기본적으로 문서나 스크립트가 다른 출처의 자원과 통신하는 것을 제한한다. 그러나 특정 헤더를 사용하여 이를 허용할 수 있는데 이를 교차 출처 리소스 공유(CORS)라고 한다. CORS를 사용하기 위한 방법으로는 Access-Control-Allow-Origin을 사용하는 것이다. 써드 파트 도메인에서 실행 중인 서버에서 Access-Control-Allow-Origin의 값에 요청을 허용하기 위한 도메인을 설정하거나 모든 타 도메인의 요청을 허용하는 와일드 카드를(\*)를 사용하여 타 도메인의 요청을 허용할 수 있다. 이 때 헤더에 따라 요청-응답 과정이 달라지는데 대표적으로 get, post를 사용할 경우 기본적인 요청-응답의 과정을 거치지만 그외 put, delete, patch 등의 경우 실제 요청이 안전한 요청인지 확인하기 위해 먼저 preflight 요청-응답을 거친 후에 메인 요청-응답이 실행된다.

### 참고 문서

[Cross-Origin Resource Sharing(CORS) - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

---

</details>

<details><summary>동일 출처 정책(Same Origin Policy)이란?</summary>

---

### 동일 출처 정책이란?

문서나 스크립트가 다른 출처의 리소스와 통신하는 것을 제한하는 보안 방식이다. 이는 잠재적 악성 문서를 격리하여 공격 경로를 줄이는데 도움이 된다. 기본적으로 동일 출처 정책이 적용되지만 CORS를 사용하면 다른 출처의 리소스와 통신이 허용된다.

### 참고 문서
[Same-origin policy - MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)

---

</details>

<details><summary>GET 방식과 POST 방식의 차이는?</summary>

---

### GET 방식과 POST 방식의 차이는?

##### GET

- 서버에 데이터를 요청할 때 사용한다.
- 캐시가 가능하다.
- 브라우저 히스토리에 기록이 남는다.
- URI에 쿼리스트링을 사용하여 데이터 전달한다.(데이터 노출)
  - 데이터가 URI에 노출되기 때문에 안전하지 않다.
- 쿼리스트링을 사용하기 때문에 데이터의 길이 제한이 있는 경우도 있고 없는 경우도 있다.(브라우저마다 다름)

##### POST

- 서버에 데이터를 보낼 때 사용한다.
- 캐시가 불가능하다.
- 브라우저 히스토리에 기록이 남지 않는다.
- body에 데이터를 담아 전달한다.(데이터 은폐)
  - 데이터를 바디에 담아 전송하기 때문에 상대적으로 안전하다.
- body에 담아 전송하기 때문에 데이터 길이에 제한이 없다.

---

</details>

<details><summary>WWW<span>.</span>NAVER<span>.</span>COM을 입력했을 때 발생하는 과정은?</summary>

---

### WWW<span>.</span>NAVER<span>.</span>COM을 입력했을 때 발생하는 과정은?

브라우저는 도메인에 상응하는 IP 주소를 찾기 위해 먼저 캐시에 저장된 DNS 기록이 있는지 확인한다. 이때 브라우저 캐시부터 OS 캐시, 라우터 캐시, ISP의 서버 캐시 순서로 DNS 기록을 조회한다. 만약 ISP 캐시에도 존재하지 않는다면 ISP 서버는 재귀적으로 도메인 아키텍처에 따라 나뉘어진 각 루트 네임 서버, 탑 레벨 도메인에 해당하는 .com 네임 서버, 세컨드 레벨 도메인인 naver에 해당하는 네임 서버, 써드 레벨 도메인인 www<span>.</span>에 해당하는 네임 서버를 순서대로 확인한다. 이 모든 과정을 거치고 DNS 기록을 찾게되면 다시 브라우저에 IP 주소를 보낸다. IP 주소를 전달 받은 브라우저는 IP 주소에 해당하는 서버와 통신하기 위해 TCP/IP 3 way handshake를 시작한다. TCP/IP 3 way handshake가 무사히 끝나면 브라우저는 서버에 HTTP 요청을 보낸다. 서버는 HTTP 요청을 처리하고 요청에 따른 필요한 html, css, javascript과 같은 데이터를 보낸다. 데이터를 전달 받은 브라우저는 html과 css, javascript를 파싱하여 DOM 트리, CSSOM 트리, AST 트리를 만들고 렌더링이 시작해 사용자가 볼 수 있는 화면을 나타낸다.

### 참고 문서

[What happens when you type an URL in the browser and press enter? - Maneesha Wijesinghe](https://medium.com/@maneesha.wijesinghe1/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a)

---

</details>

## HTML

<details><summary>doctype이란?</summary>

---

### doctype이란?

웹 브라우저가 HTML 문서를 읽어낼 때 그 문서가 어떤 문서 형식을 따르고 있는지 명시적으로 웹브라우저에 알리는 방법이다. 웹 브라우저는 문서 내의 doctype 선언이 존재하는지, 선언되었다면 어떤 버전이 선언되었는지에 따라 <b>레이아웃 엔진의 렌더링 방식</b>을 결정한다. 

### 렌더링 방식을 결정하는 3가지 모드

- quirks mode: IE5 이하 버전처럼 오래된 레거시 웹페이지들의 하위 호환성을 유지하기 위한 목적으로 옛 버전 기준에 따라 문서를 렌더링한다.
- almost standards mode: HTML5 표준에 따라 문서를 렌더링한다. 그러나 HTML5의 모든 표준을 지키는 것은 아니다.
- standards mode: HTML5 표준을 엄격히 따라 문서를 렌더링한다.

---

</details>

<details><summary>script 태그의 위치가 중요한 이유는?</summary>

---

### script 태그의 위치가 중요한 이유는?

 script 태그 위치는 <b>렌더링 경로 최적화</b>에 영향을 미친다. 브라우저의 일부인 HTML 파서는 script 태그를 만나면 DOM 생성 프로세스를 중지하고 자바스크립트 엔진에 제어 권한을 넘긴다. 자바스크립트 엔진이 스크립트의 코드를 실행 완료하면 브라우저는 중지했던 시점부터 DOM 생성을 재개한다. 이러한 이유로 script 태그를 먼저 실행하게 되면 <b>초기 렌더링도 지연</b>되기 때문에 script 태그를 body 태그가 끝나는 지점에 두는 것이 좋다.

### 참고 문서

[Adding Interactivity with JavaScript - Google Developers](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript)

---

</details>

## CSS

<details><summary>id와 class의 차이는?</summary>

---

### id 와 class의 차이는?

- id: 문서 내에서 <b>한 개의 고유한 요소</b>를 선택하여 스타일을 지정할 때 사용한다.
- class: 문서 내에서 <b>여러 개의 요소</b>를 선택하여 스타일을 지정할 때 사용한다.

### id와 class의 선호도

class👍 class👍 class👍 도대체 왜!??

- 코드의 재사용 가능성이 언제나 존재한다.
- id와 class를 동시에 사용할 경우 케스케이딩이 복잡해질 가능성이 있다.
- id를 사용하면 자바스크립트에서 글로벌 변수가 생성되어 네임 스페이스가 오염되고 디버깅이 어려워진다.

---

</details>

<details><summary>트랜지션(transition)이란?</summary>

---

### 트랜지션이란?

CSS의 프로퍼티 값이 바뀌었을 때 원래 값에서 바뀐 값으로의 <b>전환을 부드럽게</b> 표현하는 기능으로 CSS3 스펙의 일부이다.

### 트랜지션의 종류

- transition-property: all; - 트랜지션이 해당 엘리먼트의 모든 프로퍼티에 적용한다.
- transition-duration: 1s; - 트랜지션이 1초 동안에 걸쳐서 발생한다.
- transition: all 1s; - 트랜지션이 해당 엘리먼트의 모든 프로퍼티에 적용되며 1초 동안에 걸쳐서 발생한다.
- transition: font-size 1s, transform 0.1s; - 트랜지션이 각각 폰트 사이즈는 1초, 트랜스폼은 0.1초에 걸쳐서 발생한다.
- transition-delay: 1s; - 트랜지션 발생 시기를 1초 지연한다.
- transition-timing-function: linear - 트랜지션이 일정 속도로 적용한다.
- transition-timing-function: ease - 트랜지션이 느리게 시작하여 점점 빨라지다가 다시 느려진다.(현실 세계와 비슷)

### 예시

```html
<div id="box"></div>
```

```css
#box {
    width: 50px;
    height: 50px;
    transition: all 5s;
}

/* hover 시 box 아이디를 가진 요소의 크기가 10px에서 100px로 5초 동안 변하는 과정을 부드럽게 표현함*/
#box:hover {
    width: 100px;
    height: 100px;
}

```

### 참고 문서
[Using CSS transitions - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

---

</details>

<details><summary>밴더 프리픽스(vendor prefix)란?</summary>

---

### 밴더 프리픽스란?

밴더 프리픽스란 웹 브라우저의 <b>실험적인 기능 또는 표준이 아닌 기능</b>을 사용하기 위해 필요한 접두사이다. 밴더 프리픽스는 브라우저 엔진마다 각기 다른 이름으로 제공되고 있다. 실험  기능 또는 비표준 기능이 표준화되어 브라우저에 반영되면 밴더 프리픽스없이 기능을 사용할 수 있지만 그 이전에 구현된 브라우저는 반드시 밴더 프리픽스를 사용해야 해당 기능을 사용할 수 있다. 

### 주요 브라우저별 CSS Prefix

 |   크롬   | 익스플로러 | 파이어폭스 |   사파리  | 오페라 |
 |:--------:|:---------:|:---------:|:--------:|:-----:|
 | -webkit- |    -ms-   |   -moz-   | -webkit- |  -o-  |

### 참고 문서

[Vendor Prefix - MDN](https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)

---

</details>

<details><summary>clear 속성이란?</summary>

---

### clear 속성이란?

특정 엘리먼트의 좌우에 <b>float된 요소가 위치하지 않도록</b> 제한하는 css 속성이다. 주로 자식 요소의 float 속성때문에 부모 컨테이너가 자식 요소들의 높이를 반영하지 못하는 문제를 해결하기 위해 사용한다.

### 예시

#### clear 속성 적용 전

<div align="center">
	<img src="https://t1.daumcdn.net/cfile/tistory/999A46395C5A806B35" align="middle"></img> 
    <br><br>
</div>

```html
<div class="card">
  <img class="card-img" src="someImg.png" alt="someImg">
  <h2>Hello, World! </h2>
  <p>Learning never exhausts the mind.</p>
</div> 

```

```css
.card {
  border: 1px solid #0984e3;
  width: 500px;
}

.card:after {
  content: "";
  display: table;
  clear: both;
}

.card-img {
  width: 100px;
  height: 100px;
  margin: 20px;
  float: left;
}
```

#### clear 속성 적용 후

<div align="center">
	<img src="https://t1.daumcdn.net/cfile/tistory/9989DB395C5A806C34" align="middle"></img> 
    <br><br>
</div>

```html
<div class="card">
  <img class="card-img" src="someImg.png" alt="someImg">
  <h2>Hello, World! </h2>
  <p>Learning never exhausts the mind.</p>
</div> 

```

```css
.card {
  border: 1px solid #0984e3;
  width: 500px;
}

.card:after {
  content: "";
  display: table;
  clear: both;
}

.card-img {
  width: 100px;
  height: 100px;
  margin: 20px;
  float: left;
}
```

---

</details>

<details><summary>normalize.css와 reset.css란?</summary>

---

### normalize.css와 reset.css란?
크롬, 익스플로러, 파이어폭스 등 브라우저는 저마다 고유의 css 기본 속성값을 가지고 있다. 그 결과 같은 css 코드임에도 브라우저별로 또는 버전별로 다르게 보일 때가 있다. 이러한 크로스 브라우징 이슈에 대응하기 위해 css를 초기화하는 테크닉이 등장하였는데 normalize.css와 reset.css가 그에 해당한다.

### 차이점

- [reset.css](https://meyerweb.com/eric/tools/css/reset/reset.css): 모든 스타일링 속성을 제거하여 브라우저의 기본 스타일을 통일한다.
- [normalize.css](https://necolas.github.io/normalize.css/8.0.1/normalize.css): 유용한 기본 스타일링 속성들을 활용하는 방향으로 초기화하여 브라우저의 기본 스타일을 통일한다.

---

</details>

## JavaScript

<details><summary>자바스크립트 엔진의 동작 방식은?</summary>

---

### 자바스크립트 엔진의 동작 방식은?

현대의 웹브라우저를 기준으로 자바스크립트 엔진은 코드를 파싱(구문 분석)하고 추상 구문 트리(Abstract Syntax Tree)를 생성한다. 추상 구문 트리가 생성되면 인터프리터는 이에 기초하여 중간 언어(IR, intermediate representation)인 바이트 코드를 생성한다. 이렇게 생성된 바이트 코드는 다시 컴파일 과정을 거쳐 고도로 최적화된 기계어 코드로 변환되어 실행된다.

### 참고 문서

[JavaScript engine fundamentals: Shapes and Inline Caches - Benedikt and Mathias ](https://mathiasbynens.be/notes/shapes-ics)

---

</details>
<details><summary>null, undefined, undeclared의 차이는?</summary>

---

# null, undefined, undeclared의 차이는?

undefined는 접근 가능한 스코프에 변수가 선언되었으나 현재 아무런 값이 할당되지 않은 상태를 나타내는 특수 값이고, undeclared는 접근 가능한 스코프에 변수 자체가 선언조차 되지 않았음을 나타낸다. 그리고 마지막으로 null은 값이 없음을 명시적으로 나타내기 위한 특수 값이다.

### 참고 문서

[You Don't Know JS: Types & Grammar - Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/master/types%20%26%20grammar/ch1.md)

---

</details>
<details><summary>이벤트 위임(Event Delegation)이란?</summary>

---

### 이벤트 위임이란?

이벤트 위임이란 다수의 자식 요소에 각각 이벤트 핸들러를 바인딩하는 대신 하나의 부모 요소에 이벤트 핸들러를 바인딩하여 자식 요소의 이벤트를 처리하는 테크닉이다. 브라우저에서 click과 같은 이벤트가 발생하였을 때 이벤트 버블링이 발생한다는 특징을 이용한 것으로 이벤트 핸들러의 바인딩 수의 증가에 따른 성능상 이슈, 코드의 장황함을 해결할 수 있다.

---

</details>

<details><summary>이벤트 버블링(Event Bubbling)과 이벤트 캡처링(Event Capturing)의 차이는?</summary>

---

### 이벤트 버블링과 이벤트 캡처링의 차이는?

- 이벤트 버블링: 요소가 중첩된 구조에서 이벤트가 발생하였을 때 중첩 구조의 <b>자식 요소에서 부모 요소의 방향</b>으로 이벤트가 전파되는 것을 의미한다.
- 이벤트 캡처링: 요소가 중첩된 구조에서 이벤트가 발생하였을 때 중첩 구조의 <b>부모 요소에서 자식 요소의 방향</b>으로 이벤트가 전파되는 것을 의미힌다.

---

</details>

<details><summary>==(Loose Equals)와 ===(Strict Equals)의 차이는?</summary>

---

### ==(Loose Equals)와 ===(Strict Equals)의 차이는?

값의 동등 여부를 확인할 때 ==는 값의 타입 강제 변환을 허용하여 비교하지만 ===는 값의 타입 강제 변환을 허용하지 않고 비교한다.

### 참고 문서

[You Don't Know JS: Types & Grammar - Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch4.md)

---

</details>
<details><summary>이벤트 루프(Event Loop)란?</summary>

---

### 이벤트 루프란?

호출 스택(Call Stack)과 작업 큐(Task Queue)의 상태를 확인하여 호출 스택이 비어있을 때마다 작업 큐에서 대기하고 있는 이벤트 핸들러를 호출 스택에 추가하여 실행하는 메커니즘이다.

### 참고 문서

[What the heck is the event loop anyway? - Philip Roberts](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

---


</details>
<details><summary>고차 함수(higher-order function)란?</summary>

---

### 고차 함수란?

고차 함수는 함수를 인자로 전달받거나 함수를 결과로 반환하는 함수를 말한다. 즉, 고차 함수는 인자로 받은 함수를 필요한 시점에 호출하거나 클로저를 생성하여 반환한다. 자바스크립트의 함수는 일급 객체이므로 값처럼 인자로 전달할 수 있으며 반환할 수도 있다.

---

</details>

<details><summary>자바스크립트 숫자 타입의 특징은?</summary>

---

### 자바스크립트 숫자 타입의 특징은?

숫자를 byte, short, int, long이라는 4가지 타입으로 나타내는 자바와 달리 자바스크립트는 모든 숫자를 number라는 하나의 타입으로 표현하며 배정밀도 방식의 부동 소수점 표현을 사용한다는 특징이 있다. 배정밀도 방식을 사용한다는 특징 때문에 대부분의 십진 소수를 이진수로 표현할 수 없기 없으며 실제로 저장되는 값은 근삿값이 되된다 또한 정수의 안전 범위는 약 -9천조에서 +9천조 사이이지만 비트 연산처럼 32bit 숫자에만 가능한 연산을 할 경우 실제 범위는 약 -21억에서 +21억 사이로 줄어든다. 만약 동등 비교를 하거나 큰 수를 다루어야 한다면 이를 주의할 필요가 있다. 동등 비교 처리는 ECMAScript 6을 지원하는 브라우저의 경우 Number.EPSILON을 사용하고 아닐 경우 폴리필을 사용하여 이를 해결할 수 있고 큰 수 처리는 데이터베이스의 64bit ID와 같은 데이터를 처리할 때는 데이터 전송 시 string type으로 바꾸어 처리하고 그 외에는 BigInteger.js와 같은 큰 수 유틸리티를 사용하는 방법이 있다.

### 참고 문서

[You Don't Know JS: Types & Grammar - Kyle Simpson](https://github.com/getify/You-Dont-Know-JS/blob/f0d591b6502c080b92e18fc470432af8144db610/types%20%26%20grammar/ch2.md)

---

</details>
<details><summary>로컬 스토리지(localStorage), 세션 스토리지(sessionStorage), 쿠키(Cookie)의 차이는?</summary>

---

### 로컬 스토리지, 세션 스토리지, 쿠키의 차이는?

먼저 로컬 스토리지와 세션 스토리지는 웹 브라우저 측에 있는 저장 공간이다. 쿠키와 달리 상대적으로 용량이 크고 도메인마다 저장소가 별개로 존재하며 서버와 상관없이 브라우저 측에서 DOM API를 통해 사용이 가능하다. 둘의 차이점은 로컬 스토리지의 용량이 세션 스토리지보다 더 크다는 점과 로컬 스토리지는 저장 데이터의 만료 기간이 없지만 세션 스토리지는 해당 브라우저를 닫으면 데이터도 사라진다는 점이다. 이들과 달리 쿠키는 서버에 접속한 클라이언트에게 서버가 발급하는 작은 기록 정보 파일이다. 발급된 쿠키는 클라이언트 컴퓨터에 저장이 되는데 앞의 두 웹스토리지와 달리 쿠키당 4096자(4kb)로 크기가 가장 작다. 또한 쿠키는 만료 기간을 설정할 수 있으며. 서버는 클라이언트가 요청할 때마다 클라이언트가 보내는 쿠키에 담긴 정보를 읽어 클라이언트를 식별하고 맞춤화된 서비스를 제공한다.

---

</details>
<details><summary>자바스크립트 타입이란?</summary>

---

### 자바스크립트의 타입은?

자바스크립트는 느슨한 타입 언어이다. 런타임에서 동적으로 타입 결정이 처리되기 때문에 변수를 선언할 때 변수에 할당되는 값의 타입을 미리 지정할 필요가 없다. 자바스크립트에는 총 7개의 타입이 있으며 크게 기본 타입과 참조 타입으로 분류된다. 기본 타입에는 null, undefined, boolean, number, string, symbol(ES6+)가 있으며, 참조 타입에는 object(array, function, date, etc.)가 있다.

---

</details>

<details><summary>렉시컬 환경(Lexical Environment)이란?</summary>

---

### 렉시컬 환경이란?

렉시컬 환경은 프로그래머들이 작성한 코드가 위치하는 환경으로 코드(변수, 함수 등)가 외관상으로 어디에 위치해 있는가, 주변 코드와는 어떤 관계를 가지고 있는가를 의미한다. 자바스크립트 엔진은 렉시컬 환경을 반영하여 AST를 생성하고 프로그래머가 작성한 코드를 기계어로 변환하고 물리적 메모리에 할당한다. 이 때 렉시컬 환경에 기초하여 결정된 변수와 함수의 유효범위가 결정되는데 렉시컬 스코프(Lexical Scope)라고 한다.

---

</details>

<details><summary>호이스팅(Hoisting)이란?</summary>

---

### 호이스팅이란?

변수와 함수 선언이 코드 최상단으로 끌어올려지는 것처럼 보이는 현상을 호이스팅이라고 한다. 그러나 실제로는 자바스크립트 엔진은 코드를 실행 하기 전에 실행 환경(Execution Context), 더 구체적으로 말하자면 실행 환경 내의 변수 환경(Variable Environment)을 생성하는 과정에서 렉시컬 환경(Lexical Environment)에 기초하여 선언된 변수와 함수를 메모리에 할당한다. 이 때 선언된 변수와 함수는 이미 메모리에 할당되어있기 때문에 엔진은 코드를 실행하는 동안 코드의 순서에 상관없이 변수와 함수에 접근할 수 있다.

---

</details>

<details><summary>즉시 실행 함수 표현(IIFE)이란?</summary>

---

### 즉시 실행 함수 표현이란?

함수를 정의하고 즉시 실행하는 함수 표현을 의미힌다. ()로 함수를 감싸면 함수를 표현식으로 바꾸는데, "(fucntion foo(){})()" 또는 "(function foo(){}())"처럼 마지막에 또 다른 ()를 붙이면 함수를 실행할 수 있다. 이는 전역 스코프에 불필요한 변수를 추가해서 전역 네임 스페이스를 오염시키는 것을 방지하고 IIFE 내부의 변수에 대한 외부의 접근을 막는데 사용된다.

### 두 형태의 즉시 실행 함수 표현

``` javascript
(function foo() {
  // some code here
})()
```

```javascript
(function foo() {
  // some code here
}())

```

---

</details>

<details><summary>자바스크립트 스코프(Scope)란?</summary>

---

### 자바스크립트 스코프란?

스코프란 변수 또는 함수가 유효하게 사용될 수 있는 영역을 말한다. 자바스크립트에는 전역 스코프와 함수 스코프, 블록 스코프, 렉시컬 스코프라는 개념이 존재한다. 먼저 전역 스코프는 전체 프로그램 어디에서도 접근할 수 있는 영역이다. 전역 스코프는 자바스크립트 엔진이 초기에 생성한 전역 객체를 참조한다. 웹브라우저에서는 window 객체, node.js에서는 global객체가 이에 해당하며 전역 스코프에 선언된 함수, 변수는 이들 전역 객체에 등록이 된다. 다음으로, 함수 스코프는 함수 단위로 스코프를 생성하는 것으로 함수를 실행할 때마다 엔진이 실행 환경 만드는 과정에서 스코프를 생성한다. 블록 스코프는 중괄호 {}를 사용하여 스코프를 생성하는 것으로 try catch의 catch, with, let, const가 함께 사용되었을 떄 블록 스코프가 생성된다. 마지막으로는 렉시컬 스코프가 있다. 렉시컬 스코프란 렉시컬 환경을 기초하여 생성되는 스코프로 함수를 선언한 시점에 상위 스코프가 결정된다. 함수를 어디에서 호출하였는지는 스코프 결정에 아무런 의미를 주지 않는다. 렉시컬 스코프는 정적 스코프로도 불린다.

---

</details>

<details><summary>실행 컨텍스트(Execution Context)란?</summary>

---

### 실행 컨텍스트란?

실행 컨텍스트는 실행 가능한 코드가 실행되기 위해 필요한 환경이다. 여기서 실행 가능한 코드란 전역 코드, Eval 코드, 함수 코드를 말한다. 일반적으로 실행 가능한 코드는 전역 코드와 함수 내 코드이다. 자바스크립트 엔진은 코드를 실행하기 위하여 실행에 필요한 여러가지 정보를 알고 있어야 한다. 실행에 필요한 여러가지 정보로는 변수, 함수, 스코프, this 등이 이에 해당한다. 이와 같이 실행에 필요한 정보를 형상화하고 구분하기 위해 자바스크립트 엔진은 실행 컨텍스트를 물리적 객체의 형태로 구현하여 관리한다.

---

</details>

<details><summary>this란?</summary>

---

### this란?

실행 컨텍스트가 생성되는 과정에서 자바스크립트 엔진이 특정 객체에 바인딩하는 특수한 키워드이다. 함수 호출 방식에 의해 this에 바인딩할 어떤 객체가 동적으로 결정된다. 먼저 전역 함수와 함수의 내부 함수 호출의 경우 this는 전역객체에 바인딩되고 함수가 메소드로서 호출되었을 때는 해당 메소드를 가진 객체에 바인딩 된다. new를 사용하여 생성자 함수를 호출할 경우에는 this는 생성자 함수가 실행되기 전에 만들어지는 빈 객체에 바인딩되는데 이 this를 사용하여 동적으로 프로퍼티나 메소드를 생성할 수 있다. 자바스크립트는 엔진이 결정하는 this 바인딩을 명시적으로 결정할 수 있는 메소드를 제공하는데 apply, call, bind 메소드가 이에 해당한다.

---

</details>

<details><summary>strict mode란?</summary>

---

### strict mode란?

strict mode는 자바스크립트가 기존에 묵인했던 에러들에 대해 에러 메시지를 발생시키는 기능으로 ES5에서 추가되었다. 이는 자바스크립트 언어의 엄격한 문법 규칙을 적용하여 기존에는 무시되었던 오류를 발생시킬 가능성이 있는 코드나 자바스크립트 엔진의 최적화 작업에 문제를 일으킬 수 있는 코드에 대해 명시적인 에러를 발생시킨다. strict mode가 발생시키는 에러로는 선언하지 않은 변수를 참조하면 발생하는 ReferenceError, 중복된 함수 파라미터 이름을 사용하면 발생하는 SyntaxError 등이 있다. 참고로 IE 9 이하는 지원하지 않는다.

---

</details>

<details><summary>arguments 객체란?</summary>

---

### arguments 객체란?

arguments 객체는 함수에 전달된 인수를 가진 Array 형태의 객체로 실행 컨텍스트가 만들어지는 과정에서 자바스크립트 엔진이 생성한다. arguments 객체는 유사 배열 객체라고도 불리며 Array에 존재하는 length 프로퍼티를 가지고 있다.

---

</details>

<details><summary>호스트 객체(Host Object)와 네이티브 객체(Native Object)의 차이는?</summary>

---

### 호스트 객체와 네이티브 객체의 차이는?

네이티브 객체는 ECMAScript 명세에 정의된 객체로 애플리케이션 전역에 공통된 기능을 제공한다. 애플리케이션의 환경과 관계없이 언제나 사용할 수 있으며 Object, String, Number, Function, Array, RegExp, Date, Math와 같은 객체 생성에 관계가 있는 함수 객체와 메소드로 구성된다. 이와 달리 호스트 객체(Host object)는 브라우저 환경에서 제공하는 window, XmlHttpRequest, HTMLElement 등의 DOM 노드 객체와 같이 호스트 환경에 정의된 객체를 말한다. 호스트 객체는 동작하는 환경에 따라 다른데 브라우저 외부에서 동작하는 Node.js같은 경우 다른 호스트 객체를 사용한다.

---

</details>

## TypeScript

<details><summary>타입스크립트(TypeScript)란? </summary>

---

### 타입스크립트란?

타입스크립트는 자바스크립트의 기능을 포함한 확장 언어이다. 타입스크립트로 작성된 코드는 트랜스파일링을 거쳐 자바스크립트 코드로 변환되어 런타임에서 실행된다. ES6나 ES5로도 작성할 수 있지만, 생산성을 고려할 때 타입스크립트로 작성하는 것이 이점이 많다. 예를 들어 타입스크립트는 타입을 지원한다. 에러가 발생할 수 있는 코드는 컴파일 단계에서 미리 검출할 수 있으며, 런타임에 발생할 수 있는 에러를 미리 방지할 수 있다. 또한 IDE에서 지원할 수 있는 기능을 사용하여 인자의 개수가 잘못되거나 다른 타입의 인자를 전달해도 에러를 표시할 수 있다. 그 외에도 인터페이스, 데코레이터, 제네릭 등 다양한 키워드를 추가적으로 제공한다.

---

</details>

## Angular

<details><summary>앵귤러(Angular)란?</summary>

---

### 앵귤러란?

앵귤러는 구글에서 주관하는 오픈소스 SPA 웹 프레임워크이다. 과거 AngularJS의 아키텍처를 개선한 것으로 앵귤러 2부터 시작하여 현재는 앵귤러 7 버전까지 나왔다. 내부적으로는 기본적으로 자바스크립트의 확장된 언어 버전인 타입스크립트를 사용하고 있다.

---

</details>

## Node.js

<details><summary>Node.js의 특징은?</summary>

---

### Node.js의 특징은?

Node.js는 구글 크롬의 V8 엔진을 기반으로 만들어진 자바스크립트 런타임이다. V8 엔진 자체는 싱글 스레드이지만 내부적으로 이벤트 루프를 두어(libuv라이브러리가 그 구현체) 백그라운드에서 I/O를 처리함으로써 고성능의 비동기 I/O를 지원한다. 또한 싱글 스레드를 사용하기 때문에 쓰레드 생성에 발생하는 오버헤드가 적어 가볍고 빠르다. 그러나 싱글 스레드를 사용하기 때문에 mp3 인코딩처럼 많은 연산으로 처리 시간이 길어질 경우 전체 서버 처리에 영향(서버가 다른 처리를 못함)을 주기 때문에 CPU 소모가 큰 작업 수행에는 적합하지 않다.

---

</details>

## Java

<details><summary>자바의 특징은?</summary>

---

### 자바의 특징은?

- <b>객체 지향 언어</b>로 객체 지향의 특성인 클래스, 상속, 캡슐화, 다형성 등을 제공한다.
- <b>운영체제에 독립적</b>으로 JVM(Java Virtual Machine)이 설치된 컴퓨터라면 어디에서든 실행할 수 있다.(Write once, run anywhere)
- <b>무료 개발 환경</b>을 제공한다.
- 그래픽, 네트웤, 파일 입출력, 스레드, 데이터베이스, 원격 호출 등 <b>다양한 분야의 라이브러리</b>를 제공한다.

---

</details>


<details><summary>객체 지향이란(Object-oriented)?</summary>

---

### 객체 지향이란?

실세계의 모든 사물들을 속성과 기능을 지닌 객체로 정의하고, 사물들 간의 상호 작용을 정의하여 실제 세계를 흉내내는 이론을 의미한다. 컴퓨터를 통하여 실세계와 같은 환경을 흉내내기 위해 등장하였다. 이러한 이론을 적용한 프로그래밍을 객체 지향 프로그래밍, 언어를 객체 지향 언어라고 한다.

---

</details>

<details><summary>객체 지향의 장점은?</summary>

---

### 객체 지향의 장점은?

- 쉬운 모델링: 해결하고자 하는 문제의 요소들을 자연스럽게 프로그램화(모델링)할 수 있다. 이를 위해 클래스, 캡슐화, 상속, 다형성 등의 여러 기능을 제공한다. 
- 높은 생산성: 독립적인 단위인 객체를 만들어 서로 연결하여 프로그램을 완성하는 방식으로 데이터에 의존적인 절차 지향 방법에 비해 생산성이 높다.
- 재사용성: 객체 지향의 객체는 완전한 독립성을 보장하는 모듈이기 때문에 다양한 프로그램에서 재사용할 수 있다.

---

</details>

<details><summary>클래스(Class), 객체(Object), 인스턴스(Instance)의 차이는?</summary>

---

### 클래스, 객체, 인스턴스의 차이는?

- 클래스: 객체를 만들기 위한 하나의 틀로 생성하기 위한 객체를 정의한다. 자바에서는 class라는 키워드를 사용해서 클래스를 구현한다.
- 객체: 현실 세계의 실체를 추상화한 상태와 행위를 가진 독립적인 단위를 의미한다.(개인적인 생각으로 현실 세계의 실체를 컴퓨터에서 다루기 위한 하나의 자료형에 불과하다.)
- 인스턴스: 클래스를 통해 생성되어 실제로 메모리에 할당되어 있는 객체를 의미한다.

---

</details>

<details><summary>private, default, protected, public의 차이는?</summary>

---

### private, default, protected, public의 차이는?

- private: 해당 클래스 내에서만 접근 가능
- default: 해당 패키지 내에서만 접근 가능
- protected: 해당 패키지 내에서 또는 해당 클래스를 상속받은 외부 패키지의 클래스만 접근 가능 
- public: 어떤 클래스에서도 접근 가능

| 구분          | 클래스 내부 | 같은 패키지 | 상속받은 클래스 | 다른 패키지  |
| ------------- |:----------:|:----------:|:--------------:|:-----------:|
| private       | O          | X          | X              | X           |
| default       | O          | O          | X              | X           |
| protected     | O          | O          | O              | X           |
| public        | O          | O          | O              | O           |

---

</details>

<details><summary>오버라이딩(Overriding)와 오버로딩(Overloading)의 차이는?</summary>

### 오버라이딩과 오버로딩의 차이는?

---

- 오버라이딩: 상속 관계에 있는 부모 클래스에서 이미 정의된 메소드를 자식 클래스에서 같은 매개변수의 리스트 갖는 메소드로 재정의하는 것을 의미한다.
- 오버로딩: 한 클래스 내에서 이름은 같지만 서로 다른 매개 변수 항목을 가진 메소드 또는 생성자를 중복하여 정의하는 것을 의미한다.

---

</details>

<details><summary>Java SE, Java EE, Java ME의 차이는?</summary>

---

### Java SE, Java EE, Java ME의 차이는?

- Java SE(Standard Edition): 표준 자바 플랫폼으로 클라이언트 중심의 <b>일반적인 자바 응용 프로그램</b> 개발을 위한 플랫폼이다.
- Java EE(Enterprise Edition): 기존 Java SE에 <b>서버 중심의 기능</b>을 추가한 기업용 소프트웨어 개발 플랫폼이다.
- Java ME(Mobile Edition): PDA나 스마트폰 등 <b>소형 기기</b>를 위한 개발 플랫폼이다.

---

</details>

<details><summary>JVM, JRE, JDK의 차이는?</summary>

### JVM, JRE, JDK의 차이는?

<div align="center">
  <br>
	<img src="https://cdncontribute.geeksforgeeks.org/wp-content/uploads/JDK_JRE_JVM_x.jpg" width="300" align="middle"></img> 
  <br>
</div>


##### JVM(Java Virtual Machine):

자바 코드(.java)를 컴파일하여 생성된 바이트 코드(.class)를 실행하는 자바 가상 머신이다. 바이트 코드를 각 운영체제에 적합한 기계어로 변환하는 소프트웨어라고 볼 수 있다. 클래스 로더(Class Loader)가 컴파일된 자바 바이트코드를 운영체제로부터 할당받은 메모리 영역인 런타임 데이터 영역(Runtime Data Areas)에 로드하고 실행 엔진(Execution Engine)이 로드된 바이트 코드를 실행한다. 내부적으로 인터프리터 방식을 사용하지만 매번 한 줄씩 명령어를 해석하고 실행하는 것은 컴파일된 기계어를 실행하는 것보다 느리기 때문에 자주 사용되는 프로그램 중 일부는 실행 과정에서 컴파일하는 JIT 컴파일 방식을 함께 사용하기도 한다. 가비지 컬렉션을 통한 메모리 관리 또한 JVM이 수행한다. OS마다 구성이 다르기 때문에 JVM(JRE, JDK도 마찬가지) 자체는 플랫폼에 의존적이지만 자바 컴파일러를 통해 생성된 바이트코드는 플랫폼에 [독립적](https://stackoverflow.com/questions/17101796/platform-independence-in-javas-byte-code)이다.

<div align="center">
	<img src="https://d2.naver.com/content/images/2015/06/helloworld-1230-1.png"  width="250" align="middle"></img> 
    <br>
    <sub><a href="https://d2.naver.com/helloworld/1230">JVM 구조</a></sub>  
    <br>
</div>

##### JRE(Java Runtime Environment)
자바 프로그램을 실행하기 위한 자바 실행 환경이다. JVM과 자바 프로그램 실행에 필요한 라이브러리 등을 제공한다. 컴파일, 디버깅 등에 필요한 개발 도구를 지원하지 않기 때문에 자바 프로그램을 단순히 실행하는 것이 아니라 자바 프로그램을 개발해야 한다면 JDK를 사용하여야 한다.

##### JDK(Java Development Kit)
자바 개발에 필요한 것들을 제공하는 개발 도구이다. JRE뿐만 아니라 자바 코드를 바이트 코드로 컴파일해주는 javac, 클래스 파일을 해석하고 실행하는 java, 디버깅 도구 등 [여러 가지 개발 도구](https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94_%EA%B0%9C%EB%B0%9C_%ED%82%A4%ED%8A%B8)를 제공한다. 자바 코드를 컴파일하려면 JDK가 필요하다(더 정확히 말하면 JDK에서 제공하는 javac).

### 참고 문서

[Differences between JDK, JRE and JVM - GeeksforGeeks](https://www.geeksforgeeks.org/differences-jdk-jre-jvm/)  
[JVM Internal - NAVER D2](https://d2.naver.com/helloworld/1230)

---

</details>

<details><summary>==와 equals()의 차이는?</summary>

---

### ==와 equals()의 차이는?

- ==: 비교되는 두 대상이 <b>동일한 객체</b>인지 비교한다.(객체의 주소값 비교)
- equals(): 비교되는 두 대상이 <b>동일한 문자열</b>인지 비교한다.(문자열 값 자체 비교)

##### new String과 String 리터럴의 차이
 
- String 리터럴: String을 리터럴로 선언할 경우 String의 intern() 메서드가 내부적으로 호출되고 intern() 메서드는 주어진 문자열이 string constant pool 영역에 존재하는지 확인한다. 이미 존재한다면 캐시된 해당 주소값을 반환하고 존재하지 않다면 string constant pool에 넣고 새로운 주소값을 반환한다.
- new String(): new를 통해 String을 생성하면 항상 새로운 객체를 만들며 이는 Heap 영역에 존재한다. 생성된 스트링의 intern() 메서드를 사용하면 위의 String 리터럴과 같은 방식으로 동작하여 주소값을 반환한다.

##### 예시
```java
  String a = "hello";
  String b = new String("hello");
  String c = "hello"; // pool에 이미 존재
  String d = b.intern(); // String 리터럴처럼 동작

  System.out.println(a.equals(b)); // true
  System.out.println(a==b); // false
  System.out.println(a==c); //true
  System.out.println(a.equals(c)); // true
  System.out.println(a==d); // true
```

### 참고 문서
[Java String 의 메모리에 대한 고찰 - Leopold Baik](https://medium.com/@joongwon/string-%EC%9D%98-%EB%A9%94%EB%AA%A8%EB%A6%AC%EC%97%90-%EB%8C%80%ED%95%9C-%EA%B3%A0%EC%B0%B0-57af94cbb6bc)


---

</details>

<details><summary>String, StringBuffer, StringBuilder의 차이는?</summary>

---

### String, StringBuffer, StringBuilder의 차이는?


- String: 불변적(immutable)이다. String이 한번 생성되면 변경이 불가능하다. 이러한 이유로 기존 String에 더하기(+) 연산으로 다른 String을 합칠 경우 새로운 String이 생성된다. trim, toUpperCase 등의 메소드도 마찬가지로 기존 String을 변경하는 것이 아니라 새로운 String을 생성하여 리턴한다. StringBuffer에 비해 메모리 사용량이 적고 속도가 빠르지만 String 연산이 많아질 때 계속해서 객체를 만드는 오버헤드가 발생하기 때문에 성능이 떨어진다. 이는 String 연산 작업이 거의 없는 경우에 적합하다. 
- StringBuffer: 가변적(mutable)이고 멀티 스레드환경에서 동기화를 지원한다(thread-safe). 생성된 StringBuffer는 언제든지 변경할 수 있다. String 연산이 필요할 때마다 크기를 변경시켜 String을 변경한다. 그러나 String에 비해 메모리 사용량도 많고 속도가 느리다. String 변경 작업이 많을 경우에 적합하다. 
- StringBuilder: 기본적으로 StringBuffer와 같지만 멀티 스레드 환경에서 동기화를 지원하지 않는다. 동기화를 고려하지 않으므로 싱글 스레드 환경에서 StringBuffer에 비해 가볍고 빠르다.

<div align="center">
	<img src="https://1.bp.blogspot.com/-kOcVTQZxiUU/WAI718RxDKI/AAAAAAAAHR4/k5iRdbSToGgAGp9UYBd4If8N8qosa0wRgCLcB/s400/String%2Bvs%2BStringBuffer%2Bin%2BJava%2B2.jpg"  width="400" align="middle"></img> 
    <br>
    <sub><a href="http://www.java67.com/2016/10/5-difference-between-stringbuffer.html">String vs StringBuffer</a></sub>  
    <br>
</div>

##### 요약
| -             | mutable/immutable  | Synchronization |
| ------------- |:------------------:|:---------------:|
| String        | immutable          |   -             |
| StringBuffer  | mutable            |   O             |
| StringBuilder | mutable            |   X             |

##### 예시
```java
  String a = "hello";
  String b = new String("hello");
  String c = "hello"; // pool에 이미 존재
  String d = b.intern(); // String 리터럴처럼 동작

  System.out.println(a.equals(b)); // true
  System.out.println(a==b); // false
  System.out.println(a==c); //true
  System.out.println(a.equals(c)); // true
  System.out.println(a==d); // true
```

---

</details>

## Google Cloud Platform

<details><summary>IoT Core란?</summary>

---

### IoT Core란?

분산된 IoT 기기, 센서 같은 기기들을 서로 연결하고 관리해주는 서비스이다. 동시에 Google Cloud Platform 내의 다양한 서비스 이용을 위한 매개체 역할을 하는 일종의 게이트웨이 역할을 수행하기도 한다. IoT 기기의 데이터는 HTTPS 또는 MQTTS 프로토콜을 통해 IoT Core로 전송되어 IoT Core 내부의 데이터 브로커를 거쳐 대용량 메시지 배포 서비스인 Google Cloud Pub/Sub에 임시 보관된다. 보관된 데이터는 Google Cloud Platform 내 머신러닝, 데이터 시각화, 빅데이터 등 다양한 영역에 활용될 수 있다.

---

</details>

<details><summary>Cloud Pub/Sub란?</summary>

---

### Cloud Pub/Sub란?

Cloud Pub/Sub는 데이터를 일시적으로 저장하여 애플리케이션들이 독립적으로 커뮤니케이션할 수 있도록 돕는 메시지 큐이다. 내부적으로 구독/발행 메커니즘을 사용한다.

---

</details>

## Design Pattern

<details><summary>MVC(Model–View–Controller)란?</summary>

---

### MVC란?

애플리케이션을 사용자에게 보여지는 화면인 뷰와 실제 비즈니스 로직이 들어가는 부분인 모델 그리고 뷰와 모델을 연결시켜주는 컨트롤러 세가지의 역할로 구분한 개발 방법론이다. 프로젝트 규모가 커지더라도 뷰 부분과 모델 부분의 분업으로 효율적인 개발이 가능하며 비즈니스 로직이 분리되어 있어 컴포넌트화할 수 있으므로 공통되는 로직의 재사용이 가능하게 되어 생산성이 매우 높아지는 장점이 있다.

<div align="center">
	<img src="https://mdn.mozillademos.org/files/16042/model-view-controller-light-blue.png"  width="400"  align="middle"></img> 
    <br>
    <sub><a href="https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture">Model-View-Controller, MVC</a></sub>  
    <br><br>
</div>

### 참고 문서
[MVC architecture - MDN](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)

---

</details>


<details><summary>싱글턴(Singleton)이란?</summary>

---
### 싱글턴이란?

클래스의 인스턴스 생성을 하나로 제한하기 위한 패턴이다. 클래스의 인스턴스가 존재하지 않을 경우에는 새로운 인스턴스를 생성해 반환하고, 만약 존재한다면 이미 생성된 인스턴스에 대한 참조 주소를 반환한다.

### 예시 - JavaScript

```javascript
var singleton = (function () {
  // 싱글턴의 참조 주소를 담는다.
  var instance;
 
  function init() {
    // Private 프로퍼티와 메서드
    var name = "Singleton";

    function reverseName(){
      return name.split("").reverse().join("");
    }
 
    // Public 프로퍼티와 메서드
    return {
      nickname: "No nickname yet",
      getName: function () {
        return name;
      },
      getReversedName: function() {
        return reverseName();
      }
    };
  };
 
  return {
    // 이미 인스턴스가 존재하면 해당 인스턴스를 반환하고 없으면 새로운 인스턴스 생성해 반환
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();
 
var singleA = singleton.getInstance();
var singleB = singleton.getInstance();

// 싱글턴으로 같은 인스턴스를 가리킨다.
console.log( singleA.getName() === singleB.getName() ); // true

```

### 예시 - Java

```java
class Singleton {
  private static Singleton one;
  private Singleton() {
  }

  public static Singleton getInstance() {
    if(one==null) {
      one = new Singleton();
    }
    return one;
  }
}

public class SingletonTest {
  public static void main(String[] args) {
    Singleton singleton1 = Singleton.getInstance();
    Singleton singleton2 = Singleton.getInstance();
    System.out.println(singleton1 == singleton2); // true
  }
}
```

### 참고 문서
[Learning JavaScript Design Patterns - Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

---

</details>


## ETC.

<details><summary>트리 쉐이킹(Tree shaking)이란?</summary>

---

### 트리 쉐이킹이란?

트리 쉐이킹이란 자바스크립트 진영에서 흔히 사용되는 용어로 죽은(사용되지 않는) 코드를 제거하는 테크닉이다. 이는 정적 구조의 ES2015 모듈 문법(i.e. import 와 export)에 의존하고 있다. ECMAScript 기반의 Dart, JavaScript, TypeScript와 같은 언어는 컴파일 단계에서 코드를 번들링하는 동안 사용되지 않는 코드를 제거하는 코드 최적화 작업을 수행한다. 여기서 알아두어야 할 점은 트리 쉐이킹은 사용하지 않는 코드를 제거한다기보다는 번들링 과정에서 실제로 사용할 코드만 포함하는 작업이라는 점이다. 즉, 살아 있는 코드 포함 작업이라 할 수 있다.

---

</details>

<details><summary>라이브러리(Library)와 프레임워크(Framework)의 차이는?</summary>

---

### 라이브러리와 프레임워크의 차이는?

둘의 큰 차이는 이미 만들어진 구조 안에서 코드를 작성하느냐, 아니면 내가 만든 구조에 필요한 기능만 가져와서 사용하느냐의 차이이다. 프레임워크를 사용할 경우 프레임워크가 제시하는 아키텍처를 벗어날 수 없기 때문에 선택의 자유가 제한된다. 그러나 라이브러리의 경우 자신의 코드에 원하는 기능들을 불러와 사용하면 되기 때문에 프레임워크에 비해 선택이 자유롭다.(제어의 주체가 누가 되느냐가 결정적 차이)

<div align="center">
  <br>
	<img src="https://i.stack.imgur.com/DqCkT.png"  width="400"  align="middle"></img> 
    <br>
    <sub><a href="https://stackoverflow.com/questions/148747/what-is-the-difference-between-a-framework-and-a-library">Library vs Framework</a></sub>  
    <br><br>
</div>

### 참고 문서
[What is the difference between a framework and a library? - Stackoverflow](https://stackoverflow.com/questions/148747/what-is-the-difference-between-a-framework-and-a-library)

---

</details>

<details><summary>네임 스페이스(Name Space)란?</summary>

---

### 네임 스페이스란?

네임 스페이스는 특정 데이터(개체)가 다른 개체와 구분되기 위해 속해 있는 고유의 영역(공간)을 의미한다. 이름 중복으로 발생하는 서로 간의 충돌을 막고 서로를 구분하는 것이 목적으로 같은 데이터라도 어느 영역에 할당하느냐에 따라 다른 의미를 부여할 수 있다. 자바스크립트는 네임 스페이스 기능이 없지만 객체를 사용해서 네임 스페이스 패턴을 구현할 수 있다. jQuery의 경우 \$ 또는 jQuery라는 네임 스페이스를 사용하여 속성 형태로 라이브러리의 모든 기능을 노출한다.

---

</details>

<details><summary>폴리필(Polyfill)이란?</summary>

---

### 폴리필이란?

폴리필(polyfill)은 웹 개발에서 기능을 지원하지 않는 웹 브라우저 상의 기능을 구현하는 대체 코드를 말한다. 기능을 지원하지 않는 웹 브라우저에서 원하는 기능을 구현할 수 있다는 장점이 있으나 폴리필 플러그인 로드 때문에 시간과 트래픽이 늘어나고, 브라우저별 기능을 추가하는 것 때문에 코드가 매우 길어지고, 성능이 많이 저하된다는 단점이 있다.

---

</details>

<details><summary>바벨(Babel)이란?</summary>

---

### 바벨이란?

Babel은 자바스크립트 컴파일러이다. ECMAScript 6 이상의 최신 자바스크립트 코드를 특정 브라우저 환경에서도 작동될 수 있도록 하위 호환 버전의 자바스크립트 코드로 변환한다.

---

</details>

<details><summary>CVCS와 DVCS의 차이는?</summary>

---

### CVCS와 DVCS의 차이는?

- CVCS(중앙 집중식 버전 관리 시스템): 파일을 관리하는 서버가 별도로 있고 클라이언트가 중앙 서버에서 파일을 받아서 사용한다. 그러나 중앙 서버에 문제가 발생하면 다른 사람과의 협업이 불가능하고 백업할 방법이 없다. 또한 중앙 데이터베이스에 하드디스크에 문제가 생기면 프로젝트의 모든 히스토리를 잃게 된다.
- DVCS(분산 버전 관리 시스템): 파일을 단순히 받는 차원이 아니라 분산된 개개의 클라이언트가 프로젝트의 히스토리를 모두 복제하여 가지고 있다. 이는 서버에 문제가 발생하여 데이터를 잃어도 다른 클라이언트가 가지고 있는 프로젝트 복제본을 사용하면 되기 때문에 프로젝트를 좀 더 효율적으로 관리할 수 있다.

---

</details>

<details><summary>SI와 SM의 차이는?</summary>

---

### SI와 SM의 차이는?

- SI: System Integration의 약자로 <b>시스템 구축</b>을 의미한다. SI 개발자는 기획, 개발, 설치, 운영, 보수 등 모든 과정에 참여하여 고객이 필요로 하는 시스템을 구축한다.
- SM: System management의 약자로 <b>시스템 관리</b>를 의미한다. SM 개발자는 기존에 만들어진 시스템을 관리하며 필요에 따라 추가 개발을 하기도 한다.

---

</details>

<details><summary>JSON(JavaScript Object Notation)이란?</summary>

---

### JSON이란?

JSON은 <b>키-값 쌍으로 이루어진 데이터 교환 포맷</b>으로 사람이 읽고 쓰기가 쉽도록 텍스트를 사용하며 언어로부터 독립적이다.

### JavaScript에서의 JSON 예시

```javascript

// JSON 문자열로 변환하기
var obj = {name: "foo", age: 10}
var json = JSON.stringfy(obj);

console.log(json); // {"name":"foo","age":10}
console.log(typeof json); // string

// JSON 문자열 파싱하기
var json = '{"name":"foo", "age":10}';
var obj = JSON.parse(json);

console.log(obj.age); // 10
console.log(typeof obj); // object
```

---

</details>
