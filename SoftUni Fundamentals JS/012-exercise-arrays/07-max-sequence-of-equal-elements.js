function printMaxSequence(input){
  let arrayOfNumbers = input;
  let currentSequence = 1;
  let currentNumberSequence = 0;
  let maxSequence = 0;
  let maxSequenceNumber = 0;

  for(let index = 1; index < arrayOfNumbers.length; index++){
    if(arrayOfNumbers[index] === arrayOfNumbers[index-1]){
      currentSequence++;
      currentNumberSequence = arrayOfNumbers[index];
    }else{
      currentSequence = 1;
    }
    if(currentSequence > maxSequence){
      maxSequence = currentSequence;
      maxSequenceNumber = currentNumberSequence;
    }
  }
  let sequenceNumbers = [];
  for(let i = 0; i < maxSequence; i++){
    sequenceNumbers.push(maxSequenceNumber);
  }

  console.log(sequenceNumbers.join(' '));
}

