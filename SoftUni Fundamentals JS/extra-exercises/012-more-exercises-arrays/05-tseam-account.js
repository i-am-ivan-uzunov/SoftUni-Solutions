function printGames(input) {
  let arrayOfGames = input[0].split(' ');

  for (let index = 1; index < input.length - 1; index++) {
    let currentInput = input[index].split(' ');
    let command = currentInput[0];
    let game, expansion;
    if(command === 'Expansion'){
      let currentValue = currentInput[1].split('-');
      game = currentValue[0];
      expansion = currentValue[1];
    }else{
      game = currentInput[1];
    }
    let exists = false;
    let indexOfItem = 0;

    for (let i = 0; i < arrayOfGames. length; i++) {
      if (game === arrayOfGames[i]) {
        exists = true;
        indexOfItem += i;
        break;
      }
    }

    if (command === 'Install') {
      if (exists === false) {
        arrayOfGames.push(game);
      }
    } else if (command === 'Uninstall') {

      if (exists === true) {
        arrayOfGames.splice(indexOfItem, 1);
      }
    } else if (command === 'Update') {
      if (exists === true) {
        arrayOfGames.splice(indexOfItem, 1);
        arrayOfGames.push(game);
      }
    } else {
      if (exists === true) {
        let newCommand = `${game}:${expansion}`;
        let indexOfExpansion = indexOfItem + 1;
        arrayOfGames.splice(indexOfExpansion, 0, newCommand);
      }
    }
  }

  console.log(arrayOfGames.join(' '));
}
