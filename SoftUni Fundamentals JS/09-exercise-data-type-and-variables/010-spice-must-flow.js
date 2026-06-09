function printNumberOfSpice(start) {
  let startingYield = start;

  const yieldDrop = 10;
  const crewConsumation = 26;

  let extractedSpice = 0;
  let daysWorked = 0;

  if (startingYield >= 100) {
    while (startingYield >= 100) {
      extractedSpice += startingYield;
      extractedSpice -= crewConsumation;
      startingYield -= yieldDrop;
      daysWorked++;
    }
    extractedSpice -= 26;
  }

  console.log(daysWorked);
  console.log(extractedSpice);
}
