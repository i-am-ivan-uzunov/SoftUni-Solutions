function roundingNumbers(n, rounding){
  let number = n;
  let roundingNumber = rounding;

  if(rounding > 15){
    rounding = 15;
  }

  number = parseFloat(number.toFixed(rounding));

  console.log(number);
}
