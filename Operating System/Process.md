## 프로세스란?

보조기억장치에 있는 프로그램이 주기억장치에 올라와 실행 중인 상태를 프로세스라고 한다. 실제 프로세스는 다음과 같이 다양하게 정의되고 있다.

- 실행(Executing, Running) 중인 프로그램
- PCB(Process Control Block)을 지닌 프로그램
- 프로그램 카운터(Program Counter)를 지닌 프로그램

## 프로세스의 구조

하나의 프로세스 코드는 코드, 데이터, 스택, 힙 영역으로 구성되어 있다.

- 코드(Code) 영역에는 실행할 CPU가 해석할 수 있는 프로그램의 바이너리 코드가 저장되어 있다.
- 데이터(Data) 영역에는 프로그램의 전역 변수, 정적 변수에 할당되는 데이터가 저장된다.
- 스택(Stack) 영역에는 지역변수와 함수 호출 시 전달되는 인수에 할당되는 데이터가 저장된다.
- 힙(Heap) 영역에는 동적으로 할당되는 데이터가 저장된다.

<div align="center">
	<img src="http://tcpschool.com/lectures/img_c_memory_structure.png"  align="middle"></img> 
    <br>
    <sub>프로세스 구성요소 - <a href="http://tcpschool.com/c/c_memory_structure">TCPSCHOOL</a></sub>  
    <br><br>
</div>

## 프로세스의 상태

중앙처리장치는 한번에 하나의 프로세스만 실행할 수 있다. 따라서 실행 외 상태의 프로세스를 관리하기 위해 커널 내에는 준비 큐, 대기 큐, 실행 큐 등의 자료 구조가 있으며 커널은 이것들을 이용하여 프로세스의 상태를 관리한다.

- 생성(create): 프로그램이 메모리에 적재되면서 프로세스가 생성되는 단계
- 실행(running): 프로세스가 CPU를 차지하여 명령어들이 실행되고 있는 단계
- 준비(ready): 프로세스가 CPU를 사용하고 있지는 않지만 언제든지 사용할 수 있느 상태로, CPU가 할당되기를 기다리고 있는 단계
- 대기(waiting) 또는 보류(block): 프로세스가 입출력 완료, 시그널 수신 등 어떤 사건을 기다리고 있는 단계
- 종료(terminated): 프로세스의 실행이 종료된 단계

  <div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Process_states.svg/1024px-Process_states.svg.png" height="300px;"  align="middle"></img> 
      <br>
      <sub>프로세스 상태 - <a href="https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4">Wikipedia</a></sub>  
      <br><br>
  </div>

## 프로세스의 상태 전환

프로세스의 각 상태 전환 단계를 다음과 같이 분류한다.

- 디스패치(dispatch): 준비 완료 리스트의 맨 앞에 있던 프로세스가 준비 완료 상태에서 실행 상태(CPU 점유)로 전환될 때
- 시간 제한(time out): 중앙처리장치의 독점 사용 방지를 위해 주어진 시간이 끝난 프로세스가 실행 상태에서 준비 완료 상태로 전환될 때
- 보류(block): 주어진 시간이 종료되기 전에 I/O 작업이 요구되어 프로세스가 실행 상태에서 대기 상태로 전환될 때
- 깨움(wakeup): I/O 작업이 종료되어 프로세스가 대기 상태에서 준비 완료 상태로 전환될 때

## 프로세스 제어 블록(Process Control Block)

프로세스 제어 블록이란 필요한 프로세스의 모든 정보를 담고 있는 운영체제 커널의 자료구조이다. 이는 프로세스 생성 시에 만들어지고 프로세스가 종료되면 제거되며 프로세스 상태 변화가 일어나면 트래픽 제어기에 의해 프로세스 제어 블록의 내용이 변경된다. PCB는 프로세스의 중요 정보를 가지고 있기 때문에 일반 사용자가 접근하지 못하는 보호 메모리 영역에 보관되며 주로 연결 리스트로 프로세스 제어 블록을 보관한다.

  <div align="center">
  <img src="https://i.imgur.com/CuS0wlk.jpg"  align="middle"></img> 
      <br>
      <sub>프로세스 제어 블록(PCB) - <a href="http://www.ques10.com/p/24811/short-note-on-process-control-block/">Ques10</a></sub>  
      <br><br>
  </div>

- 프로세스 식별자(Process ID)
- 프로세스 상태(Process State): 생성(create), 준비(ready), 실행(running), 대기(waiting), 완료(terminated) 상태가 있다. 유예준비상태(suspended ready), 유예대기상태(suspended wait)는 스택이 아닌 보조기억장치에 저장된다.
- 프로그램 카운터(Program Counter): 다음 실행할 명령어의 주소를 가리킨다.
- CPU 레지스터 및 일반 레지스터
- CPU 스케줄링 정보: 우선 순위, 최종 실행 시각, CPU 점유 시간 등
- 메모리 관리 정보: 해당 프로세스의 주소 공간 등
- 프로세스 계정 정보: 페이지 테이블, 스케줄링 큐 포인터, 소유자, 부모자 등
- 입출력 상태 정보: 프로세스에 할당된 입출력 장치 목록, 열린 파일 목록 등

## 참고 자료

- [프로세스 - Wikipedia](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4 "프로세스")
- [프로세스 제어 블록 - Wikipedia](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%A0%9C%EC%96%B4_%EB%B8%94%EB%A1%9D "프로세스 제어 블록")
- [메모리의 구조 - TCPSCHOOL](http://tcpschool.com/c/c_memory_structure "TCPSCHOOL")
