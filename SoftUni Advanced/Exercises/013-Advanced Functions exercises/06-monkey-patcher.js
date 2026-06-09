function result(action) {
  const actions = {
    upvote() {
      return ++this.upvotes;
    },
    downvote() {
      return ++this.downvotes;
    },
    score() {
      let arr = [];
      let total = this.upvotes + this.downvotes;
      let balance = this.upvotes - this.downvotes;
      let rating = "";
      if (total > 50) {
        let maxNumber = Math.max(this.upvotes, this.downvotes)

        maxNumber = Math.ceil(maxNumber * 0.25);

        const viewingUpvotes = this.upvotes + maxNumber;
        const viewingDownvotes = this.downvotes + maxNumber;

        arr.push(viewingUpvotes);
        arr.push(viewingDownvotes);
      }

      if (this.upvotes > total * 0.66 && total >= 10) {
        rating = "hot";
      }else if(balance >= 0 && total > 100){
        rating = 'controversial';
      }else if(balance < 0 && total >= 10){
        rating = 'unpopular';
      }else{
        rating = 'new';
      }

      if(arr.length === 0){
        arr.push(this.upvotes);
        arr.push(this.downvotes);
      }

      arr.push(balance);
      arr.push(rating);

      return arr;
    },
  };

  return actions[action].call(this);
}


