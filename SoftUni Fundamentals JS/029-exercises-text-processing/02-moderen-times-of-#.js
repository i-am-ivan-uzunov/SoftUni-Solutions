function solve(text){
  let words = text.split(' ');

  for(let word of words){
    if(word.startsWith('#')){
      let cleanWord = word.slice(1);

      if(cleanWord.length > 0 && cleanWord.toLowerCase().split('').every(c => (c >= 'a' && c <= 'z'))){
        console.log(cleanWord);
      }
    }
  }
}