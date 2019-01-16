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
