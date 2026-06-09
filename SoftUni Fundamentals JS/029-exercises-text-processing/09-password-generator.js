function solve(input){
  let firstPass = input[0];
  let secondPass = input[1];
  let replaceWord = input[2];

  let concatPass = firstPass.concat(secondPass);
  replaceWord = replaceWord.toUpperCase();

  let vowels = ['a', 'e', 'i', 'o', 'u']

  let vowelIndex = 0;

  for(let letter of concatPass){
    if(vowels.includes(letter)){
      concatPass = concatPass.replace(letter, replaceWord[vowelIndex]);
      vowelIndex++;
    }

    if(vowelIndex === replaceWord.length){
      vowelIndex = 0;
    }
  }

  concatPass = concatPass.split('').reverse().join('');
  console.log(`Your generated password is ${concatPass}`);
}
