import combineValidators from "./combineValidators";
import required from "./required";
import onlyRussian from "./onlyRussian";
import onlyLetters from "./onlyLetters";
import nameFormat from "./nameFormat";

export default function validateName(value) {
  return combineValidators(
    [required, onlyLetters, onlyRussian, nameFormat],
    value
  );
}
