function printTreasureFinds(input) {
  let chest = input.shift().split('|');

  for (index = 0; index < input.length; index++) {
    let token = input[index].split(' ');
    let command = token.shift();

    if (command === 'Loot') {
      for (let i = 0; i < token.length; i++) {
        let loot = token[i];

        if (!(chest.includes(loot))) {
          chest.unshift(loot);
        }
      }
    } else if (command === 'Drop') {
      let indexDropping = Number(token[0]);

      if (chest.length - 1 >= indexDropping && indexDropping >= 0) {
        let droppedItem = chest.splice(indexDropping, 1);

        chest.push(droppedItem[0]);
      }
    } else if (command === 'Steal') {
      let numberStealedItems = Number(token[0]);

      if (numberStealedItems > chest.length - 1) {
        let stolenItems = chest.splice(0, chest.length);
        console.log(stolenItems.join(', '));
      } else {
        let startingIndex = chest.length - numberStealedItems;
        let stolenItems = chest.splice(startingIndex, numberStealedItems);

        console.log(stolenItems.join(', '));
      }
    }
  }

  let sum = 0;

  if (chest.length === 0) {
    console.log('Failed treasure hunt.');
  } else {
    for (let i = 0; i < chest.length; i++) {
      let numberOfLetters = chest[i].length;
      sum += numberOfLetters;
    }

    sum = sum / chest.length;

    console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
  }

}

printTreasureFinds((["Diamonds|Silver|Shotgun|Gold","Loot Silver Medals Coal","Drop -1","Drop 1","Steal 6","Yohoho!"]));