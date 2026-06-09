function printMagicPairs(arr, sum){
  let array = arr;
  let summary = sum;

  for(let index = 0; index < array.length; index++){
    for(let secondIndex = index + 1; secondIndex < array.length; secondIndex++){
      if(Number(array[index]) + Number(array[secondIndex]) === summary){
        console.log(`${array[index]} ${array[secondIndex]}`);
      }
    }
  }
}
