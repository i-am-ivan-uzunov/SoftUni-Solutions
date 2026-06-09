function solve(input) {
  let cars = {};
  const n = input.shift();

  for (let i = 0; i < n; i++) {
    const [brand, mileage, fuel] = input.shift().split('|');

    cars[brand] = { mileage:Number(mileage), fuel: Number(fuel) };
  }

  let tokens = input.shift().split(' : ');
  let command = tokens[0];

  while (command !== 'Stop') {
    switch (command) {
      case 'Drive': {
        const carBrand = tokens[1];
        const distance = Number(tokens[2]);
        const fuel = Number(tokens[3]);

        if (cars[carBrand].fuel < fuel) {
          console.log('Not enough fuel to make that ride');
        } else {
          cars[carBrand].mileage += distance;
          cars[carBrand].fuel -= fuel;
          console.log(
            `${carBrand} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`,
          );
        }
        if (cars[carBrand].mileage >= 100000) {
          console.log(`Time to sell the ${carBrand}!`);
          delete cars[carBrand];
        }
        break;
      }
      case 'Refuel': {
        const carBrand = tokens[1];
        let fuel = Number(tokens[2]);

        if (cars[carBrand].fuel + fuel > 75) {
          fuel = 75 - cars[carBrand].fuel;
          cars[carBrand].fuel += fuel;
          console.log(`${carBrand} refueled with ${fuel} liters`);
        } else {
          cars[carBrand].fuel += fuel;
          console.log(`${carBrand} refueled with ${fuel} liters`);
        }
        break;
      }
      case 'Revert': {
        const carBrand = tokens[1];
        const km = Number(tokens[2]);

        cars[carBrand].mileage -= km;

        if (cars[carBrand].mileage >= 10000) {
          console.log(`${carBrand} mileage decreased by ${km} kilometers`);
        } else {
          cars[carBrand].mileage = 10000;
        }
        break;
      }
    }

    tokens = input.shift().split(' : ');
    command = tokens[0];
  }

  for (let brand of Object.keys(cars)) {
    console.log(
      `${brand} -> Mileage: ${cars[brand].mileage} kms, Fuel in the tank: ${cars[brand].fuel} lt.`,
    );
  }
}

