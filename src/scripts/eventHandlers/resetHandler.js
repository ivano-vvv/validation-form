import hideError from "../errorHandlers/hideError";

export default function resetHandler(e) {
  clearErrors();

  function clearErrors() {
    hideError(document.querySelector(".input-block__input_name"));
    hideError(document.querySelector(".input-block__input_email"));
    hideError(document.querySelector(".input-block__input_phone"));
  }
}
