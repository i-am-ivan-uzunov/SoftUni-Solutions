function printDistinctArray(input){

  let numbersArray = input.filter((element, index, array) => array.indexOf(element) === index);

  console.log(numbersArray.join(' '));
}

printDistinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);