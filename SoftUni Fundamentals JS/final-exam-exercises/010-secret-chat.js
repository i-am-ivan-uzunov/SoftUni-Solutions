function solve(input) {
  let secretMessage = input.shift();

  let tokens = input.shift().split(':|:');
  let command = tokens.shift();

  while (command !== 'Reveal') {
    switch (command) {
      case 'ChangeAll':
        const substring = tokens.shift();
        const replacement = tokens.shift();

        const regex = new RegExp(substring, 'g');

        secretMessage = secretMessage.replace(regex, replacement);
        console.log(secretMessage);
        break;
      case 'Reverse':
        let substringToReverse = tokens.shift();

        const reversed = substringToReverse
          .split('')
          .reduce((acc, curr) => curr + acc, '');

        if (secretMessage.includes(substringToReverse)) {
          secretMessage = secretMessage.replace(substringToReverse, reversed);
          console.log(secretMessage);
        } else {
          console.log('error');
        }
        break;
      case 'InsertSpace':
        const index = Number(tokens.shift());

        secretMessage = secretMessage.slice(0, index) + ' ' + secretMessage.slice(index);
        console.log(secretMessage);
        break;
    }
    tokens = input.shift().split(':|:');
    command = tokens.shift();
  }

  console.log(`You have a new text message: ${secretMessage}`);
}

