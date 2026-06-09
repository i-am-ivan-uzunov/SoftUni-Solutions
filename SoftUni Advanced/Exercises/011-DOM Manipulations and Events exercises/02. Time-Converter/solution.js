function attachEventsListeners() {
  function attachEventsListeners() {
    const daysInput = document.getElementById("days");
    const hoursInput = document.getElementById("hours");
    const minutesInput = document.getElementById("minutes");
    const secondsInput = document.getElementById("seconds");

    const buttons = Array.from(
      document.querySelectorAll('main div input[type="button"]'),
    );

    for (let button of buttons) {
      button.addEventListener("click", calculate);
    }

    function calculate(event) {
      const clickedButton = event.currentTarget;
      const buttonId = clickedButton.id;

      let days = 0;

      if (buttonId === "daysBtn") {
        days = Number(daysInput.value);
      } else if (buttonId === "hoursBtn") {
        days = Number(hoursInput.value) / 24;
      } else if (buttonId === "minutesBtn") {
        days = Number(minutesInput.value) / 1440;
      } else if (buttonId === "secondsBtn") {
        days = Number(secondsInput.value) / 86400;
      }

      daysInput.value = days;
      hoursInput.value = days * 24;
      minutesInput.value = days * 1440;
      secondsInput.value = days * 86400;
    }
  }
}
