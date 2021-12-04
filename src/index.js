import { CAUTION_MESSAGE, DOM } from './constant/constant.js';
import CarNamesEvent from './events/CarNamesEvent.js';
import RacingCountEvent from './events/RacingCountEvent.js';
import Game from './Game/Game.js';

class RacingCar {
  constructor() {
    this.carNamesEvent = new CarNamesEvent();
    this.racingCountEvent = new RacingCountEvent();
    this.$racingCountSubmit = DOM.$RACING_COUNT_SUBMIT;
    this.$racingCountInput = DOM.$RACING_COUNT_INPUT;
    this.$carNamesSubmit = DOM.$CAR_NAMES_SUBMIT;
    this.carNames = [];
    this.racingCount = 0;
    this.main();
  }

  racingCountInputFocus = () => {
    this.racingCountEvent.onFocusInput();
  };

  readyGame = () => {
    this.racingCount = this.racingCountEvent.getInput();

    const game = new Game(this.racingCount, this.carNames);
    game.start();
  };

  isCarNamesSubmit = () => {
    if (this.carNames.length === 0) {
      this.racingCountEvent.alertCautionMessage(CAUTION_MESSAGE.FIRST_CAR_NAMES_SUBMIT);

      return false;
    }

    return true;
  };

  isValidateCount = () => {
    if (!this.racingCountEvent.validateCount()) {
      this.racingCountEvent.alertErrorMessage();

      return false;
    }

    return true;
  };

  racingCountSubmit = () => {
    this.$racingCountSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      if (!this.isCarNamesSubmit()) {
        return;
      }

      if (!this.isValidateCount()) {
        return;
      }

      this.readyGame();
    });
  };

  carNamesSubmit = () => {
    this.$carNamesSubmit.addEventListener('click', (event) => {
      event.preventDefault();

      if (!this.carNamesEvent.validateNames()) {
        this.carNamesEvent.alertMessage();
      }

      this.carNames = this.carNamesEvent.getInput();
    });
  };

  main = () => {
    this.carNamesSubmit();
    this.racingCountSubmit();
    this.racingCountInputFocus();
  };
}

new RacingCar();
