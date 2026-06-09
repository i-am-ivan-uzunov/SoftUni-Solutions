function solve(input, word){
  let star = '*';
  let censored = star.repeat(word.length);
  let result = input.replaceAll(word, censored);

  console.log(result);
}

