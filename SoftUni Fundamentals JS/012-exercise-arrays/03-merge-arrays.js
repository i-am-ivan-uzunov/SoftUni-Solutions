function printMergedArray(arr1, arr2){
  let firstArray = arr1;
  let secondArray = arr2;
  let thirdArray = [];

  for(let index = 0; index < arr1.length; index++){
    if(index % 2 === 0){
      let currentPar = Number(firstArray[index]) + Number(secondArray[index]);
      thirdArray.push(currentPar);
    }else{
      currentPar = firstArray[index] + secondArray[index];
      thirdArray.push(currentPar);
    }
  }
  
    console.log(thirdArray.join(' - '))
}
