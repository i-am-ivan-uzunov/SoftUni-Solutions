function printLetters(n) {
  for (let i = 0; i < n; i++) {
    let result = '' + String.fromCharCode(97 + i);
    for (let j = 0; j < n; j++) {
      let secondResult = result + String.fromCharCode(97 + j);
      for (let k = 0; k < n; k++) {
        let thirdResult = secondResult + String.fromCharCode(97 + k);
        console.log(thirdResult);
      }
    }
  }
}

printLetters(3);