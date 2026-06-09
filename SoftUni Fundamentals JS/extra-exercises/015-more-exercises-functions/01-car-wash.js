function printCleanedCar(input) {
  let valueOfCar = 0;

  for (let index = 0; index < input.length; index++) {

    let command = input[index];

    switch (command) {
      case 'soap':
        washingWithSoap();
        break;
      case 'water':
        rinsingWithWater();
        break;
      case 'vacuum cleaner':
        vacuumingWithCleaner();
        break;
      case 'mud':
        soilingWithMud();
        break;
    }
  }

  console.log(`The car is ${valueOfCar.toFixed(2)}% clean.`)

  function washingWithSoap() {
    valueOfCar += 10;
  }

  function rinsingWithWater() {
    valueOfCar += valueOfCar * 0.2;
  }

  function vacuumingWithCleaner() {
    valueOfCar += valueOfCar * 0.25;
  }

  function soilingWithMud() {
    valueOfCar -= valueOfCar * 0.1;
  }
}

