function solve(wordList, templateString) {
  let searchedWordArray = wordList.split(', ');
  let searchedWords = {};

  for (let word of searchedWordArray) {
    let key = '*'.repeat(word.length);
    searchedWords[key] = word;
  }

  let sentence = templateString.split(' ');

  for (let i = 0; i < sentence.length; i++) {
    let currentWord = sentence[i];

    if(searchedWords.hasOwnProperty(currentWord)){
      sentence[i] = searchedWords[currentWord];
    }
  }

  console.log(sentence.join(' '));
}