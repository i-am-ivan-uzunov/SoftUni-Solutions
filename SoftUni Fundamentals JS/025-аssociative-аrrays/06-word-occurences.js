function solve(input) {
  let map = new Map();
  let counter = 0;

  for(let word of input){
    if(map.has(word)){
      let currentCounter = map.get(word);
      currentCounter = currentCounter + 1;
      map.set(word, currentCounter);
    }else{
      map.set(word, 1);
    }
  }

  let sorted = Array.from(map).sort((a, b) => b[1] - a[1]);

  for([key, value] of sorted){
    console.log(`${key} -> ${value} times`)
  }

}

solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);