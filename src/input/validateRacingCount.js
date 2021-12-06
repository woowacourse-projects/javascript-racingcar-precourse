import { $racingCount, ERROR_RACING_COUNT } from "../common/constants.js";

const trimRacingCount = () => $racingCount.value.trim();

const isNaturalNumber = () => {
  return (
    Number.isInteger(parseInt($racingCount.value)) && $racingCount.value > 0
  );
};

export default function validateRacingCount(e) {
  e.preventDefault();

  const racingCount = trimRacingCount();
  if (isNaturalNumber(racingCount)) {
    // 게임시작
    return true;
  }

  $racingCount.value = "";
  $racingCount.focus();
  alert(ERROR_RACING_COUNT);

  return false;
}
