import regexFilter from "./regexFilter";

export default function emailSymbols(value) {
  return regexFilter(
    /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/giu,
    value,
    "Недопустимые символы"
  );
}
