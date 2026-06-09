function printNewGenres(input) {
  let genresArray = input[0].split(' | ');
  let tokens = input[1].split(' ');
  let command = tokens[0];
  let index = 1;

  while (command !== 'Stop!') {
    tokens = input[index].split(' ');
    command = tokens[0];

    if (command === 'Join') {
      let genre = tokens[1];

      if (!(genresArray.includes(genre))) {
        genresArray.push(genre);
      }
    } else if (command === 'Drop') {
      let genre = tokens[1];

      if (genresArray.includes(genre)) {
        let genreIndex = genresArray.indexOf(genre);

        genresArray.splice(genreIndex, 1);
      }
    } else if (command === 'Replace') {
      let oldGenre = tokens[1];
      let newGenre = tokens[2];

      if (genresArray.includes(oldGenre) && !(genresArray.includes(newGenre))) {
        let indexOldGenre = genresArray.indexOf(oldGenre);

        genresArray.splice(indexOldGenre, 1, newGenre);
      }
    } else if (command === 'Prefer') {
      let firstIndex = tokens[1];
      let secondIndex = tokens[2];

      if (firstIndex >= 0 && firstIndex < genresArray.length && secondIndex >= 0 && secondIndex < genresArray.length) {
        [genresArray[firstIndex], genresArray[secondIndex]] = [genresArray[secondIndex], genresArray[firstIndex]];

      }

    }

    index++;
  }

  console.log(genresArray.join(' '));
}

