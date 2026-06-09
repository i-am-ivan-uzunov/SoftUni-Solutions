function printCrystalProcedure(input) {
  let desiredThickness = input[0];

  for (let index = 1; index < input.length; index++) {
    let crystal = input[index];
    let counter = 0;

    printProcessingChunk(crystal);

    while (cut(crystal) >= desiredThickness) {
      crystal = cut(crystal);
      counter++;
    }

    if (counter > 0) {
      printNumberOfOperation('Cut', counter);
      crystal = transportingAndWashing(crystal);
    }

    if (checkIfCrystalIsDesiredLThickness(crystal, desiredThickness)) {
      printFinalResult(crystal);
      continue;
    }

    counter = 0;

    while (lap(crystal) >= desiredThickness) {
      crystal = lap(crystal);
      counter++;
    }

    if (counter > 0) {
      printNumberOfOperation('Lap', counter);
      crystal = transportingAndWashing(crystal);
    }

    if (checkIfCrystalIsDesiredLThickness(crystal, desiredThickness)) {
      printFinalResult(crystal);
      continue;
    }

    counter = 0;

    while (grind(crystal) >= desiredThickness) {
      crystal = grind(crystal);
      counter++;
    }

    if (counter > 0) {
      printNumberOfOperation('Grind', counter);
      crystal = transportingAndWashing(crystal);
    }

    if (checkIfCrystalIsDesiredLThickness(crystal, desiredThickness)) {
      printFinalResult(crystal);
      continue;
    }

    counter = 0;

    while (etch(crystal) >= desiredThickness - 1) {
      crystal = etch(crystal);
      counter++;
    }

    if (counter > 0) {
      printNumberOfOperation('Etch', counter);
      crystal = transportingAndWashing(crystal);
    }

    if (checkIfCrystalIsDesiredLThickness(crystal, desiredThickness)) {
      printFinalResult(crystal);
      continue;
    }

    counter = 0;

    if (crystal === desiredThickness - 1) {
      crystal = xray(crystal);
      counter++;
    }

    if (counter > 0) {
      printNumberOfOperation('X-ray', counter);
    }

    printFinalResult(crystal);
  }


  function cut(crystal) {
    crystal /= 4;
    return crystal;
  }

  function lap(crystal) {
    crystal -= crystal * 0.2;
    return crystal;
  }

  function grind(crystal) {
    crystal -= 20;
    return crystal;
  }

  function etch(crystal) {
    crystal -= 2;
    return crystal;
  }

  function xray(crystal) {
    crystal += 1;
    return crystal;
  }

  function transportingAndWashing(crystal) {
    crystal = Math.floor(crystal);
    console.log('Transporting and washing');
    return crystal;
  }

  function printProcessingChunk(crystal) {
    console.log(`Processing chunk ${crystal} microns`);
  }

  function printNumberOfOperation(operation, counter) {
    console.log(`${operation} x${counter}`);
  }

  function checkIfCrystalIsDesiredLThickness(crystal, desiredThickness) {
    let isDesiredLength = crystal === desiredThickness ? true : false;
    return isDesiredLength;
  }

  function printFinalResult(crystal) {
    console.log(`Finished crystal ${crystal} microns`);
  }
}


