function printRotations(bandName, albumName, songName){
  let rotations = Math.ceil(((albumName.length * bandName.length) * songName.length / 2) / 2.5);

  console.log(`The plate was rotated ${rotations} times.`)
}

printRotations('Rammstein', 'Sehnsucht', 'Engel');