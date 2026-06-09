function printOccurings(array, arg){
  let takingNumbers = arg[0];
  let deleteNumbers = arg[1];
  let number = arg[2];

  let numberArray = array.slice(0, takingNumbers);

  numberArray.splice(0, deleteNumbers);

  let counter = 0;

  for(let index = 0; index < numberArray.length; index++){
    if(numberArray[index] === number){
      counter++;
    }
  }

  console.log(`Number ${number} occurs ${counter} times.`);
}