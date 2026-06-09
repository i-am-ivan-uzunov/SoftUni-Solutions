function solve(input) {
let result = [];

for(let tokens of input){
  if((!tokens.trim())) continue;
  let [name, level, items] = tokens.split(' / ');
  level = Number(level);

  items = items ? items.split(', ') : [];

  result.push({name, level, items});
}
 console.log(JSON.stringify(result));
}

solve([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
