function printSumEvenNumbers(input) {
  let numberArray = input;
  let sum = 0;

  for (let i = 0; i < input.length; i++) {
    if (numberArray[i] % 2 === 0) {
      sum += Number(numberArray[i]);
    }
  }
  console.log(sum);

}
