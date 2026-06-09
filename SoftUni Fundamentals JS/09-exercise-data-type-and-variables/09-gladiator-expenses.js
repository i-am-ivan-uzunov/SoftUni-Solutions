function printExpenses(lost, helmet, sword, shield, armor){
  let lostFights = lost;
  let helmetPrice = helmet;
  let swordPrice = sword;
  let shieldPrice = shield;
  let armorPrice = armor;

  let counter = 0;
  let counterForArmor = 0;
  let sum = 0;

  for(let i = 0; i <= lostFights; i++){
    if(i % 2 === 0 && i !== 0){
      sum += helmetPrice;
    }
    if(i % 3 === 0 && i !== 0){
      sum += swordPrice;
    }
    if(i % 2 === 0 && i % 3 === 0 && i !== 0){
      sum += shieldPrice;
      counterForArmor++;
    }
    if(counterForArmor % 2 === 0 && counterForArmor !== 0){
      sum += armorPrice;
      counterForArmor = 0;
    }
  }

  console.log(`Gladiator expenses: ${sum.toFixed(2)} aureus`);
}
