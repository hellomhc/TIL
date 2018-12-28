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
