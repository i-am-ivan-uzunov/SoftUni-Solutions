class Stringer{
  constructor(innerString, innerLength){
    this.innerString = innerString;
    this.innerLength = innerLength;
  }

  increase(length){
    this.innerLength += length;
  }

  decrease(length){
    this.innerLength = this.innerLength - length < 0 ? 0 : this.innerLength - length;
  }
  
  toString(){
    if(this.innerLength >= this.innerString.length){
      return this.innerString;
    }else if(this.innerLength < this.innerString.length && this.innerLength > 0){
      return this.innerString.slice(0, this.innerLength) + '...';
    }else{
      return '...'
    }
  }
}


