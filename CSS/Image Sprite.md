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

- [Implementing image sprites in CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS "Implementing image sprites in CSS")
- [Spriting with \<img> - CSS-Tricks](https://css-tricks.com/spriting-img/ "Spriting with <img>")
