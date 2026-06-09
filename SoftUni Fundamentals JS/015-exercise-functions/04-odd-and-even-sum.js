function printSum(number) {
  function oddEvenSum(num) {
    let oddSum = 0;
    let evenSum = 0;
    let numArray = (num.toString()).split('');

    for(let index = 0; index < numArray.length; index++){
      let currentNumber = Number(numArray[index]);
      if(currentNumber % 2 == 0){
        evenSum += currentNumber;
      }else{
        oddSum += currentNumber;
      }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
  }

  oddEvenSum(number);
}

printSum(1000435);