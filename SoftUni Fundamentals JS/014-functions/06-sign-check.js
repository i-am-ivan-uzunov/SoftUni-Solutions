function printSign(number1, number2, number3){
  let negativeNumbers = 0;

  if(number1 < 0){
    negativeNumbers++;
  }

  if(number2 < 0){
    negativeNumbers++;
  }

  if(number3 < 0){
    negativeNumbers++;
  }

  if(negativeNumbers % 2 === 1){
    console.log('Negative');
  }else{
    console.log('Positive');
  }
}