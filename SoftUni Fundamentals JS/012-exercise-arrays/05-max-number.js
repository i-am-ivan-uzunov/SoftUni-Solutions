function printTopInteger(arr){
  let array = arr;
  let topIntegerArray = [];
  for(let index = 0; index < array.length; index++){
    let isTopInteger = true;
    for(let secondIndex = index + 1; secondIndex < array.length; secondIndex++){
      if(array[index] <= array[secondIndex]){
        isTopInteger = false;
      }
    }
    if(isTopInteger){
      topIntegerArray.push(array[index]);
    }
  }
  console.log(topIntegerArray.join(' '));
}

