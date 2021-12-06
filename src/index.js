import { extractNames, isCarEnough, isNameTooLong } from './getNameInput.js';
import { isTrialEnough } from './getNumberInput.js';
import { Car } from './car.js';
import { printResult, printRacing, printFinalWinnerIs } from './printResult.js';

export default function racingCarGame() {
  const nameSubmitButton = document.getElementById('car-names-submit');
  const players = [];
  let carNames = [];
  let racingCount = 0;
  let winners = [];

  function getNameInput() {
    const nameEntered = document.getElementById('car-names-input').value;
    if (isCarEnough(nameEntered)) {
      carNames = extractNames(nameEntered);
    }
    isNameTooLong(carNames);
    makePlayers();
  }

  nameSubmitButton.addEventListener('click', getNameInput);

  function makePlayers() {
    for (let i = 0; i < carNames.length; i++) {
      const player = new Car(carNames[i], 0);
      players.push(player);
    }
  }

  const numberSubmitButton = document.getElementById('racing-count-submit');
  numberSubmitButton.addEventListener('click', getNumberInput);

  function getNumberInput() {
    const racingCountEntered =
      document.getElementById('racing-count-input').value;
    if (isTrialEnough(racingCountEntered)) {
      racingCount = racingCountEntered;
    }
    play();
    chooseWinner();
    printFinalWinnerIs();
    printResult(winners);
  }

  function play() {
    for (let i = 0; i < racingCount; i++) {
      playersMoveByCount();
      printRacing(players);
    }
  }

  function playersMoveByCount() {
    for (let i = 0; i < players.length; i++) {
      players[i].Move();
    }
  }

  function chooseWinner() {
    let max = 0;
    for (let i = 0; i < players.length; i++) {
      if (players[i].location >= max) {
        max = players[i].location;
      }
    }
    for (let i = 0; i < players.length; i++) {
      if (players[i].location === max) {
        winners.push(players[i].name);
      }
    }
  }
}

new racingCarGame();
