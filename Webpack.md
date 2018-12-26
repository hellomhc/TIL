# 웹팩(Webpack)

<details>
<summary>트리쉐이킹(Tree Shaking)</summary>
<p>

## 트리 쉐이킹이란?

자바스크립트 진영에서 흔히 사용되는 용어로 죽은(사용되지 않는) 코드를 제거하는 테크닉이다. 이는 정적 구조<sup>[[1]](#treeshaking1)</sup>의 ES2015 모듈 문법(i.e. import 와 export)에 의존하고 있다. ECMAScript 기반의 Dart, JavaScript, TypeScript와 같은 언어는 컴파일 단계에서 코드를 번들링하는 동안 사용되지 않는 코드를 제거하는 코드 최적화 작업을 수행한다. 여기서 알아두어야 할 점은 트리 쉐이킹은 사용하지 않는 코드를 제거한다기 보다는 번들링 과정에서 실제로 사용할 코드만 포함하는 작업이라는 점이다. 다르게 표현하면 살아 있는 코드 포함 작업이라고 볼 수 있겠다.

## 왜 사용하지 않는 코드를 제거해야 할까?

- 실행 프로그램의 전체 용량을 줄일 수 있다.
- 프로그램의 실행 시간(Running time)을 줄일 수 있다.
- 프로그램 구조를 단순화 시킬 수 있다.

## 참고 자료

- [Tree shaking - Wikipedia](https://en.wikipedia.org/wiki/Tree_shaking)
- [Tree shaking - Webpack](https://webpack.js.org/guides/tree-shaking/)

---

1. <a name="treeshaking1"></a> ES2015에서 제시한 정적 구조의 모듈에서는 imports와 exports의 결정을 런타임(동적으로)이 아니라 컴파일 단계(정적으로)에서 결정할 수 있다. - [Exploring ES6, Static module structure](http://exploringjs.com/es6/ch_modules.html#static-module-structure)

</p>
</details>
