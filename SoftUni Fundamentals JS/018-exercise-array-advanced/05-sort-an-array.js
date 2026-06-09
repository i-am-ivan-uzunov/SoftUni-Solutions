function printSortedArray(input){
  
  input.sort((a, b) => {
    if(a.length === b.length){
      return a.localeCompare(b);
    }else{
      return a.length - b.length;
    }
  });
  
  for(let index = 0; index < input.length; index++){
    console.log(input[index]);
  }
}
