function solve(filePath){
  let fileFullName = filePath.split('\\').pop();
  let lastDotIndex = fileFullName.lastIndexOf('.');

  let file = fileFullName.slice(0, lastDotIndex);
  let extension = fileFullName.slice(lastDotIndex + 1);

  console.log(`File name: ${file}`);
  console.log(`File extension: ${extension}`);
}