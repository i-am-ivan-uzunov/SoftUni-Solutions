function printSmallestTwoNumbers(input){
  let result = input.sort((a, b) => a -b).splice(0, 2);
  console.log(result.join(' '));
}
  //let result = input.sort((a, b) => a - b).slice(0, 2);

printSmallestTwoNumbers([30, 15, 50, 5]);
printSmallestTwoNumbers([3, 0, 10, 4, 7, 3]);