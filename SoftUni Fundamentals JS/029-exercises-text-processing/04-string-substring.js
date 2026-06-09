function solve(searchedWord, sentence){
  let words = sentence.toLowerCase().split(' ');
  if(words.includes(searchedWord)){
    console.log(searchedWord);
  }else{
    console.log(`${searchedWord} not found!`)
  }
}