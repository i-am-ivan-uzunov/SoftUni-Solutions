function printSumOfOddNumbers(n) {
  let number = n;
  let oddNumber = 0;
  let sumOddNumbers = 0;
  let counter = 1;

  while (oddNumber < number) {
    if(counter % 2 !== 0){
      console.log(counter);
      oddNumber++;
      sumOddNumbers += counter;
    }
    counter++;
  }
  console.log('Sum: ' + sumOddNumbers);
}
