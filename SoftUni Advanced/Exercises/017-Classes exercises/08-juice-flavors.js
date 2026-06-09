function solve(input){
  let juices = {};

  for(let i = 0; i < input.length; i++){
    let [fruit, quantity] = input[i].split(' => ');
    quantity = Number(quantity);

    if(juices.hasOwnProperty(fruit)){
      juices[fruit].quantity += quantity; 
    }else{
      juices[fruit] = {quantity};
    }

    if(juices[fruit].quantity >= 1000 && !sortedNames.includes(fruit)){
      sortedNames.push(fruit);
    }
  }

  let sorted = Array.from(Object.entries(juices));

  for(let fruit of sortedNames){
    let bottles = Math.floor(juices[fruit].quantity / 1000);

    if(bottles > 0) console.log(`${fruit} => ${bottles}`);
  }
}
