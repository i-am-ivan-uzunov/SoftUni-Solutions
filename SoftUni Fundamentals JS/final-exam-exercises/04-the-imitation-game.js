function solve(input) {
  let message = input.shift();

  while (input.length > 0) {
    let tokens = input.shift().split('|');
    let command = tokens[0];

    if (command === 'Decode') break;0

    if (command === 'Move') {
      let moves = Number(tokens[1]);
      let temp = message.split('');

      let sub = temp.splice(0, moves);
      temp.push(sub.join(''));
      message = temp.join('');
    } else if (command === 'Insert') {
      let index = Number(tokens[1]);
      let value = tokens[2];

      let temp = message.split('');
      temp.splice(index, 0, value);
      message = temp.join('');
    } else if (command === 'ChangeAll') {
      let substring = tokens[1];
      let regex = new RegExp(substring, 'g');
      let replacement = tokens[2];

      message = message.split(substring).join(replacement);
    }
  }

  console.log(`The decrypted message is: ${message}`);
}

solve(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
solve(['owyouh', 'Move|2', 'Move|3', 'Insert|3|are', 'Insert|9|?', 'Decode']);
