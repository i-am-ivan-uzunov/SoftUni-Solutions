function printRotatedArray(input) {
  let array = input;
  let rotations = Number(array[array.length - 1]);
  array.pop();
  let rotationsNeeded = rotations % array.length;
  if(rotations === 0){
    console.log(array.join(' '));
    return;
  }

  let newArray = [];
  let counter = 0;
  let startingIndex = array.length - rotationsNeeded;
  for(let index = startingIndex; index < array.length; index++){
    newArray.push(array[index]);
  }

  for(let index = 0; index < startingIndex; index++){
    newArray.push(array[index]);
  }

  console.log(newArray.join(' '));
}

