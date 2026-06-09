function printSum(input){
  let firstDigit = input.shift();
  let lastDigit = input.pop();

  let sum = Number(firstDigit) + Number(lastDigit);
  console.log(sum);
}

function printSum1(input){
  let sum = Number(input.splice(0, 1)) + Number(input.splice(input.length - 1, 1));
  console.log(sum);
}