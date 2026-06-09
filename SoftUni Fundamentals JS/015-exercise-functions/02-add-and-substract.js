function printResult(num1, num2, num3){
  let sum = (number1, number2) => number1 + number2;
  let subtract = (sum, number3) => sum - number3;

  let result = subtract(sum(num1, num2), num3);

  console.log(result);
}
