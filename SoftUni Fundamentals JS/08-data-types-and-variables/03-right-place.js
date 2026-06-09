function replaceSymbol(str1, symbol, str2){
  let firstString = str1;
  let secondString = str2;
  let replaceSymbol = symbol;

  firstString = str1.replace('_', replaceSymbol);
  
  let result = firstString === secondString ? 'Matched' : 'Not Matched';

  console.log(result);
}

