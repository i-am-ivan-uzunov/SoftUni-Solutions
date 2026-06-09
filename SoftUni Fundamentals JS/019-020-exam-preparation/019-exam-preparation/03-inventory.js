function printInventory(input) {
  let inventory = input[0].split(', ');

  for (let index = 1; index < input.length; index++) {
    let tokens = input[index].split(' - ');
    let command = tokens[0];
    let material = tokens[1];

    if (command === 'Collect') {
      if (!(inventory.includes(material))) {
        inventory.push(material);
      }
    } else if (command === 'Drop') {
      if (inventory.includes(material)) {
        let indexMaterial = inventory.indexOf(material);

        inventory.splice(indexMaterial, 1);
      }
    } else if (command === 'Combine Items') {
      let materials = material.split(':');
      let oldItem = materials[0];
      let newItem = materials[1];

      if (inventory.includes(oldItem)) {
        let indexOldItem = inventory.indexOf(oldItem);

        inventory.splice(indexOldItem + 1, 0, newItem);
      }
    } else if (command === 'Renew') {
      if (inventory.includes(material)) {
        let indexMaterial = inventory.indexOf(material);

        inventory.splice(indexMaterial, 1);
        inventory.push(material);
      }
    } else if (command === 'Craft!') {
      console.log(inventory.join(', '));
      return;
    }
  }

}

