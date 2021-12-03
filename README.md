# 기능 요구사항 구현목록

- 언제나 수정이 자유로운 살아있는 문서가 되게하자.
- 처음 게임을 시작했을 때와 종료까지 흐름을 기능별로 생각해보자.
- 각 흐름을 따라가면서 나름대로의 MVC패턴을 구현하는 것이 2주차 목표.
- index.js는 정말 최대한 단순하게 만들자.

1. 자동차 입력받기

   1. n 대의 자동차를 입력받는다.
   2. split(',')으로 나눈 길이만큼이 존재하는 car가 된다.
   3. 입력받은 자동차는 view부분에서도 출력돼야한다.

2. 실행할 횟수 입력받기

   1. seletor로 input에 입력한 횟수를 얻어오자.

3. 입력 검증하기.
   1. 자동차 이름은 5자 이하여야만 한다.
   2. 시도할 횟수는 숫자만 입력하도록 하자.
   3. 잘못된 입력일 경우에 view에 존재하는 alertMessage로 출력해주자.
4. 게임

   1. 게임 시작하기.

      1. 두 입력 값이 정상적일 경우에 콜백함수를 play함수를 호출한다.
      2. 콜백 함수의 호출로 정해진 runTime만큼 게임이 실행된다.

   2. 게임 진행하기.

      1. 0~9사이의 무작위 값을 생성하는 함수 작성하자.
      2. 생성된 값이 4이상인 경우에 전진하고, 그외에는 stop상태이다.

   3. 게임 종료.
      1. 최종 우승자를 보여주는 div를 생성한다.
      2. 우승자는 한 명이상일 때 ','로 구분해서 보여준다.
      3. input창들을 모두 clear해준다.

5. view 부분
   1. alert창을 보여준다.
   2. 각 게임 진행 상황을 보여준다.
      1. car의 이름과 각 가고있는 거리를 출력한다.

## 기타

6. common 부분
   1. const.js를 통해서 alert메세지등의 상수를 모두 분리해서 사용하자.
   2. 게임 진행과정에서 쓰이는 '-'도 export해서 사용하자.
