function printGameResult(input) {
  let energy = Number(input[0]);
  let battlesWon = 0;

  for (let index = 1; index < input.length; index++) {
    let distance = input[index];

    if (distance === 'End of battle') {
      console.log(`Won battles: ${battlesWon}. Energy left: ${energy}`);
    } else {
      distance = Number(distance);

      if (distance <= energy) {
        energy -= distance;
        battlesWon++;
      }
      else {
        console.log(`Not enough energy! Game ends with ${battlesWon} won battles and ${energy} energy`);
        return;
      }
    }

    if(index % 3 === 0){
      energy += battlesWon;
    }
  }
}

printGameResult((["100", "10", "10", "10", "1", "2", "3", "73", "10"]));