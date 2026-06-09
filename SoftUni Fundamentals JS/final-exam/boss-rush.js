function solve(input) {
  let n = input.shift();
  let regex = new RegExp(/^\|([A-Z]{4,})\|:#([A-Za-z]+ [A-Za-z]+)#$/);

  for(let i = 0; i < n; i++){
    let match = input[i].match(regex);
    if(match){
      let name = match[1];
      let title = match[2];
      console.log(`${name}, The ${title}`);
      console.log(`>> Strength: ${name.length}`);
      console.log(`>> Armor: ${title.length}`);
    }else{
      console.log('Access denied!');
    }
  }
}


