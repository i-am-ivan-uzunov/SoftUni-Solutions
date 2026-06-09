function solve(car) {
  let engines = {
    small: { power: 90, volume: 1800 },
    normal: { power: 120, volume: 2400 },
    monster: { power: 200, volume: 3500 },
  };

  let carriage = {
    hatchback: { type: "hatchback", color: null },
    coupe: { type: "coupe", color: null },
  };

  if (car.power <= 90) {
    car["engine"] = engines.small;
  } else if (car.power > 90 && car.power <= 120) {
    car["engine"] = engines.normal;
  } else {
    car["engine"] = engines.monster;
  }
  delete car.power;

  car.carriage = { type: car.carriage, color: car.color };

  delete car.color;
  
  if (car.wheelsize % 2 === 0) {
    car.wheelsize -= 1;
  }

  let wheels = new Array(4).fill(car.wheelsize);

  delete car.wheelsize;

  car["wheels"] = wheels;
  console.log(car);
  return car;
}


