import { Car } from '../index.js'; 
import { CARS_NAME, GMAE_COUNT, NUMBER, MESSAGE } from '../utils/constant.js';
import { setGameElemetStyle } from '../utils/dom.js';

export function formEvent() {
  const allForm = document.getElementsByTagName("form");
  setGameElemetStyle("beforeGameStart")
  for (const eachForm of allForm) {
    eachForm.addEventListener("submit", (submitEvent) => {
      const inputCheckResult = inputCheck(submitEvent);
      submitEvent.preventDefault()
      if (inputCheckResult) {
        new Car(inputCheckResult);
      }
    })
  }
}

function inputCheck(submitEvent) {
  const allInput = document.getElementsByTagName("input");
  const userInputArray = [];
  let gameCountCheckResult;
  for (const eachInput of allInput) {
    userInputArray.push(eachInput.value)
  }
  const carNameCheckResult = carNameCheck(userInputArray[CARS_NAME]);
  if (submitEvent.target.id === "racing-count-form") {
    gameCountCheckResult = gameCountCheck(userInputArray[GMAE_COUNT]);
  }
  if (carNameCheckResult && gameCountCheckResult) {
    setGameElemetStyle("gameCountInput")
    return userInputArray;
  }
}

function carNameCheck(carsName) {
  const carsNameLengthCheckResult = carsNameLengthCheck(carsName);
  let result = true;
  if (!carsName) {
    alert(MESSAGE.CARNAME_EMPTY);
    result = false;
  } else if (!carsNameLengthCheckResult) {
    alert(MESSAGE.CARNMAE_OVERFIVEWORD);
    result = false;
  }
  if (result) {
    setGameElemetStyle("carsInput")
    return result;
  }
}

function carsNameLengthCheck(carsName) {
  const carsNameArray = carsName.split(',');
  let result = true;
  for (const carName of carsNameArray) {
    if (carName.length > NUMBER.FIVE) {
      result = false;
    }
  }
  
  return result;
}

function gameCountCheck(gameCount) {
  let result = true;
  if (!gameCount) {
    alert(MESSAGE.GAMECOUNT_EMPTY);
    result = false;
  } else if (gameCount <= NUMBER.ZERO) {
    alert(MESSAGE.GAMECOUNT_UNDERONE)
    result = false;
  }

  return result;
}