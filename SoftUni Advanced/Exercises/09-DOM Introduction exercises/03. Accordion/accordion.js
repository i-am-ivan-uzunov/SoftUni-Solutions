function toggle() {
  const extraRef = document.querySelector("#extra");
  const buttonRef = document.querySelector(".button");

  if (buttonRef.textContent === "More") {
    extraRef.style.display = "block";
    buttonRef.textContent = "Less";
  } else {
    extraRef.style.display = "none";
    buttonRef.textContent = "More";
  }
}
