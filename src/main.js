import onFormSubmit from "./scripts/eventHandlers/onFormSubmit";
import blurHandler from "./scripts/eventHandlers/blurHandler";
import focusHandler from "./scripts/eventHandlers/focusHandler";
import changeHandler from "./scripts/eventHandlers/changeHandler";
import resetHandler from "./scripts/eventHandlers/resetHandler";
import { name, email, phone, form, submit, reset } from "./scripts/domElements";

// on form submit
form.addEventListener("submit", onFormSubmit);

// on input focus
name.addEventListener("focus", focusHandler);
email.addEventListener("focus", focusHandler);
phone.addEventListener("focus", focusHandler);

// on input blur
name.addEventListener("blur", blurHandler);
email.addEventListener("blur", blurHandler);
phone.addEventListener("blur", blurHandler);

// on input change
name.addEventListener("input", changeHandler);
phone.addEventListener("input", changeHandler);

// on reset
reset.addEventListener("click", resetHandler);
