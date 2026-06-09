function printEqualArrays(input1, input2){
  let firstArray = input1;
  let secondArray = input2;
  let sum = 0;

  for(let i = 0; i < input1.length; i++){
    if(input1[i] === input2[i]){
      sum += Number(input1[i]);
    }else{
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      break;
    }

    if(i === input1.length - 1){
      console.log(`Arrays are identical. Sum: ${sum}`);
    }
  }
}

