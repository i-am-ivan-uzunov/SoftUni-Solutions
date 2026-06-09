function validate() {
  const emailRef = document.getElementById("email");
  const pattern = /^[a-z]+@[a-z]+\.[a-z]+$/;

  function validateEmail() {
    const emailContent = emailRef.value;

    if (pattern.test(emailContent)) {
      emailRef.classList.remove("error");
    } else {
      emailRef.classList.add("error");
    }
  }

  emailRef.addEventListener("change", validateEmail);
}
