function solve() {
  const questionsRef = document.querySelectorAll(".question-wrap");
  const question1 = questionsRef[0].firstElementChild.textContent;
  const question2 = questionsRef[1].firstElementChild.textContent;
  const question3 = questionsRef[2].firstElementChild.textContent;
  const answersText = Array.from(document.querySelectorAll(".answer-text"));
  const answers = Array.from(document.querySelectorAll(".quiz-answer"));
  const sections = Array.from(document.querySelectorAll("section"));
  const result = document.querySelector(".results-inner");
  const r = document.querySelector('#results');
  console.log(result);

  let correctAnswers = 0;
  let counter = 1;

  const rightAnswers = [
    answersText[0].textContent,
    answersText[3].textContent,
    answersText[4].textContent,
  ];
  const wrongAnswers = [
    answersText[1].textContent,
    answersText[2].textContent,
    answersText[5].textContent,
  ];

  function onCLick(event) {
    let answer = event.target.textContent;
    answer = answer.trim();

    if (rightAnswers.includes(answer)) correctAnswers++;
    if (counter < sections.length) {
      const current = sections[counter - 1];
      const next = sections[counter];

      current.style.display = "none";
      next.style.display = "block";
    }else{
      const current = sections[counter - 1];
      current.style.display = "none";
      r.style.display = "block";
      if(correctAnswers === 3){
        result.firstElementChild.textContent = 'You are recognized as top JavaScript fan!';
      }else{
        result.firstElementChild.textContent = `You have ${correctAnswers} right answers`;
      }
    }

    counter++;
  }

  for (let btns of answers) {
    btns.addEventListener("click", onCLick);
  }
}
