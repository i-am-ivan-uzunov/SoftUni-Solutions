function solve(arr, param) {
  class Tickets {
    constructor(dest, price, status) {
      this.destination = dest;
      this.price = price;
      this.status = status;
    }
  }

  let sorted = [];

  for (let token of arr) {
    let [destination, price, status] = token.split("|");
    price = Number(price);
    const ticket = new Tickets(destination, price, status);

    sorted.push(ticket);
  }

  sorted.sort((a, b) => {
      if(param === 'price'){
        return a[param] - b[param];
      }else{
        return a[param].localeCompare(b[param]);
      }
  })

  return sorted;
}

