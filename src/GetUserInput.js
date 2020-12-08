import CheckInput from './CheckInput.js';
import ErrorMsg from './ErrorMsg.js';

export default class GetUserInput {
  constructor() {
    this.cars = [];
    this.count = 0;
  };

  getCars() {
    const carUserInput =
      document.getElementById('car-names-input').value.replace(/(\s*)/g, "").split(',');
    this.cars = this.cars.concat(carUserInput);
    const validation = new CheckInput().checkCarList(this.cars);
    
    if (validation !== 1) {
      this.cars.length = 0;
      document.getElementById('car-names-input').value = '';
      document.getElementById('try-count-form').hidden = true;
      alert(new ErrorMsg().setError(validation));
    }

    return validation;
  }

  getCount() {
    this.count =
        Number(document.getElementById('racing-count-input').value);
    const validation = new CheckInput().checkCount(this.count);
    
    if (validation !== 1) {
      document.getElementById('racing-count-input').value = null;
      document.getElementById('game-result-container').hidden = true;
      alert(new ErrorMsg().setError(validation));
    }

    return validation;
  };
};
