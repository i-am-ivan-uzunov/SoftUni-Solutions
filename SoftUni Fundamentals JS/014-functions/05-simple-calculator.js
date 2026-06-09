function calculate(number1, number2, operator){
  let result = 0;

  if(operator === 'multiply'){
    result = (number1, number2) => number1 * number2;
  }else if(operator === 'divide'){
    result = (number1, number2) => number1 / number2;
  }else if(operator === 'add'){
    result = (number1, number2) => number1 + number2;
  }else{
    result = (number1, number2) => number1 - number2;
  }

  console.log(result(number1, number2));
}

calculate(5,5,'multiply');