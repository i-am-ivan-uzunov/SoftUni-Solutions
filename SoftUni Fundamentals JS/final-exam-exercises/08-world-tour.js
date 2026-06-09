function solve(input) {
  let stops = input.shift();

  let tokens = input.shift().split(':');
  let command = tokens.shift();

  while (command !== 'Travel') {
    switch (command) {
      case 'Add Stop':
        const index = Number(tokens.shift());
        const string = tokens.shift();

        if (index >= 0 && index < stops.length) {
          stops = stops.slice(0, index) + string + stops.slice(index);
        }

        console.log(stops);
        break;
      case 'Remove Stop':
        const startIndex = Number(tokens.shift());
        const endIndex = Number(tokens.shift());

        if (
          startIndex >= 0 &&
          startIndex < stops.length &&
          endIndex >= 0 &&
          endIndex < stops.length
        ) {
          stops =
            stops.substring(0, startIndex) + stops.substring(endIndex + 1);
        }
        console.log(stops);
        break;
      case 'Switch':
        const oldString = tokens.shift();
        const newString = tokens.shift();

        stops = stops.split(oldString).join(newString);

        console.log(stops);
        break;
    }
    tokens = input.shift().split(':');
    command = tokens.shift();
  }

  console.log(`Ready for world tour! Planned stops: ${stops}`);
}

solve([
  'Hawai::Cyprys-Greece',
  'Add Stop:7:Rome',
  'Remove Stop:11:16',
  'Switch:Hawai:Bulgaria',
  'Travel',
]);
