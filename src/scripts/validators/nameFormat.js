import regexFilter from "./regexFilter";

export default function nameFormat(value) {
  return regexFilter(
    /^.{2,}\s.{2,}\s.{2,}$/giu,
    value,
    "Формат «Фамилия Имя Отчество»"
  );
}
