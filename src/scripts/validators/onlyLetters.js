import regexFilter from "./regexFilter";

export default function onlyLetters(value) {
  return regexFilter(/^[a-zа-яё\-\s]+$/giu, value, "Недопустимые символы");
}
