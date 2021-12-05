import { carNamesInput, racingCountInput } from "./userInput.js";
import RacingCar from "../models/RacingCar.js";

export function init(object) {
  carInputInit(object);
  racingCountInputInit(object);
}

export function makeCarObjects(object) {
  object.carsArray.map((item) => {
    object.cars = [...object.cars, new RacingCar(item)];
  });
}

export function carInputInit(object) {
  const $carNamesSubmit = document.getElementById("car-names-submit");
  $carNamesSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    object.cars = [];
    object.carsArray = carNamesInput();
    if (object.carsArray !== undefined) {
      makeCarObjects(object);
    }
  });
}

export function racingCountInputInit(object) {
  const $racingCountSubmit = document.getElementById("racing-count-submit");
  $racingCountSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(racingCountInput());
  });
}
