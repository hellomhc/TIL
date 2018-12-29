# 자료 구조(Data Structure)

<details><summary>연결 리스트(Linked list)</summary>

## 연결 리스트란?

연결 리스트는 각각의 요소들을 나열된 형태로 연결하여 자료를 저장하는 선형 자료구조이다. 각각의 요소들은 자신과 연결된 다음 요소를 가리키는 참조 정보(포인터 또는 링크라고도 한다)와 요소 자신만의 데이터를 가지고 있는데 이러한 참조 정보와 자신만의 데이터를 가진 요소를 노드(node)라고 부른다. 배열과 유사해보이지만 각각의 데이터들이 메모리상에 인접하여 위치하는 배열과는 달리, 연결 리스트는 데이터들이 메모리상에서 연속적으로 위치하지 않는다는 차이가 있다. 연결 리스트의 변형으로는 단일 연결 리스트, 이중 연결 리스트, 환형 연결 리스트 등 여러 형태의 연결 리스트가 있다.

## 단일 연결 리스트(Singly linked list)

<div align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Singly-linked-list.svg/408px-Singly-linked-list.svg.png" align="middle"></img> 
    <br>
    <sub>위 그림은 정수 값과 다음 노드에 대한 참조 링크 2개의 필드로 구성된 단일 연결 리스트를 나타낸다.</sub>  
    <br><br>
</div>

단일 연결 리스트는 노드 자신의 데이터와 다음 노드에 대한 참조 링크로 구성되어 있으며 각 노드는 참조 링크를 통해 연결된 다음 노드에 접근할 수 있다.

## 이중 연결 리스트(Doubly linked list)

<div align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Doubly-linked-list.svg/610px-Doubly-linked-list.svg.png" align="middle"></img>
    <br>
    <sub>위 그림은 정수 값과 다음 노드에 대한 참조 링크, 이전 노드에 대한 참조 링크 3개의 필드로 구성된 이중 연결 리스트를 나타낸다.</sub>
    <br><br>
</div>

이중 연결 리스트는 단일 연결 리스트와 달리, 다음 노드에 대한 참조 링크뿐만 아니라 이전 노드에 대한 참조 링크를 포함하여 2개의 참조 링크를 동시에 가지고 있다는 차이가 있다. 이전 노드에 대한 참조 링크를 가지고 있기 때문에 단일 연결 리스트에 비해 더 많은 메모리를 사용한다는 단점이 있지만 노드 간 양방향 접근이 가능하기 때문에 상대적으로 자료를 다루기가 편해진다는 이점이 있다.

## 환형 연결 리스트(Circular linked list)

<div align="center">
	<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Circularly-linked-list.svg/350px-Circularly-linked-list.svg.png" align="middle"></img>
    <br>
    <sub>위 그림은 마지막 노드가 처음 노드를 참조하여 순환 구조를 이루는 환형 연결 리스트를 나타낸다.</sub>
    <br><br>
</div>

환형 연결 리스트는 단일 연결 리스트 또는 이중 연결 리스트의 구조를 활용하지만, 마지막 노드가 처음 노드를 참조하여 노드가 계속해서 순환하는 구조를 이루어낸다는 차이가 있다.

## 연결 리스트의 장단점

### 장점

- 노드의 삽입과 삭제의 비용이 적다.
- 삽입과 삭제에 따른 크기가 동적이다.

### 단점

- 연결되는 노드에 대한 참조 링크를 가지고 있어야 하기 때문에 더 많은 메모리가 사용된다.
- 무작위로 특정 노드에 접근할 수 없다. 연결 리스트는 선형 자료구조이기 때문에 시작 노드를 기점으로 연결된 순서에 따라 해당 노드에 접근하여야 한다.
- 각각의 노드들은 메모리상에서 인접하여 있지 않기 때문에 순서에 따라 각각의 연결된 노드를 접근하는 비용이 크다.
- 단일 연결 리스트의 경우 이전 노드에 대한 참조 링크를 가지고 있지 않기 때문에 역 방향의 노드에 접근하는 것은 어렵다.(이는 이중 연결 리스트를 사용하여 해결할 수 있다)

## 시간 복잡도

<table>
    <thead>
        <tr>
            <th rowspan="2">조회</th>
            <th colspan="3"> 삽입 / 삭제</th>
        </tr>
        <tr>
            <th>시작</th>
            <th>중간</th>
            <th>마지막</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Θ(n)</td>
            <td>Θ(n)</td>
            <td>조회 시간 + Θ(n) </td>
            <td>Θ(1) 또는 Θ(n)</td>
        </tr>
    </tbody>
</table>
  
## 공간 복잡도
 Θ(n)

## 참고 자료

- [Linked list - Wikipedia](https://en.wikipedia.org/wiki/Linked_list)

---

</details>
