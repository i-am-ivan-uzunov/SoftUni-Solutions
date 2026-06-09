function printArrayRotation(arr, rotations){
  let array = arr;
  let allRotations = rotations;
  let rotationsNeeded = allRotations % array.length;
  let rotatedArray = [];

  if(rotationsNeeded === 0){
    console.log(array.join(' '));
    return;
  }
  
  for(let index = rotationsNeeded; index < array.length; index++){
    rotatedArray.push(array[index]);
  }

  for(let index = 0; index < rotationsNeeded; index++){
    rotatedArray.push(array[index]);
  }

  console.log(rotatedArray.join(' '));
}
