function solve(string){
  let middle = Math.floor(string.length / 2);

  let firstHalf = string.substring(0, middle);
  let secondHalf = string.substring(middle);

  let reversedFirstHalf = firstHalf.split('').reverse().join('');
  let reversedSecondtHalf = secondHalf.split('').reverse().join('');

  console.log(reversedFirstHalf);
  console.log(reversedSecondtHalf);
}