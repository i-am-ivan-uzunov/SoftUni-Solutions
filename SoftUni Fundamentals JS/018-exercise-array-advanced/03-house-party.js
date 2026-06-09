function printPartyList(input) {
  let guests = [];

  let commands = input;

  for (let index = 0; index < commands.length; index++) {
    let tokens = commands[index];
    let name = tokens.split(' ')[0];
       
    if (tokens.includes('is going')) {
      if (guests.includes(name)) {
        console.log(`${name} is already in the list!`);
      } else {
        guests.push(name);
      }
    } else {
      if (guests.includes(name)) {
        let indexName = guests.indexOf(name);
        guests.splice(indexName, 1);
      } else {
        console.log(`${name} is not in the list!`);
      }
    }
  }

  console.log(guests.join('\n'));
}

printPartyList(['Allie is going!', 'George is going!', 'John is not going!', 'George is not going!'])