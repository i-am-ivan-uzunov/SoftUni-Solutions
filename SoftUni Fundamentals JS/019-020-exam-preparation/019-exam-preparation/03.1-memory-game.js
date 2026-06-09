function printGameMoves(input) {
  let gameArray = input[0].split(' ');
  let index = 1;

  while (input[index] !== 'end' && gameArray.length > 0) {
    let currentInput = input[index].split(' ');
    let firstIndex = Number(currentInput[0]);
    let secondIndex = Number(currentInput[1]);

    if(firstIndex >= secondIndex){
      let valueIndex = secondIndex;
      secondIndex = firstIndex;
      firstIndex = valueIndex;
    }

    if (firstIndex >= 0 && secondIndex < gameArray.length && firstIndex !== secondIndex) {
      let firstItem = gameArray[firstIndex];
      let secondItem = gameArray[secondIndex];
      if (firstItem === secondItem) {
        console.log(`Congrats! You have found matching elements - ${firstItem}!`);
        gameArray.splice(secondIndex, 1);        
        gameArray.splice(firstIndex, 1);
      } else {
        console.log('Try again!');
      }
    } else {
      console.log('Invalid input! Adding additional elements to the board');
      gameArray.splice(gameArray.length / 2, 0, `-${index}a`, `-${index}a`);
    }

    index++;
  }
  if (gameArray.length === 0) {
    console.log(`You have won in ${index - 1} turns!`);
  } else {
    console.log('Sorry you lose :(');
    console.log(gameArray.join(' '));
  }
}
