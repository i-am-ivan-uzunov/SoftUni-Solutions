function printLadybugs(input) {
  let array = input;
  let size = array[0];
  let positions = array[1].split(' ');

  const field = new Array(size);

  //initialisation of moves the ladybugs make
  let moves = [];
  let counter = 0;
  for (let index = 2; index < array.length; index++) {
    moves[counter] = array[index];
    counter++;
  }

  //initialisation of taken cell
  for (let index = 0; index < field.length; index++) {
    for (let i = 0; i < positions.length; i++) {
      if (index === Number(positions[i])) {
        field[index] = 1;
        break;
      }
    }
    if (field[index] !== 1) {
      field[index] = 0;
    }
  }

  //initialisation of the moves one by one
  for (let i = 0; i < moves.length; i++) {
    let wholeMove = moves[i].split(' ');
    let startingPosition = Number(wholeMove[0]);
    let directionOfMove = wholeMove[1];
    let moveLength = Number(wholeMove[2]);

    if (startingPosition >= 0 && startingPosition < field.length && field[startingPosition] == 1) {
      field[startingPosition] = 0; // Калинката излита

      if (directionOfMove === 'right') {
        let nextIndex = startingPosition + moveLength;
        while (nextIndex < field.length && nextIndex >= 0) {
          if (field[nextIndex] === 0) {
            field[nextIndex] = 1;
            break;
          }
          nextIndex += moveLength;
        }
      } else if (directionOfMove === 'left') {
        let nextIndex = startingPosition - moveLength;
        while (nextIndex >= 0 && nextIndex < field.length) {
          if (field[nextIndex] === 0) {
            field[nextIndex] = 1;
            break;
          }
          nextIndex -= moveLength;
        }
      }
    }
  }
  console.log(field.join(' '));
}