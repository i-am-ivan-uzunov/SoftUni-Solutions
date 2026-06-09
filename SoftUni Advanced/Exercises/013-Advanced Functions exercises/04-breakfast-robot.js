function solution() {
  let stock = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  const meals = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  const instructions = {
    restock(param) {
      const microElement = param[0];
      const quantity = Number(param[1]);

      stock[microElement] += quantity;
      return "Success";
    },
    prepare(param) {
      const recipe = param[0];
      const quantity = Number(param[1]);

      for (let i = 0; i < quantity; i++) {
        const arrProducts = Object.entries(meals[recipe]);

        for (let [microElement, quantity] of arrProducts) {
          if (stock[microElement] < quantity) {
            return `Error: not enough ${microElement} in stock`;
          }
        }

        for (let [microElement, quantity] of arrProducts) {
          stock[microElement] -= quantity;
        }
      }
      return "Success";
    },
    report() {
      let result = "";
      const stockArr = Object.entries(stock);

      for (let [product, qty] of stockArr) {
        result += `${product}=${qty} `;
      }

      return result.trim();
    },
  };

  function solve(input) {
    const arr = input.split(" ");
    const [command, ...rest] = arr;

    const returnValue = instructions[command](rest);

    return returnValue;
  }

  return solve;
}
