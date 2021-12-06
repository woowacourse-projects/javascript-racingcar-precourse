function checkCarNameDuplicate(carNameList) {
  for (let name of carNameList) {
    let count = carNameList.filter(element => name === element).length;

    if (count >= 2) {
      return false;
    }
  }

  return true;
}

function checkCarNameLen(carNameList) {
  for (let name of carNameList) {
    if (name.length >= 6) {
      return false;
    }
  }

  return true;
}

function checkCarNameComma(carNameList) {
  if (carNameList.length === 1) {
    return false;
  }

  return true;
}

export function checkCarName(carNameList) {
  let allowCarName = false;
  if (
    checkCarNameDuplicate(carNameList) &&
    checkCarNameLen(carNameList) &&
    checkCarNameComma(carNameList)
  ) {
    allowCarName = true;
  }

  return allowCarName;
}

export function checkCount(count) {
  if (count <= 0) {
    return false;
  }

  return true;
}
