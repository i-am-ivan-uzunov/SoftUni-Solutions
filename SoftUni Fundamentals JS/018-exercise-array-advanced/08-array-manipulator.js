function printArray(arr, com) {
  let numbersArray = arr;
  let commands = com;
  let index = 0;
  let tokens = commands[index].split(' ');
  let command = tokens[0];

  while (command !== 'print') {
    let tokens = commands[index].split(' ');
    command = tokens[0];

    if (command === 'add') {
      let index = Number(tokens[1]);
      let element = Number(tokens[2]);

      numbersArray.splice(index, 0, element);
    } else if (command === 'addMany') {
      let index = Number(tokens[1]);
      let elementsToAdd = tokens.slice(2).map(Number);

      numbersArray.splice(index, 0, ...elementsToAdd);
    } else if (command === 'contains') {
      let element = Number(tokens[1]);

      console.log(numbersArray.indexOf(element))
    } else if (command === 'remove') {
      let index = Number(tokens[1]);

      numbersArray.splice(index, 1);
    } else if (command === 'shift') {
      let rotations = Number(tokens[1]);
      let rotationsNeeded = rotations % numbersArray.length;

      let itemsToAdd = numbersArray.splice(0, rotationsNeeded);
      numbersArray.push(...itemsToAdd);
    } else if (command === 'sumPairs') {
      let numbers = [];

      for (let i = 0; i < numbersArray.length; i++) {
        if (i % 2 === 0 && i + 1 < numbersArray.length) {
          let firstNumber = numbersArray[i];
          let secondNumber = numbersArray[i + 1];

          let sum = firstNumber + secondNumber;

          numbers.push(sum);
        } else if (i % 2 === 0) {
          sum = numbersArray[i];
          numbers.push(sum);
        }

      }
      numbersArray = numbers;
    }

    index++;
  }

  console.log(`[ ${numbersArray.join(', ')} ]`)
}
