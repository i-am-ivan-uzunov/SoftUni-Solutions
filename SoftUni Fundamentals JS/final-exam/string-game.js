function solve(input) {
  let string = input.shift();

  let tokens = input.shift().split(' ');
  let command = tokens[0];

  while (command !== 'Done') {
    switch (command) {
      case 'Change':
        let char = new RegExp(tokens[1], 'g');
        let replacement = tokens[2];

        string = string.replace(char, replacement);
        console.log(string);
        break;

      case 'Includes':
        let substringIncludes = tokens[1];

        string.includes(substringIncludes) ? console.log('True') : console.log('False');
        break;

      case 'End':
        let substringEnd = tokens[1];
        
        string.slice(-substringEnd.length) === substringEnd ? console.log('True') : console.log('False');
        break;

      case 'Uppercase':
        string = string.toUpperCase();
        console.log(string);
        break;

      case 'FindIndex':
        let charOccurence = tokens[1];
        let index = string.indexOf(charOccurence);
        console.log(index);
        break;

      case 'Cut':
        let startingIndex = Number(tokens[1]);
        let count = Number(tokens[2]) + startingIndex;

        let cut = string.slice(startingIndex, count);
        console.log(cut);
        break;
    }
    tokens = input.shift().split(' ');
    command = tokens[0];
  }
}


