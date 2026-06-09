function printSmallestNumber(num1, num2, num3) {
  function smallestNumber(number1, number2) {
    if (number1 > number2) {
      return number2;
    } else {
      return number1;
    }
  }

  let smallestNum = smallestNumber(num1, num2);
  smallestNum = smallestNumber(smallestNum, num3);

  console.log(smallestNum);
}

