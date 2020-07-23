import sendRequest from "../request";
import validateName from "../validators/validateName";
import validateEmail from "../validators/validateEmail";
import validatePhone from "../validators/validatePhone";
import showError from "../errorHandlers/showError";

import {
  name as nameInput,
  email as emailInput,
  phone as phoneInput,
} from "../domElements";

export default function onFormSubmit(e) {
  e.preventDefault();

  let name = e.target["0"].value,
    email = e.target["1"].value,
    phone = e.target["2"].value;

  if (!validateName(name).isValid) {
    showError(nameInput, validateName(name).errorMessage);
  }

  if (!validateEmail(email).isValid) {
    showError(emailInput, validateEmail(email).errorMessage);
  }

  if (!validatePhone(phone).isValid) {
    showError(phoneInput, validatePhone(phone).errorMessage);
  }

  if (
    validateName(name).isValid &&
    validateEmail(email).isValid &&
    validatePhone(phone).isValid
  ) {
    console.log({
      name,
      email,
      phone,
    });

    // sendRequest("/", e.target);
  }
}
