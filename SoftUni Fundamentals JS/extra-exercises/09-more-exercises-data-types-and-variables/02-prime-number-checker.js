function printPrimeNumber(n){
  let number = n;
  let counter = 0;
  let isPrime = false;

  for(let i = 1; i <= number; i++){
    if(number % i === 0){
      counter++;
    }
    if(counter > 2){
      console.log(isPrime);
      break;
    }else if(counter <= 2 && i === number){
      isPrime = true;
      console.log(isPrime);
    }
  }
}

