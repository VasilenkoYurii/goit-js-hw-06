const input = document.querySelector("#validation-input");
const dataLength = Number(input.attributes[2].value);

input.addEventListener("blur", inInputBlur);

function inInputBlur(event) {
  const inputValue = event.currentTarget.value.length;
  console.log(inputValue);

  if (inputValue !== dataLength) {
    return input.classList.add("invalid");
  }
  if (inputValue === dataLength) {
    input.classList.remove("invalid");
    return input.classList.add("valid");
  }
}
