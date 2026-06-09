function solve(input, input2) {
  let array = input;
  let inStock = [];

  for(let i = 0; i < array.length; i+2){
    let name = array[i];
    let quantity = array[i+1];
    let item = {
      name,
      quantity
    }
    inStock.push(item);
  }

  for(let item of inStock){
    console.log(item);
  }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);