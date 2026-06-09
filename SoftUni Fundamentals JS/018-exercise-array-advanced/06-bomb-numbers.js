function printBombNumbersSum(input, bombInput) {
  let numbersArray = input;
  let bomb = bombInput[0];
  let power = bombInput[1];
  let sum = 0;

  while (numbersArray.includes(bomb)) {
    
      let indexBomb = numbersArray.indexOf(bomb);
      let startIndex = Math.max(0, indexBomb - power);
      let elementsToRemove = (indexBomb + power) - startIndex + 1;
      numbersArray.splice(startIndex, elementsToRemove);
  }


  for (let numbers of numbersArray) {
    sum += numbers;
  }

  console.log(sum);
}

