import combineValidators from "./combineValidators";
import required from "./required";
import emailSymbols from "./emailSymbols";
import onlyGmail from "./onlyGmail";

export default function validateEmail(value) {
  return combineValidators([required, emailSymbols, onlyGmail], value);
}
