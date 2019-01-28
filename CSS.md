# CSS

<details><summary>트랜지션(Transition)</summary>

## 트랜지션이란?

CSS3 스펙의 일부로 CSS의 프로퍼티 값이 바뀌었을 때 원래 값에서 바뀐 값으로의 전환을 부드럽게 표현하는 기능이다. 예를 들어 font-size: 10px에서 font-size: 100px로 값의 변경될 때 한번에 폰트 크기가 바뀌는데 이에 트랜지션을 적용하면 폰트 크기가 10px에서 100px로 바뀌는 과정을 부드럽게 표현해서 보여준다.

## 트랜지션의 종류

- transition-property: all; 트랜지션이 해당 엘리먼트의 모든 프로퍼티에 적용된다.
- transition-duration: 1s; 트랜지션이 1초 동안에 걸쳐서 발생한다.
- transition: all 1s; 트랜지션이 1초 동안에 걸쳐서 발생하는데 해당 엘리먼트의 모든 프로퍼티에 적용된다.
- transition: font-size 1s, transform 0.1s; 트랜지션이 각각 폰트 사이즈는 1초, 트랜스폼은 0.1초에 걸쳐서 발생한다.
- transition-delay: 1s; 트랜지션 발생 시기를 1초 지연한다.
- transition-timing-function: linear 트랜지션이 일정 속도로 적용된다.
- transition-timing-function: ease 트랜지션이 천천히 시작해서 빨리 진행되다가 다시 천천히 끝난다.(현실 세계와 비슷)

---

   </details>

<details><summary>이미지 스프라이트(Image Sprites)</summary>

## 이미지 스프라이트란?

이미지 스프라이트란 사용할 여러 개의 이미지를 하나의 이미지로 합쳐서 필요한 부분을 사용하는 테크닉이다.

## 기존 이미지 파일 다운로드의 문제점

웹 페이지에 이미지가 사용된다면 웹 브라우저는 서버에게 요청하여 이미지 파일을 받아야 하는데 이때 오버헤드가 발생한다. 이는 서버에 요청해서 받아야 할 이미지가 많을수록 오버헤드가 증가하여 웹 페이지의 로딩 속도가 느려진다는 것을 의미한다.

## 어떻게 해결할 것인가?

여러 개의 이미지를 하나의 이미지로 합쳐 이미지를 내려받기 위한 서버 요청을 최대한 줄인다. 모바일 환경과 같이 한정된 자원을 사용하는 플랫폼에서는 웹페이지의 로딩 속도를 높여주는 효과가 있다. 또한, 많은 이미지 파일을 관리할 필요 없이 몇 개의 스프라이트 이미지 파일만 관리하면 되기 때문에 관리가 수월해진다.

## 이미지 스프라이트 구현

<div align="center">
	<img src="https://t1.daumcdn.net/cfile/tistory/992030435C400E730F" align="middle"></img> 
    <br>
    <sub>이미지 스프라이트 그림</sub>  
    <br><br>
</div>

### 1. background-position 사용하기

클래스 하나를 만들어 스프라이트 이미지를 배경 이미지를 지정한다.

```css
.toolbtn {
  background: url(myfile.png);
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

스프라이트 이미지에서 사용하고 싶은 이미지 영역만 background-position을 지정하여 표시한다.

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

### 2. object-position 사용하기

img 태그에 이미지를 불러온다.

```javascript
<img  src='sprite.png' alt='Icons'>
```

스프라이트 이미지에서 사용하고 싶은 이미지 영역만 object-position을 사용해 표시한다.

```css
img {
  object-fit: none;
  object-position: 0 0;
  width: 100px;
  height: 100px;
}
```

## 참고 자료

- [Implementing image sprites in CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS 'Implementing image sprites in CSS')
- [Spriting with \<img> - CSS-Tricks](https://css-tricks.com/spriting-img/ 'Spriting with <img>')

---

   </details>

## Issue

<details><summary>How do I remove the space between inline-block elements?</summary>

### SOLUTION 1 - ONLY CSS

Add font-size: 0 to the parent element and then declare a sensible font-size on the children.

```html
<ul class="parent">
  <li class="child">Child1</li>
  <li class="child">Child2</li>
  <li class="child">Child3</li>
</ul>
```

```css
.parent {
  font-size: 0;
}
.child {
  font-size: 16px;
}
```

##### BROWSER COMPATIBILITY

This works in recent versions of all modern browsers.

- IE8+ ok
- Safari6+ ok

### SOLUTION 2

Remove the whitespace in the HTML between the inline-block elements

##### TYPE 1

```html
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
</ul>
```

##### TYPE 2

```html
<ul>
  <li>Item1</li>
  <!--
  -->
  <li>Item2</li>
  <!--
  -->
  <li>Item3</li>
</ul>
```

##### TYPE 3

```html
<ul>
  <li>Item1</li>
  <li>Item2</li>
  <li>Item3</li>
</ul>
```

### REFERENCE

- [How do I remove the space between inline-block elements? - Stackoverflow](https://stackoverflow.com/questions/5078239/how-do-i-remove-the-space-between-inline-block-elements)

</details>
