function solve(input) {
  let addressBook = new Map();

  for(let data of input){
    [fullName, adress] = data.split(':');

    addressBook.set(fullName, adress);
  }

  let sortedAddressBook = Array.from(addressBook
    .entries())
    .sort((a, b) => a[0].localeCompare(b[0]));

  for(let [name, adress] of sortedAddressBook){
    console.log(`${name} -> ${adress}`);
  }
}


