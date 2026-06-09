function printElements(input) {
  let array = input;
  let step = Number(array[array.length - 1]);
  let numbers = [];

  for (let index = 0; index < array.length - 1; index += step) {
    if (index < array.length) {
      numbers.push(array[index]);
    }else{
      break;
    }

  }

  console.log(numbers.join(' '));
}

