# 🏎️ 자동차 경주 게임 README by Seongwon Kim

## 요구사항
- 자동차의 이름을 입력하는 input 태그는 `#car-names-input` id값을 가진다.
- 자동차의 이름을 제출하는 button 태그는 `#car-names-submit` id값을 가진다.
- 레이싱 횟수를 입력하는 input 태그는 `#racing-count-input` id값을 가진다.
- 레이싱 횟수을 제출하는 button 태그는 `#racing-count-submit` id값을 가진다.

## 프로젝트 개요
- 각 이름이 5자 이하인 자동차를 입력받는다. (input form, button)
- 시도 횟수를 입력받는다. form은 요구사항에 제시된 형태 사용 (input form, button)
  - 전진 조건은 0~9사이의 랜덤 값을 구한다.
  - random 값이 4 이상일 경우 전진, 3 이하이면 멈춘다.
- 게임 끝난 후 우승자가 누구인지 출력
  - 여러 명일 경우 ,를 이용하여 구분한다. (join메소드 사용)

## 기능 목록 구현
- 1. 차 이름 입력, 파싱 및 검사하는 메소드 구현 (엔터키 포함)
  - 올바르지 않은 경우 => 경고 입력 후 초기화 해준다.
    - 차 이름 길이가 5글자를 넘어간다.
    - 공백이 들어간 경우
  - 올바른 경우 => 다음 순서
    - 인풋값을 파싱해서 new Car라는 객체 형태로 저장
    - Car객체에 게임 내역들 기록할 것
  - 올바르게 입력됐으면 RacingCarGame에 생성자 만들어서 다음 입력 받는다.

- 2. class Car 메소드 설계하기
  - 해당 클래스에 게임 내용을 어떻게 기록할것인가?
    - 부여받은 random 넘버를 활용해서 전진 여부 결정

- 3. 게임 진행 횟수 입력 및 체크하는 메소드 (엔터키 포함)
  - 자연수 아니면 입력 불가
    - 게임 진행 횟수가 올바른지 아닌지 체크
    - 올바르면 게임 시작, 아니면 다시 입력받기
  - 올바르게 입력 되면 RacingCarGame에서 게임 진행

- 4. 게임 진행 RacingCarGame 멤버 함수에서 한다.
  - Math.floor(Math.random()*9)는 외부로 뺀다.
  - 값이 4이상은 전진하고 3이하면 멈춘다.

- 5. 결과 출력 RacingCarGame에 결과만드는 메소드 후 DOM에 출력
  - 우승자는 배열로 리턴, 길이가 2이상일땐 쉼표로 구분, join함수 이용

<hr/>

## 결과 화면

<br/>
<hr/>

## 개발일지

### [Day 1] 이전 피드백 반영, 추가 요구사항 정리
#### 피드백과 지난 주 과제 비교
  - eslint, prettier를 적용하자.
  - <span style="color:blue">for/while/if문 사이의 space도 convention이다.</span> 주의하자!
  - 불필요한 공백 라인을 만들지 말라. 문맥이 달라질 때만!
  - 구현 순서 convention 지키자

  - 반복 지양, import 부분은 지난주에 잘 했음!

#### 추가 요구사항
  - class Car 객체를 만들 것. => 클래스 상속 개념?
  - 함수 길이가 <span style="color:red">15줄</span>을 넘기지 말 것
  - DOM 내장 객체에 innterHTML 부분에 tamplete literal을 적용하기

#### 새로운 개념
  - node객체 내장 함수들 익힐 것
    - node.previousSibling, node.nextSibling 등
    - [참고 url] https://developer.mozilla.org/ko/docs/Web/API/Node

#### input을 어떻게 처리하지?
  - dom init를 구현할 것
    - `.car-game-container` DOM 클래스 구조
      - 1. [자동차 이름 입력] div `#get-car-names`
        - input `#car-names-input`
        - button `#car-names-submit`
      
      - 2. [시도 횟수 입력] div `#get-racing-count`
        - input `#racing-count-input`
        - button `#racing-count-submit`

      - 3. 결과 출력하는 부분은 입력 성공적으로 받고 제대로 실행될 때 생각하기

#### 구현한 것
  - boilarplate 생성
  - id값 부여 => 프로그램 시작 후 생성된 노드는 전역변수로 쓰지 말것
