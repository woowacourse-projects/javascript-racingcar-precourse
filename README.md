<p align="middle" >
  <img width="200px;" src="https://github.com/woowacourse/javascript-racingcar-precourse/blob/main/images/racingcar_icon.png?raw=true"/>
</p>
<h1 align="middle">자동차 경주 게임</h1>

## 구현 기능나열

- 자동차 이름들 입력 이벤트
- 게임 횟수 입력 이벤트
- 게임 진행
- 개임 결과 렌더링


자동차 이름들과 게임 횟수 입력창과 버튼 따로 존재해서 

자동차 이름들을 입력하고 확인 버튼 누른 후 게임 횟수 입력하고 확인 버튼을 누르면 게임이 시작하는 것과

input에 값을 입력하고 확인을 누르면 두 input중 하나라도 빈 값이 있으면 경고창이 뜨도록 하는 것 중에 고민했습니다

전자는 게임 횟수를 먼저 입력한다면 자동차 이름들을 입력하지 않은 것에 대한 경고창이 떠야하기 때문에

후자인 확인을 누를 때 언제라도 input 하나라도 비어 있으면 경고차이 뜨는 것으로 결정했습니다


자동차 대수 만큼 랜덤한 숫자를 만들어서 게임을 반복한 후 그 결과를 자동차에 할당하면 될 것이라고 생각해서

게임 진행에 대한 배열을 만들어서 자동차 배열 index와 게임 결과 배열 index를 일치시키는 방향으로 기능을 구현하려고 했습니다

이 방법이 제일 간단하다고 생각했습니다

---

## 프로그램 흐름도

- 유저가 자동차 이름들과 게임 횟수를 입력합니다
  - 자동차 이름들 입력
    - 예외처리: 자동차 글자수 5글자 초과, 입력창이 비어있는데 확인 버튼 누를 때
  - 게임 횟수 입력
    - 예외처리: 음수 입력, 입력창이 비어있는데 확인 버튼 누를 때

- 자동자 대수와 같은 길이의 배열을 만듭니다 (각 자동차들이 게임에서 이긴 횟수를 배열에 할당합니다)

- 랜덤한 값을 할당할 배열을 만듭니다
- [`MissionUtils` 라이브러리]로 배열에 랜덤한 값을 배열의 요소에 할당합니다
- 랜덤한 숫자를 담는 배열의 요소가 4이상이라면 게임에서 이긴횟수를 담는 배열의 요소에 1을 더해줍니다
- 이 과정을 게임 횟수만큼 반복합니다

- 마지막 게임 루프에서 게임에서 이긴횟수 배열에서 가장 큰 값을 구합니다
- 게임에서 이긴횟수 배열에서 큰 값과 같은 인덱스들을 구해 자동차 이름 배열에서 해당하는 인덱스 값을 문자열로 구해줍니다 (우승자를 구합니다)
- 게임에서 이긴 횟수를 담은 배열은 숫자이기 때문에 "-"로 바뀌고 자동차 배열과 같은 인덱스를 나열해서 더해줍니다

- 우승자와 게임과정을 화면에 보여줍니다