import regexFilter from "./regexFilter";

export default function onlyRussian(value) {
  return regexFilter(/^[а-я\W]*$/giu, value, "Только на русском");
}
