function printSpecialNumbers(n) {
  let number = n;
  let sum = 0;
  let special = false;

  for (let i = 1; i <= number; i++) {
    let currentNumber = String(i);
    for (let j = 0; j < currentNumber.length; j++) {
      sum += Number(currentNumber[j]);
    }
    if (sum === 5 || sum === 7 || sum === 11) {
      console.log(`${currentNumber} -> True`)
    } else {
      console.log(`${currentNumber} -> False`)
    }
    sum = 0;
  }
}
