function printPyramidArea(base, incr){
  //инициализиране на променливи
  let baseArea = base;
  let increment = incr;
  let stoneAmount = 0;
  let marbleAmount = 0;
  let lapisAmount = 0;
  let counterForLapis = 1;
  let goldAmount = 0;
  let sumFloors = 1;

  //Колко дълго да се изпълнява начисляването на материали преди последния етаж с while цикъл
  while(baseArea > 2){
    //намиране на нужното количество камък за всеки етаж
    stoneAmount += Math.pow((baseArea - 2), 2) * increment;

    //намиране на нужното количество мрамор
    if(counterForLapis % 5 !== 0){
    marbleAmount += (4 * baseArea - 4) * increment;
    }

    //проверка за 5-та стъпка и добавяне на lapiz материала ако е нужно
    if(counterForLapis % 5 === 0){
      lapisAmount += (4 * baseArea - 4) * increment;
    }
    //отброяване за lapiz материала
    counterForLapis++;

    //намаляваме с всеки етаж по две купчета
    baseArea -= 2;
    sumFloors++;
  }

  goldAmount += Math.pow(baseArea, 2) * increment;

  //изписване на конзолата с закръгляне, както се изисква по условие
  console.log(`Stone required: ${Math.ceil(stoneAmount)}`);
  console.log(`Marble required: ${Math.ceil(marbleAmount)}`);
  console.log(`Lapis Lazuli required: ${Math.ceil(lapisAmount)}`);
  console.log(`Gold required: ${Math.ceil(goldAmount)}`);
  console.log(`Final pyramid height: ${Math.floor(sumFloors * increment)}`);
}


