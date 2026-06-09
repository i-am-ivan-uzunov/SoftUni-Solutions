function printAmountOfBitcoins(gold){

  let day = 1;   //брояч на дните
  let firstPurchaseOfBitcoin = '';   //първи ден, в който можем да си купим биткойн
  let money = 0;   //пари от злато
  let bitcoinAmount = 0; //брой купени биткойни

  //инициализираме константните цени на златото и биткойна
  const bitcoinPrice = 11949.16;
  const gramOfGoldPrice = 67.51;

  //цикъл, който да следи дните, грамовете злато и т.н.
  for(let i = 0; i < gold.length; i++){
    let dailyAmountGold = gold[i];
    let stolenGold = dailyAmountGold * 0.3; //пресмятаме откраднатото злато
    if(day % 3 !== 0){ //проверка дали е трети ден и ако пресмятаме колко злато е откраднато
      money += dailyAmountGold * gramOfGoldPrice; //не е открадното
    }else{
      money += (dailyAmountGold - stolenGold) * gramOfGoldPrice; // откраднато е
    }
    
    while(money >= bitcoinPrice){ //цикъл за проверка за купуване на биткойни и изчисляване на закупено количество и останали налични пари
      if(bitcoinAmount === 0){
        firstPurchaseOfBitcoin = day;
      }
      money -= bitcoinPrice;
      bitcoinAmount++;
    }

    day++;
  }

  // изписване на конзолата според дадените условия
  console.log(`Bought bitcoins: ${bitcoinAmount}`);
  if(bitcoinAmount > 0){
    console.log( `Day of the first purchased bitcoin: ${firstPurchaseOfBitcoin}`);
  }
  console.log(`Left money: ${money.toFixed(2)} lv.`);
}


