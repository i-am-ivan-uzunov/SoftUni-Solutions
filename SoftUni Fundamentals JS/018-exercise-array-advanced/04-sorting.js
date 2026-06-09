function printSortedArray(input) {
  let numbers = [];

  input = input.sort((a, b) => b - a);

  for (let index = 0; index < input.length / 2; index++) {
    if (input.length === 1) {
      console.log(input[0]);
      return;
    }

    if (index === input.length - 1 - index) {
      let maxNumber = input[index];
      numbers.push(maxNumber);
      break;
    } else {
      let maxNumber = input[index];
      let minNumber = input[input.length - 1 - index];
      numbers.push(maxNumber);
      numbers.push(minNumber);
    }
  }

  console.log(numbers.join(' '));
}

printSortedArray([92, 93, 94, 95, 1, 2, 3]);