function printSpiralMatrix(rows, columns) {
  let array = [];

  for (let index = 0; index < rows; index++) {
    array[index] = [];
  }

  let startRow = 0;
  let endRow = rows - 1;
  let startCol = 0;
  let endCol = columns - 1;
  let counter = 1;

  while(startRow <= endRow && startCol <= endCol){
    for(let index = startCol; index <= endCol; index++){
      array[startRow][index] = counter;
      counter++;
    }

    startRow += 1;

    for(index = startRow; index <= endRow; index++){
        array[index][endCol] = counter;
        counter++;
    }

    endCol -= 1;

    for(let index = endCol; index >= startCol; index--){
      array[endRow][index] = counter;
      counter++;
    }

    endRow -= 1;

    for(let index = endRow; index >= startRow; index--){
      array[index][startCol] = counter;
      counter++;
    }
    
    startCol += 1;
  }

  array.forEach(row => console.log(row.join(' ')));
}
