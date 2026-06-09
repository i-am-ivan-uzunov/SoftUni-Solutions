function printKNumbersArray(n, k){
  let numbers = [1];

  for(let index = 1; index < n; index++){
    let startingIndex = index - k;
    if(startingIndex < 0){
      startingIndex = 0;
    }

    let previousThreeNumbers = numbers.slice(startingIndex, index);

    let sum = 0;

    for(let i = 0; i < previousThreeNumbers.length; i++){
      sum += previousThreeNumbers[i];
    }

    numbers[index] = sum;
  }

  console.log(numbers.join(' '));
}

