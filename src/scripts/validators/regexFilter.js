import ValidatorResponse, { validStatus } from "./validatorResponseClass";

export default function regexFilter(regex, value, errorMessage) {
  if (!regex.test(value)) {
    return new ValidatorResponse(false, errorMessage || "Ошибка");
  }
  return validStatus;
}
