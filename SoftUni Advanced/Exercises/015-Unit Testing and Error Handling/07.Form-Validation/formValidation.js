function validate() {
  const username = document.getElementById("username");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const passwordConfirmation = document.getElementById("confirm-password");
  const companyCheckbox = document.getElementById("company");
  const companyInfo = document.getElementById("companyInfo");
  const companyNumber = document.getElementById("companyNumber");
  const form = document.getElementById("registerForm");
  const btnSubmit = document.getElementById("submit");
  const valid = document.getElementById("valid");

  const usernamePattern = /^[a-zA-Z0-9]{3,20}$/;
  const passwordPattern = /^\w{5,15}$/;
  const emailPattern =  /^[^@.]+@[^@]*\.[^@]*$/;
  const companyNumberPattern = /^[1-9][0-9]{3}$/;

  function submitForm(e) {
    e.preventDefault();

    let isCorrect = true;

    if (!usernamePattern.test(username.value)) {
      username.style.borderColor = "red";
      isCorrect = false;
    } else {
      username.style.border = "none";
    }

    if (!emailPattern.test(email.value)) {
      email.style.borderColor = "red";
      isCorrect = false;
    } else {
      email.style.border = "none";
    }

    if (!passwordPattern.test(password.value)) {
      password.style.borderColor = "red";
      isCorrect = false;
    } else {
      password.style.border = "none";
    }

    if (
      passwordPattern.test(passwordConfirmation.value) &&
      passwordConfirmation.value === password.value
    ) {
      passwordConfirmation.style.border = "none";
      password.style.border = "none";
    } else {
      passwordConfirmation.style.borderColor = "red";
      password.style.borderColor = "red";
      isCorrect = false;
    }

    if (companyCheckbox.checked) {
      if (!companyNumberPattern.test(companyNumber.value)) {
        companyNumber.style.borderColor = "red";
        isCorrect = false;
      } else {
        companyNumber.style.border = "none";
      }
    } else {
      companyNumber.style.border = "none";
    }

    if (isCorrect) {
      valid.style.display = "block";
    } else {
      valid.style.display = "none";
    }
  }

  function check(e) {
    if (e.target.checked) {
      companyInfo.style.display = "block";
    } else {
      companyInfo.style.display = "none";
    }
  }

  form.addEventListener("submit", submitForm);
  companyCheckbox.addEventListener("change", check);
}
