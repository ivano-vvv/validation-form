import normalizeName from "../normalizators/normalizeName";
import normalizePhone from "../normalizators/normalizePhone";

export default function changeHandler(e) {
  switch (e.target.name) {
    case "name":
      setInputValue(normalizeName(e.target.value));
      break;
    case "phone":
      setInputValue(normalizePhone(e.target.value));
      break;

    default:
      break;
  }

  function setInputValue(value) {
    e.target.value = value;
  }
}
