export default function normalizeName(value) {
  let result = "";

  for (let i = 0; i < value.length; i++) {
    if (i === 0 || value[i - 1] === " " || value[i - 1] === "-") {
      result += value[i].toUpperCase();
    } else {
      result += value[i].toLowerCase();
    }
  }

  return result;
}
