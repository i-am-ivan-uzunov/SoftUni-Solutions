function printMagicMatrix(input) {
  let rowsLength = input.length;
  let columnsLength = input[0].length;

  let res1 = calculateSumOfRows(input)
  let res2 = calculateSumOfColumns(input)

  if(res1 && res2){
    console.log('true');
  }else{
    console.log('false');
  }



  function calculateSumOfRows(input) {
    let sumRows = 0;
    let result = 0;
    for (let rows = 0; rows < rowsLength; rows++) {
      for (let columns = 0; columns < columnsLength; columns++) {
        let currentNumber = input[rows][columns];
        sumRows += currentNumber;
      }
      let isEqual = true;

      if (rows === 0) {
        result = sumRows;
      }

      if (result === sumRows) {
        isEqual = true;
      } else {
        isEqual = false;
      }

      if (isEqual === false) {
        return false;
      }

      sumRows = 0;
    }
    return true;
  }

  function calculateSumOfColumns(input) {
    let sumColumns = 0;
    let result = 0;
    for (let columns = 0; columns < columnsLength; columns++) {
      for (let rows = 0; rows < rowsLength; rows++) {
        let currentNumber = input[rows][columns];
        sumColumns += currentNumber;
      }
      let isEqual = true;

      if (columns === 0) {
        result = sumColumns;
      }

      if (result === sumColumns) {
        isEqual = true;
      } else {
        isEqual = false;
      }

      if (isEqual === false) {
        return false;
      }

      sumColumns = 0;
    }

    return true;
  }
}

