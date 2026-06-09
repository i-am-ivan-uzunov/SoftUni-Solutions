function solve(input) {
  let words = input.shift().split(' ');
  let occurences = new Map();

  for(let i = 0; i < words.length; i++){
    occurences.set(words[i], 0);
  }

  for(let [word, count] of occurences){
    for(let i = 0; i < input.length; i++){
      let currentWord = input[i];

      if(currentWord === word){
        let newCount = count += 1;

        occurences.set(word, count);
      }
    }
  }

  let array = Array.from(occurences);

  array.sort((a, b) => b[1] - a[1]);

  occurences.clear();

  occurences = new Map(array);

  for(let [word, count] of occurences){
    console.log(`${word} - ${count}`);
  }
}
