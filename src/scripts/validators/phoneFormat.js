import regexFilter from "./regexFilter";

export default function phoneFormat(value) {
  return regexFilter(
    /^(\+7|07|8)\d{10}$/giu,
    clearWhitespace(value),
    "Формат «+7 XXX XXX XX XX»"
  );

  function clearWhitespace(str) {
    return str.replace(/\s/g, "");
  }
}
