function printSumNumbers(n){
  let number = n;
  let sum = 0;

  while(number > 0){
    let currentDigit = number % 10;
    sum += currentDigit;

    number = parseInt(number / 10);
  }

  console.log(sum);
}