function checkForPassword(input) {
  function checkLength(input) {
    if (input.length < 6 || input.length > 10) {
      console.log('Password must be between 6 and 10 characters');
    } else return true;
  }

  function checkContent(input) {
    let isValid = true;

    for (let index = 0; index < input.length; index++) {
      let currentChar = input[index].charCodeAt(0);

      if (checkIfIsDigit(currentChar)) {
        isValid = true;
      } else if (checkIfIsSmallLetter(currentChar)) {
        isValid = true;
      } else if (checkIfIsBigLetter(currentChar)) {
        isValid = true;
      } else {
        isValid = false;
        console.log('Password must consist only of letters and digits');
        return isValid;
      }
    }

    function checkIfIsDigit(char) {
      let currentSymbol = char;

      if (currentSymbol < 48 || currentSymbol > 57) {
        return false;
      } else return true;
    }

    function checkIfIsSmallLetter(char) {
      let currentSymbol = char;

      if (currentSymbol < 65 || currentSymbol > 91) {
        return false;
      } else return true;
    }

    function checkIfIsBigLetter(char) {
      let currentSymbol = char;

      if (currentSymbol < 97 || currentSymbol > 122) {
        return false;
      }
      return true;
    }

    if (isValid) {
      return true;
    }
  }

  function checkDigits(input) {

    function checkNumberOfDigits(password) {
      let numberOfDigits = 0;

      for (let index = 0; index < input.length; index++) {
        let currentCharCode = input[index].charCodeAt(0);

        if (currentCharCode >= 48 && currentCharCode <= 57) {
          numberOfDigits++;
        }
      }
      if (numberOfDigits < 2) {
        console.log('Password must have at least 2 digits');
      } else return true;
    }

    if(checkNumberOfDigits(input)){
      return true;
    }

  }

  let res1 = checkLength(input);
  let res2 = checkContent(input);
  let res3 = checkDigits(input);
  if (res1 && res2 && res3) {
    console.log('Password is valid')
  }
}


