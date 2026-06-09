function printAddRemovedNumbers(input){
  let counter = 1;
  let numbers = [];
  for(let index = 0; index < input.length; index++){
    let command = input[index];
    if(command === 'add'){
      numbers.push(counter);
    }else{
      numbers.pop();
    }
    counter++;
  }

  
  if(numbers.length === 0){
    console.log('Empty');
  }else{
    console.log(numbers.join(' '));
  }
}

