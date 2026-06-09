function solve(input) {
  let storage = new Map();

  for(let data of input){
    [product, quantity] = data.split(' ');

    if(storage.has(product)){
      let currentQuantity = storage.get(product);
      let newQuantity = Number(currentQuantity) + Number(quantity);

      storage.set(product, newQuantity);
    }else{
      storage.set(product, quantity);
    }
  }

  for(let [product, quantity] of storage){
    console.log(`${product} -> ${quantity}`);
  }
}
