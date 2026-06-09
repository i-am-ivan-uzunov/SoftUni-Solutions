function solve(input) {
  let guestList = new Map();
  let isPartyTime = false;


  for (let i = 0; i < input.length; i++) {
    let word = input[i];

    if (word === 'PARTY') {
      isPartyTime = true;
    }

    if (isPartyTime === false) {
      guestList.set(word);
    } else {
      guestList.delete(word);
    }
  }

  let array = [];
  for (guest of guestList.keys()) {
    array.push(guest);
  }

  console.log(array.length);
  array.sort((a, b) =>{
    let aIsVIP = !isNaN(a[0]);
    let bIsVIP = !isNaN(b[0]);
    
    if (aIsVIP && !bIsVIP) return -1;

    if (!aIsVIP && bIsVIP) return 1;

    return 0;
  });

  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }

}

solve(['7IK9Yo0h',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc',
  'tSzE5t0p',
  'PARTY',
  '9NoBUajQ',
  'Ce8vwPmE',
  'SVQXQCbc'
]
);

solve(['m8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'xys2FYzn',
  'MDzcM9ZK',
  'PARTY',
  '2FQZT3uC',
  'dziNz78I',
  'mdSGyQCJ',
  'LjcVpmDL',
  'fPXNHpm1',
  'HTTbwRmM',
  'B5yTkMQi',
  '8N0FThqG',
  'm8rfQBvl',
  'fc1oZCE0',
  'UgffRkOn',
  '7ugX7bm0',
  '9CQBGUeJ'
]
);