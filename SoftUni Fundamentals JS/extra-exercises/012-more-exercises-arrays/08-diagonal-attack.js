function printNewMatrix(input) {
  let array = input.map(row => row.split(' ').map(Number));
  let sumDiagonal1 = 0;
  let sumDiagonal2 = 0;

  for (let row = 0; row < array.length; row++) {
    for (let col = 0; col < array.length; col++) {
      if (col === row) {
        let currentNumber = array[row][col];
        sumDiagonal1 += currentNumber;
        break;
      }
    }
  }

  let counter = array.length - 1;
  for (let row = 0; row < array.length; row++) {
    for (let col = array.length - 1; col >= 0; col--) {
      if (col === counter) {
        let currentNumber = array[row][col];
        sumDiagonal2 += currentNumber;
        counter--;
        break;
      }
    }
  }

  if (sumDiagonal1 === sumDiagonal2) {
    let index = 0;
    let reversedIndex = array.length - 1;

    for (let row = 0; row < array.length; row++) {
      for (let col = 0; col < array.length; col++) {
        if (col !== index && col !== reversedIndex) {
          array[row][col] = sumDiagonal1;
        } else continue;
      }
      index++;
      reversedIndex--;
    }

    for (num of array) {
      console.log(num.join(' '));
    }
  }else{
    for (num of array) {
      console.log(num.join(' '));
    }
  }

}

