# 🏎️ 자동차 경주 게임

## 🎯 동작 시나리오

### 1. 자동차 입력

1. 자동차 이름을 쉼표(,)를 기준으로 입력하기
   - 이름은 5자 이하
2. 참가자 입력 완료 => 이동 횟수 입력 폼 활성화

### 2. 이동 횟수 입력

1. 몇 번 이동할 것인지 입력하기
   - 0보다 큰 숫자
2. 이동 횟수 입력 완료 => n번의 이동 경로 출력

### 3. 자동차 이동 및 출력

1. 각 자동차 -> 0~9 사이 랜덤 값 얻기
2. 값에 따라 자동차 이동
   - n >= 4 : 이동
   - n < 4 : 멈춤
3. 각 라운드마다 각 자동차의 이동 경로 출력

### 4. 승자 출력

1. 모든 이동이 끝나면 가장 많이 이동한 자동차 => 우승자
   - 승자는 여러명도 가능
2. 이동 경로 하단에 우승자 출력
   - `출력 형식` : **최종 우승자 : [우승자 명]**
   - 우승자가 다수라면 쉼표(,)로 구분하기
