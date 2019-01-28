# Babel

<details><summary>Babel이란?</summary>

## Babel이란?

Babel은 자바스크립트 컴파일러<sup>[[1]](#babel1)</sup>로 ECMAScript 6 이상의 최신 자바스크립트 코드를 특정 브라우저 환경에서도 작동될 수 있도록 하위 호환 버전의 자바스크립트 코드로 변환한다. 플러그인을 사용하면 리액트의 JSX 문법이나 타입스크립트 문법도 변환이 가능하다.

```javascript
// Babel 입력값: ES2015 arrow function
[1, 2, 3].map(n => n + 1);

// Babel 출력값: ES5 equivalent
[1, 2, 3].map(function(n) {
  return n + 1;
});
```

## Babel을 사용해 다음 코드를 변환해보자!

```javascript
// babel/src/index.js
odds = evens.map(v => v + 1);
pairs = evens.map(v => ({ even: v, odd: v + 1 }));
nums = evens.map((v, i) => v + i);
```

### 1. babel 패키지 설치한다.

프로젝트 폴더에 다음 패키지들을 설치한다.

- @babel/core: babel 코어 모듈이다.
- @babel/cli: babel을 커맨드라인에서 사용할 수 있다.
- @babel/preset-env: 변환할 문법을 각각 지정하고 관리하는 수고를 덜어준다. 예를 들어 arrow function을 사용하기 위해 해당 플러그인을 받을 필요 없이 그냥 타겟 브라우저(e.g. ie10)를 지정하면 된다.
- @babel/polyfill: 폴리필을 제공한다.

```
$npm install --save-dev @babel/core @babel/cli @babel/preset-env
$npm install --save @babel/polyfill
```

### 2. 프로젝트 폴더에 babel.config.js 파일을 생성하고 다음 코드를 작성한다.

babel.config.js는 babel 환경 설정 파일이다.

```javascript
const presets = [
  [
    '@babel/env',
    {
      // 지원하고 싶은 브라우저의 버전
      targets: {
        ie: '10',
        edge: '17',
        firefox: '60',
        chrome: '67',
        safari: '11.1'
      },
      useBuiltIns: 'usage'
    }
  ]
];

module.exports = { presets };
```

### 3. 컴파일하기

babel/src 디렉토리에 위치한 모든 코드를 컴파일한다. 현재 폴더에는 index.js 파일 하나가 존재한다.

```
$./node_modules/.bin/babel src --out-dir lib

또는

$npx babel src --out-dir lib // npm@5.2.0 이상부터 지원

```

### 4. 컴파일 결과 확인하기

컴파일이 완료되면 babel/lib에 동일한 이름(index.js)으로 생성된다. 컴파일 결과 IE 10, Edge 17, Firefox 60, Chrome 67, Safari 11.1 이상의 버전을 지원하는 코드가 생성되었다.

```javascript
// babel/lib/index.js
'use strict';

odds = evens.map(function(v) {
  return v + 1;
});
pairs = evens.map(function(v) {
  return {
    even: v,
    odd: v + 1
  };
});
nums = evens.map(function(v, i) {
  return v + i;
});
```

## 참고 자료

- [Babel - Usage Guide](https://babeljs.io/docs/en/usage)
- [Is Babel a compiler or transpiler? - Stackoverflow](https://stackoverflow.com/questions/43968748/is-babel-a-compiler-or-transpiler)

---

1. <a name="babel1"></a> ECMAScript 6 이상의 명세에서 제시하는 고수준의 추상적 개념들을 브라우저에서 호환 가능한 저수준의 구현체로 변환한다는 점에 초점을 두어 Compiler라는 용어를 사용한다.
   </details>
