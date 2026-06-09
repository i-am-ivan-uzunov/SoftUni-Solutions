function printMatrix(number){
  function printRow(n){
    let row = '';

    for(let index = 0; index < n; index++){
      row += `${String(n)} `;
    }

    return row;
  }

  function printColumns(n){
    for(let index = 0; index < n; index++){
      console.log(printRow(n));
    }
  }

  printColumns(number);
}

