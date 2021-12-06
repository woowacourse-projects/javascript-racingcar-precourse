import {
  ERROR_MESSAGE,
  MAX_LENGTH_OF_CAR_NAME,
  MIN_LENGTH_OF_CAR_NAME,
  MIN_NUMBER_OF_CARS,
  MIN_OF_RACING_COUNT,
} from '../constants/index.js';

// Validations for Car Names
function isValidNumberOfCar(carNames) {
  return carNames.length >= MIN_NUMBER_OF_CARS;
}

function hasDuplicateCarName(carNames) {
  return !(carNames.length === [...new Set(carNames)].length);
}

function hasInvalidLengthOfCarName(carNames) {
  const invalids = carNames.filter((name) => (
    name.length < MIN_LENGTH_OF_CAR_NAME || name.length > MAX_LENGTH_OF_CAR_NAME
  ));
  return invalids.length;
}

function hasWhitespaceInCarName(carNames) {
  const whiteSpacePattern = /\s/;
  const invalids = carNames.filter((name) => (
    name.match(whiteSpacePattern)
  ));
  return invalids.length;
}

function isValidCarNames(carNames) {
  if (!isValidNumberOfCar(carNames)) return alert(ERROR_MESSAGE.NUMBER_OF_CAR);
  if (hasDuplicateCarName(carNames)) return alert(ERROR_MESSAGE.DUPLICATE_CAR_NAME);
  if (hasInvalidLengthOfCarName(carNames)) return alert(ERROR_MESSAGE.LENGTH_OF_CAR_NAME);
  if (hasWhitespaceInCarName(carNames)) return alert(ERROR_MESSAGE.WHITESPACE_IN_CAR_NAME);
  return true;
}

// Validations for Racing Count
function isInteger(count) {
  return Number.isInteger(count);
}

function isLessThanMinCondition(count) {
  return count < MIN_OF_RACING_COUNT;
}

function isValidRacingCount(count) {
  if (!isInteger(count)) return alert(ERROR_MESSAGE.RACING_COUNT_MUST_BE_INTEGER);
  if (isLessThanMinCondition(count)) return alert(ERROR_MESSAGE.MIN_OF_RACING_COUNT);
  return true;
}

export {
  isValidCarNames,
  isValidRacingCount,
};