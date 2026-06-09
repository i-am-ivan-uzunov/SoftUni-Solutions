function solve(input) {
  let stops = input.shift();
  let tokens = input.shift().split(':');
  let command = tokens[0];

  while (command !== 'Travel') {
    switch (command) {
      case 'Add Stop':
        let addIndex = Number(tokens[1]);
        let destinationToAdd = tokens[2];

        if (addIndex >= 0 && addIndex < stops.length) {
          let stopsCopy = [...stops];
          stopsCopy.splice(addIndex, 0, destinationToAdd);
          stops = stopsCopy.join('');
          console.log(stops);
        }
        break;
      case 'Remove Stop':
        let startIndexRemove = Number(tokens[1]);
        let endIndexRemove = Number(tokens[2]);

        let stopsCopy = [...stops];
        stopsCopy.splice(
          startIndexRemove,
          endIndexRemove - startIndexRemove + 1,
        );
        stops = stopsCopy.join('');
        console.log(stops);

        break;
      case 'Switch':
        let oldString = tokens[1];
        let newString = tokens[2];

        let regex = new RegExp(oldString, 'g');
        stops = stops.replace(regex, newString);

        console.log(stops);
        break;
    }
    tokens = input.shift().split(':');
    command = tokens[0];
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

