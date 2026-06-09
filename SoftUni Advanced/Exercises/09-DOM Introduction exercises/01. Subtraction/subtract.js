function subtract() {
  const firstInputRef = document.querySelector("#firstNumber");
  const secondInputRef = document.querySelector("#secondNumber");
  const resultRef = document.querySelector("#result");

  const firstNumber = Number(firstInputRef.value);
  const secondNumber = Number(secondInputRef.value);

  let result = firstNumber - secondNumber;

  resultRef.textContent = result;
}
