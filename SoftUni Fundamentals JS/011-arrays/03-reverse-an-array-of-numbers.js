function reverseArray(number, input){
  let secondArray = [];
  for(let i = 0; i < number; i++){
    secondArray.push(input[i]);
  }
  secondArray.reverse();
  console.log(secondArray.join(' '));
}

