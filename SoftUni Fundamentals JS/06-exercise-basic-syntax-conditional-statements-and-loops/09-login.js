function loginAccount(passwords){
  let username = passwords[0]; //декларираме username
  let password = username.split('').reverse().join(''); //декларираме паролата, която ни трябва

  //цикъл, който проверява една по една паролите
  for(let i = 1; i <= passwords.length; i++){
    let currentTry = passwords[i]; //запазваме текущата парола за проверка в променлива
    //проверка за блокиране на user-a ако паролата не съвпада и няма повече опити
    if(password !== currentTry && i === 4){
      console.log(`User ${username} blocked!`);
      break; //излизаме от цикъла ако нямаме повече опити
    }else if(password !== currentTry){ //проверка за паролата и ако е неправилна
      console.log('Incorrect password. Try again.');
    }else if(password === currentTry){ //проверка за паролата и ако съвпада
      console.log(`User ${username} logged in.`);
      break; //излизаме от цикъла ако паролата е правила
    }
  }
}

loginAccount(['Acer','login','go','let me in','recA']); //контролни данни за изпълнение на прогрмата