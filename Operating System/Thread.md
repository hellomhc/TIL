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

- [쓰레드 - Wikipedia](<https://ko.wikipedia.org/wiki/%EC%8A%A4%EB%A0%88%EB%93%9C_(%EC%BB%B4%ED%93%A8%ED%8C%85)> "쓰레드")
- [커널 레벨 쓰레드와 유저 레벨 쓰레드 - 뇌를 자극하는 윈도우즈 시스템 프로그래밍](https://www.youtube.com/watch?v=sOt80Kw0Ols "커널 레벨 쓰레드와 유저 레벨 쓰레드")

---

1. <a name="thread1"></a> 둘 이상의 입력 또는 조작의 타이밍이나 순서 등이 결과값에 영향을 줄 수 있는 상태를 말한다.
2. <a name="thread2"></a> 멀티 쓰레드 환경에서는 하나의 프로세스를 실행할 때 프로세스 내에 각각의 쓰레드를 엄청난 속도로 스위칭하며 독립적인 작업들을 거의 동시에 처리하게 된다.(CPU는 한번에 하나의 작업만 수행할 수 있다는 사실을 잊지 말자)
