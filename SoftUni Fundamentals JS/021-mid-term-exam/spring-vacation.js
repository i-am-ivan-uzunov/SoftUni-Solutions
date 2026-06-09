function printBudget(input) {
  input = input.map(Number);

  let days = input[0];
  let budget = input[1];
  let people = input[2];
  let fuelPricePerKm = input[3];
  let dailyFoodExpensesPerPerson = input[4];
  let dailyRoomPricePerPerson = input[5];

  input.splice(0, 6);

  let traveledDistancePerDay = input;

  let accomodationPrice = dailyRoomPricePerPerson * people * days;
  let foodPrice = dailyFoodExpensesPerPerson * people * days;

  let currentExpenses = accomodationPrice + foodPrice;

  if (people > 10) {
    currentExpenses -= accomodationPrice * 0.25;
  }

  budget -= currentExpenses;

  let day = 1;

  for (let index = 0; index < traveledDistancePerDay.length; index++) {
    let dailyDistance = traveledDistancePerDay[index];

    let initialExpenses = currentExpenses;

    currentExpenses += dailyDistance * fuelPricePerKm;

    if (day % 3 === 0 || day % 5 === 0) {
      currentExpenses += currentExpenses * 0.4;
    }

    if (day % 7 === 0) {
      currentExpenses -= currentExpenses / people;
    }

    let dailyExpenses = currentExpenses - initialExpenses;

    budget -= dailyExpenses;

    if (budget < 0) {
      console.log(`Not enough money to continue the trip. You need ${(budget * (-1)).toFixed(2)}$ more.`);
      return;
    }

    day++;
  }

  console.log(`You have reached the destination. You have ${budget.toFixed(2)}$ budget left.`);
}

