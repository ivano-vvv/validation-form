export default function normalizePhone(value) {
  let result = value,
    clearValue = value.replace(/\s/g, "");

  if (clearValue.startsWith("07") || clearValue.startsWith("+7")) {
    result = "";

    for (let i = 0; i < clearValue.length; i++) {
      if (i === 2 || i === 5 || i === 8 || i === 10) {
        result += " ";
      }

      result += clearValue[i];
    }

    result = result.slice(0, 16);
  } else if (clearValue.startsWith("8")) {
    result = "";

    for (let i = 0; i < clearValue.length; i++) {
      if (i === 1 || i === 4 || i === 7 || i === 9) {
        result += " ";
      }

      result += clearValue[i];
    }

    result = result.slice(0, 15);
  }

  return result;
}
