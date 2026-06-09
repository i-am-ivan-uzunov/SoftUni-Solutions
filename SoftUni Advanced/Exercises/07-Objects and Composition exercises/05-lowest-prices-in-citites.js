function solve(input) {
  let products = {};

  for (let tokens of input) {
    if (!tokens.trim()) continue;
    let [town, product, price] = tokens.split(" | ");
    price = Number(price);

    if (products.hasOwnProperty(product)) {
      if (products[product].price > price) products[product] = { town, price };
    } else {
      products[product] = { town, price };
    }
  }

  for (let [product, info] of Object.entries(products)) {
    let { town, price } = info;
    console.log(`${product} -> ${price} (${town})`);
  }
}
