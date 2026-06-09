function solve(input) {
  let password = input.shift();

  let tokens = input.shift().split(' ');
  let command = tokens[0];

  while (command !== 'Done') {
    if (command === 'TakeOdd') {
      let currentPassword = '';
      for (let i = 1; i < password.length; i += 2) {
        currentPassword += password[i];
      }
      password = currentPassword;

      console.log(password);
    } else if (command === 'Cut') {
      let index = tokens[1];
      let length = tokens[2];

      password = password.split('').toSpliced(index, length).join('');

      console.log(password);
    } else if (command === 'Substitute') {
      let substring = tokens[1];
      let substitute = tokens[2];
      if (password.includes(substring)) {
        let regex = new RegExp(substring, 'g');

        password = password.replace(regex, substitute);

        console.log(password);
      } else {
        console.log('Nothing to replace!');
      }
    }

    tokens = input.shift().split(' ');
    command = tokens[0];
  }

  console.log(`Your password is: ${password}`);
}


