import regexFilter from "./regexFilter";

export default function onlyGmail(value) {
  return regexFilter(/\b.*@gmail\.com\b/giu, value, "Только @gmail.com");
}
