import Car from './Car.js';

export default function createCarInstance(carnamelist) {
  let carInstanceList = [];
  carnamelist.forEach((item) => {
    carInstanceList.push(new Car(item));
  });
  console.log(carInstanceList);
  return carInstanceList;
}
