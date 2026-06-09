function printAmazingNumbers(number){
  let sum = 0;
  let lengthNumber = String(number);

  for(i = 0; i < lengthNumber.length; i++){
    sum += Number(lengthNumber[i]);
  }

  if(String(sum).includes('9')){
    console.log(`${number} Amazing? True`)
  }else{
    console.log(`${number} Amazing? False`)
  }
}

