const nameInput = document.querySelector("#car-names-input");
const nameBtn = document.querySelector("#car-names-submit");
const countInput = document.querySelector("#racing-count-input");
const countBtn = document.querySelector("#racing-count-submit");
const result = document.querySelector(".car-game-list");
const carGameWinner = document.querySelector(".car-game-winner");

let namesArray = [];

// 자동차 이름을 입력하고 버튼을 눌렀을 때 실행되는 콜백함수
nameBtn.addEventListener("click", () => {
  const names = nameInput.value;
  const nameValue = names.split(",");
  isLength(nameValue);
});

// 경주 횟수 입력 버튼을 눌렀을 때 실행되는 콜백함수
countBtn.addEventListener("click", () => {
  const is = isNum();
  if (is === true) {
    for (let i = 0; i < Number(countInput.value); i++) {
      for (let j = 0; j < namesArray.length; j++) {
        if (Math.floor(Math.random() * 10) >= 4) {
          namesArray[j].count += "-";
        }
      }
      showProcess(namesArray);
    }
    showResult();
  }
});

// 화면상에 실행 과정을 보여주는 함수
function showProcess(args) {
  for (let i = 0; i < args.length; i++) {
    const list = document.createElement("li");

    if (args.length - 1 === i) {
      list.innerHTML = `${args[i].value}: ${args[i].count}<br></br>`;
    } else {
      list.innerHTML = `${args[i].value}: ${args[i].count}`;
    }
    result.appendChild(list);
  }
}

// 마지막에 최종 우승자를 출력하는 함수
function showResult() {
  let array = [];
  for (let i = 0; i < namesArray.length; i++) {
    array.push(namesArray[i].count.length);
  }
  const max = Math.max.apply(null, array);
  const gameResult = namesArray.filter((item) => item.count.length === max);
  for (let i = 0; i < gameResult.length; i++) {
    const doc = document.createElement("span");
    if (gameResult.length - 1 === i) {
      doc.innerHTML = `${gameResult[i].value}`;
    } else {
      doc.innerHTML = `${gameResult[i].value}, `;
    }
    carGameWinner.append(doc);
  }
}

// 입력 받은 배열의 문자열 길이를 측정하는 함수
function isLength(args) {
  pushArray(args);
  for (let i = 0; i < args.length; i++) {
    if (args[i].length > 6) {
      alert("5자이하의 문자를 입력해주세요.");
      nameInput.value = "";
      namesArray = [];
      break;
    }
  }
}
// 배열에 입력받은 배열을 넣는 함수
function pushArray(args) {
  for (let i = 0; i < args.length; i++) {
    namesArray.push({ value: args[i], count: "" });
  }
}

// 입력받은 정수가 문자가 아닌지 판단하는 함수
function isNum() {
  const isValue = Number.isInteger(Number(countInput.value));
  if (isValue === false) {
    alert("숫자를 입력해주세요");
    countInput.value = "";
  } else {
    return true;
  }
}
