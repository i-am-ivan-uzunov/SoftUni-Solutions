function printSum(input) {
  let array = input;
  let secondArray = [];

  while (array.length > 1) {
    for (let i = 0; i < array.length - 1; i++) {
      let currentSum = Number(array[i]) + Number(array[i + 1]);
      secondArray.push(currentSum);
    }
    array = secondArray;
    secondArray = [];
  }
  console.log(array.join());
}

printSum([1]);