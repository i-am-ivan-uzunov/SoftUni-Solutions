function printCalculation(n1, oper, n2){
  let number1 = n1;
  let operator = oper;
  let number2 = n2;
  let sum = 0;

  switch(operator){
    case '+': sum = number1 + number2; break;
    case '-': sum = number1 - number2; break;
    case '/': sum = number1 / number2; break;
    case '*': sum = number1 * number2; break;
  }

  console.log(sum.toFixed(2));
}

