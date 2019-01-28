# Design Pattern

<details><summary>MVC</summary>

## MVC

애플리케이션 로직을 모델(Model), 뷰(View), 컨트롤러(Controller) 3 가지의 역할로 분리한 소프트웨어 아키텍처 패턴이다.

- 모델(Model)은 애플리케이션이 어떠한 데이터를 가지고 있어야 하는가를 정의한다.
- 뷰(View)는 애플리케이션의 데이터가 어떻게 화면에 보여야 하는가를 정의한다.
- 컨트롤러(Controller)는 애플리케이션의 사용자 입력에 반응하여 모델과 뷰를 갱신하는 로직을 정의한다.

<div align="center">
	<img src="https://mdn.mozillademos.org/files/16042/model-view-controller-light-blue.png" width="400" align="middle"></img> 
    <br>
    <sup>MVC 패턴 </sup>  
</div>

### 장점

애플리케이션 로직을 모델, 뷰, 컨트롤러 3 가지 역할로 분리함으로써

- 서로 간의 종속성을 줄일 수 있다.
- 코드의 유연성과 재사용성을 높일 수 있다.

### 참고 문서

- [MVC architecture - MDN](https://developer.mozilla.org/en-US/docs/Web/Apps/Fundamentals/Modern_web_app_architecture/MVC_architecture)

</details>
