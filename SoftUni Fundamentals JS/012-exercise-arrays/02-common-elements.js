function printCommonArrays(arr1, arr2){
  let array1 = arr1;
  let array2 = arr2;

  for(let index = 0; index < arr1.length; index++){
    for(index2 = 0; index2 < arr1.length; index2++){
      if(array1[index] === array2[index2]){
        console.log(array1[index]);
      }
    }
  }
}

