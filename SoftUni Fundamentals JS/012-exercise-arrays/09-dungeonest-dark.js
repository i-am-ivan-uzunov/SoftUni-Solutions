function printDungeon(input) {
  let health = 100;
  let coins = 0;
  let roomNumber = 1;

  let rooms = input.split('|');

  for (let index = 0; index < rooms.length; index++) {
    let room = rooms[index].split(' ');
    let action = room[0];
    let powerOfAction = Number(room[1]);
    if (action === 'potion') {
      let potionHealing = powerOfAction;
      if (potionHealing + health > 100) {
        potionHealing = 100 - health;
        health = 100;
      }else{
        health += potionHealing;
      }
      console.log(`You healed for ${potionHealing} hp.`)
      console.log(`Current health: ${health} hp.`)
    } else if (action === 'chest') {
      let foundCoins = powerOfAction;
      console.log(`You found ${foundCoins} coins.`)
      coins += Number(foundCoins);
    } else {
      let monsterName = action;
      let attack = powerOfAction;
      health -= attack;
      if (health > 0) {
        console.log(`You slayed ${monsterName}.`);
      } else {
        console.log(`You died! Killed by ${monsterName}.`);
        console.log(`Best room: ${roomNumber}`);
        break;
      }
    }
    roomNumber++;
  }
  if (health > 0) {
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);
  }
}

