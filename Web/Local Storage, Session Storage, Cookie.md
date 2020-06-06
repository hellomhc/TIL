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

- [LocalStorage vs SessionStorage vs Cookies - Renat Galyamov](https://renatello.com/code/localstorage-vs-sessionstorage-vs-cookies/ "LocalStorage vs SessionStorage vs Cookies")
- [Local Storage vs Session Storage vs Cookie - Pratyush](https://scotch.io/@PratyushB/local-storage-vs-session-storage-vs-cookie "Local Storage vs Session Storage vs Cookie")
