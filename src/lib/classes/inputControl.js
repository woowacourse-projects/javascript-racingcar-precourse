import { MAX_CAR_NAME_LENGTH } from '/src/lib/variables/constantNumbers.js';
import Car from '/src/lib/classes/car.js';

class InputResult {
  constructor() {
    this.goToNextStep = true;
    this.message = '';
    this.inputData = null;
  }

  getAlertMessage(message) {
    this.goToNextStep = false;
    this.message = message;
  }

  insertData(inputData) {
    this.goToNextStep = true;
    this.inputData = inputData;
  }
}

export default class InputsControl {
  constructor(inputs) {
    this.inputs = inputs;
  }

  checkSpace() {
    return /\s+/g.test(this.inputs);
  }

  checkChars() {
    return /[^1-9]+/g.test(this.inputs);
  }

  checkInvalidNumber() {
    return Number(this.inputs) <= 0;
  }
  
  checkMoreThanFiveChars() {
    const _carNames = this.inputs.split(',');
    return _carNames.some(carName => carName.length > MAX_CAR_NAME_LENGTH);
  }

  checkLessThanOneCars() {
    const _carNames = this.inputs.split(',');
    return _carNames.length < 2;
  }

  checkSameNames() {
    const _carNames = this.inputs.split(',');
    const carsWithoutSameName = new Set([..._carNames]);
    return carsWithoutSameName.size !== _carNames.length;
  }

  getCarNames() {
    return this.inputs.split(',').reduce((acc, carName) => {
      acc.push(new Car(carName));
      return acc;
    }, []);
  }

  getRacingCountNumber() {
    return Number(this.inputs);
  }

  getResultOfCarNamesInput($carNamesInput) {
    let inputResult = new InputResult();
    $carNamesInput.focus();
    if(this.checkSpace()) inputResult.getAlertMessage('공백은 입력받을 수 없습니다.');
    if(this.checkMoreThanFiveChars()) inputResult.getAlertMessage('자동차 이름은 5글자를 넘으면 안됩니다.');
    if(this.checkLessThanOneCars()) inputResult.getAlertMessage('두 개 이상의 자동차 이름을 입력하세요.');
    if(this.checkSameNames()) inputResult.getAlertMessage('같은 이름의 자동차를 입력할 수 없습니다.');

    if(inputResult.goToNextStep) inputResult.insertData(this.getCarNames());
    return inputResult;
  }

  getResultOfRacingCountNumber($racingCountInput) {
    let inputResult = new InputResult();
    $racingCountInput.focus();
    if(this.checkSpace()) inputResult.getAlertMessage('공백은 입력받을 수 없습니다.');
    if(this.checkChars()) inputResult.getAlertMessage('숫자 외 글자는 입력받을 수 없습니다.');
    if(this.checkInvalidNumber()) inputResult.getAlertMessage('1이상의 숫자만 입력하세요.');
    
    if(inputResult.goToNextStep) inputResult.insertData(this.getRacingCountNumber());
    return inputResult;
  }
}