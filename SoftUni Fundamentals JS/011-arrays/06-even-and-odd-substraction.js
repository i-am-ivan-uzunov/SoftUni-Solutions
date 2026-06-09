function printSubstraction(input) {
  let array = input;
  let sumEven = 0;
  let sumOdd = 0;
  let difference = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      sumEven += Number(array[i]);
    } else {
      sumOdd += Number(array[i]);
    }
  }
  difference = sumEven - sumOdd;
  console.log(difference);
}

