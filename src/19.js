function multiply(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error('Both inputs must be integers.');
  }
  
  const result = x * y;
  console.log(`The product of ${x} and ${y} is: ${result}`);
}

multiply(4, 5);
