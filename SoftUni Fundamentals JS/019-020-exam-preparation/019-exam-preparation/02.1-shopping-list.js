function printShoppingList(input) {
  let shoppingList = input[0].split('!');
  let index = 1;

  while (input[index] !== 'Go Shopping!') {
    let currentInput = input[index].split(' ');
    if (currentInput.length <= 2) {
      let command = currentInput[0];
      let product = currentInput[1];

      if (command === 'Urgent') {
        if (!(shoppingList.includes(product))) {
          shoppingList.unshift(product);
        }
      } else if (command === 'Unnecessary') {
        if (shoppingList.includes(product)) {
          let indexItem = shoppingList.indexOf(product);
          shoppingList.splice(indexItem, 1);
        }
      } else if (command === 'Rearrange') {
        if (shoppingList.includes(product)) {
          let indexItem = shoppingList.indexOf(product);
          shoppingList.splice(indexItem, 1);
          shoppingList.push(product);
        }
      }
    } else {
      let oldProduct = currentInput[1];
      let newProduct = currentInput[2];

      if (shoppingList.includes(oldProduct)) {
        let indexProduct = shoppingList.indexOf(oldProduct);
        shoppingList.splice(indexProduct, 1, newProduct);
      }
    }

    index++;
  }

  console.log(shoppingList.join(', '));
}

printShoppingList((["Tomatoes!Potatoes!Bread", "Unnecessary Milk", "Urgent Tomatoes", "Go Shopping!"]));
printShoppingList((["Milk!Pepper!Salt!Water!Banana",  "Urgent Salt",  "Unnecessary Grapes",  "Correct Pepper Onion",  "Rearrange Grapes",  "Correct Tomatoes Potatoes",  "Go Shopping!"]));