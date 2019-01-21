# 운영체제(Operating System)

<details><summary>문맥 전환(Context Switch)</summary>

## 문맥 전환(Context Switch)이란?

현재 수행 중이던 프로세스(또는 쓰레드)를 멈추고 CPU를 다른 프로세스에 넘겨주는 과정을 문맥 전환(Context Switch)라고 한다. 문맥 전환은 멀티태스킹, 인터럽트 핸들링 또는 사용자 모드와 커널 모드 간의 전환 과정에서 발생하며 문맥 전환이 실행될 때마다 운영체제는 CPU를 제어<sup>[[1]](#contextswitch1)</sup>해야하므로, 과도한 문맥 전환 작업은 시스템 수준 CPU 소모<sup>[[2]](#contextswitch2)</sup>를 높이게 된다.

<div align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Context_switch.png" height="250px" align="middle"></img> 
    <br>
    <sub>문맥 전환(Context Switch) 프로세스 - <a href="https://ko.wikipedia.org/wiki/%EB%AC%B8%EB%A7%A5_%EA%B5%90%ED%99%98">Wikipedia</a></sub>  
    <br><br>
</div>

## 참고 자료

- [Context Switch - Wikipedia](https://ko.wikipedia.org/wiki/%EB%AC%B8%EB%A7%A5_%EA%B5%90%ED%99%98 'Context Switch')

---

1. <a name="contextswitch1"></a> 실행 중인 프로세스의 상태(문맥)를 PCB에 저장하고 중앙 처리 장치에 새로운 프로세스를 적재하는 작업을 말한다.
2. <a name="contextswitch2"></a> 문맥 전환이 잦으면 문맥 전환 처리 시간이 늘어나기 때문에 오버헤드도 증가한다.
   </details>

<details><summary>프로세스(Process)</summary>

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

- [프로세스 - Wikipedia](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4 '프로세스')
- [프로세스 제어 블록 - Wikipedia](https://ko.wikipedia.org/wiki/%ED%94%84%EB%A1%9C%EC%84%B8%EC%8A%A4_%EC%A0%9C%EC%96%B4_%EB%B8%94%EB%A1%9D '프로세스 제어 블록')
- [메모리의 구조 - TCPSCHOOL](http://tcpschool.com/c/c_memory_structure 'TCPSCHOOL')

---

   </details>

<details><summary>쓰레드(Thread)</summary>

## 쓰레드의 개념

CPU에 할당되어 수행되는 프로세스 내에서 실행되는 단위이다. 기존의 CPU의 작업 단위는 프로세스 단위였으나 서로 독립적인 일들을 불필요하게 순차적으로 처리하는 프로세스의 문제점을 개선하고자 프로세스보다 좀 더 작고 독립적으로 스케줄링이 가능한 프로세스 내의 실행 단위인 쓰레드라는 개념이 도입되었다.

  <div align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Multithreaded_process.svg/330px-Multithreaded_process.svg.png"  align="middle"></img> 
      <br>
      <sub>두 개의 쓰레드를 실행하고 있는 하나의 프로세스 - <a href="http://www.ques10.com/p/24811/short-note-on-process-control-block/">Wikipedia</a></sub>  
      <br><br>
  </div>

## 쓰레드의 장단점

### 장점

멀티 프로세스에서 독립적으로 실행되어 각각의 별개의 메모리를 차지하는 프로세스와 달리 하나의 프로세스 내에 존재하기 때문에 메모리를 공유해서 사용한다. 메모리를 공유할 수 있기 때문에 쓰레드 간의 전환 속도가 프로세스 간의 전환 속도보다 빠르며, CPU가 여러 개일 때 각각의 CPU가 쓰레드를 하나씩 담당하는 방법으로 속도를 높일 수 있다.

### 단점

실행 순서를 보장할 수 없어 경쟁 상태<sup>[[1]](#thread1)</sup>가 발생한다. 세마포어 같은 프로세스/쓰레드 동기화 통해 이러한 문제를 해결할 수 있다.

## 싱글 쓰레드와 멀티 쓰레드

### 싱글 쓰레드

프로세스 내에 하나의 쓰레드가 존재하여 모든 작업을 처리한다.

### 멀티 쓰레드

여러 개의 쓰레드가 하나의 프로세스에 존재하여 여러 작업들을 동시에<sup>[[2]](#thread2)</sup> 처리한다. 각각의 쓰레드는 힙 영역, 정적 영역, 코드를 공유하지만, 자기 고유의 레지스터와 스택을 가지고 있다.

  <div align="center">
  <img src="https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/images/Chapter4/4_01_ThreadDiagram.jpg" width="675px;"  align="middle"></img> 
      <br>
      <sub>싱글 쓰레드와 멀티 쓰레드 - <a href="https://www.cs.uic.edu/~jbell/CourseNotes/OperatingSystems/4_Threads.html">uic.edu</a></sub>  
      <br><br>
  </div>

## 커널 레벨 쓰레드와 유저 레벨 쓰레드

### 유저 레벨 쓰레드(User-Level Thread)

유저 레벨 쓰레드는 운영체제에서 지원하지 않는 쓰레드 기능을 사용하기 위해 사용자가 직접 구현한 쓰레드이며 이는 보통 라이브러리로 구현된다. 동일한 메모리 영역에서 쓰레드가 생성 및 관리되므로 유저 모드에서 커널 모드로의 전환이 필요없어 속도가 빠른 장점이 있는 반면 프로세스 내의 쓰레드 중 하나가 시스템 호출 등으로 중단되면 프로세스 전체가 중단된다. 이는 커널이 지원하는 쓰레드가 아니기 때문에 프로세스 내부의 쓰레드를 인식하지 못하며 해당 프로세스를 대기 상태로 전환시키기 때문이다.

### 커널 레벨 쓰레드(Kernel-Level Thread)

커널 레벨 쓰레드는 운영체제에서 지원하는 쓰레드 기능으로 커널이 직접 쓰레드의 생성 및 스케줄링 등을 관리한다. 쓰레드가 시스템 호출 등으로 중단되더라도, 커널은 프로세스 내의 다른 스레드를 중단하지 않으며 커널에서 직접 제공하기 때문에 안전성이 보장되며 다양한 기능을 제공한다. 그러나 유저 모드에서 커널 모드로의 전환이 빈번하여 사용자 스레드에 비해 생성 및 관리하는 것이 속도가 느리다.

  <div align="center">
  <img src="https://t1.daumcdn.net/cfile/tistory/99C15A3B5C25E7ED15" width="700px;"  align="middle"></img> 
      <br>
      <sub>커널 레벨 쓰레드와 유저 레벨 쓰레드</sub>  
      <br><br>
  </div>

## 참고 자료

- [쓰레드 - Wikipedia](<https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A0%88%EB%93%9C_(%EC%BB%B4%ED%93%A8%ED%8C%85)> '쓰레드')
- [커널 레벨 쓰레드와 유저 레벨 쓰레드 - 뇌를 자극하는 윈도우즈 시스템 프로그래밍](https://www.youtube.com/watch?v=sOt80Kw0Ols '커널 레벨 쓰레드와 유저 레벨 쓰레드')

---

1. <a name="thread1"></a> 둘 이상의 입력 또는 조작의 타이밍이나 순서 등이 결과값에 영향을 줄 수 있는 상태를 말한다.
2. <a name="thread2"></a> 멀티 쓰레드 환경에서는 하나의 프로세스를 실행할 때 프로세스 내에 각각의 쓰레드를 엄청난 속도로 스위칭하며 독립적인 작업들을 거의 동시에 처리하게 된다.(CPU는 한번에 하나의 작업만 수행할 수 있다는 사실을 잊지 말자)
   </details>

<details><summary>프로세스 동기화(Process Synchronization)</summary>

## 프로세스 동기화의 개념

프로세스 동기화란 프로세스들이 임계 구역(Critical Section)<sup>[[1]](#processsynchronization1)</sup>에 동시에 접근할 때 발생하는 문제점을 해결하기 위해 사용되는 테크닉이다.

## 프로세스 동기화의 필요성

어떤 프로세스가 먼저 공유 자원에 접근하느냐에 실행 결과가 달라질 수 있기 때문에 공유 자원의 일관성을 유지하기 어렵다. 그래서 이를 해결하기 위해 프로세스 동기화 방법들이 고안되었다.

## 프로세스 동기화 방법

### 뮤텍스(Mutex)

임계 구역에 접근 중인 프로세스를 제외한 다른 프로세스들이 임계 구역에 접근하지 못하도록 제어하는 방법이다. 다양한 상호 배제 알고리즘이 있다.

### 세마포(Semaphore)

정수형 변수를 두어 임계 구역에 대한 접근을 제한하는 기법이다. 뮤텍스에서 사용된 알고리즘의 복잡성과 일반화의 어려움을 극복하기 위해 뮤텍스를 기반으로 만들어졌다. 뮤텍스와 달리 세마포어는 카운트를 조절하여 임계 구역에 진입 가능한 프로세스/스레드 수를 조절할 수 있다.

### 모니터(Monitor)

모니터는 기존 뮤텍스 기법을 개선한 고수준의 상호 배제를 강제하는 기법으로 임계 구역에 모니터를 지정하면 프로세스는 임계 구역에 접근하기 위해 모니터에 들어가야만 한다. 다시 말해, 모니터 내부에 들어간 프로세스에게만 임계 구역에 접근할 수 있는 기능을 제공한다. 또한 프로세스가 모니터에 들어가고자 할 때 다른 프로세스가 모니터 내부에 있다면 입장 큐에서 대기하여야 한다.

## 참고 자료

- [Semaphore vs. Monitors - what is the difference? - Stackoverflow](https://stackoverflow.com/questions/7335950/semaphore-vs-monitors-whats-the-difference 'Semaphore vs. Monitors - what is the difference?')
- [Monitor vs Mutex - Stackoverflow](https://stackoverflow.com/questions/38159668/monitor-vs-mutex 'Monitor vs Mutex')

---

1. <a name="processsynchronization1"></a> 서로 다른 두 프로세스, 혹은 스레드 등의 처리 단위가 같이 접근해서는 안 되는 공유 자원이 위치하는 영역을 뜻한다. 이를 해결한다. 임계 구역에 두 처리 단위가 동시에 접근하게 되면 임계 구역 문제가 발생한다.
   </details>
