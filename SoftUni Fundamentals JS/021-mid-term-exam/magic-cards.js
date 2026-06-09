function printCards(input) {
  let oldDeck = input[0].split(':');
  let newDeck = [];

  let index = 1;
  let tokens = input[index].split(' ');
  let command = tokens[0];

  while (command !== 'Ready') {

    let tokens = input[index].split(' ');
    command = tokens[0];

    if (command === 'Add') {
      let card = tokens[1];

      if (oldDeck.includes(card)) {
        newDeck.push(card);
      } else {
        console.log('Card not found.');
      }

    } else if (command === 'Insert') {
      let card = tokens[1];
      let index = tokens[2];
      if (oldDeck.includes(card) && index >= 0 && index < newDeck.length) {
        newDeck.splice(index, 0, card);
      } else {
        console.log('Error!');
      }

    } else if (command === 'Remove') {
      let card = tokens[1];

      if (newDeck.includes(card)) {
        let cardIndex = newDeck.indexOf(card);

        newDeck.splice(cardIndex, 1);
      } else {
        console.log('Card not found.');
      }

    } else if (command === 'Swap') {
      let firstIndex = newDeck.indexOf(tokens[1]);
      let secondIndex = newDeck.indexOf(tokens[2]);

      [newDeck[firstIndex], newDeck[secondIndex]] = [newDeck[secondIndex], newDeck[firstIndex]];

    } else if (command === "Shuffle") {
      newDeck.reverse();
    }

    index++;
  }

  console.log(newDeck.join(' '));
}

