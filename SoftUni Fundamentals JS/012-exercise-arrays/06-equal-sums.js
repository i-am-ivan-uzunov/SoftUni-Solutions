function printEqualSum(arr) {
  let array = arr;
  let isEqualSum = false;
  for (let index = 0; index < array.length; index++) {
    let firstSum = 0;
    let secondSum = 0;
    for (secondIndex = 0; secondIndex < index; secondIndex++) {
      firstSum += Number(array[secondIndex]);
    }
    for (thirdIndex = index + 1; thirdIndex < array.length; thirdIndex++) {
      secondSum += Number(array[thirdIndex]);
    }
    if (firstSum === secondSum) {
      console.log(index);
      isEqualSum = true;
    }
  }
  if(!isEqualSum){
    console.log('no');
  }
}

