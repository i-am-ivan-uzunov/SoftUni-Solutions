function priceVacation(groupOfPeople, typeOfPeople, dayOfTheWeek) {
  let group = groupOfPeople;
  let type = typeOfPeople;
  let day = dayOfTheWeek;

  let totalPrice = 0;
  let discount = 0;

  switch(type){
    case `Students`:
      switch(day){
        case `Friday`:
          if(group >= 30){
            discount = (8.45 * group) * 0.15;
            totalPrice = (8.45 * group) - discount;
          }
          else{
            totalPrice = (8.45 * group);
          }
          break;
        case `Saturday`:
          if(group >= 30){
            discount = (9.80 * group) * 0.15;
            totalPrice = (9.80 * group) - discount;
          }
          else{
            totalPrice = (9.80 * group);
          }
          break;
        case `Sunday`:
          if(group >= 30){
            discount = (10.46 * group) * 0.15;
            totalPrice = (10.46 * group) - discount;
          }
          else{
            totalPrice = (10.46 * group);
          }
          break;
      }
      break;
    case `Business`:
      switch(day){
        case `Friday`:
          if(group >= 100){
            group -= 10;
            totalPrice = 10.90 * group;
          }
          else{
            totalPrice = 10.90 * group;
          }
          break;
        case `Saturday`:
          if(group >= 100){
            group -= 10;
            totalPrice = 15.60 * group;
          }
          else{
            totalPrice = 15.60 * group;
          }
          break;
        case `Sunday`:
          if(group >= 100){
            group -= 10;
            totalPrice = 16 * group;
          }
          else{
            totalPrice = 16 * group;
          }
          break;
      }
      break;
    case `Regular`:  
      switch(day){
        case `Friday`:
          if(group >= 10 && group <= 20){
            discount = (group * 15) * 0.05;
            totalPrice = (group * 15) - discount;
          }
          else{
            totalPrice = (group * 15);
          }
          break;
        case `Saturday`:
          if(group >= 10 && group <= 20){
            discount = (group * 20) * 0.05;
            totalPrice = (group * 20) - discount;
          }
          else{
            totalPrice = (group * 20);
          }
          break;
        case `Sunday`:
          if(group >= 10 && group <= 20){
            discount = (group * 22.5) * 0.05;
            totalPrice = (group * 22.5) - discount;
          }
          else{
            totalPrice = (group * 22.5);
          }
          break;
      }
      break;
  }
  totalPrice = totalPrice.toFixed(2);
  console.log(`Total price: ${totalPrice}`);
}



