function solve(input) {
  let n = input.shift();
  let plants = {};

  for (let i = 0; i < n; i++) {
    let [plantName, rarity] = input.shift().split('<->');
    rarity = Number(rarity);

    plants[plantName] = { rarity: rarity, rating: [] };
  }

  // console.table(Object.entries(plants));

  let tokens = input.shift().split(':');
  let command = tokens.shift();

  while (command !== 'Exhibition') {
    if (command === 'Rate') {
      let [plantName, rating] = tokens.toString().split(' - ');
      plantName = plantName.trim();
      rating = Number(rating);
      if (plantName in plants) {
        plants[plantName].rating.push(rating);
      } else {
        console.log('error');
      }
    } else if (command === 'Update') {
      let [plantName, rarity] = tokens.toString().split(' - ');
      plantName = plantName.trim();
      rarity = Number(rarity);

      if (plantName in plants) {
        if (plants[plantName].rarity !== rarity) {
          plants[plantName].rarity = rarity;
        }
      } else {
        console.log('error');
      }
    } else if (command === 'Reset') {
      let plantName = tokens.toString().trim();

      if (plantName in plants) {
        plants[plantName].rating = [];
      } else {
        console.log('error');
      }
    }

    tokens = input.shift().split(':');
    command = tokens.shift();
  }

  let entries = Object.entries(plants);

  console.log('Plants for the exhibition:');

  for (let [name, data] of entries) {
    let ratings = data.rating;
    let average = 0;

    if (ratings.length > 0) {
      let sum = ratings.reduce((acc, curr) => acc + curr, 0);
      average = sum / ratings.length;
    }

    console.log(
      `- ${name}; Rarity: ${data.rarity}; Rating: ${average.toFixed(2)}`,
    );
  }
}
