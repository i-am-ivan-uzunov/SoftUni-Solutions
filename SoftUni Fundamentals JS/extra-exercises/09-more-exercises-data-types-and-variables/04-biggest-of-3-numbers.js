function printBiggestNumber(n1, n2, n3){
   let numbers = [n1, n2, n3];

   numbers.sort((a, b) => b - a);
   console.log(numbers[0]);
}
