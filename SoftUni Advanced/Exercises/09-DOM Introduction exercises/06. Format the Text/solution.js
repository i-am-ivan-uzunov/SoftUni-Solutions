function solve() {
  const inputRef = document.querySelector('#input');
  const outputRef = document.querySelector('#output');

  const input = inputRef.value.split('.').filter(sentence => sentence.trim().length > 0);
  console.log(input);
  let output = '';
  
  for(let i = 0; i < input.length; i+=3){
    let buff = '';
    for(let j = 0; j < 3; j++){
      if(i + j < input.length && input[i + j] !== '.'){
        buff += input[i+j].trim() + '. ';
      }
    }
    output += `<p>${buff}</p>`;
    buff = '';
  }

  outputRef.innerHTML = output;
}