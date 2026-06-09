function solve(text, searchedWord){
  let allWords = text.split(' ');

  let count = 0;
  for(let word of allWords){
    if(word === searchedWord){
      count++; 
    }
  }

  console.log(count);
}

solve('This is a word and it also is a sentence', 'is');