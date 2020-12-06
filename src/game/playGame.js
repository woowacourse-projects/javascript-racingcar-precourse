import getRacingCount from '../input/getRacingCount.js';

export default function playGame(carList) {
  const $racingCountSubmit = document.querySelector('#racing-count-submit');

  $racingCountSubmit.closest('div').removeAttribute('hidden');
  $racingCountSubmit.addEventListener('click', () => getRacingCount(carList));
}
