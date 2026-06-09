function printPalindromeNumber(input){
  function checkIfIsPalindromeNumber(numbers){
    for(let index = 0; index < numbers.length; index++){
      let currentNumber = numbers[index].toString();
      let reversedNumber = currentNumber.split('').reverse().join('');

      if(currentNumber === reversedNumber){
        console.log('true');
      }else{
        console.log('false');
      }
    }
  }

  checkIfIsPalindromeNumber(input);
}

printPalindromeNumber([123,323,421,121]);