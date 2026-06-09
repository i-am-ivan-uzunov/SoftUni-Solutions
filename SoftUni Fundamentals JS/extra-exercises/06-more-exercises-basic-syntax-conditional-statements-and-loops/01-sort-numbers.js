function printDescendingNumbers(n1, n2, n3) {
  let firstNumber = n1;
  let secondNumber = n2;
  let thirdNumber = n3;

  if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
    console.log(firstNumber);
    if (secondNumber >= thirdNumber) {
      console.log(secondNumber)
      console.log(thirdNumber);
    } else {
      console.log(thirdNumber);
      console.log(secondNumber);
    }
  } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
    console.log(secondNumber);
    if (firstNumber >= thirdNumber) {
      console.log(firstNumber);
      console.log(thirdNumber);
    } else {
      console.log(thirdNumber);
      console.log(firstNumber);
    }
  } else {
    console.log(thirdNumber)
    if (firstNumber >= secondNumber) {
      console.log(firstNumber);
      console.log(secondNumber);
    } else {
      console.log(secondNumber);
      console.log(firstNumber);
    }
  }
}

