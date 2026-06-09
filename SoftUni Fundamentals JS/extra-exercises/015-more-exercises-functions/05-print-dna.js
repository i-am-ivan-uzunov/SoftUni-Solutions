function printDNA(number) {
  let counter = 1;

  for (let index = 1; index <= number; index++) {
    printCells(index);
  }

  function printStars() {
    return '*';
  }

  function printDashes() {
    return '-';
  }

  function chooseSymbols(counter) {
    if (counter % 5 === 1) {
      return 'AT';
    } else if (counter % 5 === 2) {
      return 'CG';
    } else if (counter % 5 === 3) {
      return 'TT';
    } else if (counter % 5 === 4) {
      return 'AG';
    } else {
      return 'GG';
    }
  }

  function printCells(counter) {
    let text = '';
    if (counter % 4 === 1) {
      text += printStars();
      text += printStars();
      text += chooseSymbols(counter);
      text += printStars();
      text += printStars();

      console.log(text);
    } else if (counter % 4 === 2) {
      let symbols = chooseSymbols(counter);
      text += printStars();
      text += symbols[0];
      text += printDashes();
      text += printDashes();
      text += symbols[1];
      text += printStars();

      console.log(text);
    } else if (counter % 4 === 3) {
      let symbols = chooseSymbols(counter);
      text += symbols[0];
      text += printDashes();
      text += printDashes();
      text += printDashes();
      text += printDashes();
      text += symbols[1];

      console.log(text);
    } else if (counter % 4 === 0) {
      let symbols = chooseSymbols(counter);
      text += printStars();
      text += symbols[0];
      text += printDashes();
      text += printDashes();
      text += symbols[1];
      text += printStars();

      console.log(text);
    } 

    text = '';
  }
}
