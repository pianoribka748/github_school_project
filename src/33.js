function fibonacci(n) {
  if (n <= 1) return n;
  let prev = 0, curr = 1;
  for (let i = 2; i < n + 1; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}
