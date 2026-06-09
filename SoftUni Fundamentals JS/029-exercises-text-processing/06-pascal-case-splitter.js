function solve(string){
  let result = [];

  let wordStart = 0;

  for(let i = 1; i < string.length; i++){
    if(string[i] >= 'A' && string[i] <= 'Z'){
      result.push(string.slice(wordStart, i));
      wordStart = i;
    }
  }

  result.push(string.slice(wordStart));

  console.log(result.join(', '));
}