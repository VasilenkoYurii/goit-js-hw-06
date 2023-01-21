const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email.value;
  const password = event.currentTarget.elements.password.value;
  const userObj = {
    email,
    password,
  };

  if (email === "" && password === "") {
    return alert("Заполни форму");
  } else if (email === "") {
    return alert("Заполни email");
  } else if (password === "") {
    return alert("Заполни password");
  }

  form.reset();
  console.log(userObj);
}
