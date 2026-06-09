function printChessBoard(n) {
  const size = n;
  const white = '    <span class="white"></span>';
  const black = '    <span class="black"></span>';
  const divClass = '<div class="chessboard">';
  const divStart = '  <div>';
  const divEnd = '  </div>';

  for (let col = 1; col <= size; col++) {
    if (col === 1) {
      console.log(divClass);
    }
    console.log(divStart)
    if (col % 2 !== 0) {
      for (let row = 1; row <= size; row++) {
        if (row % 2 !== 0) {
          console.log(black);
        } else {
          console.log(white);
        }
      }
    } else {
      for (let row = 1; row <= size; row++) {
        if (row % 2 !== 0) {
          console.log(white);
        } else {
          console.log(black);
        }
      }
    }
    console.log(divEnd);
    if(col === size){
      console.log(divEnd)
    }
  }
}