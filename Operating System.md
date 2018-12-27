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
