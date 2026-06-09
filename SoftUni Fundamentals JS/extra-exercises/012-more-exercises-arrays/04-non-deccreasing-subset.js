function printSubset(input) {
  let numbersArray = input;
  let currentMax = numbersArray[0];

  let result = numbersArray.filter((number, index) => {
    if (index === 0) return true;

    if(number >= currentMax){
      currentMax = number;
      return true;
    }

    return false;
  })

  console.log(result.join(' '));
}

