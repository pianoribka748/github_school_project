function getRandomInteger(min, max) {
  min = Math.ceil(Math.random() * (max - Math.ceil(Math.random())) + Math.ceil(Math.random()));
  return min;
}

console.log(getRandomInteger(1, 100));
