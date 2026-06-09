function printConcreteAndPrice(input) {
  let walls = input;
  let concrete = [];
  let sumConcrete = 0;
  let price = 0;

  while (walls.length > 0) {
    let currentConcrete = 0;
    for (let index = 0; index < walls.length; index++) {
      if (walls[index] < 30) {
        walls[index] += 1;
        currentConcrete += 195;
      } 
    }
    if (currentConcrete > 0) {
      concrete.push(currentConcrete);
    }

    let wallsCopy = walls.filter((x) => x < 30);
    walls = wallsCopy;
  }

  console.log(concrete.join(', '));

  sumConcrete = concrete.reduce((accumulator, currentValue) => accumulator + currentValue);
  price = sumConcrete * 1900;

  console.log(`${price} pesos`)
}
