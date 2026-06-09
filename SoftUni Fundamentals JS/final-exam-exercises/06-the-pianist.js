function solve(input) {
  let n = Number(input.shift());
  let pieces = [];

  for(let i = 0; i < n; i++){
    let tokens = input.shift().split('|');
    let piece = tokens[0];
    let composer = tokens[1];
    let key = tokens[2];

    pieces[piece] = piece;
    pieces[piece].composer = composer;
    pieces[piece].key = key;
  }
}

solve([
  '3',
  'Fur Elise|Beethoven|A Minor',
  'Moonlight Sonata|Beethoven|C# Minor',
  'Clair de Lune|Debussy|C# Minor',
  'Add|Sonata No.2|Chopin|B Minor',
  'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
  'Add|Fur Elise|Beethoven|C# Minor',
  'Remove|Clair de Lune',
  'ChangeKey|Moonlight Sonata|C# Major',
  'Stop',
]);
