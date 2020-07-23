import regexFilter from "./regexFilter";

export default function onlyDigits(value) {
  return regexFilter(/^[\d\+\s]+$/giu, value, "Недопустимые символы");
}
