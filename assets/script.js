const email_input = document.getElementById("email-value");
const error_img = document.getElementById("error-img");
const error_msg = document.querySelector(".error-msg");
const submit_btn = document.getElementById("email-submit");

const showEmailError = () => {
  //1. first, get the email value
  const email_value = email_input.value;
  //2. if it is not the correct format or if the field is empty show an error
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email_value === "" || !email_pattern.test(email_value)) {
    error_msg.classList.add("active");
    error_img.classList.add("active");
  }
};

email_input.addEventListener("input", () => {
  if (
    error_img.classList.contains("active") ||
    error_msg.classList.contains("active")
  ) {
    error_img.classList.remove("active");
    error_msg.classList.remove("active");
  }
});

submit_btn.addEventListener("click", () => {
  showEmailError();
});
