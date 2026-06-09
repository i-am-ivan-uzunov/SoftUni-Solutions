function printManipulatedArray(input) {
  let numbers = input.shift().split(' ').map(Number);

  for (let index = 0; index < input.length; index++) {
    let [command, firstIndex, secondIndex] = input[index].split(' ');

    firstIndex = Number(firstIndex);
    secondIndex = Number(secondIndex);

    if (command === 'Add') {
      numbers.push(firstIndex);
    } else if (command === 'Remove') {
      numbers = numbers.filter(element => element !== firstIndex);
    } else if (command === 'RemoveAt') {
      numbers.splice(firstIndex, 1);
    } else if (command === 'Insert') {
      numbers.splice(secondIndex, 0, firstIndex);
    }
  }

  console.log(numbers.join(' '));
}

printManipulatedArray(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'])