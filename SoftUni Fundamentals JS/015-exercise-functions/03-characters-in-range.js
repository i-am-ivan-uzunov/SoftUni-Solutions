function printCharacterInRange(ch1, ch2) {
  function characterRange(char1, char2) {
    let firstChar, secondChar;
    if (char1.charCodeAt(0) < char2.charCodeAt(0)) {
      firstChar = char1.charCodeAt(0);
      secondChar = char2.charCodeAt(0);
    } else {
      firstChar = char2.charCodeAt(0);
      secondChar = char1.charCodeAt(0);
    }

    let result = [];

    for(let index = firstChar + 1; index < secondChar; index++){
      let currentChar = String.fromCharCode(index);
      result.push(currentChar);
    }

    console.log(result.join(' '));
  }

  characterRange(ch1, ch2);
}

