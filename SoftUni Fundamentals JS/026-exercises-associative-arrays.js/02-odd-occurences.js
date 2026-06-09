function solve(input) {
  let oddOccurences = new Map();
  let data = input.toLowerCase().split(' ').forEach(word => oddOccurences.set(word, 0));
  data = input.toLowerCase().split(' ');

  for (let [word, count] of oddOccurences) {
    for (let i = 0; i < data.length; i++) {
      let currentWord = data[i];

      if (currentWord === word) {
        let newCount = count += 1;
        oddOccurences.set(word, newCount);
      }
    }
  }
 
  let newArray = [];

  for(let [word, count] of oddOccurences){
    if(count % 2 !== 0){
      newArray.push(word);
    }
  }

  console.log(...newArray);
}
