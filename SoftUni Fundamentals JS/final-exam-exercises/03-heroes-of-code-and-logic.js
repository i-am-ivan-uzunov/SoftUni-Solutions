function solve(input) {
  let n = input.shift();
  let heroes = [];

  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input[i].split(' ');
    heroes.push({
      name,
      hp: Number(hp),
      mp: Number(mp),
    });
  }

  for (let i = 0; i < n; i++) {
    input.shift();
  }

  let tokens = input.shift().split(' - ');
  let command = tokens[0];
  let name = tokens[1];
  let hero = heroes.find(h => h.name === name);

  while (command !== 'End') {
    switch (command) {
      case 'CastSpell':
        let mpNeeded = Number(tokens[2]);
        let spellName = tokens[3];

        if (hero.mp >= mpNeeded) {
          hero.mp -= mpNeeded;
          console.log(
            `${name} has successfully cast ${spellName} and now has ${hero.mp} MP!`,
          );
        } else {
          console.log(`${name} does not have enough MP to cast ${spellName}!`);
        }
        break;

      case 'TakeDamage':
        let damage = Number(tokens[2]);
        let attacker = tokens[3];

        if (hero.hp > damage) {
          hero.hp -= damage;
          console.log(
            `${name} was hit for ${damage} HP by ${attacker} and now has ${hero.hp} HP left!`,
          );
        } else {
          console.log(`${name} has been killed by ${attacker}!`);
          let index = heroes.findIndex(arr => arr.name === name);
          heroes.splice(index, 1);
        }
        break;

      case 'Recharge':
        let amountMP = Number(tokens[2]);

        if (hero.mp + amountMP > 200) {
          amountMP = 200 - hero.mp;
          hero.mp = 200;
          console.log(`${name} recharged for ${amountMP} MP!`);
        } else {
          hero.mp += amountMP;
          console.log(`${name} recharged for ${amountMP} MP!`);
        }
        break;

      case 'Heal':
        let amountHP = Number(tokens[2]);

        if (hero.hp + amountHP > 100) {
          amountHP = 100 - hero.hp;
          hero.hp = 100;
          console.log(`${name} healed for ${amountHP} HP!`);
        } else {
          hero.hp += amountHP;
          console.log(`${name} healed for ${amountHP} HP!`);
        }
        break;
    }
    tokens = input.shift().split(' - ');
    command = tokens[0];
    name = tokens[1];
    hero = heroes.find(h => h.name === name);
  }

  for(let hero of heroes){
    console.log(hero.name);
    console.log(` HP: ${hero.hp}`);
    console.log(` MP: ${hero.mp}`);
  }
}


