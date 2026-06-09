function solve(input) {
  let sentence = input[0];
  let words = input[1];
  
  while(sentence.includes('_')){
    let startIndex = sentence.indexOf('_');
    let count = 0;
    let currentIndex = startIndex;

    while(sentence[currentIndex] === '_'){
      count++;
      currentIndex++;
    }

    let hole = '_'.repeat(count);

    let matchingWord = words.find(w => w.length === count);

    sentence = sentence.replace(hole, matchingWord);
  }

  console.log(sentence);
}
