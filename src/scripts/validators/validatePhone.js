import combineValidators from "./combineValidators";
import required from "./required";
import onlyDigits from "./onlyDigits";
import phoneFormat from "./phoneFormat";

export default function validatePhone(value) {
  return combineValidators(
    [required, onlyDigits, phoneFormat],
    value,
    "Недопустимые символы"
  );
}
