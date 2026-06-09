function printSumOfFactorial(number1, number2){
  function calculateFactorialOfNumber(number){
    let factorialSum = 1;
    for(let index = 2; index <= number; index++){
      factorialSum *= index;
    }
    return factorialSum;
  }

  const factorialResult1 = calculateFactorialOfNumber(number1);
  const factorialResult2 = calculateFactorialOfNumber(number2);

  const divisionOfFactorials = (number1, number2) => (number1 / number2).toFixed(2);

  let finalResult = divisionOfFactorials(factorialResult1, factorialResult2);  

  console.log(finalResult)
}

