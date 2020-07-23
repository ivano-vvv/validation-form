export default function showError(elem, message) {
  elem.classList.add("input-block__input_invalid");

  switch (elem.name) {
    case "name":
      showErrorMessage(
        document.querySelector(".input-block_name"),
        message,
        "name"
      );
      break;
    case "email":
      showErrorMessage(
        document.querySelector(".input-block_email"),
        message,
        "email"
      );
      break;
    case "phone":
      showErrorMessage(
        document.querySelector(".input-block_phone"),
        message,
        "phone"
      );
      break;
    default:
      break;
  }

  function showErrorMessage(parent, message, type) {
    let label = document.createElement("label"),
      error = parent.appendChild(label);
    error.classList.add(
      `input-block__error-label`,
      `input-block__error-label_${type}`
    );
    error.innerHTML = message;
  }
}
