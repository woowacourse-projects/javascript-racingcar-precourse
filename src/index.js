import {
  $,
  isBlank,
  isIncludeSpace,
  isDuplicated,
  splitUsingComma,
  isOverFiveLetters,
  generateCars,
  isNumber,
  isZero,
} from './utils.js';
import { default as UI } from './DOMUtils.js';
import { ERROR } from './constants.js';

export default function RacingCarGame() {
  const init = () => {
    activateEventListeners();
    UI.initSection();
  };

  const activateEventListeners = () => {
    $('#car-names-submit').onclick = handleCarNamesSubmit;
    $('#racing-count-input').onkeydown = handleRacingCountInput;
    $('#racing-count-submit').onclick = handleRacingCountSubmit;
  };

  const handleCarNamesSubmit = e => {
    e.preventDefault();

    if (!isValidCarNames(UI.getCarNames())) return;

    UI.disableCarNamesForm();
    UI.showRacingCountSection();
  };

  const isValidCarNames = string => {
    if (isBlank(string)) return alert(ERROR.BLANK_SUBMIT);
    if (isIncludeSpace(string)) return alert(ERROR.INCLUDE_SPACE);

    const carNamesArray = splitUsingComma(string);
    if (isDuplicated(carNamesArray)) return alert(ERROR.DUPLICATED);
    if (isOverFiveLetters(carNamesArray)) return alert(ERROR.OVER_FIVE_LETTERS);

    return true;
  };

  const handleRacingCountInput = e => {
    if (isNumber(e.key)) return alert(ERROR.NOT_NUMBER);
  };

  const handleRacingCountSubmit = e => {
    e.preventDefault();

    if (isBlank(UI.getRacingCount())) return alert(ERROR.BLANK_SUBMIT);
    if (isZero(UI.getRacingCount())) return alert(ERROR.NOT_POSIVITE_INT);

    playCarRacing();

    UI.disableRacingCountForm();
  };

  const playCarRacing = () => {
    UI.showRacingResultTitle();

    const cars = generateCars(UI.getCarNames());

    Array.from({ length: Number(UI.getRacingCount()) }, () => tryMoveByRound(cars));

    UI.showWiners(cars);
  };

  const tryMoveByRound = cars => {
    cars.forEach(car => car.tryMove());

    UI.showRacingResult(cars);
  };

  init();
}

new RacingCarGame();
