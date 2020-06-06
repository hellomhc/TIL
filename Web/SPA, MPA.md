### SPA

- SPA는 매번 서버에서 전체 페이지를 다운로드하지 않고 초기 구동 시 필요한 모든 코드를 모두 다운로드한다.
- SPA는 페이지 리로딩없이 필요에 따라 페이지를 동적으로 다시 작성할 수 있다.
- SPA는 모바일 또는 데스크탑 애플리케이션처럼 자연스러운 사용자 경험을 제공한다.

### MPA

- MPA는 페이지 이동 시 매번 서버에서 전체 페이지를 다운로드한다.
- MPA는 페이지 리로딩 시 다시 페이지에 필요한 코드를 모두 다운로드한다.

## SPA 구현 방법

- 자바스크립트 프레임워크(Angular, React.js, Vue.js etc.)
- Ajax(\*주의! Ajax는 SPA, MPA 어느 한 곳에 국한되지 않음. 서버와 비동기적 데이터 교환을 위해 사용되는 테크닉일 뿐임.)
- Websocket
- Server-send events(SSEs)

## SPA 장단점

### 장점

- 초기 로딩을 제외하면 속도가 빠르다.
- 서버 렌더링이 필요없기 때문에 서버 사용없이 개발이 가능하다.
- 크롬으로 디버깅하기가 쉽다. (네트워크 패널 모니터링)
- 서버 코드의 재사용 웹애플리케이션과 네이티브 모바일 앱을 위해 같은 코드를 재사용할 수 있다.

### 단점

- 검색 엔진 최적화(Search engine optimization)가 어렵다 - 이는 서버사이드 렌더링으로 해결
- 보안에 상대적으로 취약하다. - Cross-site scripting(XSS)
- 브라우저 히스토리(Browser history) 관리가 어렵다
- 초기 로딩 속도가 느리다.

## MPA 장단점

### 장점

- 검색 엔진 최적화가 쉽고 효율적이다.
- 깊은 레벨의 메뉴 카테고리를 제공하기에 적합하다.

### 단점

- 모바일을 위한 백엔드 코드 재사용이 어렵다.
- 개발이 복잡하며 이로 인해 개발 기간이 길어질 수 있다.
- 프론트엔드와 백엔드가 긴밀하게 결합되어 있다.

## 참고 자료

- [Single-page application - 위키피디아](https://en.wikipedia.org/wiki/Single-page_application#cite_note-12 "Single-page application")
- [Single-page application vs. multiple-page application - Paweł Skólski at neoteric.eu/blog](https://neoteric.eu/blog/single-page-application-vs-multiple-page-application/?utm_source=medium.com&utm_medium=social&utm_content=neo&utm_campaign=blog "Single-page application vs. multiple-page application")
