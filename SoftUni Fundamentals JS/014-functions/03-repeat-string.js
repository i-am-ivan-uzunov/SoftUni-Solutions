function repeatString(input, repetitionNumber){
  let newArray = [];

  for(let index = 0; index < repetitionNumber; index++){
    newArray.push(input);
  }

  console.log(newArray.join(''));
}

repeatString("abc", 3);