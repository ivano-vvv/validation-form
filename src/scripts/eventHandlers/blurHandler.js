import validateName from "../validators/validateName";
import validateEmail from "../validators/validateEmail";
import validatePhone from "../validators/validatePhone";
import showError from "../errorHandlers/showError";

export default function blurHandler(e) {
  let inputStatus;

  switch (e.target.name) {
    case "name":
      inputStatus = validateName(e.target.value);
      break;
    case "email":
      inputStatus = validateEmail(e.target.value);
      break;
    case "phone":
      inputStatus = validatePhone(e.target.value);
      break;

    default:
      break;
  }

  if (!inputStatus.isValid) {
    showError(e.target, inputStatus.errorMessage);
  }
}
