function printArray(input) {
  let numbers = [];
  input.map(Number).map(x => {
    if (x < 0) {
      numbers.unshift(x);
    } else {
      numbers.push(x);
    }
  })

  numbers.map(x => console.log(x));
}

printArray(['7', '-2', '8', '9']);