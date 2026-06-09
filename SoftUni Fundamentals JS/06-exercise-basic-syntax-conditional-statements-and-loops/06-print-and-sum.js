function calculateSum(n1, n2){
  let startingNumber = n1;
  let endingNumber = n2;

  let sum = 0;
  let string = '';

  for(let i = startingNumber; i <= endingNumber; i++){
    sum += i;
    string += i + ' ';
  }

  console.log(string.trim());
  console.log(`Sum: ${sum}`);
}

