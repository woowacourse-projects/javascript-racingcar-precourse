import { $, isNull } from './common/utils.js';
import { inputValidation } from './common/validations.js';
import initialCarNames from './components/index.js';

const $carNamesSubmit = $('#car-names-submit');
$carNamesSubmit.addEventListener('click', event => {
  event.preventDefault();
  const $carNamesInput = $('#car-names-input');
  const names = inputValidation($carNamesInput.value);
  if (isNull(names)) return $carNamesInput.focus();
  initialCarNames(names);
});
