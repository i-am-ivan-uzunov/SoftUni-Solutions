function printSortedList(input){
  let sortedArray = input.sort().map((element, index) => console.log(`${index + 1}.${element}`));
}

printSortedList(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);