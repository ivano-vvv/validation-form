export default function hideError(elem) {
  elem.classList.remove("input-block__input_invalid");
  let errorLabel = document.querySelector(
    `.input-block__error-label_${elem.name}`
  );
  if (errorLabel) {
    errorLabel.remove();
  }
}
