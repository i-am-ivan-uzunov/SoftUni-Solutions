function printingTriangles(n){
  let number = n;
  let stringOfNumbers = '';
  let counter = 1;

  for(let row = 1; row <= number; row++){
    for(numbers = 1; numbers <= row; numbers++){
      stringOfNumbers += row + ' ';
    }
    console.log(stringOfNumbers);
    stringOfNumbers = '';
  }
}

