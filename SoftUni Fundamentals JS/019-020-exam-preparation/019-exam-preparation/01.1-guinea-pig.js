function printPetResults(input) {
  let foodQuantity = Number(input[0]) * 1000;
  let hayQuantity = Number(input[1]) * 1000;
  let coverQuantity = Number(input[2]) * 1000;
  let weight = Number(input[3]) * 1000;

  for (let day = 1; day <= 30; day++) {
    foodQuantity -= 300;

    if (day % 2 === 0) {
      hayQuantity -= foodQuantity * 0.05;
    }

    if (day % 3 === 0) {
      coverQuantity -= weight / 3;
    }

    if (foodQuantity <= 0 || hayQuantity <= 0 || coverQuantity <= 0) {
      console.log('Merry must go to the pet store!');
      return;
    }
  }

  console.log(`Everything is fine! Puppy is happy! Food: ${(foodQuantity / 1000).toFixed(2)}, Hay: ${(hayQuantity / 1000).toFixed(2)}, Cover: ${(coverQuantity / 1000).toFixed(2)}.`)
}
