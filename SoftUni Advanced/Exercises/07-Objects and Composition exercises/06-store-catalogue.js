function solve(input) {
  let catalogue = [];

  for (let tokens of input) {
    if (!tokens.trim()) continue;
    let [product, price] = tokens.split(" : ");

    catalogue.push({ product, price });
  }

  catalogue.sort((a, b) => a.product.localeCompare(b.product));

  for (let i = 0; i < catalogue.length; i++) {
    let currentLetter = catalogue[i].product[0];
    let productName = catalogue[i].product;
    let productPrice = catalogue[i].price;
    
    if(i === 0){
      console.log(currentLetter);
    }else{
      if(currentLetter !== catalogue[i-1].product[0]){
        console.log(currentLetter);
      }
    }
    console.log(`  ${productName}: ${productPrice}`);
  }
}

solve([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);
