function factorial(n) {
  if (n < 0) return undefined; // Factorial not defined for negative numbers
  if (n === 0 || n === 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}
-
conste number = 5;
console.log(`Factorial of ${number} is ${factorial(number)}`);

