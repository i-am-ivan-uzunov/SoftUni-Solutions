function solve(input) {
  class Song {
    constructor(typelist, name, time) {
      this.typelist = typelist;
      this.name = name;
      this.time = time;
    }
  }

  let n = input[0];
  let songs = [];


  for (let i = 1; i <= n; i++) {
    let data = input[i].split('_');

    let typelist = data[0];
    let name = data[1];
    let time = data[2];

    let song = new Song(typelist, name, time);

    songs.push(song);

  }

  let typeList = input[input.length - 1];

  if (typeList !== 'all') {
    for (let song of songs) {
      if (song.typelist === typeList) {
        console.log(song.name);
      }
    }
  } else {
    for (let song of songs) {
      console.log(song.name);
    }
  }

}

solve([3,
  'favourite_DownTown_3:14',
  'favourite_Kiss_4:16',
  'favourite_Smooth Criminal_4:01',
  'favourite']
);

solve([4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater']
);

solve([2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all']
);