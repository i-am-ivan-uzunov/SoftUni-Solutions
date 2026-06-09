function printDoubleOddIndexArray(input) {
  let result = input.filter((element, index) => index % 2 === 1).map(element => element * 2).reverse();

  console.log(result.join(' '));
}
