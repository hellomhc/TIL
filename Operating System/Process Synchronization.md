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

- [Semaphore vs. Monitors - what is the difference? - Stackoverflow](https://stackoverflow.com/questions/7335950/semaphore-vs-monitors-whats-the-difference "Semaphore vs. Monitors - what is the difference?")
- [Monitor vs Mutex - Stackoverflow](https://stackoverflow.com/questions/38159668/monitor-vs-mutex "Monitor vs Mutex")

---

1. <a name="processsynchronization1"></a> 서로 다른 두 프로세스, 혹은 스레드 등의 처리 단위가 같이 접근해서는 안 되는 공유 자원이 위치하는 영역을 뜻한다. 이를 해결한다. 임계 구역에 두 처리 단위가 동시에 접근하게 되면 임계 구역 문제가 발생한다.
