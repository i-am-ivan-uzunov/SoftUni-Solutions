function printIfIsPerfectNumber(number){
  function checkIfIsPerfectNumber(n){
    let halfSum = 0;
    let halfLength = n / 2;

    for(let index = 1; index <= halfLength; index++){
      if(n % index === 0){
        halfSum += index;
      }
    }

    if(halfSum === n){
      console.log('We have a perfect number!');
    }else{
      console.log(`It's not so perfect.`);
    }
  }

  checkIfIsPerfectNumber(number);
}

