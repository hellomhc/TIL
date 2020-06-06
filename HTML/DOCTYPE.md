## DOCTYPE이란?

웹브라우저가 HTML 문서를 읽어낼 때 그 문서가 어떤 문서 형식을 따르고 있는지 명시적으로 웹브라우저에 알리기 위한 방법이다. 웹브라우저는 문서 내의 DOCTYPE 선언 존재 유무와 선언 버전에 따라 레이아웃 엔진의 렌더링 모드를 선택하게 된다.

## DOCTYPE의 등장

1996년 CSS1이 등장하게 되면서 그 해 마이크로소프트는 CSS1의 표준을 일부 지원하는 IE 3를 세상에 내 놓게 된다. 그리고 얼마 후 IE 4와 Netscape 4, 그리고 IE5가 등장하게 되는데 이들 또한 버그, 호환성의 문제점들로 가지고 있었고 CSS 표준을 완벽하게 구현해내지는 못하였다. 이처럼 브라우저들이 CSS 표준을 제대로 구현하지 못하는 상황이 생기면서 각 브라우저들은 특정 구현(e.g. IE의 박스 모델)에 있어 자기만의 스타일을 만들어 나갔고 이에 따라 개발자들은 각 브라우저의 기준에 맞게 개발을 하여야 했다. 마이크로소프트에서는 이러한 문제점들을 개선하기 위해 IE 6를 내놓게 되는데 여기서 예전 브라우저들과의 호환성 문제를 해결하기 위한 quirks mode<sup>[[1]](#doctype1)</sup>, almost standards mode<sup>[[2]](#doctype2)</sup>, standards mode<sup>[[3]](#doctype3)</sup>가 세상에 등장하게 된다. 이들이 등장하게 되면서 다른 브라우저들도 이를 적용하기 시작하였고 개발자들로 하여금 웹브라우저가 개발자가 작성한 CSS를 의도에 맞게 해석할 수 있도록 html 문서 전문에 DOCTYPE을 명시하게 되는 계기가 된다.

## 핵심 정리

- DOCTYPE HTML 태그가 아니다.
- DOCTYPE은 웹페이지가 어떤 HTML 버전을 기준으로 작성되었는지 명시적으로 웹브라우저에 알리기 위한 방법이다.
- DOCTYPE은 대소문자의 영향을 받지 않는다.
- 브라우저는 첫 DOCTYPE 선언만 적용한다. 그 이후 선언들은 무시한다.
- DOCTYPE은 문서의 최상단에 선언하는 게 좋다.
- DOCTYPE 선언을 문서 중간에 할 경우 선언 이전 코드는 quirks mode의 적용을 받는다.
- DOCTYPE은 브라우저가 quirks mode, almost standards mode,full standards mode 중 하나의 모드를 선택하는 기준이다.
- DOCTYPE은 생략하면 브라우저는 quirks mode로 작동한다. 이는 브라우저의 호환성 문제를 일으키는 원인이 된다.
- HTML4.01는 SGML<sup>[[4]](#doctype4)</sup> 표준을 따른다. 그러므로 HTML4.01 DOCTYPE 선언은 DTD<sup>[[5]](#doctype5)</sup>를 사용한다.
- HTML5는 SGML 표준을 따르지 않는다.<sup>[[6]](#doctype6)</sup> 그러므로 HTML5 DOCTYPE 선언은 DTD를 사용하지 않는다.
- HTML5는 &lt;!DOCTYPE html&gt; 형식으로 선언한다.

## 참고 자료

- [Decument type definition - Wikipedia](https://en.wikipedia.org/wiki/DTD "Decument type definition")
- [Standard Generalized Markup Language - Wikipedia](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language "Standard Generalized Markup Language")
- [HTML <!DOCTYPE> Declaration - w3schools](https://www.w3schools.com/tags/tag_doctype.asp "HTML <!DOCTYPE> Declaration")
- [Quirks Mode and Standards Mode - MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode "Quirks Mode and Standards Mode")
- [Activating Browser Modes with Doctype - Henri Sivonen](https://hsivonen.fi/doctype/ "Activating Browser Modes with Doctype")
- [W3C Recommendation 8.1.1 The DOCTYPE - W3C](https://www.w3.org/TR/html5/syntax.html#the-doctype "W3C Recommendation 8.1.1 The DOCTYPE")

---

1. <a name="doctype1"></a> quirks mode(비표준 모드)는 IE5 이하 버전처럼 오래된 레거시 웹페이지들의 하위 호환성을 유지하기 위한 목적으로 사용되는 기술로 옛 브라우저 버전을 기준으로 작성된 웹페이지들이 최신 브라우저에서 깨짐없이 작동할 수 있도록 옛 버전 기준에 따라 레이아웃 엔진에서 문서를 렌더링한다.
2. <a name="doctype2"></a> almost standards mode(거의 표준 모드)는 일부를 제외하고 HTML5 표준에 따라 문서를 렌더링한다.
3. <a name="doctype3"></a> full standards mode(표준 모드)는 HTML5 표준을 엄격히 따라 문서를 렌더링한다.
4. <a name="doctype4"></a> SGML(Standard generalized markup language)란 전자문서의 표준화를 위하여 국제 표준위원회가 만든 마크업 언어이다. SGML 문서는 크게 사용 글자 등을 기술하는 선언부,문서의 구조를 기술하는 문서 형식 정의부(DTT), 그리고 실제 문서의 내용이 담긴 본문 3가지로 구성된다. 사용자가 태그의 형태와 의미, 위치 등을 결정하여 문서 안에서 사용할 수 있다.
5. <a name="doctype5"></a> DTD(Document type definition, 문서 형식 정의)란 SGML계열의 마크업 언어에서 문서의 형식을 정의하는 것이다. SGML을 비롯해 HTML, XHTML, XML 등에서 사용된다.
6. <a name="doctype6"></a>HTML5는 SGML 파서에 의존하지 않고 자체적으로 정의한 파싱 규칙에 따라 작동된다.
