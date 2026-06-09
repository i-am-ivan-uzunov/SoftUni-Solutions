function printModifiedNumber(n){
  let number = String(n);
  let sum = 0;
  let avgSum = 0;
  let numberLength = number.length;

  for(let index =0; index < numberLength; index++){
    sum += Number(number[index]);
  }

  function calculateAverage(){
    let avgSum = sum / numberLength;
    return avgSum;
  }

  while(calculateAverage() < 5){
    number += 9;
    sum += 9;
    numberLength++;
  }

  console.log(number);
}

