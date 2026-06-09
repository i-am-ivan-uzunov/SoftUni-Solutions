function printTownInfo(name, popul, areaOfTown) {
  let nameOfTown = name;
  let population = popul;
  let area = areaOfTown;

  let isValid = nameOfTown.length >= 3 && population >= 0 && area >= 0;

  if (isValid === true) {
    console.log(`Town ${nameOfTown} has population of ${population} and area ${area} square km.`);
  }
  if (nameOfTown.length < 3) {
    console.log("Town name must be at least 3 characters!");
  }
  if (population < 0) {
    console.log(`Population must be a positive number!`);
  } 
  if(area < 0){
    console.log(`Area must be a positive number!`);
  }
}

printTownInfo('Ka',
-3600,
-50

);