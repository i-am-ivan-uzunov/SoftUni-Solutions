function printGladiatorInventory(input) {
  let inventory = input[0].split(' ');

  for (let index = 1; index < input.length; index++) {
    let tokens = input[index].split(' ');
    let command = tokens[0];

    if (command === 'Buy') {
      let item = tokens[1];

      if (!(inventory.includes(item))) {
        inventory.push(item);
      }
    } else if (command === 'Trash') {
      let item = tokens[1];

      if (inventory.includes(item)) {
        let itemIndex = inventory.indexOf(item);

        inventory.splice(itemIndex, 1);
      }
    } else if (command === 'Repair') {
      let item = tokens[1];

      if (inventory.includes(item)) {
        let itemIndex = inventory.indexOf(item);

        let [itemToAdd] = inventory.splice(itemIndex, 1);

        inventory.push(itemToAdd);
      }
    } else if (command === 'Upgrade') {
      let item = tokens[1].split('-')[0];
      let upgrade = tokens[1].split('-')[1];

      if (inventory.includes(item)) {
        let itemIndex = inventory.indexOf(item) + 1;

        inventory.splice(itemIndex, 0, `${item}:${upgrade}`);
      }
    }
  }

  console.log(inventory.join(' '));
}

