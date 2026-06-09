function solve(input){
  let trimmedArr = input.split(' ');
  trimmedArr = trimmedArr.filter(item => item !== '');
  const alphabetMap = new Map(
  Array.from({ length: 26 }, (_, i) => [String.fromCharCode(65 + i), i + 1])
);
  let sum = 0;

  for(let item of trimmedArr){    
    let itemLastIndex = item.length - 1;
    let firstLetter = item[0];
    let lastLetter = item[itemLastIndex];
    let number = Number(item.slice(1, itemLastIndex));

    if(firstLetter.charCodeAt() < 65 || firstLetter.charCodeAt() > 90){
      firstLetter = firstLetter.toUpperCase();
      let position = alphabetMap.get(firstLetter);
      number *= position;
    }else{
      firstLetter = firstLetter.toUpperCase();
      let position = alphabetMap.get(firstLetter);
      number /= position;
    }

    if(lastLetter.charCodeAt() < 65 || lastLetter.charCodeAt() > 90){
      lastLetter = lastLetter.toUpperCase();
      let position = alphabetMap.get(lastLetter);
      number += position;
    }else{
      lastLetter = lastLetter.toUpperCase();
      let position = alphabetMap.get(lastLetter);
      number -= position;
    }
    
    sum += number;
  }

  console.log(sum.toFixed(2));
}

