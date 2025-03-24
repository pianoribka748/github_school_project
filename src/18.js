function squareRoot(value) {
  if (value < 0) {
    throw new Error("The value must be non-negative.");
  }
  
  const root = Math.sqrt(value);
  console.log(`√${value} = ${root}`);
}
